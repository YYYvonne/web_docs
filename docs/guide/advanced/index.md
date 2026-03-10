# 高级

## LLDP

### 概述

#### LLDP产生的背景

目前，网络设备的种类日益繁多且各自的配置错综复杂，为了使不同厂商的设备能够在网络中相互发现并交互各自的系统及配置信息，需要有一个标准的信息交流平台。

LLDP（Link Layer Discovery Protocol，链路层发现协议）就是在这样的背景下产生的，它提供了一种标准的链路层发现方式，可以将本端设备的主要能力、管理地址、设备标识、接口标识等信息组织成不同的 TLV（Type/Length/Value，类型/长度/值），并封装在 LLDPDU（Link Layer Discovery Protocol Data Unit，链路层发现协议数据单元）中发布给与自己直连的邻居，邻居收到这些信息后将其以标准 MIB（Management Information Base，管理信息库）的形式保存起来，以供网络管理系统查询及判断链路的通信状况。

#### LLDP基本概念

<span style="color:red;font-size:14px;">1. LLDP报文</span>

封装有 LLDPDU 的报文称为 LLDP 报文，其封装格式有两种：Ethernet II 和 SNAP（Subnetwork Access Protocol，子网访问协议）。

![Ethernet II 格式封装的 LLDP 报文](/images/148.png)

<p align="center"><em>图4-1 Ethernet II 格式封装的 LLDP 报文</em></p>

(1) Ethernet II 格式封装的 LLDP 报文

如图4-1所示，是以Ethernet II格式封装的LLDP报文，其中各字段的含义如下：

- Destination MAC address：目的 MAC 地址，为固定的组播 MAC 地址 0x0180-C200-000E。
- Source MAC address：源 MAC 地址，为端口 MAC 地址。
- Type：报文类型，为 0x88CC。
- Data：数据内容，为 LLDPDU。
- FCS：帧检验序列，用来对报文进行校验。

(2) SNAP 格式封装的 LLDP 报文

![SNAP 格式封装的 LLDP 报文](/images/149.png)

<p align="center"><em>图4-2 SNAP 格式封装的 LLDP 报文</em></p>

如图4-2所示，是以SNAP格式封装的LLDP报文，其中各字段的含义如下：

- Destination MAC address：目的 MAC 地址，为固定的组播 MAC 地址 0x0180-C200-000E。
- Source MAC address：源 MAC 地址，为端口 MAC 地址或设备桥 MAC 地址（如果有端口地址则使用端口 MAC 地址，否则使用设备桥 MAC 地址）。
- Type：报文类型，为 0xAAAA-0300-0000-88CC。
- Data：数据内容，为 LLDPDU。
- FCS：帧检验序列，用来对报文进行校验。

<span style="color:red;font-size:14px;">2. LLDPDU</span>

LLDPDU 就是封装在 LLDP 报文数据部分的数据单元。在组成 LLDPDU 之前，设备先将本地信息封装成 TLV 格式，再由若干个 TLV 组合成一个 LLDPDU 封装在 LLDP 报文的数据部分进行传送。

![LLDPDU 的封装格式](/images/150.png)

<p align="center"><em>图4-3 LLDPDU 的封装格式</em></p>

如图4-3示，深蓝色的Chasis ID TLV、Port ID TLV、Time To Live TLV和End of LLDPDU TLV这四种TLV是每个LLDPDU都必须携带的，其余的TLV则为可选携带。每个LLDPDU多可携带 28 种TLV。

<span style="color:red;font-size:14px;">3. TLV</span>

TLV 是组成 LLDPDU 的单元，每个 TLV 都代表一个信息。LLDP 可以封装的 TLV 包括基本 TLV、802.1 组织定义 TLV、802.3 组织定义 TLV 和 LLDP-MED（Media Endpoint Discovery，媒体终端发现） TLV。 

基本 TLV 是网络设备管理基础的一组 TLV，802.1组织定义 TLV、802.3组织定义 TLV 和 LLDP-MED TLV 则是由标准组织或其他机构定义的 TLV，用于增强对网络设备的管理，可根据实际需要选择是否在 LLDPDU 中发送。

(1) 基本 TLV

在基本TLV中，有几种TLV对于实现LLDP功能来说是必选的，即必须在LLDPDU中发布，如表4-1所示。
 
| TLV 名称 | 说明 | 是否必须发布 |
| --- | --- | --- |
| Chassis ID | 发送设备的桥MAC地址 | 是 |
| Port ID | 标识LLDPDU发送端的端口。如果LLDPDU中携带有LLDP-MED TLV，其 内容为端口的MAC地址，没有端口MAC时使用桥MAC；否则，其内容为 端口的名称 | 是 |
| Time To Live | 本设备信息在邻居设备上的存活时间 | 是 |
| End of LLDPDU | LLDPDU的结束标识，是LLDPDU的 后一个TLV | 是 |
| Port Description | 端口的描述 | 否 |
| System Name | 设备的名称 | 否 |
| System Description | 系统的描述 | 否 |
| System Capabilities | 系统的主要功能以及已使能的功能项 | 否 |
| Management Address | 管理地址，以及改地址所对应的接口号和OID（Object Identifier，对象标识符） | 否 |
<p align="center"><em>表4-1 基本 TLV</em></p>

(2)  802.1 组织定义 TLV

IEEE 802.1 组织定义TLV的内容如表格4-2所示。

| TLV 名称 | 说明 |
| --- | --- |
| Port VLAN ID | 端口的PVID（Port VLAN ID），一个LLDPDU中 多携带一个该类型TLV |
| Port And Protocol VLAN ID | 端口的PPVID（Port and Protocol VLAN ID），一个LLDPDU中可携带多个互不重复的该类型TLV |
| VLAN Name | 端口所属VLAN的名称，一个LLDPDU中可携带多个互不重复的该类型TLV |
| Protocol Identity | 端口所支持的协议类型，一个LLDPDU中可携带多个互不重复的该类型TLV |
| DCBX | 数据中心桥能力交换协议（Data Center Bridging Exchange Protocol） |
<p align="center"><em>表4-2 IEEE 802.1 组织定义的 TLV</em></p>

(3)  802.3 组织定义 TLV

IEEE 802.3 组织定义TLV的内容如表格4-3所示。

| TLV 名称 | 说明 |
| --- | --- |
| MAC/PHY  Configuration/Status | 端口支持的速率和双工状态、是否支持端口速率自动协商、是否已使能自动协商功能以及当前的速率和双工状态 |
| Power Via MDI | 端口的供电能力，包括PoE（Power over Ethernet，以太网供电）的类型 （PSE （Power Sourcing Equipment，供电设备）或PD（Powered Device，受电设备））、PoE端口的远程供电模式、是否支持PSE供电、 是否已使能PSE供电以及供电方式是否可控 |
| Link Aggregation | 端口是否支持链路聚合以及是否已使能链路聚合 |
| Maximum Frame Size | 端口支持的 大帧长度，取端口配置的MTU（Maximum Transmission Unit， 大传输单元） |
| Power Stateful Control | 端口的电源状态控制，包括PSE/PD所采用的电源类型、供/受电的优先级以 及供/受电的功率 |
<p align="center"><em>表4-3 IEEE 802.3 组织定义的 TLV</em></p>

:::tip 📝<strong>说明</strong>
我司产品暂不支持PoE相关部分的TLV。
:::

（4）LLDP-MED TLV

LLDP-MED TLV为VoIP（Voice over IP，在IP网络上传送语音）提供了许多高级的应用，包括基本配置、网络策略配置、地址信息以及目录管理等，满足了语音设备的不同生产厂商在成本有效、易部署、易管理等方面的要求，并解决了在以太网中部署语音设备的问题，为语音设备的生产者、销售者以及使用者提供了便利。LLDP-MED TLV的内容如表格4-4所示。
 
| TLV 名称 | 说明 |
| --- | --- |
| LLDP-MED Capabilities | 网络设备所支持的LLDP-MED TLV类型 |
| Network Policy | 网络设备或终端设备上端口的VLAN类型、VLAN ID以及二三层与具体应用类型、相关的优先级等等 |
| Extended Power-via-MDI | 网络设备或终端设备的扩展供电能力，对Power Via MDI TLV进行了扩展 |
| Hardware Revision | 终端设备的硬件版本 |
| Firmware Revision | 终端设备的固件版本 |
| Software Revision | 终端设备的软件版本 |
| Serial Number | 终端设备的序列号 |
| Manufacturer Name | 终端设备的制造厂商名称 |
| Model Name | 终端设备的模块名称 |
| Asset ID | 终端设备的资产标识符，以便目录管理和资产跟踪 |
| Location  Identification | 网络设备的位置标识信息，以供终端设备在基于位置的应用中使用 |
<p align="center"><em>表4-4 LLDP-MED TLV</em></p>

:::tip 📝<strong>说明</strong>
我司产品暂不支持VoIP相关部分的TLV。 
:::

（5）管理地址

