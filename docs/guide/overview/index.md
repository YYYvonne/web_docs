# 概述

## 简介

为了方便网络管理员对网络设备进行操作和维护，我司特推出了设备的Web管理功能，管理员可以使用Web界面直观地对设备进行管理和维护。Web网管的运行环境如图1-1所示。
![网管运行环境](/images/001.png)   

<p align="center"><em>图1-1 WEB 网管运行环境</em></p>

## 登录WEB网管

用户首次登录Web网管时需要使用缺省账号进行登录，登录完成后为了确保设备的安全性，需要立即更改密码，具体操作步骤如下：

- 使用缺省账号登录Web网管
- 更改用户密码

:::tip 📝<strong>说明</strong>
- 更改密码具体操作过程见用户管理5.3章节。
:::

设备出厂时已经默认启用了Web server服务，并且有缺省的登录账号：用户名为admin、登录密码为admin，IP地址为192.168.56.166，用户可以使用这些信息完成WEB网管的首次登录。

下面以2GX8GT交换机为例，介绍如何通过Web方式登录设备，具体步骤如下：
![Web登录界面](/images/002.png)   
 
<p align="center"><em>图1-2 WEB登录界面</em></p>

（1）连接设备和PC，用网线将PC和设备上的以太网口（缺省情况下，所有端口均属于 VLAN 1）相连。

（2） 为PC配置IP地址，设置PC的IP地址与设备的缺省VLAN接口IP地址同网段（除设备的默认IP地址外），例如192.168.56.20。

（3）启动浏览器，输入登录信息。

在PC上启动浏览器，在地址栏中输入“192.168.56.166”后回车，进入设备的WEB登录页面，如图1-2所示。输入缺省账号“admin”、密码“admin”，单击【登录】按钮登录Web网管。系统会根据用户使用的操作系统语言来进行语言的自动选择，用户也可以进行手动切换（包括中文、English两种），如图1-3所示。
![语言切换界面](/images/003.png)   
  
<p align="center"><em>图1-3 语言切换界面</em></p>

为了获得更好的显示效果，推荐使用Edge、火狐Firefox或者Chrome浏览器，Chrome浏览器请升级到最新版本。

## WEB网管的退出
:::tip ⚠️<strong>注意</strong> 
- 退出Web网管时，系统不会自动保存当前配置。因此建议用户在退出Web网管前先设置保存当前配置。
::::
 
<span style="color:red;font-size:14px">操作步骤：</span>

单击Web网管页面右上角的用户图标按钮（如图1-4所示），在弹出的对话框里单击“退出”即可退出Web网管。
![Web网管的退出](/images/004.png)   
 
<p align="center"><em>图1-4 Web网管的退出</em></p>

## 日志配置
![日志配置](/images/005.png)   
 
<p align="center"><em>图1-5 日志配置</em></p>

单击Web网管页面右上角的日志图标按钮（如图1-5所示），界面会弹出日志消息弹窗，显示设备相关日志信息，如图1-6所示。

该功能可实现设备日志的容量配置、清除和下载操作，默认日志最大容量为20条。
![日志消息显示](/images/006.png)   
 
<p align="center"><em>图1-6 日志消息显示</em></p>

## 保存配置
:::tip ⚠️<strong>注意</strong> 
- 在页面上配置完所有项目后，请务必保存配置，否则未保存的配置信息会因为重启等操作而丢失。 
:::

单击WEB网管页面右上角的保存图标按钮（如图1-7所示），即可将当前的配置保存到配置文件中，配置在重启或掉电重启后依然有效。
![保存配置](/images/007.png)   
 
<p align="center"><em>图1-7 保存配置</em></p>

保存配置有两种情况：

（1）在当前配置界面单击【确定】或【应用】按钮，即把当前的配置保存到内存中。此时的保存并不是把配置项真正的保存到配置文件中，若是此时交换机出现断电等故障时，则界面的配置失效。

（2） 单击导航栏下方的【保存】按钮，则系统会自动的把所有的页面的配置保存到配置文件中。

## 重启设备
:::tip ⚠️<strong>注意</strong> 
- 重启设备前请务必保存配置，否则重启后，未保存的配置将会全部丢失。 
- 设备重启后，用户需重新登录设备。
::: 

步骤1：单击WEB网管页面右上角的用户图标按钮（如图1-8所示），在弹出的对话框里单击“重启”按钮。
![重启界面](/images/008.png)   
  