管理地址是供网络管理系统标识网络设备并进行管理的地址。管理地址可以明确地标识一台设备，从而有利于网络拓扑的绘制，便于网络管理。管理地址被封装在 LLDP 报文的 Management Address TLV 中向外发布。

#### LLDP工作机制

<span style="color:red;font-size:14px;">1. LLDP的工作模式</span>

LLDP 有以下四种工作模式：

- TxRx：既发送也接收 LLDP 报文。
- Tx：只发送不接收 LLDP 报文。
- Rx：只接收不发送 LLDP 报文。
- Disable：既不发送也不接收 LLDP 报文。

当端口的 LLDP 工作模式发生变化时，端口将对协议状态机进行初始化操作。为了避免端口工作模式频繁改变而导致端口不断执行初始化操作，可配置端口初始化延迟时间，当端口工作模式改变时延迟一段时间再执行初始化操作。

<span style="color:red;font-size:14px;">2. LLDP报文的发送机制</span>

当端口工作在 TxRx 或 Tx 模式时，设备会周期性地向邻居设备发送 LLDP 报文。如果设备的本地配置发生变化则立即发送 LLDP 报文，以将本地信息的变化情况尽快通知给邻居设备。但为了防止本地信息的频繁变化而引起 LLDP 报文的大量发送，每发送一个 LLDP 报文后都需延迟一段时间后再继续发送下一个报文。

当设备的工作模式由 Disable/Rx 切换为 TxRx/Tx，或者发现了新的邻居设备（即收到一个新的 LLDP 报文且本地尚未保存发送该报文设备的信息）时，该设备将自动启用快速发送机制，即将 LLDP 报文的发送周期缩短为 1 秒，并连续发送指定数量的 LLDP 报文后再恢复为正常的发送周期。

<span style="color:red;font-size:14px;">3. LLDP报文的接收机制</span>

当端口工作在 TxRx 或 Rx 模式时，设备会对收到的 LLDP 报文及其携带的 TLV 进行有效性检查，通过检查后再将邻居信息保存到本地，并根据 Time To Live TLV 中 TTL（Time to Live，生存时间）的值来设置邻居信息在本地设备上的老化时间，若该值为零，则立刻老化该邻居信息。

### 配置LLDP

#### LLDP配置任务简介

| 步骤 | 配置任务 | 说明 |
| --- | --- | --- |
| 1 | 配置全局LLDP功能 | 设置使能全局的LLDP功能，并配置LLDP的全局参数  全局LLDP功能默认处于关闭状态，必选 |
| 2 | 配置端口LLDP参数 | 配置端口LLDP功能相关参数，包括：LLDP管理状态、Chassis Subtype、 Port ID Subtype、Management Address Subtype和允许发布的TLV类型，可选 |
| 3 | 查看端口信息 | 查看指定端口的LLDP本地信息、邻居信息、统计信息和状态信息，可选 |
| 4 | 查看统计 | 查看全局的LLDP本地信息和统计信息，可选 |
| 5 | 查看邻居信息 | 查看全局的LLDP邻居信息，即从邻居收到的LLDP信息，邻居将这些信息组 织成TLV发送给当前设备，可选 |

#### 配置全局LLDP功能

在导航栏中选择【高级】->【二层】->【LLDP配置】，进入LLDP配置界面，如图4-4所示，详细参数如表格4-5。

![LLDP全局配置](/images/151.png)

<p align="center"><em>图4-4 LLDP全局配置</em></p>

| 配置项 | 说明 |
| --- | --- |
| 状态 | Disabled:全局使能关闭 <br> Enabled:全局使能 |
| 系统名 | 设备的名称，可以为空 |
| 系统描述 | 系统的描述，可以为空 |
<p align="center"><em>表4-5 LLDP全局配置参数说明</em></p> 

#### 配置端口LLDP参数

步骤1：在当前界面，点击右上角的“端口”页签，进入LLDP端口配置概览界面，如图4-5所示。

![LLDP端口配置概览](/images/152.png)

<p align="center"><em>图4-5 LLDP端口配置概览</em></p>

步骤2：选择需要配置的端口，点击【编辑】按钮，进入端口详细配置界面，如图4-6所示，端口配置详细参数如表格4-6所示。

![LLDP端口详细配置界面](/images/153.png)

<p align="center"><em>图4-6 LLDP端口详细配置界面</em></p>
 
| 配置项 | 说明 |
| --- | --- |
| 状态 | Disabled：既不发送也不接收 LLDPDU   <br>TxOnly: 只发送不接收 LLDPDU <br>  RxOnly: 只接收不发送 LLDPDU  <br>TxRx: 既发送也接收 LLDPDU |
| Chassis Subtype | Mac-address:表示MAC地址 <br> If-alias:表示接口化名 <br> If-name:表示接口名称  <br>Ip-address:表示IP地址  <br>Locally-assigned:表示本地配置 |
| 描述 | 显示当前配置的LLDP端口的名称 |
| Agent Circuit ID | 代理巡回标识 |
| Locally Assigned | 本地配置 |
| Port ID Subtype | Mac-address: 表示MAC地址  <br>If-alias: 表示接口化名 <br> If-name: 表示接口名称  <br>Ip-address: 表示IP地址  <br>Agt-circuit-id: 表示代理巡回标识 <br> Locally-assigned: 表示本地配置 |
| Management Address Subtype | Mac-address:设备MAC地址 <br> Ip-address:设备IP地址 |
| Basic Tlvs | port-description:端口描述符 <br> system-description:系统描述符  <br>management-address:管理地址 <br> system-name:系统名 <br> system-capabilities:系统能力 |
| 802.1 Tlvs | port-vlanid:端口vlanid  <br>ptcl-identity:协议id  <br>vid-digest:vid摘要 <br> vlan-name:vlan名称  <br>port-ptcl-vlanid:端口协议vlanid  <br>link-agg mgmt-vid:链路聚合管理vid |
| 802.3 Tlvs | mac-phy:mac-phy max-mtu-size:最大mtu值 |
| Tx hold | 传输保持，默认值txFastInit为4，用于报文TTL计算；TTL=msgTxInterval * msgTxHold + 1 |
| Tx interval | 传输间隔，默认值为30 s； 管理员可以将此值更改为5到3600之间的任何值。 |
| Reinit delay | 表示从adminStatus变为“禁用”到尝试重新初始化之间的延迟量。 reinitDelay的默认值为2 s。 |
| Fast tx | 定义了在快速传输周期内两次传输之间的计时器间隔的时间间隔（即txFast不为零）。 msgFastTx的默认值是1; 管理员可以将此值更改为1到3600之间的任何值。 |
| Tx fast init | 该变量用作txFast变量的初始值。 该值确定在快速传输周期内传输的LLDPDU的数量。 |
| Tx credit max | 配置txCredit的最大值。默认值为5。 管理员可以将此值更改为1到10范围内的任何值。 |
<p align="center"><em>表4-6 LLDP端口配置参数说明</em></p>

#### 查看统计

在当前界面，点击右侧的【LLDP状态】按钮，进入LLDP状态界面，如图4-7所示，具体参数描述如表格4-7所描述。

![LLDP统计信息](/images/154.png)

<p align="center"><em>图4-7 LLDP统计信息</em></p>
  
| 配置项 | 说明 |
| --- | --- |
| 名称 | 显示接口名称 |
| Tx | 发送报文数 |
| Aged | 老化报文数 |
| Rx | 接收报文数 |
| Rx Errors | 接收错误数 |
| Discards | 丢弃报文数 |
| Ddiscard Tlvs | 丢弃Tlv数 |
| Unknown Tlvs | 不知名Tlv数 |
| 清除 | 清除当前计数 |
<p align="center"><em>表4-7 LLDP端口配置参数说明</em></p>

#### 查看邻居信息

在“端口”页签，点击对应端口的“邻居”按钮，进入邻居信息查看界面，如图4-8所示。

![LLDP邻居信息](/images/155.png)

<p align="center"><em>图4-8 LLDP邻居信息</em></p>

## IGMP Snooping

### 概述

IGMP Snooping是Internet Group Management Protocol Snooping（互联网组管理协议窥探）的简称，它是运行在二层设备上的组播约束的机制，用于管理和控制组播组。

运行IGMP Snooping的二层设备通过对收到的IGMP报文进行分析，为端口和MAC组播地址建立起映射关系，并根据这样的映射关系转发组播数据。当二层设备没有运行IGMP Snooping时，组播数据在二层被广播；当二层设备运行了IGMP Snooping后，已知组播组的组播数据不会在二层被广播，而在二层被组播给指定的接收者。

![IGMP Snooping工作原理](/images/156.png)

<p align="center"><em>图4-9 IGMP Snooping工作原理</em></p>

如图4-9所示，当二层组播设备没有运行 IGMP Snooping 时，IP 组播报文在 VLAN 内被广播；当二层组播设备运行了 IGMP Snooping 后，IP 组播报文只发给组成员接收者。

### IGMP Snooping配置

#### IGMP全局配置说明

(1) 在导航栏中选择【高级】->【二层】->【IGMP Snooping配置】，进入IGMP Snooping界面。

(2) 在当前界面，点击“状态”按钮，全局使能IGMP Snooping功能，如图4-10所示。

(3) 单击丢弃未知名组播“已禁用”按钮，使能丢弃未知名组播功能，此功能为可选。

(4) 单击拓扑变化抑制“已禁用”按钮，使能拓扑变化抑制功能，此功能为可选。

![IGMP全局配置界面](/images/158.png)

<p align="center"><em>图4-10 IGMP全局配置界面</em></p>

<table>
<th colspan="2" style="width:35%">配置项</th>
<th>说明</th>
<tr><td rowspan="3">IGMP Snooping</td><td>状态</td><td>开启/关闭IGMP Snooping功能，默认为关闭。</td></tr>
<tr><td>丢弃未知名组播</td><td>开启/关闭丢弃未知名组播功能<br> 未知组播数据报文是指在IGMP Snooping转发表中不存在对应转发表项的 那些组播数据报文： <li> 当使能丢弃未知组播数据报文功能时，交换机将丢弃所有收到的未知组 播数据报文 </li> <li> 当禁止丢弃未知组播数据报文功能时，交换机将在未知组播数据报文所属的VLAN内广播该报文</li> </td></tr>
<tr><td>拓扑变化抑制</td><td>开启/关闭拓扑变化抑制功能</td></tr>
</table>
<p align="center"><em>表4-8全局配置参数说明</em></p>

#### IGMP 路由口配置说明

(1) 在导航栏中选择【高级】->【二层】->【IGMP Snooping配置】，进入IGMP路由口页面，如图4-11所示。

![IGMP路由口界面](/images/159.png)

<p align="center"><em>图4-11 IGMP路由口界面</em></p>
 
<table>
<th colspan="2" style="width:40%">配置项</th>
<th>说明</th>
<tr><td rowspan="10">IGMP路由口</td><td>VID</td><td>组播表项所属VLAN的ID</td></tr>
<tr><td>接口</td><td>所有成员端口</td></tr>
<tr><td>删除</td><td>删除该IGMP路由</td></tr>
</table>
<p align="center"><em>表4-9 IGMP路由口参数说明</em></p>

(2) 单击“组播路由口”下方的【添加】按钮，进入IGMP路由口设置界面，如图4-12所示，配置VID，选择需要应用的端口。点击【确认】按钮完成配置。

![IGMP路由口配置界面](/images/160.png)

<p align="center"><em>图4-12 IGMP路由口配置界面</em></p>

#### IGMP 静态组配置说明

(1) 在导航栏中选择【高级】->【二层】->【IGMP Snooping配置】，进入IGMP静态组显示页面，如图4-13所示，参数说明如表4-10所示。

![IGMP静态组显示界面](/images/161.png)

<p align="center"><em>图4-13 IGMP静态组显示界面</em></p>
 
<table>
<th colspan="2" style="width:10%">配置项</th>
<th style="width:20%">说明</th>
<tr><td rowspan="10">IGMP静态组</td><td>VID</td><td>组播表项所属VLAN的ID</td></tr>
<tr><td>组地址</td><td>组播组地址</td></tr>
<tr><td>源地址</td><td>组播源地址</td></tr>
<tr><td>接口</td><td>所有成员端口</td></tr> 
<tr><td>删除</td><td>删除该IGMP静态组</td></tr> 
</table>
<p align="center"><em>表4-10 IGMP静态组参数说明</em></p>

(2) 单击“静态组”下方的【添加】按钮，进入IGMP静态组配置界面，如图4-14所示。依次配置VID、组地址、源地址以及接口名称。点击【确认】按钮完成配置。

![IGMP静态组配置界面](/images/162.png)

<p align="center"><em>图4-14 IGMP静态组配置界面</em></p>

## MAC管理

### 概述

以太网交换机通过解析报文所携带的目的MAC地址，查询MAC地址表，将报文发送到相应的端口。MAC地址表记录了与该设备相连的设备的MAC地址、接口以及所属的VLAN ID信息。以太网交换机根据MAC地址表查找的结果决定采用知名单播或未知名广播的转发方式。

<span style="color:red;font-size:14px;">知名单播：</span>以太网交换机在MAC地址表中查到与报文的目的MAC地址和VLAN ID相对应的表项并且表项中的输出端口是唯一的，报文直接从表项对应的端口输出。

<span style="color:red;font-size:14px;">未知名广播：</span>以太网交换机在地址表中没有找到目标MAC地址对应的表项，报文被送到所属的VLAN中除报文输入端口外的其他所有端口输出。

以太网交换机的MAC地址可通过动态获取或静态配置，一般情况下通过动态获取得到。下面通过分析用户A与用户C交互过程，给出MAC地址动态学习的工作原理。

如图4-15所示，用户A发送报文到交换机的端口GigabitEthernet 0/1，此时以太网交换机将用户A的MAC地址学习到MAC 地址表中。由于地址表中没有用户C的源MAC地址，因此以太网交换机以广播的方式将报文发送到除连接用户A的GigabitEthernet 0/1以外的同属VLAN 1的所有端口，包括用户B与用户C的端口，此时用户B能够收到用户A所发出的不属于它的报文。

![未知名广播1](/images/163.png)

<p align="center"><em>图4-15 未知名广播1</em></p>

当前动态MAC地址表信息如表4-11所示：
 
| 用户 | VLAN | MAC地址 | 端口 |
| --- | --- | --- | --- |
| 用户A | 1 | 000E.C6C1.C8AB | GigabitEthernet 0/1 |
<p align="center"><em>表4-11 设备参数列表</em></p>

如图4-16所示，用户B收到报文后将回应报文通过以太网交换机的端口GigabitEthernet 0/2，发送给用户A，此时以太网交换机的MAC地址表中已存在用户A的MAC地址，报文被以单播的方式转发到GigabitEthernet 0/1端口，同时以太网交换机将学习用户C的MAC地址，与前面所不同的是用户B此时接收不到用户C发送给用户A 的报文。

![未知名广播2](/images/164.png)

<p align="center"><em>图4-16 未知名广播2</em></p>

当前动态MAC地址表信息如表4-12所示：
 
| 用户 | VLAN | MAC地址 | 端口 |
| --- | --- | --- | --- |
| 用户A | 1 | 000E.C6C1.C8AB | Gigabit Ethernet 0/1 |
| 用户C | 1 | 000E.C6C1.C8AD | Gigabit Ethernet 0/2 |
<p align="center"><em>表4-12 设备参数列表</em></p>

通过用户A与用户C的一次交互过程后，设备学习到了用户A与用户C的源MAC地址，之后用户A 与用户C之间的报文交互则采用单播的方式进行转发，此后用户B将不再接收到用户A与用户C之间的交互报文。

### 配置MAC地址

MAC 地址表项分为：静态 MAC 地址表项、动态 MAC 地址表项和过滤 MAC 地址表项。

静态 MAC 地址表项：由用户手工配置，表项不老化。

动态 MAC 地址表项：包括用户配置的以及设备通过源 MAC 地址学习得来的，表项有老化时间。

过滤 MAC 地址表项：用于丢弃含有特定 MAC 地址的报文（例如，出于安全考虑，可以屏蔽某个用户接收报文），由用户手工配置，表项不老化。

![MAC配置界面](/images/165.png)

<p align="center"><em>图4-17 MAC配置界面</em></p>

在导航栏中选择【高级】->【二层】->【MAC配置】，进入MAC配置界面，如图4-17所示，MAC配置各参数如表4-13所示。
 
<table>
<th colspan="2" style="width:20%">配置项</th>
<th  style="width:40%">说明</th>
<tr><td rowspan="2">全局配置</td><td>老化时间</td><td> <30,1000>，默认老化时间是300秒，MAC地址在最后一次更新300到600秒时间范围内被系统老化 </td></tr>
<tr><td>应用</td><td>点击配置生效</td></tr>
<tr><td rowspan="4">静态地址</td><td>MAC地址</td><td>配置的静态MAC地址，格式如：00-00-00-00-00-01 </td></tr>
<tr><td>VID</td><td>MAC地址的vlan属性</td></tr> 
<tr><td>接口</td><td>MAC地址的端口属性</td></tr> 
<tr><td>操作</td><td>点击删除该静态MAC地址</td></tr> 
<tr><td rowspan="3">过滤地址</td><td>MAC地址</td><td> 配置过滤MAC地址，格式如：00-00-00-00-00-01</td></tr> 
<tr><td>VID</td><td>MAC地址的vlan属性</td></tr> 
<tr><td>操作</td><td>点击删除该过滤MAC地址</td></tr> 
</table>
<p align="center"><em>表4-13 MAC地址管理参数说明</em></p>

### MAC地址配置举例

<span style="color:red;font-size:14px;">配置范例：</span>

案例需求：所有目的MAC地址000E.C6C1.C8AB，VLAN 1的报文从端口GigabitEthernet 0/1转发，同时过滤MAC地址000E.C6C1.C8CC，VLAN 10的报文。