<p align="center"><em>图1-8 重启界面</em></p>

步骤2：单击【确定】按钮或者等待倒计时结束，设备进入重启状态。设备重启需要一定时间，请耐心等待。
![重启等待界面](/images/009.png)   
 
<p align="center"><em>图1-9 重启等待界面</em></p>

## WEB管理页面布局介绍

如图1-10所示，WEB管理主页面共分为：导航栏、辅助区、配置区三部分，各部分功能描述如表1-1所示。

|  <div style="width: 80px;">配置项</div>  | 说明 |
|  --- |  --- |
| 导航栏 | 以导航树的形式组织设备的Web网管功能菜单，用户在导航栏中可以方便的选择功能菜单，选择结果显示在配置区中 |
| 辅助区 | 用于搜索、语言切换、告警信息提示、保存、退出、重启等操作。 |
| 配置区 | 用户进行配置和查看的区域 |
<p align="center"><em>表1-1 WEB布局说明</em></p>

![WEB管理主页面](/images/010.png)   
 
<p align="center"><em>图1-10 Web管理主页面</em></p>

| <div style="width: 180px;">（1）导航栏 </div>  | <div style="width: 180px;">（2）辅助区  </div>  | <div style="width: 180px;">（3）配置区  </div>  |
| --- | --- | --- |

## WEB管理功能介绍

Web网管功能的具体说明如表1-2所示。