<span style="font-size:14px;">步骤1：创建静态MAC地址，MAC：000E.C6C1.C8AB，VLAN 1，端口GigabitEthernet 0/1。</span>

在导航栏中选择【高级】->【二层】->【MAC配置】，进入MAC地址配置界面，点击“静态地址”下方的【添加】按钮，进入静态地址添加界面，如图4-18所示，依次配置MAC地址，VID和接口。

![静态地址配置](/images/166.png)

<p align="center"><em>图4-18 静态地址配置</em></p>

点击【确认】按钮完成配置，返回界面如图4-19所示。

![静态地址显示](/images/167.png)

<p align="center"><em>图4-19 静态地址显示</em></p>

<span style="font-size:14px;">步骤2：创建过滤MAC地址，MAC：000E.C6C1.C8CC,VLAN10</span>

在导航栏中选择【高级】->【二层】->【MAC配置】，进入MAC地址配置界面，点击“过滤地址”下方的【添加】按钮，进入过滤地址添加界面，如图4-20所示，依次配置MAC地址，VID。

![过滤地址添加界面](/images/168.png)

<p align="center"><em>图4-20 过滤地址添加界面</em></p>

点击【确认】按钮完成配置，返回界面如图4-21所示。

![图4-21静态地址显示](/images/169.png)

<p align="center"><em>图4-21静态地址显示</em></p>

<span style="font-size:14px;">步骤3：点击辅助区 的【保存】按钮，保存配置。</span>

## DHCP Snooping

### 概述

DHCP（Dynamic Host Configuration Protocol，动态主机配置协议）是一个局域网的网络协议， 被广泛用来动态分配可重用的网络资源，是一种用户或者内部网络管理员对所有计算机作中央管理的手段。

DHCP Snooping是DHCP安全技术，通过侦测管理DHCP交互报文，实现对非法DHCP Server的隔离功能，DHCP隔离功能可基于VLAN生效。

DHCP TRUST端口

对于连接合法DHCP Server的端口，认定为TRUST端口，其他端口为UNTRUST端口。当开启DHCP Snooping功能时，设备将阻止客户端的DHCP广播报文发送往UNTRUST端口。

DHCP报文端口限速

针对端口部分用户的DHCP报文流量攻击，支持DHCP报文端口限速，降低或消除该端口下用户攻击对网络环境影响。

MAC Address检验

UNTRUST端口送上来的DHCP报文，检测报文中二层头部源MAC地址与数据段中CLIENT HARDWARE ADDRESS字段，不一样则为非法报文。

Option-82选项

DHCP Option82选项又称为DHCP中继代理信息选项（Relay Agent Information Option），是 DHCP 报文中的一个选项。Option82选项是为了增强DHCP服务器的安全性，改善IP地址的分配策略而提出的一种DHCP选项，由中继组件实现选项的添加与剥离。

DHCP合法用户

DHCP Snooping通过监控DHCP报文，统计合法服务器分配的用户信息。当端口开启ip verify source功能时，作为端口上的合法用户。

### DHCP Snooping配置

<span style="color:red;font-size:14px;">配置步骤：</span>

（1）在导航里选择【高级】->【二层】->【DHCP Snooping配置】，跳转到DHCP Snooping配置界面，如图4-22所示，全局配置参数如表4-14所示。

![DHCP Snooping全局配置](/images/170.png)

<p align="center"><em>图4-22 DHCP Snooping全局配置</em></p>
 
| 配置项 | 说明 |
| --- | --- |
| 状态 | 全局使能或者禁用DHCP Snooping |
| VLAN列表 | 配置DHCP Snooping的VLAN生效范围，默认是所有VLAN都生效 |
| MAC地址校验 | 开启/关闭DHCP报文MAC地址校验功能 |
| 82号选项 | 配置在DHCP请求报文中添加option-82信息，在应答报文中剔除option-82信息 |
| 数据库延迟 | 配置DHCP Snooping database数据定时写入flash的时间间隔 |
| 应用 | 点击此应用完成配置 |
<p align="center"><em>表4-14 DHCP Snooping全局配置</em></p>

（2）选择对应的需要打开此功能的端口，点击【编辑】按钮或者点击“端口配置”下方的【批量配置】按钮，进入端口配置界面，如图4-23所示，端口配置参数描述如表格4-15所示。
 
| 配置项 | 说明 |
| --- | --- |
| 信任 | 开启DHCP Snooping信任口 |
| 限速 | 设置端口DHCP限速，PPS为每秒报文数，范围0-128 |
<p align="center"><em>表4-15 DHCP Snooping信任口配置参数</em></p>

![DHCP Snooping信任口配置](/images/171.png)

<p align="center"><em>图4-23 DHCP Snooping信任口配置</em></p>

## QinQ

### 概述

QinQ是802.1Q in 802.1Q的简称，它是基于IEEE 802.1Q技术的一种二层隧道协议，通过将用户的私网报文封装上外层VLAN Tag，使其携带两层VLAN Tag穿越运营商的骨干网络（又称公网），从而为用户提供了一种比较简单的二层VPN隧道技术，也使运营商能够利用一个VLAN为包含多个VLAN的用户网络提供服务成为了可能。

QinQ的产生背景和优点

在IEEE 802.1Q定义的VLAN Tag域中，只有12个比特位用于表示VLAN ID，最多可以表示4094个VLAN。但在实际应用中，尤其是在城域网中，需要大量的VLAN来隔离用户，4094个VLAN远远不能满足需求。QinQ使整个网络最多可提供4094×4094个VLAN，从而满足了城域网对VLAN数量的需求。它具备以下优点：

- 缓解公网VLAN ID资源日益紧缺的问题。
- 用户可以规划自己的私网VLAN ID，不会导致与公网VLAN ID冲突。
- 为小型城域网和企业网提供了一种简单、灵活的二层VPN解决方案。
- 当运营商升级网络时，用户网络不必更改原有配置，使用户网络具有了较强的独立性。

QinQ的实现原理

在公网的传输过程中，设备只根据外层VLAN Tag转发报文，并将报文的源MAC地址表项学习到外层VLAN Tag所在VLAN的MAC地址表中，而用户的私网VLAN Tag将被当作报文的数据部分进行传输。

如图4-24所示，用户网络A和B的私网VLAN分别为VLAN 1～10和VLAN 1～20。运营商为用户网络A和B分配的VLAN分别为VLAN 3和VLAN 4。当用户网络A和B中带VLAN Tag的报文进入运营商网络时，报文外面就会被分别封装上VLAN 3和VLAN 4的VLAN Tag。这样，来自不同用户网络的报文在运营商网络中传输时被完全分开，即使这些用户网络各自的VLAN范围存在重叠，在运营商网络中传输时也不会产生冲突。

![QinQ典型应用组网图](/images/172.png)

<p align="center"><em>图4-24 QinQ典型应用组网图</em></p>

QinQ的报文结构

如图4-25所示，QinQ报文在运营商网络中传输时带有双层VLAN Tag：

- 内层VLAN Tag：为用户的私网VLAN Tag；
- 外层VLAN Tag：为运营商分配给用户的公网VLAN Tag。

![QinQ的报文结构](/images/173.png)

<p align="center"><em>图4-25 QinQ的报文结构</em></p>

QinQ的实现方式

QinQ的实现方式可分为以下两种：

1. 基本QinQ

基本QinQ是基于端口方式实现的。当端口上配置了基本QinQ功能后，不论从该端口收到的报文是否带有VLAN Tag，设备都会为该报文打上本端口缺省VLAN的Tag：

- 如果收到的是带有VLAN Tag的报文，该报文就成为带双Tag的报文；
- 如果收到的是不带VLAN Tag的报文，该报文就成为带有本端口缺省VLAN Tag的报文。

2. 灵活QinQ

灵活QinQ是基于端口与VLAN相结合的方式实现的，它对QinQ的功能进行了扩展，是对QinQ的一种更灵活的实现。灵活QinQ除了能实现所有基本QinQ的功能外，对于从同一个端口收到的报文，还可以根据VLAN的不同进行不同的操作，包括：

- 为具有不同内层VLAN ID的报文添加不同的外层VLAN Tag。
- 根据报文内层VLAN的802.1p优先级标记外层VLAN的802.1p优先级。

通过使用灵活QinQ技术，在能够隔离运营商网络和用户网络的同时，又能够提供丰富的业务特性和更加灵活的组网能力。

### QinQ配置

<span style="color:red;font-size:14px;">VPN配置</span>

在导航栏中选择【高级】->【二层】->【QinQ配置】，进入QinQ VPN配置概况界面，如图4-26所示。

![VPN配置概况](/images/174.png)

<p align="center"><em>图4-26 VPN配置概况</em></p>

点击“VPN配置”下方的【添加】按钮，进入创建VPN界面，如图4-27所示，各参数说明如表格4-16所示。

![VPN创建界面](/images/175.png)

<p align="center"><em>图4-27 VPN创建界面</em></p>

| <div style="width:150px">配置项</div> | <div style="width:250px">说明</div> |
| --- | --- |
| 名称 | QinQ规则名 |
| CVID | 客户端VLAN ID |
| SVID | 服务端VLAN ID |
<p align="center"><em>表4-16 VPN配置参数说明</em></p>

<span style="color:red;font-size:14px;">端口配置</span>

在当前界面，点击对应端口的【编辑】按钮或者点击“端口配置”下方的【批量编辑】按钮，进入端口配置界面，如图4-28所示，各参数说明如表格4-17所示。。

![端口配置界面](/images/176.png)

<p align="center"><em>图4-28 端口配置界面</em></p>

| <div style="width:150px">配置项</div> | <div style="width:250px">配置项</div>  |
| --- | --- |
| 名称 | 接口名称 |
| Basic | 基础QinQ规则应用状态 |
| VLAN Stacking | 多层QinQ规则应用状态 |
| VLAN Mapping | 替换型QinQ规则应用状态 |
<p align="center"><em>表4-17 端口配置参数说明</em></p>

## ACL

### 概述

ACL（Access Control List，访问控制列表）通过配置对报文的匹配规则和处理操作来实现包过滤的功能。可以有效防止非法用户对网络的访问，同时也可以控制流量，节约网络资源。由 ACL 定义的数据包匹配规则，也可以被其它需要对流量进行区分的功能引用，如QoS 中流分类规则的定义。

ACL 通过一系列匹配条件对数据包进行分类，这些条件可以是数据包的SMAC、DMAC、SIP、DIP等。根据匹配条件，可将ACL 分为以下几种：

<span style="color:red;font-size:14px;">基于IP的标准ACL：</span>只根据数据包的源IP 地址制定规则。

<span style="color:red;font-size:14px;">基于IP的扩展ACL：</span>根据数据包的源IP 地址、目的IP 地址、ETYPE、protocol制订规则。

<span style="color:red;font-size:14px;">基于MAC的 ACL：</span>根据数据包的源MAC 地址、目的MAC 地址制订规则。

<span style="color:red;font-size:14px;">基于IPV6的ACL：</span>根据数据包的源IPV6 地址、目的IPV6 地址、protocol等制订规则。

### ACL配置

:::tip 📝<strong>说明</strong>
- 单个ACL-ID下最多可以配置128条规则；因硬件资源限制，单设备最大支持应用规则数参考具体产品规格文档。
- 当ACL已经应用在端口上时，若需要添加删除规则，需先从端口解应用。
:::

在导航栏中选择【高级】->【安全】->【ACL配置】，进入ACL配置界面，如图4-29所示，此页面包含“ACL配置”，“ACE配置”，“端口配置”三个部分。

![ACL配置界面](/images/177.png)

<p align="center"><em>图4-18 ACL配置界面</em></p>

<span style="color:red;font-size:14px;">创建ACL规则</span>

ACL模块提供了基于ACL类型的配置，包括IP、IP-Extend、IPV6、MAC，ACL配置界面如图4-30~34所示，各参数说明如表4-18~22所示。
 
<table>
<th colspan="2" style="width:30%">配置项</th>
<th style="width:70%">说明</th>
<tr><td rowspan="4">ACL类型</td><td>IP</td><td>标准IP的ACL，可匹配IPv4报文中的源IP字段</td></tr>
<tr><td>IP-Extend</td><td>扩展ACL，可匹配IPv4报文的协议号、源IP地址、目的IP地址、4层端口号等</td></tr>
<tr><td>IPV6</td><td>IPv6 ACL，可匹配IPv6报文源IP地址、目的IP地址、协议号等</td></tr>
<tr><td>MAC</td><td>MAC ACL，可匹配目的MAC地址、源MAC地址、Etype等字段</td></tr> 
<tr><td colspan="2">名称</td><td> 标准IP有效数字范围：<1-99> | <1300-1999> <br>扩展IP有效数字范围：<100-199> | <2000-2699> <br>MAC ACL有效数字范围：<200-699> <br> IPv6 ACL仅支持字符串命名，所有ACL均支持字符串命名，字符串长度范围<1-64></td></tr> 
<tr><td colspan="2">计数使能</td><td>使能计数功能，当报文命中ACL时，计数值加1</td></tr> 
<tr><td colspan="2">起始序号</td><td>规则表项序号起始值，缺省值:10, 范围<1-2147483647></td></tr> 
<tr><td colspan="2">步长</td><td>序号地增值，缺省值:10, 范围<1-2147483647> </td></tr> 
<tr><td colspan="2">描述符</td><td>定义该ACL描述信息</td></tr>  
</table>
<p align="center"><em>表4-18 ACL 类型参数说明</em></p>

![ACL类型配置界面](/images/178.png)

<p align="center"><em>图4-30 ACL类型配置界面</em></p>

<table>
<th colspan="2" style="width:30%">配置项</th>
<th>说明</th>
<tr><td rowspan="2">访问控制</td><td>Permit</td><td>放行命中该规则的报文</td></tr>
<tr><td>Deny</td><td>丢弃命中该规则的报文</td></tr>
<tr><td colspan="2">序列号</td><td>规则表项序号</td></tr>
<tr><td colspan="2">源地址</td><td>源IP地址，如192.168.64.1 </td></tr> 
<tr><td colspan="2">源掩码</td><td>IP的掩码取反，如匹配IP地址前24位，掩码为255.255.255.0，这里需配置为00.00.00.255</td></tr> 
</table>
<p align="center"><em>表4-19 ACL IP类型参数说明</em></p>

![IP类型ACE配置界面](/images/179.png)

<p align="center"><em>图4-31 IP类型ACE配置界面</em></p>

<table>
<th colspan="2" style="width:30%">配置项</th>
<th>说明</th>
<tr><td rowspan="2">访问控制</td><td>Permit</td><td>放行命中该规则的报文</td></tr>
<tr><td>Deny</td><td>丢弃命中该规则的报文</td></tr>
<tr><td colspan="2">序列号</td><td>规则表项序号</td></tr>
<tr><td colspan="2">协议</td><td>支持常用协议报文选项，包含tcp、udp、vrrp、igmp、gre、ipcomp、ospf、pim、rsvp等 支持所有IPv4报文 <br>支持自定义protocol的IPv4报文</td></tr>
<tr><td colspan="2">源地址</td><td>源IP地址，如192.168.64.1 </td></tr> 
<tr><td colspan="2">源掩码</td><td>IP的掩码取反，如匹配IP地址前24位，掩码为255.255.255.0，这里需配置为00.00.00.255</td></tr>
<tr><td colspan="2">目标地址</td><td>目的IP地址，如192.168.64.100</td></tr> 
<tr><td colspan="2">目标掩码</td><td>同源掩码</td></tr> 
</table>
<p align="center"><em>表4-20 IP-Extend类型ACE参数说明</em></p>

![IP-Extend类型ACE配置界面](/images/180.png)

<p align="center"><em>图4-32 IP-Extend类型ACE配置界面</em></p>

<table>
<th colspan="2" style="width:30%">配置项</th>
<th>说明</th>
<tr><td rowspan="2">访问控制</td><td>Permit</td><td>放行命中该规则的报文</td></tr>
<tr><td>Deny</td><td>丢弃命中该规则的报文</td></tr>
<tr><td colspan="2">序列号</td><td>规则表项序号</td></tr>
<tr><td colspan="2">协议</td><td>支持常用协议报文选项，包含tcp、udp、icmp等 支持所有IPv6报文 支持自定义protocol的IPv6报文 </td></tr>
<tr><td colspan="2">源地址</td><td> 源MAC地址，如00.d0.f8.22.33.40</td></tr> 
<tr><td colspan="2">源掩码</td><td>MAC地址掩码取反，如匹配MAC地址前24位，掩码为ffff.ff00.0000，这里需配置为0000.00ff.ffff</td></tr>
<tr><td colspan="2">目标地址</td><td>目的MAC地址，如00.d0.f8.22.33.41</td></tr> 
<tr><td colspan="2">目标掩码</td><td>同源掩码</td></tr> 
</table>
<p align="center"><em>表4-21 IPV6类型ACE参数说明</em></p>

![IPV6类型ACE配置界面](/images/181.png)

<p align="center"><em>图4-33 IPV6类型ACE配置界面</em></p>

<table>
<th colspan="2" style="width:30%">配置项</th>
<th>说明</th>
<tr><td rowspan="2">访问控制</td><td>Permit</td><td>放行命中该规则的报文</td></tr>
<tr><td>Deny</td><td>丢弃命中该规则的报文</td></tr>
<tr><td colspan="2">序列号</td><td>规则表项序号</td></tr>
<tr><td colspan="2">以太网协议</td><td>以太网协议类型 ，范围(0x05DD-0xFFFF) </td></tr>
<tr><td colspan="2">优先级</td><td> 报文的cos值，范围（0-7）</td></tr> 
<tr><td colspan="2">源地址</td><td> 报文源MAC地址</td></tr> 
<tr><td colspan="2">源掩码</td><td>源MAC地址掩码取反，比如选择MAC地址的前32位，掩码为0000.0000.ffff </td></tr>
<tr><td colspan="2">目标地址</td><td>报文目的MAC地址</td></tr> 
<tr><td colspan="2">目标掩码</td><td>目的MAC地址掩码取反，比如选择MAC地址的前32位，掩码为0000.0000.ffff</td></tr> 
</table>
<p align="center"><em>表4-22 MAC类型ACE参数说明</em></p>