<table>
    <tr>
    <th colspan="3">菜单/页签</th>
    <th>功能说明</th> 
    </tr>
    <tr>
    <td rowspan="14">监控</td>
    <td colspan="2">概况</td> 
    <td>显示设备的MAC地址，序列号，软硬件版本， CPU占用率，运行时间等状态，显示端口的link状态，端口的流量</td>  
    </tr>
    <tr>
    <td colspan="2">端口统计</td> 
    <td>显示端口的计数</td>
    </tr>
    <tr>
    <td colspan="2">环路保护</td>
    <td>显示设备的环路保护状态</td>
    </tr>
    <tr>
    <td colspan="2">安全</td>
    <td>显示设备的安全类相关状态</td>
    </tr>
    <tr>
    <td colspan="2">PoE状态</td>
    <td>显示设备PoE供电状态</td>
    </tr>
    <tr>
    <td colspan="2">串口服务状态</td>
    <td>显示设备的串口服务器工作状态</td>
    </tr>
    <tr>
    <td colspan="2">LLDP状态</td>
    <td>显示设备的LLDP工作状态</td>
    </tr>
    <tr>
    <td colspan="2">IGMP Snooping状态</td>
    <td>显示设备IGMP Snooping状态</td>
    </tr>
    <tr>
    <td colspan="2">DHCP Snooping状态</td>
    <td>显示设备DHCP Snooping状态</td>
    </tr>
    <tr>
    <td colspan="2">QinQ信息</td>
    <td>显示设备QinQ状态</td>
    </tr>
    <tr>
    <td colspan="2">环路检测状态</td>
    <td>显示端口环路状态</td>
    </tr>
    <tr>
    <td colspan="2">MAC地址表</td>
    <td>显示MAC地址表信息</td>
    </tr>
    <tr>
    <td colspan="2">ARP/邻居信息</td>
    <td>显示端口ARP/邻居信息</td>
    </tr>
    <tr>
    <td colspan="2">NTP状态</td>
    <td>显示设备NTP信息</td>
    </tr>
    <tr>
    <td rowspan="18">配置</td>
    <td colspan="2">VLAN</td>
    <td>新建、修改、删除VLAN，配置端口属性、VLAN归属</td> 
    </tr>
    <tr>
    <td rowspan="5">端口</td>
    <td>端口配置</td>
    <td>设置端口的相关属性</td>
    </tr>
    <tr>
    <td>端口扩展</td>
    <td>设置端口限速、风暴抑制、端口隔离</td>
    </tr>
    <tr>
    <td>端口镜像</td>
    <td>设置/删除端口的镜像</td>
    </tr>
    <tr>
    <td>端口聚合</td>
    <td>设置/删除聚合口</td>
    </tr>
    <tr>
    <td>端口违例</td>
    <td>设置端口违例规则</td>
    </tr>
    <tr>
    <td colspan="2">生成树</td>
    <td>设置STP、RSTP、MSTP功能</td>
    </tr>
    <tr>
    <td colspan="2">ERPS</td>
    <td>设置ERPS单环，相切环，相交环</td>
    </tr>
    <tr>
    <td colspan="2">PoE</td>
    <td>设置PoE功率，非标模式，使能/关闭PoE端口供电</td>
    </tr>
    <tr>
    <td rowspan="5">安全</td>
    <td>端口安全</td>
    <td>配置、删除端口安全功能</td>
    </tr>
    <tr>
    <td>IP Source Guard</td>
    <td>配置、删除IP Source Guard 功能</td>
    </tr>
    <tr>
    <td>Dot1x</td>
    <td>配置802.1X认证</td>
    </tr>
    <tr>
    <td>MAC认证</td>
    <td>配置MAC认证概况</td>
    </tr>
    <tr>
    <td>RADIUS</td>
    <td>配置RADIUS服务器</td>
    </tr>
    <tr>
    <td rowspan="2">控制</td>
    <td>串口服务器</td>
    <td>配置串口服务器</td>
    </tr>
    <tr>
    <td>IO控制</td>
    <td>配置DI，DO</td>
    </tr>
    <tr>
    <td colspan="2">环路检测</td>
    <td>配置端口环路检测功能</td>
    </tr>
    <tr>
    <td colspan="2">DNS</td>
    <td>配置设备DNS功能</td>
    </tr>
    <tr>
    <td rowspan="11">高级</td>
    <td rowspan="6">二层</td>
    </tr>
    <tr>
    <td>LLDP配置</td>
    <td>配置、删除设备的LLDP功能</td>
    </tr>
    <tr>
    <td>IGMP Snooping配置</td>
    <td>显示/配置IGMP Snooping</td>
    </tr>
    <tr>
    <td>MAC配置</td>
    <td>配置设备的MAC地址管理模式</td>
    </tr>
    <tr>
    <td>DHCP Snooping配置</td>
    <td>配置设备的DHCP Snooping功能</td>
    </tr>
    <tr>
    <td>QinQ配置</td>
    <td>配置设备的QinQ功能</td>
    </tr>
    <tr>
    <td rowspan="3">安全</td>
    <td>ACL配置</td>
    <td>配置设备的ACL功能</td>
    </tr>
    <tr>
    <td>QoS配置</td>
    <td>配置设备的QoS功能</td>
    </tr>
    <tr>
    <td>DoS配置</td>
    <td>配置设备的DoS功能</td>
    </tr>
    <tr>
    <td rowspan="2">三层</td>
    <td>ARP/邻居配置</td>
    <td>配置ARP/邻居功能</td>
    </tr>
    <tr>
    <td>静态路由</td>
    <td>配置静态路由</td>
    </tr>
    <tr>
    <td rowspan="6">维护</td>
    <td colspan="2">系统配置</td> 
    <td>设置设备的电子标签、开启/关闭Telnet、 SSH、HTTP、HTTPS功能，设置管理IP</td>
    </tr>
    <tr>
    <td colspan="2">文件管理</td>
    <td>固件升级管理，配置管理，证书管理，页面包管理</td>
    </tr>
    <tr>
    <td colspan="2">用户管理</td>
    <td>创建/删除用户，设置用户密码</td>
    </tr>
    <tr>
    <td colspan="2">时间管理</td>
    <td>显示/设置系统当前日期和时间</td>
    </tr>
    <tr>
    <td colspan="2">SNMP</td>
    <td>新建、修改、删除SNMP配置</td>
    </tr>
    <tr>
    <td colspan="2">Syslog服务器</td>
    <td>新建、编辑、删除Syslog服务器</td>
    </tr>
    <tr>
    <td rowspan="5">诊断</td>
    <td colspan="2">网络工具</td> 
    <td>执行ping/trace route操作并显示执行结果</td>
    </tr>
    <tr>
    <td colspan="2">光模块信息</td>
    <td>查看光模块信息，如厂家信息，序列号，光功率等</td>
    </tr>
    <tr>
    <td colspan="2">一键收集</td>
    <td>生成诊断信息文件，并将文件打开查看或保存到本地主机</td>
    </tr>
    <tr>
    <td colspan="2">掉电告警</td>
    <td>开启/关闭dying gasp掉电告警功能</td>
    </tr>
    <tr>
    <td colspan="2">线缆检测</td>
    <td>检测电口线缆状态</td>
    </tr> 
</table>
<p align="center"><em>表1-2 WEB网管功能说明</em></p>