![MAC类型ACE配置界面](/images/182.png)

<p align="center"><em>图4-34 MAC类型ACE配置界面</em></p>

<span style="color:red;font-size:14px;">操作步骤:</span>

（1）在导航栏中选择【高级】->【安全】->【ACL配置】，进入ACL配置界面。

（2）点击“ACL配置”下方的【添加ACL】按钮，进入ACL规则创建界面，根据要求填写好参数，如图4-35所示，点击【确认】按钮完成配置。

![创建IP类型的ACL](/images/183.png)

<p align="center"><em>图4-35 创建IP类型的ACL</em></p>

（3）点击“ACE配置”下方的【添加ACE】按钮，进入ACE配置界面，根据要求填写好参数，如图4-36所示，点击【确认】按钮完成配置。

![配置IP类型的ACE](/images/184.png)

<p align="center"><em>图4-36 配置IP类型的ACE</em></p>

（4）点击“端口配置”下方的【批量配置】按钮，选择ACL条例“abc”，端口面板选择2，4，如图4-37所示，点击【确认】按钮完成配置。

![ACL端口配置](/images/185.png)

<p align="center"><em>图4-37 ACL端口配置</em></p>

创建成功后的ACL完整界面如图4-38所示

![创建成功的ACL规则](/images/186.png)

<p align="center"><em>图4-38 创建成功的ACL规则</em></p>

（5）点击辅助区的【保存】按钮，保存配置。

## QoS

### 概述

QoS（Quality of Service，服务质量）指一个网络能够利用各种基础技术，为指定的网络通信提供更好的服务能力。

传统网络采用“尽力而为”的转发机制，当网络带宽充裕的时候，所有的数据流都得到了较好的处理，当网络发生拥塞的时候，所有的数据流都有可能被丢弃。为满足不同应用不同服务质量的要求，需要网络能根据用户的要求分配和调度资源，对不同的数据流提供不同的服务质量。

支持QoS 功能的设备，能够提供传输品质服务，针对某种类别的数据流，可以为它赋予某个级别的传输优先级，来标识它的相对重要性，并使用设备所提供的各种优先级转发策略、拥塞避免等机制为这些数据流提供特殊的传输服务。

配置了QoS 的网络环境，增加了网络性能的可预知性，并能够有效地分配网络带宽，更加合理地利用网络资源。

### QoS配置

:::tip 📝<strong>说明</strong>
cir数值是可确定的，比如限速1M，那么cir数值为1024，但是cbs的数值却取自经验数值。当cbs数值配大，流量尖峰更高，限速较稳定，但平均速率可能高于限速值；当cbs数值配小，流量尖峰较低，限速波动较大，平均速率可能小于限速值。建议cbs配置取cir的4倍值与31250的小值。
:::

<span style="color:red;font-size:14px;">使能QoS</span>

（1）在导航栏中选择【高级】->【安全】->【QoS配置】，进入QoS配置界面，如图4-39所示。

![QoS全局配置界面](/images/187.png)

<p align="center"><em>图4-39 QoS全局配置界面</em></p>

2.点击【状态】按钮，选择算法，点击【确认】按钮使能QoS。

<table>
<th style="width:100px">配置项</th>
<th colspan="3">说明</th>
<tr><td rowspan="3">全局配置</td><td colspan="2">状态</td><td>启用QOS，在启用前所有QOS功能不支持配置</td></tr>
<tr><td rowspan="2" style="width:70px">算法</td><td>Sp</td><td>绝对优先级调度，队列ID大优先级高，高优先级队列处理完成后处理低优先级队列</td></tr>
<tr><td>Wrr</td><td>轮转调度算法，根据队列权重，从队列ID最大到最小，依次调度各个队列。</td></tr>
</table>
<p align="center"><em>表4-23 QoS全局配置参数说明</em></p>

<span style="color:red;font-size:14px;">配置Qos映射</span>

（1）在当前界面，点击“QoS映射”下方的【队列】按钮，进入队列配置界面，如图4-40所示，参数说明如表格4-24所示。

![队列配置界面](/images/188.png)

<p align="center"><em>图4-40 队列配置界面</em></p>

<table>
<th style="width:15%">配置项</th>
<th  colspan="2">说明</th>
<tr><td rowspan="10">队列权重</td><td style="width:15%">队列</td><td><0， 7></td></tr>
<tr><td>权重</td><td><0， 32>，数值越大，权重越高，在通道拥堵情况下该队列报文优先处理概率越大，0表示无穷大。</td></tr>
</table>
<p align="center"><em>表4-24 队列参数说明</em></p>

（2）点击“QoS映射”下方的【CoS】按钮，进入CoS配置界面，如图4-41所示，参数说明如表格4-25所示。

![CoS配置界面](/images/189.png)

<p align="center"><em>图4-41 CoS配置界面</em></p>

<table>
<th colspan="2" style="width:15%">配置项</th>
<th>说明</th>
<tr><td rowspan="3"  style="width:15%">CoS配置</td><td style="width:15%">CoS</td><td><0， 7></td></tr>
<tr><td>队列</td><td><0， 7>， Cos-queue映射关系，在端口标记的cos基础上，修改报文出口队列，在配置端口为no trust、trust cos或trust dscp且非ip报文时生效。</td></tr>
<tr><td>DSCP</td><td>cos-dscp映射关系，在配置端口为no trust、trust cos或trust dscp且非ip报文时生效，修改报文dscp数值</td></tr>
</table>
<p align="center"><em>表4-25 CoS参数说明</em></p>

（3）点击“QoS映射”下方的【DSCP】按钮，进入DSCP配置界面，如图4-42所示，参数说明如表格4-26所示。

![DSCP配置界面](/images/190.png)

<p align="center"><em>图4-42 DSCP配置界面</em></p>
 
<table>
<th colspan="2" style="width:15%">配置项</th>
<th>说明</th>
<tr><td rowspan="4" style="width:15%">DSCP映射</td><td style="width:15%">DSCP</td><td><0， 63></td></tr>
<tr><td>队列</td><td><0， 7>， dsp-queue映射关系，在配置端口为trust dscp且ip报文时生效，修改报文出口队列</td></tr>
<tr><td>CoS</td><td><0， 7>， dscp-cos映射关系，在配置端口为trust dscp且ip报文时生效，修改报文cos字段</td></tr>
<tr><td>新DSCP值</td><td><0， 63>， dscp-dscp映射关系，在配置端口为trust dscp且ip报文时生效，先进行dscp-dscp映射，后进行dscp-cos映射</td></tr>
</table>
<p align="center"><em>表4-26 DSCP参数说明</em></p>

<span style="color:red;font-size:14px;">Qos分类配置</span>

在当前QoS界面，点击“分类配置”下方的【添加】按钮，进入分类配置界面，如图4-43所示，参数说明如表格4-27所示。

![图4-43分类配置界面](/images/191.png)

<p align="center"><em>图4-43分类配置界面</em></p>

<table>
<th colspan="2" style="width:15%">配置项</th>
<th>说明</th>
<tr><td rowspan="4" style="width:15%">分类配置</td><td style="width:15%">名称</td><td>创建分类，定义分类名称</td></tr>
<tr><td>匹配类型</td><td>定义匹配类型，支持关联acl，etype，dscp，cos，l4，vlan-rangge，vlan</td></tr>
</table>
<p align="center"><em>表4-27 分类配置参数说明</em></p>

Qos策略配置

在当前QoS界面，点击“策略配置”下方的【添加策略规则】按钮，进入规则配置界面，如图4-44所示，参数说明如表格4-28所示。

![规则配置界面](/images/192.png)

<p align="center"><em>图4-44 规则配置界面</em></p>

<table>
<th colspan="2" style="width:15%">配置项</th>
<th>说明</th>
<tr><td rowspan="6" style="width:15%">规则配置</td><td style="width:15%">名称</td><td>规则名称</td></tr>
<tr><td>分类名</td><td>选择分类名称</td></tr>
<tr><td>修改</td><td>策略对应的动作一，支持修改cos、dscp、vlan等动作</td></tr>
<tr><td>限速</td><td>策略对应的动作二，限速</td></tr>
<tr><td>CIR</td><td>限速水线，单位kbps</td></tr>
<tr><td>CBS</td><td>burst能力，单位Kbyte</td></tr> 
</table>
<p align="center"><em>表4-28 规则配置参数说明</em></p>

<span style="color:red;font-size:14px;">Qos端口配置</span>

在QoS界面，点击“端口配置”下方的【批量编辑】按钮，进入端口配置界面，如图4-45所示，端口配置参数说明如表格4-29所示。
 
<table>
<th colspan="2" style="width:15%">配置项</th>
<th>说明</th>
<tr><td rowspan="6" style="width:15%">端口配置</td><td style="width:15%">默认CoS</td><td><0， 7>，当配置端口不信任，或配置信任但报文不满足信任条件时，采用端口默认cos标记入口报文</td></tr>
<tr><td>信任</td><td>支持不信任、信任cos、信任dscp配置。当处于no trust模式时，入口阶段根据端口默认cos修改报文cos字段以及dscp字段；当配置trust cos时，对于untagged报文同no trust模式，对于带tag报文，选择报文自带cos；当配置trust dscp时，对于ip报文，选择报文自带dscp，对于非ip报文，同trust cos模式。</td></tr>
<tr><td>入口策略</td><td>选择创建的策略</td></tr>
</table>
<p align="center"><em>表4-29 规则配置参数说明</em></p>

![QoS端口配置界面](/images/193.png)

<p align="center"><em>图4-45 QoS端口配置界面</em></p>

## DoS

### 概述

DoS（Denial of Service，拒绝服务）攻击的目的是使计算机或网络无法提供正常的服务。 DoS攻击种类繁多，有各种不同的实现方式。其共同点是使受害主机或网络无法及时接收并处理外界请求。下面列举一些典型的Dos攻击类型。

<span style="color:red;font-size:14px;">SYN Flood报文攻击：</span>

SYN Flood攻击是当前网络上最常见的DDOS攻击，也是最经典的DoS攻击。通过向网络服务所在端口发送大量伪造源地址的攻击报文，造成目标服务器连接队列被占满，从而阻止其他合法用户访问。

<span style="color:red;font-size:14px;">ICMP Flood 报文攻击：</span>

ICMP Flood是一种DDOS攻击，该攻击在短时间内向目的主机发送大量ping包，消耗主机资源。主机资源耗尽后无法提供其他服务。

<span style="color:red;font-size:14px;">ARP Flood 报文攻击：</span>

ARP Flood是一种DDOS攻击，该攻击在短时间内向目的主机发送大量ARP请求包，消耗主机资源。主机资源耗尽后无法应答其他ARP请求。

<span style="color:red;font-size:14px;">NULL SCAN攻击：</span>

NULL SCAN攻击主要是攻击者向目标主机IP发送没有设置任何标志的TCP报文，部分操作系统主动反馈RST报文，攻击者由此获取未关闭会话的端口。防NULL SCAN攻击本质是丢弃没有任何TCP标志位的TCP报文，可以有效防止攻击者通过NULL SCAN获取各端口的关闭情况后，发动后续攻击。

<span style="color:red;font-size:14px;">SYN和FIN同时设置的TCP报文：</span>

正常情况下，SYN标志（连接请求标志）和FIN标志（连接拆除标志）不能同时出现在一个TCP报文中，而且RFC并未规定IP协议栈如何处理这样的畸形报文。攻击者就可以利用这个特征，通过发送SYN和FIN同时设置的报文，来判断操作系统的类型。

<span style="color:red;font-size:14px;">设置FIN却未设置ACK的TCP报文：</span>

正常情况下，除了第一报文（SYN报文）外，所有的报文都设置ACK标志，包括TCP连接拆除报文（FIN标志设置的报文）。但有的攻击者却可能向目标主机发送已设置FIN标志却未设置ACK标志的TCP报文，这样可能导致目标主机崩溃。

<span style="color:red;font-size:14px;">设置SYN且源端口号为0-1023的TCP报文：</span>

端口号0-1023是由IANA分配的已知端口号，并且在大多数系统中只能由系统（或根）进程或有特权的用户所执行的程序使用。这些端口（0-1023）不能够作为客户端发送的第一个TCP报文（已设置SYN标志）的源端口号。启动防非法TCP报文攻击功能，设备会根据非TCP报文特征进行检查，若非法，则丢弃。

我司提供以上几种防DoS攻击功能。

### DoS配置

在导航栏中选择【高级】->【安全】->【DoS配置】，进入DoS配置界面。此页面包含“全局配置”、“SYN配置”、“ICMP配置”、“ARP配置”四部分。

<span style="color:red;font-size:14px;">全局配置</span>

全局配置界面如图4-46所示，包含几种全局抗DoS攻击配置，具体参数如表4-30所示。全局“SYN Flood

”“ICMP Flood”和“ARP Flood”配置方法相同，以“ARP Flood”举例，配置界面如图4-47所示。

![DoS全局配置界面](/images/194.png)

<p align="center"><em>图4-46 DoS全局配置界面</em></p>

| <div style="width:200px">配置项</div> | 说明 |
| --- | --- |
| 防NULL SCAN攻击 | 配置全局抗NULL SCAN攻击，开启后丢弃没有设置任何标志的TCP报文 |
| 防SYN FIN攻击 | 配置全局抗SYN FIN攻击，开启后丢弃SYN和FIN同时设置的TCP报文 |
| 防SYN SPORT(0-1023)攻击 | 配置全局抗SYN SPORTL1024攻击，开启后丢弃源端口（0-1023）TCP的同步报文 |
| 防FIN NOACK攻击 | 配置全局抗FIN NOACK攻击，开启后丢弃设置FIN却未设置ACK的TCP报文 |
| SYN/ICMP/ARP Flood | 配置全局抗SYN/ICMP/ARP Flood攻击 |
| SYN/ICMP/ARP Flood限速 | 配置抗SYN/ICMP/ARP Flood攻击限速范围，0时deny所有攻击报文 |
| 计数使能 | 配置抗SYN/ICMP/ARP Flood攻击计数器使能，开启计数器时，将统计命中的攻击报文 |
<p align="center"><em>表4-30 DoS全局配置参数说明</em></p>

![APR配置界面](/images/195.png)

<p align="center"><em>图4-47 APR配置界面</em></p>

<span style="color:red;font-size:14px;">操作步骤:</span>

（1）在导航栏中选择【高级】->【安全】->【DoS配置】，进入DoS配置界面。

（2）点击“全局配置”表格中的【编辑】按钮，进入防DoS攻击创建界面，根据要求填写好参数，以全局“ARP Flood”配置为例，如图4-48所示，点击【确认】按钮完成配置。

![创建全局防ARP Flood攻击类型](/images/196.png)

<p align="center"><em>图4-48 创建全局防ARP Flood攻击类型</em></p>

创建成功后的DoS全局配置界面如图4-49所示。

![创建全局防ARP Flood攻击类型](/images/197.png)

<p align="center"><em>图4-49 创建全局防ARP Flood攻击类型</em></p>

<span style="color:red;font-size:14px;">SYN/ICMP/ARP配置</span>

端口配置防DoS攻击包括SYN Flood、ICMP Flood和ARP Flood，配置界面如图4-50~52所示，各参数说明如表4-31所示。

| <div style="width:200px">配置项</div> |  <div style="width:300px">说明</div> |
| --- | --- |
| SYN Flood | 使能防SYN Flood攻击 |
| SYN Flood限速(kbps) | 限制SYN报文攻击流速率 |
| ICMP Flood | 使能防ICMP Flood攻击 |
| ICMP Flood限速(kbps) | 限制ICMP报文攻击流速率 |
| ARP Flood | 使能防ARP Flood攻击 |
| ARP Flood限速(kbps) | 限制ARP报文攻击流速率 |
<p align="center"><em>表4-31 防SYN/ICMP/ARP Flood攻击类型参数说明</em></p>

![SYN配置界面](/images/198.png)

<p align="center"><em>图4-50 SYN配置界面</em></p>

![ICMP配置界面](/images/199.png)

<p align="center"><em>图4-51 ICMP配置界面</em></p>

![ARP配置界面](/images/200.png)

<p align="center"><em>图4-52 ARP配置界面</em></p>

<span style="color:red;font-size:14px;">配置步骤：</span>

（1）在导航栏中选择【高级】->【安全】->【DoS配置】，进入DoS配置界面。

（2）点击“SYN/ICMP/ARP配置”下的【批量编辑】按钮，进入SYN/ICMP/ARP创建界面，以防ARP Flood攻击创建配置示例，如图4-53所示。

（3）选取需要配置的端口成员，单击【确认】按钮完成操作。

![ARP配置](/images/201.png)

<p align="center"><em>图4-53 ARP配置</em></p>

创建成功后的ARP配置界面如图4-54所示。

![ARP配置](/images/202.png)

<p align="center"><em>图4-54 ARP配置</em></p>

<span style="color:red;font-size:14px;">配置举例：</span>

以防ARP Flood攻击配置举例，以下组网需求，如图4-55所示：

- 端口gi0/1连接FTP服务器，端口gi0/2、gi0/3口分别连接终端设备。
- gi0/2口连接终端伪造大量IP和MAC地址发动ARP攻击，导致FTP服务器的无法处理正常请求的ARP报文。

![组网拓扑](/images/203.png)

<p align="center"><em>图4-55 组网拓扑</em></p>

步骤1：在导航栏中选择【高级】->【安全】->【DoS配置】，进入DoS配置界面。

步骤2：点击“ARP配置”下的【批量编辑】按钮，进入ARP配置界面，在端口面板选择GigabitEthernet0/2，点击【确认】完成配置，如图4-56所示。

![防ARP Flood配置界面](/images/204.png)

<p align="center"><em>图4-56 防ARP Flood配置界面</em></p>

步骤3：点击导航栏的【保存】按钮，保存配置。

## 路由

### ARP/邻居配置

#### 概述

ARP（Address Resolution Protocol，地址解析协议）是将 IP 地址解析为以太网 MAC 地址（或称物理地址）的协议。

在局域网中，当主机或其它网络设备有数据要发送给另一个主机或设备时，它必须知道对方的网络层地址（即 IP 地址）。但是仅仅有 IP 地址是不够的，因为 IP 数据报文必须封装成帧才能通过物理网络发送，因此发送站还必须有接收站的物理地址，所以需要一个从 IP 地址到物理地址的映射。ARP 就是实现这个功能的协议。

<span style="color:red;font-size:14px;">ARP表</span>

设备通过 ARP 解析到目的 MAC 地址后，将会在自己的 ARP 表中增加 IP 地址到 MAC 地址的映射表项，以用于后续到同一目的地报文的转发。

ARP 表项分为动态 ARP 表项和静态 ARP 表项。

<span style="color:red;font-size:14px;">1. 动态ARP表项</span>

动态 ARP 表项由 ARP 协议通过 ARP 报文自动生成和维护，可以被老化，可以被新的 ARP 报文更新，可以被静态 ARP 表项覆盖。当到达老化时间、接口 down 时会删除相应的动态 ARP 表项。

<span style="color:red;font-size:14px;">2. 静态ARP表项</span>

静态 ARP 表项通过手工配置和维护，不会被老化，不会被动态 ARP 表项覆盖。

配置静态 ARP 表项可以增加通信的安全性。静态 ARP 表项可以限制和指定 IP 地址的设备通信时只使用指定的 MAC 地址，此时攻击报文无法修改此表项的 IP 地址和 MAC 地址的映射关系，从而保护了本设备和指定设备间的正常通信。

#### 配置ARP管理

<span style="color:red;font-size:14px;">查看ARP表项</span>

在导航栏中选择【高级】->【三层】->【ARP/邻居信息】，进入ARP/邻居信息页面，如图4-57所示。在“概况”中可以ARP/邻居表项信息，各参数说明如表格4-32所示。

![ARP/邻居表项信息](/images/205.png)

<p align="center"><em>图4-57 ARP/邻居表项信息</em></p>

| <div style="width:200px">配置项</div> |  <div style="width:300px">说明</div> |
| --- | --- |
| IPv4/IPv6 | 终端IPv4/IPv6 地址 |
| MAC地址 | 终端MAC地址 |
| 接口 | 终端所在的三层接口名 |
| 类型 | ARP地址类型 |

<p align="center"><em>表4-32 ARP表项参数说明</em></p>

<span style="color:red;font-size:14px;">配置ARP表项</span>

（1）在导航栏中选择【高级】->【三层】->【ARP/邻居信息】，进入ARP/邻居配置界面，如图4-58所示。

（2）点击【添加】按钮进入ARP/邻居创建界面，如图4-59所示；

（3）配置ARP/邻居的信息，详细配置信息如表4-32所示；

（4）点击【确认】按钮完成操作。

![ARP/邻居配置界面](/images/206.png)

<p align="center"><em>图4-58 ARP/邻居配置界面</em></p>

![图4-59新建ARP/邻居界面](/images/207.png)

<p align="center"><em>图4-59新建ARP/邻居界面</em></p>

#### 配置ARP举例

<span style="color:red;font-size:14px;">1. 组网需求</span>

如图4-60所示：

- Switch A 连接主机，通过接口GigabitEthernet 0/3连接 Router B。接口GigabitEthernet 0/3属于 VLAN 100。
- Router B 的 IP 地址为 192.168.1.1/24，MAC 地址为 00e0-fc01-0000。

为了增加 Switch A 和 Router B 通信的安全性，可以在 Switch A 上配置静态 ARP 表项。

![静态ARP配置组网图](/images/208.png)

<p align="center"><em>图4-60 静态ARP配置组网图</em></p>

<span style="color:red;font-size:14px;">2. 配置步骤</span>

<span style="font-size:14px;">（1）创建VLAN 100，配置端口GigabitEthernet 0/3 VLAN 100。</span>

选择【配置】->【VLAN】，进入VLAN配置界面，在VLAN配置页面，点击【添加】按钮，创建VLAN100，选择端口GigabitEthernet 0/3为Untagged成员口，如图4-61所示。

![新建VLAN100界面](/images/209.png)

<p align="center"><em>图4-61 新建VLAN100界面</em></p>

<span style="font-size:14px;">（2）创建三层SVI口</span>

选择【配置】->【端口】->【端口配置】，进入三层端口配置界面，点击【添加】按钮，配置VLAN ID、Ipv4地址/掩码，如图4-62所示，点击【确认】按钮完成配置。

![创建三层SVI口](/images/210.png)

<p align="center"><em>图4-62 创建三层SVI口</em></p>

<span style="font-size:14px;">（3）配置Router B为静态ARP</span>

在导航栏中选择【高级】->【三层】->【ARP/邻居配置】，进入ARP/邻居配置界面，点击【添加】按钮进入配置界面，配置IP地址、MAC地址，如图4-63所示，点击【确认】按钮完成配置。

![ARP/邻居配置页面](/images/211.png)

<p align="center"><em>图4-63 ARP/邻居配置页面</em></p>

### 路由

在网络中路由器根据所收到的报文的目的地址选择一条合适的路径，并将报文转发到下一个路由器。路径中最后的路由器负责将报文转发给目的主机。路由就是报文在转发过程中的路径信息，用来指导报文转发。

#### 路由表

路由器通过路由表选择路由，把优选路由下发到 FIB（Forwarding Information Base，转发信息库）表中，通过FIB表指导报文转发。每个路由器中都至少保存着一张路由表和一张FIB表。

路由表中保存了各种路由协议发现的路由，根据来源不同，通常分为以下三类：

- 直连路由：链路层协议发现的路由，也称为接口路由。
- 静态路由：网络管理员手工配置的路由。静态路由配置方便，对系统要求低，适用于拓扑结构简单并且稳定的小型网络。其缺点是每当网络拓扑结构发生变化，都需要手工重新配置，不能自动适应。
- 动态路由：动态路由协议发现的路由。

FIB 表中每条转发项都指明了要到达某子网或某主机的报文应通过路由器的哪个物理接口发送，就可到达该路径的下一个路由器，或者不需再经过别的路由器便可传送到直接相连的网络中的目的主机。

#### 静态路由

静态路由是一种特殊的路由，由管理员手工配置。当组网结构比较简单时，只需配置静态路由就可以使网络正常工作。

静态路由不能自动适应网络拓扑结构的变化。当网络发生故障或者拓扑发生变化后，必须由网络管理员手工修改配置。

#### 配置静态路由

<span style="color:red;font-size:14px;">查看静态路由配置</span>

在导航栏中选择【高级】->【三层】->【静态路由】，进入静态路由配置页面，如图4-64所示。在“概况”中可以显示静态路由配置情况，各参数说明如表格4-33所示。

![静态路由显示界面](/images/212.png)

<p align="center"><em>图4-64 静态路由显示界面</em></p>

| <div style="width:100px">配置项</div> |  <div style="width:300px">说明</div> |
| --- | --- |
| 路由类型 | 选择路由的类型，IPv4和IPv6 |
| 前缀 | 包含路由前缀地址和网段长度。路由前缀地址，或者路由网段；比如常见路由0.0.0.0/0 192.168.1.1中，前缀IP为0.0.0.0；路由网段长度；比如上述举例中长度为0 |
| 下一跳 | 路由下一跳地址；比如上述举例中下一跳为192.168.1.1 |
| 描述 | 路由描述信息，可选配置 |
<p align="center"><em>表4-33 静态路由参数说明</em></p>

<span style="color:red;font-size:14px;">新建静态路由步骤</span>

（1）在导航栏中选择【配置】->【VLAN】，创建VLAN并选择Untagged成员口。

（2）在导航栏中选择【配置】->【端口】->【端口配置】，添加三层SVI口。

（3）在导航栏中选择【高级】->【三层】->【静态路由】，如图4-65所示，创建静态路由。

![新建静态路由界面](/images/213.png)

<p align="center"><em>图4-65 新建静态路由界面</em></p>

:::tip ⚠️<strong>注意</strong> 
- 添加新的SVI口时，会自动将默认的管理IP地址删除。请确保新的SVI口可以继续访问。
:::