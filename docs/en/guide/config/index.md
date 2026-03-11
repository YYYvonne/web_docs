# Configuration


## VLAN


### Introduction

Ethernet is a network technology based on the Carrier Sense Multiple Access/Collision Detect (CSMA/CD) mechanism. As the medium is shared, collisions and excessive broadcasts are common on an Ethernet. To address the issue, virtual LAN (VLAN) was introduced. The idea is to break a LAN down into separate VLANs, that is, Layer 2 broadcast domains whereby frames are switched between ports assigned to the same VLAN. VLANs are isolated from each other at Layer 2. A VLAN is a bridging domain, and ll broadcast traffic is contained within it, as shown in Figure 3-1.

<p align="center"><em>Figure 3-1 A VLAN diagram</em></p>

A VLAN is logically divided on an organizational basis rather than on a physical basis. For example, all workstations and servers used by a particular work group can be connected to the same LAN, regardless of their physical locations. VLAN technology delivers the following benefits:
• Confining broadcast traffic within individual VLANs. This reduces bandwidth waste and improves network performance.
• Improving LAN security. By assigning user groups to different VLANs, you can isolate them at Layer 2. For hosts in different VLANs to communicate, routers or Layer 3 switches are required.
• Flexible virtual work group creation. As users from the same work group can be assigned to the same VLAN regardless of their physical locations, network construction and maintenance is much easier and more flexible.
The user can create VLANs based on:
• Port
• MAC address
• Protocol
• IP subnet
• Policy
• Other criteria
Because the Web interface is available only for port-based VLANs, this chapter introduces only port-based VLANs.
3.1.1.1 VLAN Mode
Depending on the tag handling mode, the VLAN Mode of a port can be one of the following three:
• Access ：
An access port belongs to only one VLAN and usually connects to a user device.
• Trunk ：
A trunk port can join multiple VLANs to receive and send traffic for them. It usually connects to a network device.
• Hybrid ：
A hybrid port can join multiple VLANs to receive and send traffic for them. It can connect either a user device or a network device.
A hybrid port is different from a trunk port in that:
•  A hybrid port allows traffic of multiple VLANs to pass through untagged.
•  A trunk port allows only traffic of the default VLAN to pass through untagged.
3.1.1.2 Port Link Type
By default, VLAN 1 is the default VLAN for all ports. However, you can change the default VLAN for a port as required. When doing that, follow these guidelines:
• Because an access port can join only one VLAN, its default VLAN is the VLAN to which it belongs and cannot be configured.
• Because a trunk or hybrid port can join multiple VLANs, you can configure a default VLAN for the port.
3.1.1.3 Frame Handling Methods
Table 3-1 A port configured with a default VLAN handles a frame as follows:
Port type
Actions (in the inbound direction)
Actions (in the outbound direction)
Untagged frame
Tagged frame
Access
Tag the frame with the default VLAN tag.
- Receive the frame if its VLAN ID is the same as the default VLAN ID
- Drop the frame if its VLAN ID is different from the default VLAN ID.
Remove the default VLAN tag and send the frame.
Trunk
Check whether the default VLAN is carried on the port：
- If yes, tag the frame with the default VLAN tag.
- If not, drop the frame.
- Receive the frame if its VLAN is carried on the port.
- Drop the frame if its VLAN is not carried on the port.
- Remove the tag and send the frame if the frame Carries the default VLAN tag.
- Send the frame without removing the tag if its VLAN is carried on the port but is different from the default one.
Hybrid
Send the frame if its VLAN is carried on the port. The frame is sent with the VLAN tag removed or intact depending on your configuration.

### Configure VLAN

3.1.2.1 Creating VLAN
1. Select Configuration > VLAN in the navigation area. The system automatically enters the VLAN page as shown in Figure 3-2. Table 3-2 describes the configuration items of creating a VLAN.

<p align="center"><em>Figure 3-2 VLAN configuration page</em></p>

Table 3-2 VLAN configuration items
Item
Description
ID
This field displays the ID of the VLAN
Name
By default, the description string of a VLAN is its VLAN ID, such as VLAN 0002.
Type
Display the type of VLAN
Tagged Members
Indicate that the port sends the traffic of the VLAN without removing the VLAN tag.
Untagged Members
Indicate that the port sends the traffic of the VLAN with removing the VLAN tag.
Edit
Click to enter the VLAN editing page
Add
Click to enter the VLAN adding page
Delete
Select the VLAN ID, click to delete
2. Click +Add button to enter the page for creating a VLAN, as shown in Figure 3-3.
3. Type VLAN number into the ID box.
4. Enter a VLAN name.
5. Click OK to complete the configuration and click Save in the auxiliary area to save such configuration.
6. When you need to configure the VLAN port member, click the Edit button, select the port member required to join the VLAN in the port panel, and click the OK button to complete the operation.

<p align="center"><em>Figure 3-3 Create VLAN</em></p>

3.1.2.2 Configure Port
1. Select Configuration > VLAN in the navigation area to enter the VLAN page as shown in Figure 3-4. Table 3-3 describes the configuration items of configuring a port.

<p align="center"><em>Figure 3-4 Port configuration page</em></p>

2. Click Batch Edit button below Port Configuration to enter the Port Configuration page, as shown in Figure 3-5. Table 3-3 describes the configuration items of configuring a VLAN.
Table3-3 The description of the trunk configuration
Item
Description
Mode
Access
Set the port’s VLAN Mode to access
Trunk
Set the port’s VLAN Mode to trunk
Hybrid
Set the port’s VLAN Mode to hybrid
PVID
Set the port’s default VLAN ID, only exist in access mode.
The trunk ports at the two ends of a link must have the same PVID. Otherwise, the link cannot properly transmit packets
Native VLAN
VLAN（Native VLAN）, only exist in Trunk mode.
Allow VLANs
Select the VLANs that are allowed through the port.

<p align="center"><em>Figure 3-5 Interface configuration page</em></p>

3. Select the VLAN Mode, type VLAN number in PVID and Allow VLANs box, click OK button to complete the configuration.
4. Click the Save in the auxiliary area to save the configuration.

## Port


### Port Configuration

The user can use the interface management feature to view interface information, create/remove logical interfaces, change interface status, and reset interface parameters, as shown in Figure 3-6.

<p align="center"><em>Figure 3-6 Port configuration page</em></p>

Configuring Interface Management
1. Select Configuration > Port > Port Configuration in the navigation area to enter the Port Configuration page as shown in Figure 3-6.
2. Select the ports to be configured, click Edit button to enter the page for configuring an interface, as shown in Figure 3-7. Table 3-4 describes the configuration items of configuring an interface.

<p align="center"><em>Figure 3-7 Port configuration page</em></p>

Table 3-4 Configuration items of ports
Item
Description
Admin State
Shutdown/no shutdown the port.
Description
Set the description of a logical interface.
Port Mode
Set the port’s vlan mode, Access or Trunk
PVID/Native VLAN
Set the port’s PVID or Native VLAN.
Medium type
Set the medium type of the Combo ports
- RJ45：the mode of port is 10/100/1000BASE-T
- SFP：the mode of port is 1000BASE-X
Note: only for combo ports.
Speed(copper)
Set the port’s transmission rate:
- 10: indicate 10 Mbps
- 100M：indicate 100 Mbps
- 1000M：indicate 1000 Mbps
- Auto: indicate auto-negotiation
Note: only for copper ports.
Duplex(copper)
Set the port’s duplex mode:
- AUTO：indicate auto-negotiation
- FULL：indicate full duplex
- HALF：indicate half duplex
Note: only for copper ports.
Speed(fiber)
Set the port’s mode
- 100BASE-FX：indicate the port mode is 100BASE-FX.
- 1000BASE-X：indicate the port mode is 1000BASE-X.
- 2500BASE-X：indicate the port mode is 2.5G BASE-X.
- 10G BASE-X: indicate the port mode is 10G BASE-X.
Note: only for fiber ports.
Autoneg(fiber)
Enable or disable port’s autoneg. Display
The auto-negotiation function needs to be enabled or disabled at the same
time as the peer end, otherwise a link failure will occur.
Note: only for fiber ports.
Flow control
Enable or disable port’s Flow control.
MTU
Allow or forbid jumbo frames to pass through the port. Default length of packets is 46-1500 bytes.
Admin Shutdown
Shutdown/no shutdown the port.

### Port Extension

3.2.2.1 Rate Limiting
Port-based rate limiting allows the user to limit the speed at which network traffic is sent or received by a device that is connected to a port on the switch. Unlike 802.1p Quality of Service (QoS), port-based rate limiting does not prioritize information based on type. Rate limiting simply means that the switch will slow down traffic on a port to keep it from exceeding the limit that you set. If you set the rate limit on a port too low, you might see degraded video stream quality, sluggish response times during online activity, and other problems.
The best use of rate limiting is to keep low-priority devices that are connected to the switch from using too much of the bandwidth and slowing down your other connected devices. A combination of rate limiting and QoS can help the user maximize your network’s efficiency and prioritize devices and activities.
Configure Port Ratelimit
1. Select Configuration > Port > Port Extension in the navigation area to enter the Port Ratelimit module as shown in Figure 3-8.
2. Click the Batch Edit button below Rate Limiting to enter the Configure Rate Limiting page, as shown in Figure 3-9, and type the parameter in the modal. Table 3-5 describes the items of configuring such a function.
3. Click the OK button.
4. Click the Save button in the auxiliary area.

<p align="center"><em>Figure 3-8 Port ratelimit page</em></p>


<p align="center"><em>Figure 3-9 Port ratelimit configuration</em></p>


:::tip NOTE
NOTE:CBS embodies a rate-limit feature for policing traffic. When policing traffic with CBS, here recommends the burst value 4 times of the limit value. If the burst values are too low, then the achieved rate is often much lower than the configured rate. NOTENOTE:CBS embodies a rate-limit feature for policing traffic. When policing traffic with CBS, here recommends the burst value 4 times of the limit value. If the burst values are too low, then the achieved rate is often much lower than the configured rate.
:::


:::tip NOTE
:
:::


:::tip NOTE
CBS embodies a rate-limit feature for policing traffic. When policing traffic with CBS, here recommends the burst value 4 times of the limit value. If the burst values are too low, then the achieved rate is often much lower than the configured rate.
:::


:::tip NOTE
:
:::


:::tip NOTE
CBS embodies a rate-limit feature for policing traffic. When policing traffic with CBS, here recommends the burst value 4 times of the limit value. If the burst values are too low, then the achieved rate is often much lower than the configured rate.
:::

Table 3-5 Port ratelimit configuration items
Item
Description
In CIR (kbps)
Specify the rate limit in the inbound direction (KBits).
In CBS (KB)
Specify the burst size in the inbound direction (KBits).
Out CIR (kbps)
Specify the rate limit in the outbound direction (KBits).
Out CBS (KB)
Specify the burst size in the outbound direction (KBits).
3.2.2.2 Storm Control
A traffic storm occurs when a large amount of broadcast, multicast, or unicast packets congest a network.
The user can use the storm suppression function to limit the size of a particular type of traffic (currently broadcast, multicast and unknown unicast traffic) on a per-interface basis in Ethernet port view or port group view.
In the port or port group view, the user set the maximum broadcast, multicast or unknown unicast traffic allowed to pass through a port or each port in a group. When the broadcast, multicast, or unknown unicast traffic on the interface exceeds the threshold, the system discards packets until the traffic drops below the threshold.
Configure the Storm Control
1. Select Configuration > Port > Port Extension in the navigation area to enter the Storm Control section as shown in Figure 3-10.

<p align="center"><em>Figure 3-10 Strom Control page</em></p>

2. Select the type, input the Percentage, and select the port in the port panel, as shown in Figure 3-11. Table 3-6 describes the items of configuring storm control.
3. Click the OK button to complete the configuration.
4. Click the Save in the auxiliary area to save such configuration.

<p align="center"><em>Figure 3-11 Storm control configuration</em></p>

Table 3-6 Items of the storm control
Item
Description
Type
Disabled
Disable storm control
Broadcast
Select the parameter used in broadcast suppression and set its
value in the percentage box.
Multicast
Select the parameter used in multicast suppression and set its
value in the percentage box.
Unicast
Select the parameter used in unicast suppression and set its
value in the percentage box.
Multicast-broadcast
Select the parameter used in multicast and broadcast
suppression and set its value in the percentage box.
Unicast-broadcast
Select the parameter used in unicast and broadcast,
suppression and set its value in the percentage box.
All
Select the parameter used in unicast and unicast,
broadcast, suppression and set its value in the percentage box.
Percentage (%)
Indicate the maximum percentage of traffic to the total
transmission capability of an Ethernet interface.
3.2.2.3 Isolation
Usually, Layer 2 traffic isolation is achieved by assigning ports to different VLANs. To save VLAN resources, port isolation is introduced to isolate ports within a VLAN, allowing for great flexibility and security.
1. The switch support multiple isolation groups which can be configured manually. These devices are referred to as multiple-isolation-group devices.
2. There is no restriction on the number of ports assigned to an isolation group.
3. Within the same VLAN, Layer 2 data transmission between ports within and outside the isolation group is supported.
Configure an Isolation Group
1. Select Configuration > Port > Port Extension in the navigation area to enter the Port Isolate section as shown in Figure 3-12.
2. Select the port to be isolated, click OK button.
3. Click Save in the auxiliary area.

<p align="center"><em>Figure 3-12 Port isolate modal</em></p>


### Port Mirroring

Port mirroring (SPAN) is to copy the packets passing through one or multiple ports (called source interface) to a port (called the destination interface) on the local device. The source interface is connected with a monitoring device. By analyzing on the monitoring device, the packets mirrored to the destination interface, the user can monitor the network and troubleshoot possible network problems.
Figure3-13 A port mirroring implementation
The Remote Switch Port Analyzer (RSPAN) is an extension of the SPAN. Between the remote mirror source port and the destination port, the user can span multiple network devices. The principle of RSPAN is that the original device, the intermediate one and the destination one create a Remote VLAN to which all the ports participating in the session are added. The mirror message is broadcast in the Remote VLAN so that it is transmitted from the source port of the source device to the destination port of the destination device, as shown in Figure 3-14.
Figure3-14 Remote port mirror
SPAN/RSPAN does not affect the packet exchange of the source port but only copies all the input and output packets of the source port to the destination one. When the mirror traffic of the source port surpasses the bandwidth of the destination one, for instance, the 100Mbps destination port monitors the traffic of the 1000Mbps source port which may cause the message to be discarded.
SPAN/RSPAN based on session management in where the user can configure the source port and the destination one. In one session, there can only be one destination port, while multiple source ports can be configured simultaneously.
Create a Mirroring Group

:::tip NOTE
1. Select Configuration > Port > Port Mirroring in the navigation area to enter the Port mirror page as shown in Figure 3-15.
:::


<p align="center"><em>Figure 3-15 Port mirror page</em></p>


:::tip NOTE
2. Click the +Add button for the corresponding ID to enter the Port Mirroring Configuration modal as shown in Figure 3-16 and the specific parameters are described in Table 3-7.
:::

Table 3-7 Configuration items of creating a mirroring group
Item
Description
ID
ID of the mirroring group to be created
Description
The mirror group descriptors that have created
Mode
The mode of mirror group, default to local mirror
Source Rx Interfaces
Select the mirror source rx port, allowing multiple source rx ports to exist simultaneously
Source Tx Interfaces
Select the mirror source tx port, allowing multiple source ts ports to exist simultaneously
Source VLAN
Create/delete SPAN source VLAN which supports range mode. Source VLAN can only support one session and it can’t coexist with source port.
Destination Interfaces
Select the mirroring destination port, and only one destination port is allowed for each session
Switch
Whether the destination port of SPAN is involved in the exchange
Remote VLAN
Create/delete RSPAN source VLAN which supports range mode. Source VLAN can only support one session and it can’t coexist with source port.

<p align="center"><em>Figure 3-16 Port mirroring page</em></p>

- Fill in the parameters according to the requirements, and click the OK button to complete the configuration.
- Click Save in the auxiliary area.
A Configuration Example
Case requirement: Using port gigabitEthernet0/8 of remote device SWITCH-C to monitor the rx message of the port gigabitEthernet0/1 in local device SWITCH-A and the Remote VLAN is 1000, in the meantime, the intermediate device supports VLAN 1000 message broadcast. The name of this monitoring session is set to TRAFFIC_MONITOR_REMOTE. Such network is shown in below Figure 3-17.

<p align="center"><em>Figure 3-17 Network topology</em></p>

Switch A Configuration:

:::tip NOTE
Step 1: Select Configuration > Port > Port Mirroring in the navigation area to enter the Port Mirror page.
:::


:::tip NOTE
Step 2: Click the Edit button corresponding to session 1, fill in the parameters as Figure 3-18, then click OK.
:::


<p align="center"><em>Figure 3-18 Port mirroring configuration page in Switch A</em></p>


:::tip NOTE
Step 3: Click Save button in the auxiliary area.
:::

Switch B Configuration:

:::tip NOTE
Step 1: Select Configuration > VLAN in the navigation area to enter the VLAN Configuration page.
:::


:::tip NOTE
Step 2: Click the +Add button under VLAN Configuration to configure gigabitEthernet0/1 and gigabitEthernet0/2 as trunk port whose VLAN is 1000, as shown in Figure 3-19.
:::


:::tip NOTE
Step 3: Click Save button in the auxiliary area.
:::


<p align="center"><em>Figure 3-19 VLAN configuration page in Switch B</em></p>

Switch C Configuration:

:::tip NOTE
Step 1: Select Configuration > VLAN in the navigation area to enter the VLAN Configuration page.
:::


:::tip NOTE
Step 2: Click the +Add button under VLAN Configuration to create VLAN 1000.
:::


:::tip NOTE
Step 3: As shown in Figure 3-20, configure the gigabitEthernet0/8 as the access port and the port VLAN as 1000.
:::


<p align="center"><em>Figure 3-20 VLAN configuration page in Switch C</em></p>

Step 4: Select Configuration > Port > Port Mirroring in the navigation area to enter the Port Mirror page.

:::tip NOTE
Step 5: Click the Edit button corresponding to session 1, fill in the parameters as Figure 3-21, then click OK.
:::


:::tip NOTE
Step 6: Click Save button in the auxiliary area.
:::


<p align="center"><em>Figure 3-21 Port mirroring configuration page in Switch C</em></p>


### Port Aggregation

3.2.4.1 Overview
Link Aggregation
Ethernet link aggregation, most often simply called link aggregation, aggregates multiple physical Ethernet links into one logical link to increase link bandwidth beyond the limits of any one single link. This logical link is called an aggregate link. It allows for link redundancy because the member physical links dynamically back up one another.
As shown in Figure 3-22, Switch A and Switch B are connected with three physical Ethernet links. These physical Ethernet links are aggregated into an aggregate link, Link aggregation 1. The bandwidth of this aggregate link can be as high as the total bandwidth of these three physical Ethernet links.

<p align="center"><em>Figure 3-22 Port isolate page</em></p>

LACP
The IEEE 802.3ad Link Aggregation Control Protocol (LACP) enables dynamic aggregation of physical links. It uses link aggregation control protocol data units (LACPDUs) for exchanging aggregation information between LACP enabled devices.
There are two link aggregation modes: dynamic and static. Dynamic link aggregation uses LACP while static link aggregation does not. A link aggregation group operating in static mode is called a static link aggregation group, while a link aggregation group operating in dynamic mode is called a dynamic link aggregation group.
3.2.4.2 Configure an Aggregation Group
Configuration Procedure:
1. Select Configuration > Port > Port Aggregation in the navigation area to enter the Link Aggregation page as shown in Figure 3-23. The description of the link aggregation is described in Table 3-8.

<p align="center"><em>Figure 3-23 Global configuration page</em></p>

Table 3-8 Description of global configuration items
Item
Description
Load balancing method
Dst-mac
Equalize according to the destination MAC address
Src-mac
Equalize according to the source MAC address
Src-dst-mac
Equalize according to the destination MAC address and source MAC address
Dst-ip
Equalize according to the destination IP address
Srt-ip
Equalize according to the source IP address
Src-dst-ip
Equalize according to the destination IP address and source IP address
Dst-port
Equalize according to the L4 TCP/UDP destination port number
Src-port
Equalize according to the L4 TCP/UDP source port number
Src-dst-port
Equalize according to the L4 TCP/UDP destination port number and source port number
2. In the Aggregate Ports Configure page, click +Add button to enter Port Configuration page, as shown in Figure 3-24. The description of the link aggregation is described in Table 3-9.
Table 3-9 Description of aggregation member
Item
Description
Port
Configuration
ID
The ID of the Aggregation Member
Type
Manual
Manual mode
Active
In this mode, the ports send LACP packets at regular
intervals to the partner ports
Passive
In this mode, the ports do not send LACP packets until the
partner port sends LACP packets.
After receiving the LACP packets from the partner port, the
ports send LACP packets to the partner port.

<p align="center"><em>Figure 3-24 Aggregation port configuration page</em></p>

Select the type of aggregation, text the ID box, select the port in the port panel, click OK button to complete the configuration.
After the configuration is completed, the aggregation port created is displayed on the Aggregation Port page, as shown in Figure 3-25. The description of Aggregation Port is described in Table 3-10.

<p align="center"><em>Figure 3-25 Aggregation port page</em></p>

Table 3-10 Description of aggregation port
Item
Description
Aggregation
Port
ID
The ID of the Aggregation Port
Name
The name of the Aggregation Port
Type
The mode of the Aggregation Port
Member
The member ports of the Aggregation Port

### Port Violation

During the use of the device, active or passive violations may occur on the switch port, such as port security violations, port flapping violations, port loop detection violations, etc. The port violation module is used to configure the recovery enablement and recovery time of the violating port, and displays the port's violation behavior.
Configuration Procedure:
Select Configuration > Port > Port Violation in the navigation bar to enter the Port Violation Global Configuration interface, check the service that needs to be violated, turn on the automatic recovery button and configure the recovery time, click the Apply button to complete the configuration, such as Figure 3-26 is shown, and the global configuration parameters are shown in Table 3-11.

<p align="center"><em>Figure 3-26 Global configuration page</em></p>

Table 3-11 Description of global configuration
Item
Description
Service
BPDU Guard
Violations caused by port BPDU protection
Port Up/Down
Violations caused by frequent port Up/Down
Port Security
Violations caused by illegal port security
Loop Detect
Violations caused by a loop in the device downstream of the port
Auto recovery
Enable/disable automatic recovery of violating ports
Timeout interval
Configure the recovery time of the violating port, in seconds
When you need to manually restore the violating port, select the port that needs to be restored and click the Reset button to restore the port function.

<p align="center"><em>Figure 3-27 Port state</em></p>


## Spanning Tree


### Overview

Spanning Tree Protocol (STP) is a Layer-2 management protocol. It cannot only selectively block redundant links to eliminate Layer-2 loops but also can back up links.
Like many protocols, STP is continuously updated from Rapid Spanning Tree Protocol (RSTP) to Multiple Spanning Tree Protocol (MSTP) as the network develops.
For the Layer-2 Ethernet, only one active link can exist between two local area networks (LANs). Otherwise, a broadcast storm will occur. To enhance the reliability of a LAN, it is necessary to establish a redundant link and keep some paths in backup state. If the network is faulty and a link fails, you must switch the redundant link to the active state. STP can automatically activate the redundant link without any manual operations. STP enables devices on a LAN to:
Discover and start the best tree topology on the LAN.
Troubleshoot a fault and automatically update the network topology so that the possible best tree topology is always selected.
The LAN topology is automatically calculated based on a set of bridge parameters configured by the administrator. The best topology tree can be obtained by properly configuring these parameters.
RSTP is completely compatible with 802.1D STP. Like traditional STP, RSTP provides loop-free and redundancy services. It is characterized by rapid speed. If all bridges in a LAN support RSTP and are properly configured by the administrator, it takes less than 1 second (about 50 seconds if traditional STP is used) to re-generate a topology tree after the network topology changes.
STP and RSTP have the following defects:
STP migration is slow. Even on point-to-point links or edge ports, it still takes two times of the forward delay for ports to switch to the forwarding state.
RSTP can rapidly converge but has the same defect with STP:  Since all VLANs in a LAN share the same spanning tree, packets of all VLANs are forwarded along this spanning tree. Therefore, redundant links cannot be blocked according to specific VLANs and data traffic cannot be balanced among VLANs.
MSTP, defined by the IEEE in 802.1s, resolves defects of STP and RSTP. It cannot only rapidly converge but also can enable traffic of different VLANs to be forwarded along respective paths, thereby providing a better load balancing mechanism for redundant links.
In general, STP/RSTP works based on ports while MSTP works based on instances. An instance is a set of multiple VLANs. Binding multiple VLANs to one instance can reduce the communication overhead and resource utilization.

### Spanning Tree Configuring

Global Configuration of the Spanning Tree
Select Configuration > Spanning Tree in the navigation area to enter the Global Configuration section, as shown in Figure 3-28. Table 3-12 describes the Spanning Tree Global Configuration items.

<p align="center"><em>Figure 3-28 Spanning tree global configuration</em></p>

Table 3-12 Spanning tree global configuration items
Item
Description
Global
Configuration
Mode
Set the working mode of STP, including STP, RSTP, and MSTP.
STP: In STP mode, each port of the device sends STP BPDUs.
RSTP: In RSTP mode, each port of the device will send out RSTP BPDUs. When it is connected to the device running STP, the port will automatically migrate to STP mode.
MSTP: In MSTP mode, each port of the device sends MSTP BPDUs. When it is connected to the device running STP, the port is automatically migrated to work in STP mode.
State
Enable STP.
Hello Time(s)
Hello timer interval
Priority
Bridge priority
Forward Delay(s)
Set the delay time before an interface change to forwarding
Transmit Hold Count
Maximum number of BPDUs sent by the bridge per second
Max Age(s)
Set the maximum duration that messages are saved in the device
Configure the Instance
Select Configuration > Spanning Tree in the navigation area to enter the Instance Configuration part, as shown in Figure 3-29. Table 3-13 describes the instance configuration items.

<p align="center"><em>Figure 3-29 Spanning tree instance configuration</em></p>

Table 3-13 Spanning tree instance items
Item
Description
Instance
Configuration
ID
Instance ID
VLAN List
Instance associated VLAN list
Priority
Bridge priority in this instance
Action
Click to delete this entry
Configure the Ports
Select Configuration > Spanning Tree in the navigation area to enter the Port Configuration page, as shown in Figure 3-30. Table 3-14 describes the port configuration items.

<p align="center"><em>Figure 3-30 Spanning tree port configuration</em></p>

Table 3-14 Spanning tree port configuration items
Item
Description
Port Configuration
Name
Interface name
State
STP status
Path Cost
Configure interface path cost
Link Type
Configure interface link type
Root Guard
Configure the interface to enable root protection.
Auto Edge
Configure the interface to automatically recognize the function of the edge port.
Edge Port
Configure the interface as an edge port.
Port Fast
Configure the interface as a fast port.
BPDU Filter
Configure the interface to enable BPDU filtering.
BPDU Guard
Configure the interface to enable BPDU protection.
Instance/Priority/TCN restrict
Configure the instance, Priority, and TCN restrict.

## ERPS


### Overview

The ITU-T G.8032 ERPS feature implements protection switching mechanisms for the Ethernet layer ring topology. This feature uses the G.8032 Ethernet Ring Protection (ERP) protocol, defined in ITU-T G.8032, to provide protection for Ethernet traffic in a ring topology, while ensuring that no loops are within the ring at the Ethernet layer. The loops are prevented by blocking traffic on either a predetermined link or a failed link.

<p align="center"><em>Figure 3-31 Network topology</em></p>

Initial State
As the following figure, the devices on the ring have been configured, and all the link status is up.
The RPL owner interface will be blocked by ERPS protocol to prevent loops. If a RPL neighbor interface is configured, it will also be blocked. Other interfaces are under the forwarding state, can forward the traffic.
Link Failure
When there is a link failure between Switch D and Switch E, the two interfaces on the link will be blocked by ERPS protocol, the RPL owner interface will be forwarded.

<p align="center"><em>Figure 3-32 Link failure</em></p>

Link Restores
When the failure link is restored. When the ERPS ring is configured to revertive mode, the RPL owner interface will be blocked by ERPS protocol, the restored link will be configured to forwarding state to forward traffic.

<p align="center"><em>Figure 3-33 Link restores</em></p>

Single-Ring：
Only one ring in a network topology needs to be protected.
In Figure 3-34, the network topology has only one ring, only one ring protection link (RPL) owner node, and only one RPL. All nodes must belong to the same ring automatic protection switching (R-APS) virtual local area network (VLAN).
All devices in the ring network must support ERPS.
The links between devices in the ring network must be directly connected, and there must be no intermediate devices.

<p align="center"><em>Figure 3-34 ERPS single ring</em></p>

Tangent Rings：
The two rings in a network topology that share one device need to be protected.
In Figure 3-35, the two rings in the network topology share one device. Each ring has only one PRL owner node and only one RPL. The two rings belong to different R-APS VLANs.
All devices in the ring network need to support ERPS.
The links between devices in the ring network must be directly connected, and there must be no intermediate devices.

<p align="center"><em>Figure 3-35 ERPS tangent rings</em></p>

Intersecting Rings：
Two or more rings in a network topology share one link. (Each link between intersecting nodes must be a direct link without any intermediate node.)
In Figure 3-36, four rings exist in the network topology. Each ring has only one PRL owner node and only one RPL. The four rings belong to different R-APS VLANs.
All devices in the ring network need to support ERPS.
The links between devices in the ring network must be directly connected, and there must be no intermediate devices.

<p align="center"><em>Figure 3-36 ERPS intersecting rings</em></p>


### Configure the ERPS

Ring Configuration
Select Configuration > ERPS > Ring Configuration in the navigation area to enter the ERPS Ring Configuration page as shown in Figure 3-37, The description of the ERPS ring configuration is described in Table 3-15.

<p align="center"><em>Figure 3-37 ERPS ring configuration</em></p>

Table 3-15 Ring configuration description
Item
Description
Ring ID
Can be any number. The ring number of each ERPS ring must be unique.
East Interface
The east interface of the ERPS ring
West Interface
The west interface of the ERPS ring
Action
Delete ERPS Ring
ERPS Instance Configuration
Select Configuration > ERPS > Instance Configuration to enter the ERPS Instance Configuration page, as shown in Figure 3-38.

<p align="center"><em>Figure 3-38 ERPS Instance Configuration</em></p>

Click +Add button below Instance Configuration to create an ERPS instance, as shown in Figure 3-39. The description of the ERPS Instance Configuration Summary is described in Table 3-16.
Table 3-16 Description of the ERPS instance configuration
Item
Description
Ring Configuration
Create a new one or Link to a ERPS ring which has been created
Ring ID
The associated ring ID must be the ring that has been created.
East Interface
The east interface of the ERPS ring
West Interface
The west interface of the ERPS ring
RAPS VLAN
Each switch in the same ring must be configured with the same RAPS management VLAN for transmitting ERPS protocol packets.
The RAPS management VLAN can be a virtual VLAN and needs to be distinguished from the data VLAN.
* It does not need to be created in 6&8 series switch, as it is created by default.
Owner interface
ERPS Owner interface can select either the east interface or the west
interface as the Owner node.
Each ERPS ring has one and only one interface configured as an RPL owner interface that controls the ports that need to be blocked.
Sub-ring Block
Interface
The subring ‘s blocked interface, one subring has only one blocking port. You can choose east or west.
This parameter needs to be configured only for the tangent ring. The sub-rings of the two devices with tangent to the ring must be configured with the sub-ring blocking port.
Attached
Instance
It only needs to be set when the sub-ring blocking port needs to be configured, and is set to the ring ID that is tangent to the current sub-ring.

<p align="center"><em>Figure 3-39 ERPS instance configuration</em></p>

View ERPS State
Click ERPS State button to enter the ERPS State page, as shown in Figure 3-40. The description of the ERPS State summary is described in Table 3-17.

<p align="center"><em>Figure 3-40 ERPS state</em></p>

Table 3-17 ERPS state description
Item
Description
Name
The name of the ERPS ring
Ring ID
The number of the ERPS ring
State
ERPS ring status, include：
Idle：
Stable state when all non-RPL links are available. In this state, the owner node blocks the RPL port and periodically sends NR-RB packets. The neighbor node blocks the RPL port. All nodes enter the idle state after the owner node enters the idle state.
Pending：
Transient state between the previous states
Protection：
State when a non-RPL link is faulty. In this state, the RPL link is unblocked to forward traffic. All nodes enter the protection state after a node enters the protection state.
Last Event
Recent state event
RAPS-NR：remote failure recovery
RAPS-NR-RB: remote switchback
RAPS-SF：remote fault
LOCAL-SF：local fault
LOCAL-CLEAR-SF：local failure recovery
WTR-EXP：local switchback
East Interface
The east interface of the ERPS ring
West Interface
The west interface of the ERPS ring
Action
When the faulty link is restored, you can choose to manually revert immediately, otherwise the system will automatically revert after 5 minutes.

## PoE Management


### PoE Overview

Power over Ethernet (PoE) means that power sourcing equipment (PSE) supplies power to powered devices (PDs) from Ethernet interfaces through twisted pair cables.

### PoE Configuration


:::tip NOTE
NOTE:1. Before configure PoE, make sure that the PoE power supply and PSE are operating normally; otherwise, you cannot configure PoE or the configured PoE function does not take effect.2. For switches with external power supply, the input voltage range is 44-57 V. In order to obtain a more stable power supply, it is recommended that the power supply voltage of AT equipment be greater than 50V, and that of BT equipment be greater than 53V. NOTENOTE:1. Before configure PoE, make sure that the PoE power supply and PSE are operating normally; otherwise, you cannot configure PoE or the configured PoE function does not take effect.2. For switches with external power supply, the input voltage range is 44-57 V. In order to obtain a more stable power supply, it is recommended that the power supply voltage of AT equipment be greater than 50V, and that of BT equipment be greater than 53V.
:::


:::tip NOTE
:
:::


:::tip NOTE
1. Before configure PoE, make sure that the PoE power supply and PSE are operating normally; otherwise, you cannot configure PoE or the configured PoE function does not take effect.
:::


:::tip NOTE
2. For switches with external power supply, the input voltage range is 44-57 V. In order to obtain a more stable power supply, it is recommended that the power supply voltage of AT equipment be greater than 50V, and that of BT equipment be greater than 53V.
:::


:::tip NOTE
:
:::


:::tip NOTE
1. Before configure PoE, make sure that the PoE power supply and PSE are operating normally; otherwise, you cannot configure PoE or the configured PoE function does not take effect.
:::


:::tip NOTE
2. For switches with external power supply, the input voltage range is 44-57 V. In order to obtain a more stable power supply, it is recommended that the power supply voltage of AT equipment be greater than 50V, and that of BT equipment be greater than 53V.
:::

1. Select Configuration > PoE in the navigation area to enter the PoE Management page as shown in Figure 3-41, the Table 3-18 describes the items of PoE global configuration.
2. Type the Power supply and Power reserved boxes, and click Apply button.

<p align="center"><em>Figure 3-41 PoE global configuration</em></p>

Table 3-18 Descriptions of PoE global configuration
Item
Description
Power supply (w)
By default, the default power provided by the device is 15.4W*port number, for example, the maximum power provided by an 8-port device is 123.2W
• For devices with external power supply, please fill in this parameter according to the actual configured power supply
• For devices with built-in power supply, please refer to the description of PoE power in the product manual for this parameter
Power reserved (%)
Reserved power set against power fluctuations
• For devices with external power supply, it is recommended to fill in the power consumption of the main board
• For devices with built-in power supply, this parameter can be set 0 by default
Power
management
Display the mode of power management is energy-saving. In this mode, the power requested and allocated to the port is based on the actual port's (real time) power consumption.
Disconnect mode
Display the mode of disconnection is DC disconnect
Alarm state
Turn on/off the log alarm when the power is insufficient
Power alarm (%)
Alarm power limit setting, when the PoE power consumption exceeds this value, the system will automatically output a log alarm
3. Click Batch Edit below Port Configuration to enter PoE Port Configuration page, Select the port to be configured, as shown in Figure 3-42.

<p align="center"><em>Figure 3-42 PoE configuration page</em></p>

4. Click the OK to complete the operation, and then the page will return to the PoE Interface Configuration page, as shown in Figure 3-43. the Table 3-19 describes the items of the PoE interface configuration.

<p align="center"><em>Figure 3-43 PoE configuration page</em></p>

5. Click the Save in the navigation area to save the configuration.
Table 3-19 The items of the PoE interface configuration
Item
Description
Name
Indication panel port number
Admin State
Enable/disable PoE for the PoE Interface.
Disable: Disable the PoE power supply of the port
Enable: Enable the Po E power supply of the port
Force_on: Forcibly turn on the PoE power supply of the port. This function is implemented
by skipping the PD valid detection and PD classification detection, and directly supply
power to the PD load. In this mode, the default maximum load power is 15w, if you need
to power the device above 15w, the maximum power parameter needs to be configured
at the same time.
Description
Description of PoE port
Max Power (W)
Configure the maximum power for this port.
For AF/AT ports, the maximum port power range is 1-30
For BT ports, the port maximum power range is 1-90
In default mode, the port will perform power management according to PD class.
Priority
Configuring the port’s priority
Users can configure the interface power supply priority of the PoE switch. The priority from high to low is: high, medium, and low.
When the overall power of the PoE switch is insufficient, the ports with lower priority will be powered off first.
The port priorities of the same priority are arranged in the order of the port number, and the priority of the port with the smaller port number is higher. For example, the priority of port 0/1 is higher than ports 0/2 and 0/3.
Newly inserted ports will not affect the power supply of PDs that are already powered which has the same priority.
Newly inserted ports which have higher priority will preempt low- priority ports.
Mode
None: Disable the PD alive detection function
Flow: Enable the PD alvie detection function in Flow mode. This function is realized by monitoring the port counter, if the port packets counter does not change, it is judged that the PD device connected to the port is in abnormal state, and then turn off the power supply for a few seconds and then turn on.
Ping: Enable the PD alive detection function in Ping mode. This function is realized by continuously pinging the PD load, if a period of time the ping packet fails during the interval, it is judged that the PD device connected to the port is in abnormal state, and the power supply is turned off for a few seconds and then turned on again.
It is recommended to use the switch diagnostics network tool ping to test whether the ping packet of the PD device can be used before enabling this function.
IP address
Ping mode, the IP address of the PD load requires that the switch and the PD load be in the same network segment.
Interval
The detection time interval
Times
The detection times
PD start up time must be less than the interval * times, otherwise the PD load will always be in the power- off and start -up state.
Legacy mode
ON/OFF, the default is OFF.
OFF: Only standard PD devices are supported, the detection resistance is between 19k-26.5k, and the detection capacitance is less than 150nF.
ON: Support non-standard PD devices, and can supply power to some PD devices whose detection resistance and capacitance values exceed the standard values.

## Security


### Port Security

3.6.1.1 Overview
The Port Security function restricts the number of valid MAC addresses on the port to limit the access of illegal users to the port. The illegal MAC packets will be directly discarded.
The legal MAC can be generated statically or dynamically. The static legal MAC is generated through user command line configuration; the dynamic legal MAC is dynamically generated through the MAC address learning function.
When the number of secure addresses on the port has reached the configured value of the maximum number of secure addresses, the new MAC access port will be recognized as an illegal MAC and a violation event will be generated. The user can configure the actions to be taken when the violation event occurs, respectively restrict or shutdown the port.
Restrict: Prohibit illegal MAC data from passing, and generate alarm log prompt information. Illegal MAC will prohibit access to the port within the MAC address aging time. It can be restored through shutdown and no shutdown ports.
Shutdown: The port is forced to be down, and the port recovery time can be configured. The port will automatically recover when the time is up; it can also be recovered by the shutdown, no shutdown command.
If you want to convert a dynamic security user to a static security user, you can enable the sticky function on the port. When the sticky function is enabled on the port, the dynamic users learned on the port will exist as static users. If the configuration is saved, the device will still exist after restarting the device.

:::tip NOTE
NOTE:Only support L2 port configuration port security, such as ordinary physical port, aggregation port.Only support port security configuration in access mode.Does not support aggregation port member ports to configure port security functions.Does not support SPAN destination port configuration port security function.Does not support configuring port security functions on ports that have been configured with static MAC addresses. NOTENOTE:Only support L2 port configuration port security, such as ordinary physical port, aggregation port.Only support port security configuration in access mode.Does not support aggregation port member ports to configure port security functions.Does not support SPAN destination port configuration port security function.Does not support configuring port security functions on ports that have been configured with static MAC addresses.
:::


:::tip NOTE
:
:::


:::tip NOTE
Only support L2 port configuration port security, such as ordinary physical port, aggregation port.
:::


:::tip NOTE
Only support port security configuration in access mode.
:::


:::tip NOTE
Does not support aggregation port member ports to configure port security functions.
:::


:::tip NOTE
Does not support SPAN destination port configuration port security function.
:::


:::tip NOTE
Does not support configuring port security functions on ports that have been configured with static MAC addresses.
:::


:::tip NOTE
:
:::


:::tip NOTE
Only support L2 port configuration port security, such as ordinary physical port, aggregation port.
:::


:::tip NOTE
Only support port security configuration in access mode.
:::


:::tip NOTE
Does not support aggregation port member ports to configure port security functions.
:::


:::tip NOTE
Does not support SPAN destination port configuration port security function.
:::


:::tip NOTE
Does not support configuring port security functions on ports that have been configured with static MAC addresses.
:::

3.6.1.2 Configuring Port Security
Port Configuration
Select Configuration > Security > Port security in the navigation area to enter the Port Security page as shown in Figure 3-44.

<p align="center"><em>Figure 3-44 Port security statistic page</em></p>

Click the Batch Edit button below Port Configuration to enter the Port Configuration page, as shown in Figure 3-45. The items of the port configuration are described in Table 3-20.

<p align="center"><em>Figure 3-45 Port security configuration page</em></p>

Table 3-20 The items of the port security configuration
Item
Description
Port
Configuration
State
Enable/disable port Security of the interface.
Max MAC Number
Configure the maximum number of secure MAC addresses for the port, the default maximum number of secure addresses is 1, the range is <1-1024>
Sticky
Turn on/off the Sticky function.
Aging
Time(min)
Configure the security address aging time, in minutes. The default aging time is 0, which means that the aging function is turned off.
Aging time range <0-1440>
The default aging function only takes effect for dynamic and sticky security addresses.
Aging Static
Enable the static security address aging function.
Violation Mode
Configure port security violation handling, default violation
mode is Restrict.
Restrict：Prohibit illegal user data from passing, and log prompt
Shutdown：shutdown interface，and resume passing after errdisable recovery time.
MAC Configuration
Select Configuration > Security > MAC Configuration in the navigation area to enter the MAC Configuration page as shown in Figure 3-46.

<p align="center"><em>Figure 3-46 MAC configuration summary</em></p>

Click +Add to enter the MAC Configuration page as shown in Figure 3-47. The items of the mac configuration are described in Table 3-21.

<p align="center"><em>Figure 3-47 MAC configuration page</em></p>

Table 3-21 The items of the MAC configuration
Item
Description
MAC
Configuration
Interface
Select the interface to be configured.
MAC Address
Configure a static security address, the format of the security address: XXXX.XXXX.XXXX
The security address cannot be a broadcast or multicast Address.
Type
Configure the MAC address as dynamic or static.

### IP Source Guard

3.6.2.1 Overview
IP Source Guard：
The IP Source Guard binding function allows IP packets conforming to the IP+MAC binding to pass through the port, and non-conforming packets are directly discarded, thereby achieving the purpose of preventing IP/MAC spoofing attacks.
The binding entries of IP Source Guard mainly come from two sources: user static configuration and dynamic acquisition in the IP DHCP snooping environment.
User static configuration: mainly for host users whose IP addresses are statically configured in the local area network.
IP DHCP snooping dynamic acquisition: mainly respond to the host users who dynamically acquire the IP address through DHCP in the local area network.
IP/MAC spoofing attack: Illegal MAC users send IP packets with legal source IP to realize the legalization of access identity.
ARP Check：
The ARP-check (ARP packet check) function filters all ARP packets under the port and discards all illegal ARP packets, which can effectively prevent ARP spoofing in the network and improve the stability of the network.
In the device that supports the ARP-check function, the ARP-check function can generate corresponding ARP filtering information based on the legal user information (IP+MAC) generated by the security application modules such as IP Source Guard, so as to realize the illegal ARP packets filtering in the network.
3.6.2.2 Configuring IP Source Guard
1. Select Configuration > Security > IP Source Guard in the navigation area to enter the IP Source Guard Summary page as shown in Figure 3-48.

<p align="center"><em>Figure 3-48 IP source guard summary</em></p>


![Image](/images/en/image77.png)


<p align="center"><em>Figure 3-49 IP source guard port configuration</em></p>

- Click OK button, the rules created were displayed in summary page as shown in Figure 3-50.

<p align="center"><em>Figure 3-50 Port configuration</em></p>


:::tip NOTE
4. Click +Add button below User Configuration in current page, to enter the User Configuration page, Select the port in the interface box, text VID, IP Address, MAC Address, as shown in Figure 3-51.
:::


<p align="center"><em>Figure 3-51 IP source guard user configuration</em></p>

5. Click OK button, the rules created were displayed in summary page as shown in Figure 3-52.

<p align="center"><em>Figure 3-52 IP source guard rules summary</em></p>

3.6.2.3 Configuring ARP Check
1. Select Configuration > Security > IP Source Guard in the navigation area to enter the IP Source Guard Summary page as shown in Figure 3-48.

![Image](/images/en/image77.png)


<p align="center"><em>Figure 3-53 IP source guard ARP check</em></p>

3. Click +Add button below User Configuration in current page, to enter the User Configuration page, as shown in Figure 3-54.

<p align="center"><em>Figure 3-54 IP source guard user configuration</em></p>

4. Click OK button, the rules created were displayed in summary page as shown in Figure 3-55.

<p align="center"><em>Figure 3-55 ARP check rules</em></p>


### Dot1X

3.6.3.1 Overview
The 802.1X (Dot1X) protocol was proposed by the IEEE 802 LAN/WAN committee for security of wireless LANs (WLAN). It has been widely used on Ethernet as a common port access control mechanism.
As a port-based access control protocol, 802.1X authenticates and controls accessing devices at the port level. A device connected to an 802.1X-enabled port of an access control device can access the resources on the LAN only after passing authentication.
Architecture of 802.1X
802.1X operates in the typical client/server model and defines three entities: Client, Device, and Server, as shown in below.

<p align="center"><em>Figure 3-56 802.1X</em></p>

Client is an entity seeking access to the LAN. It resides at one end of a LAN segment and is authenticated by Device at the other end of the LAN segment. Client is usually a user-end device such as a PC. 802.1X authentication is triggered when an 802.1X-capable client program is launched on Client. The client program must support Extensible Authentication Protocol over LAN (EAPOL).
Device, residing at the other end of the LAN segment, authenticates connected clients. Device is usually an 802.1X-enabled network device and provides access ports (physical or logical) for clients to access the LAN.
Server is the entity that provides authentication services to Device. Server, normally running RADIUS (Remote Authentication Dial-in User Service), serves to perform authentication, authorization, and accounting services for users.
Authentication Modes of 802.1x
The 802.1X authentication system employs the Extensible Authentication Protocol (EAP) to exchange authentication information between the client, device, and authentication server. Client Device Server
Between the client and the device, EAP protocol packets are encapsulated using EAPOL to be transferred on the LAN.
Between the device and the RADIUS server, EAP protocol packets can be exchanged in two modes: EAP relay and EAP termination. In EAP relay mode, EAP packets are encapsulated in EAP over RADIUS (EAPOR) packets on the device, and then relayed by device to the RADIUS server. In EAP termination mode, EAP packets are terminated at the device, converted to RADIUS packets either with the Password Authentication Protocol (PAP) or Challenge Handshake Authentication Protocol (CHAP) attribute, and then transferred to the RADIUS server.
Basic Concepts of 802.1x
These basic concepts are involved in 802.1X: controlled port/uncontrolled port, authorized state/unauthorized state, and control direction.
Controlled Port and Uncontrolled Port
A device provides ports for clients to access the LAN. Each port can be regarded as a unity of two logical ports: a controlled port and an uncontrolled port. Any packets arriving at the port are visible to both logical ports.
The uncontrolled port is always open in both the inbound and outbound directions to allow EAPOL protocol packets to pass, guaranteeing that the client can always send and receive authentication packets.
The controlled port is open to allow data traffic to pass only when it is in the authorized state.
Authorized State and Unauthorized State

<p align="center"><em>Figure 3-57 Authorized/unauthorized state of a controlled port</em></p>

A controlled port can be in either authorized state or unauthorized state, which depends on the authentication result, as shown in Figure 3-57.
You can control the port authorization status of a port by setting port authorization mode to one of the following:
Force-Authorized: Places the port in authorized state, allowing users of the port to access the network without authentication.
Force-Unauthorized: Places the port in unauthorized state, denying any access requests from users of the port.
Auto: Places the port in the unauthorized state initially to allow only EAPOL packets to pass, and turns the port into the authorized state to allow access to the network after the users pass authentication. This is the most common choice.
Control Direction
In the unauthorized state, the controlled port can be set to deny traffic to and from the client or just the traffic from the client.
802.1X Authentication Triggering
802.1X authentication can be initiated by either a client or the device.
Unsolicited Triggering of A Client
A client can initiate authentication unsolicitedly by sending an EAPOL-Start packet to the device. The destination address of the packet is 01-80-C2-00-00-03, the multicast address specified by the IEEE 802.1X protocol.
Some devices in the network may not support multicast packets with the above destination address, and unable to receive authentication requests of clients as a result. To solve this problem, the device also supports EAPOL-Start packets using a broadcast MAC address as the destination address.
Unsolicited Triggering of the Device
The device can trigger authentication by sending EAP-Request/Identity packets to unauthenticated clients periodically (every 30 seconds by default). This method can be used to authenticate clients that cannot send EAPOL-Start packets unsolicitedly to trigger authentication, for example, a client running the 802.1X client application provided by Windows XP.
Authentication Process of 802.1x
An 802.1X device communicates with a remote RADIUS server in two modes: EAP relay and EAP termination. The following describes the 802.1X authentication procedure in the two modes, which is triggered by the client in the examples.
EAP Relay
EAP relay is defined in IEEE 802.1X. In this mode, EAP packets are carried in an upper layer protocol, such as RADIUS, so that they can go through complex networks and reach the authentication server. Generally, relaying EAP requires that the RADIUS server support the EAP attributes of EAP-Message and Message-Authenticator, which are used to encapsulate EAP packets and protect RADIUS packets carrying the EAP-Message attribute respectively.

<p align="center"><em>Figure 3-58 Show the message exchange procedure with EAP-MD5</em></p>

1. When a user launches the 802.1X client software and enters the registered username and password, the 802.1X client software generates an EAPOL-Start frame and sends it to the device to initiate an authentication process.
2. Upon receiving the EAPOL-Start frame, the device responds with an EAP-Request/Identity packet for the username of the client.
3. When the client receives the EAP-Request/Identity packet, it encapsulates the username in an EAP-Response/Identity packet and sends the packet to the device.
4. Upon receiving the EAP-Response/Identity packet, the device relays the packet in a RADIUS Access-Request packet to the authentication server.
5. When receiving the RADIUS Access-Request packet, the RADIUS server compares the identify information against its user information table to obtain the corresponding password information. Then, it encrypts the password information using a randomly generated challenge, and sends the challenge information through a RADIUS Access-Challenge packet to the device.
6. After receiving the RADIUS Access-Challenge packet, the device relays the contained EAP-Request/MD5 Challenge packet to the client.
7. When receiving the EAP-Request/MD5 Challenge packet, the client uses the offered challenge to encrypt the password part (this process is not reversible), creates an EAP-Response/MD5 Challenge packet, and then sends the packet to the device.
8. After receiving the EAP-Response/MD5 Challenge packet, the device relays the packet through a RADIUS Access-Request packet to the authentication server.
9. When receiving the RADIUS Access-Request packet, the RADIUS server compares the password information encapsulated in the packet with that generated by itself. If the two are identical, the authentication server considers the user valid and sends to the device a RADIUS Access-Accept packet.
10. Upon receiving the RADIUS Access-Accept packet, the device opens the port to grant the access request of the client. After the client gets online, the device periodically sends handshake requests to the client to check whether the client is still online. By default, if two consecutive handshake attempts end up with failure, the device concludes that the client has gone offline and performs the necessary operations, guaranteeing that the device always knows when a client goes offline.
11. The client can also send an EAPOL-Logoff frame to the device to go offline unsolicitedly. In this case, the device changes the status of the port from authorized to unauthorized and sends an EAP-Failure packet to the client.
3.6.3.2 Configuring Dot1X
Select Security > Dot1x> Configuration from the navigation area. The system automatically displays the 802.1X Global Configuration and Port Configuration, as shown in Figure 3-59 and Figure 3-60. Table 3-22 and Table 3-23 separately describe the global configuration and port configuration items.

<p align="center"><em>Figure 3-59 802.1X global configuration</em></p>

Table 3-22 The 802.1X configuration items
Item
Description
Global
Configuration
State
Enables the 802.1X feature on your switch.
RADIUS
Configuration
Click to jump to the RADIUS configuration interface

<p align="center"><em>Figure 3-60 802.1X port configuration</em></p>

Table 3-23 The 802.1X port configuration items
Item
Description
Port
Configuration
Name
Physical interface name
Port Control
Port control mode
Protocol Version
Eapol protocol version, default version 2
Quiet Period(s)
Sets the number of seconds that the switch remains in the quiet-period following a failed authentication exchange with the client. The range is 0 to 65,535 seconds; the default is 60.
When the switch cannot authenticate the client, the switch remains idle for a set period, and then tries again. The idle time is determined by the quiet-period value.
Tx Period(s)
Sets the number of seconds that the switch waits for a response to an EAP-request/identity frame from the client before retransmitting the request. The range is 1 to 65,535 seconds; the default is 30.
ReAuth Enabled
Enables periodic reauthentication of the client
ReAuth Period(s)
Specifies the number of seconds between reauthentication attempts or have the switch use a RADIUS-provided session timeout. The range is 1 to 65,535; the default is 3600 seconds. This command affects the behavior of the switch only if periodic reauthentication is enabled.
Supp Timeout(s)
Sets the number of seconds that the switch waits for a response to an EAP-Request/MD5 Challenge frame from the client before retransmitting the request. The range is 1 to 65,535 seconds; the default is 30.
Server Timeout(s)
Sets the number of seconds that the switch waits for a response to a RADIUS Access-Request packet from the server. The range is 1 to 65,535 seconds; the default is 30.

### MAC Auth

3.6.4.1 Overview
Authentication of MAC addresses is supported using a RADIUS server that contains a database of all valid users.
When the MAC-auth option is enabled on any interface, all source MAC addresses from any incoming frame are sent for authentication. If the username and password of the source address are configured in the RADIUS server, then authentication succeeds, otherwise it fails. When authentication succeeds, the source MAC is added to the forwarding table with forwarding enabled. In the case of failure, the source MAC either is added to the forwarding table as discarded or is added to a restricted VLAN.

:::tip NOTE
NOTE:If the configured static MAC is the same as the silent MAC, the MAC silent function after the MAC address authentication fails will be invalid. NOTENOTE:If the configured static MAC is the same as the silent MAC, the MAC silent function after the MAC address authentication fails will be invalid.
:::


:::tip NOTE
:
:::


:::tip NOTE
If the configured static MAC is the same as the silent MAC, the MAC silent function after the MAC address authentication fails will be invalid.
:::


:::tip NOTE
:
:::


:::tip NOTE
If the configured static MAC is the same as the silent MAC, the MAC silent function after the MAC address authentication fails will be invalid.
:::

3.6.4.2 Configuring MAC Authentication
Displaying MAC Authentication Summary
Select Configuration > Security > MAC Authentication from the navigation area. The system automatically displays the MAC Authentication summary, as shown in Figure 3-61. Table 3-24 describes the MAC Authentication Summary items.

<p align="center"><em>Figure 3-61 The MAC authentication summary</em></p>

Table 3-24 The MAC authentication summary items
Item
Description
Global
Configuration
State
Enables the 802.1X feature on your switch.
RADIUS
Configuration
Click to jump to the RADIUS configuration interface
Port
Configuration
Name
Physical interface name
State
Display the state of MAC Auth
MAC Address Aging
Display the state of MAC Address Aging
Action
Click to Edit the rule
Configuring MAC Authentication

:::tip NOTE
Enable MAC Auth
:::


![Image](/images/en/image91.png)


:::tip NOTE
Configuring Port
:::


![Image](/images/en/image91.png)


<p align="center"><em>Figure 3-62 MAC authentication port configuration</em></p>


### RADIUS

3.6.5.1 Overview
Remote Authentication Dial-In User Service (RADIUS) is protocol for implementing Authentication, Authorization, and Accounting (AAA).
RADIUS is a distributed information interaction protocol using the client/server model. RADIUS can protect networks against unauthorized access and is often used in network environments where both high security and remote user access are required. RADIUS uses UDP, and its packet format and message transfer mechanism are based on UDP. It uses UDP port 1812 for authentication and 1813 for accounting.
RADIUS was originally designed for dial-in user access. With the diversification of access methods, RADIUS has been extended to support more access methods, for example, Ethernet access and ADSL access. It uses authentication and authorization in providing access services and uses accounting to collect and record usage information of network resources.
Client/server Model
Client: The RADIUS client runs on the NASs located throughout the network. It passes user information to designated RADIUS servers and acts on the responses (for example, rejects or accepts user access requests).
Server: The RADIUS server runs on the computer or workstation at the network center and maintains information related to user authentication and network service access. It listens to connection requests, authenticates users, and returns the processing results (for example, rejecting or accepting the user access request) to the clients.
In general, the RADIUS server maintains three databases: Users, Clients, and Dictionary, as shown in Figure 3-63.

<p align="center"><em>Figure 3-63 RADIUS server components</em></p>

Users: Stores user information such as the usernames, passwords, applied protocols, and IP addresses.
Clients: Stores information about RADIUS clients, such as the shared keys and IP addresses.
Dictionary: Stores information about the meanings of RADIUS protocol attributes and their values.
Security and Authentication Mechanisms
Information exchanged between a RADIUS client and the RADIUS server is authenticated with a shared key, which is never transmitted over the network. This enhances the information exchange security. In addition, to prevent user passwords from being intercepted on insecure networks, RADIUS encrypts passwords before transmitting them.
A RADIUS server supports multiple user authentication methods, for example, the Password Authentication Protocol (PAP) and Challenge Handshake Authentication Protocol (CHAP) of the Point-to-Point Protocol (PPP). Moreover, a RADIUS server can act as the client of another AAA server to provide authentication proxy services.
Basic Message Exchange Process of RADIUS

<p align="center"><em>Figure 3-64 illustrates the interaction of the host, the RADIUS client, and the RADIUS server.</em></p>


<p align="center"><em>Figure 3-64 Basic message exchange process of RADIUS</em></p>

The following is how RADIUS operates:
1. The host initiates a connection request carrying the username and password to the RADIUS client.
2. Having received the username and password, the RADIUS client sends an authentication request (Access-Request) to the RADIUS server, with the user password encrypted by using the Message-Digest 5 (MD5) algorithm and the shared key.
3. The RADIUS server authenticates the username and password. If the authentication succeeds, it sends back an Access-Accept message containing the user ‘s authorization information. If the authentication fails, it returns an Access-Reject message.
4. The RADIUS client permits or denies the user according to the returned authentication result. If it permits the user, it sends a start-accounting request (Accounting-Request) to the RADIUS server.
5. The RADIUS server returns a start-accounting response (Accounting-Response) and starts accounting.
6. The user accesses the network resources.
7. The host requests the RADIUS client to tear down the connection and the RADIUS client sends a stop-accounting request (Accounting-Request) to the RADIUS server.
8. The RADIUS server returns a stop-accounting response (Accounting-Response) and stops accounting for the user.
9. The user stops access to network resources

:::tip NOTE
NOTE:Do not support RADIUS accounting function NOTENOTE:Do not support RADIUS accounting function
:::


:::tip NOTE
:
:::


:::tip NOTE
Do not support RADIUS accounting function
:::


:::tip NOTE
:
:::


:::tip NOTE
Do not support RADIUS accounting function
:::

3.6.5.2 Configuring RADIUS
RADIUS Global Configuration
Select Configuration > Security > RADIUS from the navigation area. The system automatically displays the RADIUS Global Configuration, as shown in Figure 3-65. Table 3-25 describes the RADIUS global configuration items.

<p align="center"><em>Figure 3-65 The RADIUS global configuration</em></p>

Table 3-25 The RADIUS global configuration items
Item
Description
Global
Configuration
Key
Global default password configuration; configurable, unreadable; optional configuration
Timeout
Global server timeout; optional configuration
Retransmission
Global server retransmissions; optional configuration
Dead Time
Server death duration; optional configuration; default 0, indicating that the server will be revived immediately after death
RADIU Server Configuration
Click +Add button below Server Configuration in current page to enter the Configuration page, as shown in Figure 3-66. Table 3-26 describes the RADIUS Server Configuration items.
Table 3-26 The RADIUS server configuration items
Item
Description
IP
Server IP address
Auth Port
Server authentication port number; default 1812
Key
Server key; global configuration when not configured
Timeout
Server timeout; default 5s
Retransmission
Server retransmission times, default 3 times

<p align="center"><em>Figure 3-66 The RADIUS server configuration</em></p>


## Control


### Serial Servers

3.7.1.1 Overview
The serial device server is used to connect serial devices to the Ethernet. The serial device server supports bidirectional conversion and transmission of network data and serial data. Serial device server work in tcp-client mode, as shown in Figure 3-67.

<p align="center"><em>Figure 3-67 Serial device server work in tcp-client mode</em></p>

Serial device server in tcp-client mode provides client connections for TCP network servers. it actively initiates a connection and connect to the server to realize the interaction between serial device and TCP server. The TCP/IP and serial data are transparently transmitted in both directions. The serial device server supports to establish multiple TCP Clients to connect to different TCP Server. Serial device server work in tcp-server mode, as show in Figure 3-68.
In TCP Server mode, the module monitors the local port, accepts and establishes a connection for data communication when a connection request is sent. Used for communication with TCP clients within a local area network. It is suitable for scenarios where there is no server in the LAN and there are multiple computers or mobile phones requesting data from the module.

<p align="center"><em>Figure 3-68 Serial device server work in tcp-server mode</em></p>

3.7.1.2 Configuring Serial Server
Select Configuration > Control > Serial Server from the navigation area. The system automatically displays the Serial Server Configuration page, as shown in Figure 3-69.

<p align="center"><em>Figure 3-69 Serial server configuration summary</em></p>

Click Edit button to enter Serial Server Configuration page, as shown in Figure 3-70. Table 3-27 describes the serial server configuration items.

<p align="center"><em>Figure 3-70 Serial server configuration</em></p>

Table 3-27 Serial server configuration items
Item
Description
Basic
ID
Serial port number
Mode
None
Shut down the serial port server
tcp-client
Configure the working mode to tcp-client
tcp-server
Configure the working mode to tcp-server
Serial
Baud Rate
The baud rate of the serial port is configured, and there are five kinds of options: 9600, 19200, 38400, 57600, and 115200
Data Bits
The data bits of the serial port are configured, and there are two kinds of options: 7 and 8
Parity
There are five types of configuration checksum methods: none, even, odd, mark, and space
Stop Bits
There are two options for configuring the stop bit, 1 and 2
Communication
Buffer size
Serial port data bits are transmitted at low speed, and the data is transferred from the network end to the serial port side to increase the fifo, improve the forwarding ability, the range < 0-128>, the default 64
Max packet
Length
The length of the serial port data packet, beyond the LEGGTH value, the packet is forwarded to the network end, the range <0-1460>, the default is 1460
Interval
If the interval between the bytes before and after the serial port data exceeds MILLISECONDS, the post-byte data is recognized as the new message header byte
The range < 1-1000 >, the default is 10ms
Alive check time
Configure the serial port server to keep alive, during which there is no data interaction, then active detection is initiated
Client
Remote IP
Configure the remote connection IP address
Remote port
Configure the port number for the remote connection, ranging from < 1-65535>
Local port
For optional configurations, the default system is automatically assigned
Server
Port
Configure the tcp-server port number, which < range from 1-65535>
Max connections
The maximum number of connections in tcp-server mode, ranging from 1 to 65535 >

### Relay Warning

3.7.2.1 Overview
Relay Warning function helps network administrators effectively manage unexpected network situations by providing a digital input DI and a digital output DO (Relay) for external alarm devices on the panel. Digital input DI can be used to detect and record the status of external equipment such as access control intrusion detector. Digital output DO can be used for device port link interruption, abnormal system temperature, abnormal PoE status, and abnormal power supply to issue an alarm.
The device’s digital input DI can be activated by external sensors sensing physical changes including certain physical changes in intrusion detection or monitoring area, with the DI parameter description shown in Table 3-28.
Table 3-28 DI description items
Type
Trigger Condition
Description
DI input
Low level
Low level input trigger alarm with the voltage limit ”-30V-3V”
High level
High level input trigger alarm with the voltage limit “12V-30V”
The device can detect in real time through the digital input DI and trigger some internal event processing of the device. Table 3-29 describes the configuration items.
Table 3-29 internal event processing items
Trigger Condition
Event Type
Description
DI input:
low levelhigh level
Port event
Port shutdown and then up
Port shutdown
Port PoE event
Port PoE is powered off and then powered on
Port PoE is powered off
DO output event
Relay is normally open
Relay is normally closed
Relay is in alternating normally open and normally closed cycles
The main function of the digital output DO is to allow switch automatic, manual or remote control of the software application to trigger external devices, and the working status of the DO is shown in Table 3-30.
Table 3-30 DO status description
Type
Mode
Description
Relay output
Normally open
The default mode is normally closed and becomes normally open after the alarm is triggered
Normally closed
The default mode is normally open and becomes normally closed after the alarm is triggered
Pulse
By default, the output is in normally open state, and after the alarm is triggered, it becomes in the status of alternating normally open and normally closed cycles with a default period of 2s, and a 50% duty cycle
The switch can not only manually configure the output status, but associate the equipment internal events to trigger the relay output alarm. The parameters of internal events are shown in Table 3-31.
Table 3-31 Trigger relay alarm output configuration items
Event
Action
Ambient temperature
When the ambient temperature exceeds the configured limit, the relay output alarm is triggered

![Image](/images/en/image101.png)

This function requires an external related sensor
Ambient humidity
When the ambient humidity exceeds the configured limit, the relay output alarm is triggered
System temperature
When the system temperature exceeds the configured limit, the relay output alarm is triggered
PoE power consumption
When the system PoE power consumption exceeds the configured percentage limit, the relay output alarm is triggered
PoE voltage
When the PoE chip voltage exceeds the configured limit, the relay output alarm is triggered
PoE temperature
When the PoE chip temperature exceeds the configured limit, the relay output alarm is triggered
PoE port power supply change
When the PoE port power supply is powered off or on, the relay alarm output is triggered
Port link status change
When the port link changes from up to down or from down to up, the relay alarm output is triggered
3.7.2.2 Relay Warning Configuration
Select Configuration > Relay Warning in the navigation area to enter the Relay Warning Configuration page. This page contains three parts: Global Configuration, Trigger Relay Alarm, Digital Input Configuration.
Global Configuration
Select Configuration > Relay Warning > Global Configuration in the navigation area to enter the Relay Warning Global Configuration page. The Global Configuration page is shown in Figure 3-71, and the specific parameters are shown in Table 3-32.
Table 3-32 The description of global configuration items
Item
Description
Ambient Temperature(℃)
Min: the alarm minimum limit. When the ambient temperature is lower than the minimum, an alarm is triggered.
Max: the alarm maximum limit. When the ambient temperature is higher than the maximum, an alarm is triggered.
The default minimum is -40℃, and the default maximum is 85℃; the minimum difference between the Min and Max is 5℃.
When the ambient temperature is higher than the maximum limit, an alarm is
triggered. When the temperature drops to 2℃ below the maximum limit, a
prompt is given to return to normal.
When the ambient temperature is lower than the minimum limit, an alarm is
triggered. When the temperature rises to 2℃ higher than the minimum limit, a prompt is given to return to normal.
Ambient Humidity(%)
Threshold(%): ambient humidity alarm value, and the default value is 95%. When the ambient humidity is higher than the alarm value, an alarm is triggered. When the humidity drops to 2% below the alarm value, a prompt is given to return to normal.
System Temperature(℃)
Min: the alarm minimum limit. When the system temperature is lower than the minimum, an alarm will be triggered.
Max: the alarm maximum limit. When the system temperature is higher than the maximum, an alarm will be triggered.
The default minimum is -40℃ and the default maximum is 125℃; the minimum difference value between the Min and Max is 5℃.
When the system temperature is higher than the maximum, an alarm is
triggered. When the temperature drops to 2℃ below the maximum, a prompt is given to return to normal.
When the system temperature is lower than the minimum, an alarm is triggered. When the temperature rises to 2℃ higher than the minimum, a prompt is given to return to normal.
PoE Temperature(℃)
Min: the alarm minimum limit. When the PoE temperature is lower than the minimum, an alarm will be triggered.
Max: the alarm maximum limit. When the PoE temperature is higher than the maximum, an alarm will be triggered.
The default minimum is -20℃ and the default maximum is 125℃; the minimum difference value between the Min and Max is 5℃.
When the PoE temperature is higher than the maximum, an alarm is
triggered. When the temperature drops to 2℃ below the maximum, a prompt is given to return to normal.
When the PoE temperature is lower than the minimum, an alarm is triggered. When the temperature rises to 2℃ higher than the minimum, a prompt is given to return to normal.
PoE Voltage(V)
Min: the alarm minimum limit. When the PoE voltage is lower than the minimum, an alarm will be triggered.
Max: the alarm maximum limit. When the PoE voltage is higher than the maximum, an alarm will be triggered.
The default minimum is 44V and the default maximum is 57V; the minimum difference value between the Min and Max is 5V.
When the PoE voltage is higher than the maximum, an alarm is triggered. When the voltage drops to 1V below the maximum, a prompt is given to return to normal.
When the PoE voltage is lower than the minimum, an alarm is triggered. When the voltage rises to 1V higher than the minimum, a prompt is given to return to normal.
PoE Consumption(%)
Threshold(%): PoE power consumption alarm value, and the default value is 80% which means that when the PoE power consumption reaches to 80% of the total power, an alarm is triggered.
When the PoE power consumption is higher than the alarm value, an alarm is triggered. When the power consumption drops to 2% below the alarm value, a prompt is given to restore to normal.
Alarm Log Enable
Enable/disable alarm log. Enable by default.
Alarm Trap Enable
Enable/disable alarm trap. Disable by default.

<p align="center"><em>Figure 3-71 Relay warning global configuration page</em></p>

Trigger Relay Alarm
Select Configuration > Relay Warning > Trigger Relay Alarm in the navigation area to enter the Trigger Relay Alarm Configuration page as shown in Figure 3-72, the alarm port action configuration is shown in Figure 3-73, and the alarm PoE action configuration is shown in Figure 3-74. The configuration parameters are shown in Table 3-33.

<p align="center"><em>Figure 3-72 Trigger relay alarm configuration</em></p>


<p align="center"><em>Figure 3-73 Alarm port action configuration</em></p>


<p align="center"><em>Figure 3-74 Alarm PoE port action configuration</em></p>

Table 3-33 The description items of trigger relay alarm
Item
Description
Alarm port action
Up->Down: port shutdown
Down->Up: port link is down and then up
Alarm PoE action
Power On->Off: port PoE is powered off
Power Off->On: port PoE is powered off and then powered on
ID
Relay output index parameters
Description
Relay output descriptors, up to 64 characters
Relay Force Mode
Normally-open: when configuration takes effect, the relay output is normally open
Normally-closed: when configuration takes effect, the relay output is normally closed
Pulse: when configuration takes effect, the relay output pulse level with 2s cycle and 50% duty cycle
Off: function is off
The default mode is Off. After configuring the Relay Force Mode, the relay will remain in the set state, independent of Alarm Mode configuration.
Alarm Mode
Normally-open: when configuration takes effect, the relay output changes from normally closed to normally open after the alarm is triggered
Normally-closed: when configuration takes effect, the relay output changes from normally open to normally closed after the alarm is triggered
Pulse: when configuration takes effect, the relay output changes from normally open to pulse level with 2s cycle and 50% duty cycle after the alarm is triggered
Off: function is off
Off by default.
Period(s)
The cycle of the relay from normally open to normally closed in pulse level status
Closed Time(s)
The closed time of relay in pulse level status
Trigger Condition
Ambient Temperature: ambient temperature exceeding the configuration limit will trigger the relay output alarm
Ambient Humidity: ambient humidity exceeding the configuration limit will trigger the relay output alarm
System Temperature: system temperature exceeding the configuration limit will trigger the relay output alarm
PoE Power Overload: PoE power load exceeding the configuration limit will trigger the relay output alarm
PoE Voltage: PoE chip voltage exceeding the configuration limit will trigger the relay output alarm
PoE Temperature: PoE chip temperature exceeding the configuration limit will trigger the relay output alarm
Alarm Port
The port link changing from up to down or from down to up will trigger the relay output alarm
Alarm PoE
The port PoE changing from being powered on to being powered off or from being powered off to being powered on will trigger the relay output alarm
3.7.2.3 DI Configuration
Select Configuration > Relay Warning > Digital Input Configuration in the navigation area to enter the Digital Input Configuration page as shown in Figure 3-75, the Trigger Port Action page as shown in Figure 3-76, the Trigger PoE Action page as shown in Figure 3-77, and the description of the DI parameters as shown in Table 3-34.

<p align="center"><em>Figure 3-75 DI configuration page</em></p>


<p align="center"><em>Figure 3-76 Trigger port action configuration</em></p>


<p align="center"><em>Figure 3-77 Trigger PoE action configuration</em></p>

Table 3-34 The description of DI configuration parameters
Item
Description
Trigger Port Action
None: none action
Shutdown: port shutdown, and if the DI alarm restore, no shutdown again
Reboot: for the link-up port, down forcibly, and up again automatically
Trigger PoE Action
None: none action
Power-off: power off the port PoE, and if the DI alarm restore, power on again
Reboot: for the power-on port PoE, power off forcibly, and power on again automatically
ID
The DI input index parameter
Description
The DI input description, up to 64 characters
Alarm Mode
Low-level: low level trigger
High-level: high level trigger
Off: function is off
Off by default
Trigger Relay ID
The relay index parameter associated with the DI input
Trigger Port
The trigger port associated with the DI input
Trigger PoE
The port PoE associated with the DI input
3.7.2.4 The Configuration Example
DI input connects the access control relay, the access control is closed by default, the DI input is low level and when access control is open, the DI input is high level. Relay output is connected to the external alarm LED, and when detect the access control is open, the LED is required to flashing. The switch detects the DI input alarm, prints the log locally, and sends the log to the log server.
Step 1: Select Configuration > Relay Warning in the navigation bar to enter the Relay Warning Configuration page.
Step 2: Select Relay 1 in Trigger Relay Alarm and click the Edit button to enter the configuration page, fill in the parameter as shown in Figure 3-78, and then click OK button to complete.

<p align="center"><em>Figure 3-78 Trigger relay alarm configuration</em></p>

Step 3: Select DI 1 in Digital Input Configuration and click the Edit button to enter the configuration page, fill in the parameter as shown in Figure 3-79, and then click OK button.

<p align="center"><em>Figure 3-79 Digital input configuration</em></p>

Step 4: Click the Save button in the auxiliary area.

## LoopDetect


### Overview

LOOP-DETECT is an Ethernet loop detection protocol, which is used to quickly detect loop faults on downlink interfaces. If a fault is found, LOOP-DETECT will notify the user to manually close or automatically close the relevant port according to the fault handling method configured by the user, so as to avoid affecting the normal data exchange.
Enable control: Enable control is divided into global enable control and port enable control. When the global enable control is enabled and the loop detection is enabled on the port, the port supports the loop detection function.
Loop action: When a loop fault is detected on the port, the user will be notified to manually handle the loop fault by default, and the automatic closing of the port can also be configured. When the port is automatically shut down, the port can recover from the fault by waiting for timeout, shutdown/no shutdown port, recovery command, or restarting the device.
Specify VLAN: By default, the port VLAN attribute is ignored; if you need to detect whether a loop fault occurs in a specific VLAN domain, you can configure the specified VLAN on the port, and only detect Whether there is a loop data path in this VLAN domain.
The device supports loop fault alarm and loop fault recovery message traps to the SNMP server, which is disabled by default.

### Configuring LoopDetect

LoopDetect Configuration
1. Select Configuration > LoopDetect in the navigation area to enter the LoopDetect page. This page contains two parts: Global Configuration and Port Configuration.
2. Turn on the loop detection switch in the global configuration page, configure the detection
interval, turn on the Trap switch (optional), and click the Apply button to complete the configuration, as shown in Figure 3-80, the Table 3-35 describes the items of PoE global configuration.

<p align="center"><em>Figure 3-80 LoopDetect global configuration</em></p>

Table 3-35 Loop detection global configuration items
Item
Description
Loop detection
Turn on/off the loop detection function. The default is to turn off globally and the port.
Detection interval
Configure loop detection interval, range 5-300 seconds, default 5 seconds
Trap
Enable/disable loop fault trap alarm
3. Click the Batch Edit button under Port Configuration or the Edit button behind the port that needs to be configured to enter the loop detection port configuration interface, configure the management status, violation handling method, VLAN domain detection, and select the required. The port that enables this function is shown in Figure 3-81, and the parameter description is shown in Table 3-36.

<p align="center"><em>Figure 3-81 LoopDetect port configuration</em></p>

Table 3-36 Loop detection port configuration items
Item
Description
Admin State
Enable: Enable the loop detection function of the port
Disabled: Turn off the loop detection function of the port
Violation handling
Alarm: Trap alarm when a loop occurs
Error-down: When a loop occurs, shut down the loop port.
Detection VLANs
Detect whether a data path loop occurs within the specified VLAN domain

## DNS


### Overview

The Domain Name System (DNS) is a crucial and widely used system in a network environment with a TCP/IP architecture. DNS primarily provides a translation and query mechanism between IP addresses and host names to convert less memorable IP address into easily memorable domain names. The process of converting a host name to its corresponding IP address is known as domain name resolution (or host name resolution). Initially, static domain name resolution can be attempted when resolving a domain name; if this fails, dynamic domain name resolution can be used. Commonly used domain names can be added to a static domain name resolution table to enhance the resolution efficiency. Both the TCP and UDP ports for DNS are 53, and UDP is typically used.

### Configuring DNS

Select Configuration > DNS in the navigation area to enter the DNS page which contains three parts, as shown in Figure 3-82.

<p align="center"><em>Figure 3-82 DNS configuration</em></p>

3.9.2.1 Static Domain Configuring
Click the +Add button under the DNS Host to enter the DNS Host page, as shown in Figure 3-83.

<p align="center"><em>Figure 3-83 DNS host configuration</em></p>

Fill in the parameters as required, and click the OK button to complete the configuration.

:::tip NOTE
NOTE:A switch can have up to 100 static DNS items configured. NOTENOTE:A switch can have up to 100 static DNS items configured.
:::


:::tip NOTE
:
:::


:::tip NOTE
A switch can have up to 100 static DNS items configured.
:::


:::tip NOTE
:
:::


:::tip NOTE
A switch can have up to 100 static DNS items configured.
:::

3.9.2.2 Dynamic Domain Configuring
Click the +Add button under the Domain List to enter the Domain List configuration page, as shown in Figure 3-84.

<p align="center"><em>Figure 3-84 Domain list configuration</em></p>

Click the +Add button under the Domain Server to enter the Domain Server configuration page, as shown in Figure 3-85.

<p align="center"><em>Figure 3-85 Domain server configuration</em></p>

Fill in the parameters as required, and click the OK button to complete the configuration.

:::tip NOTE
NOTE:A switch can be configured with up to 6 domain name suffixes.When the user enters a host name that does not contain a fully qualified domain name (FQDN), the system will attempt to resolve the DNS by appending these domain name suffixes to the host name in turn. NOTENOTE:A switch can be configured with up to 6 domain name suffixes.When the user enters a host name that does not contain a fully qualified domain name (FQDN), the system will attempt to resolve the DNS by appending these domain name suffixes to the host name in turn.
:::


:::tip NOTE
:
:::


:::tip NOTE
A switch can be configured with up to 6 domain name suffixes.
:::


:::tip NOTE
When the user enters a host name that does not contain a fully qualified domain name (FQDN), the system will attempt to resolve the DNS by appending these domain name suffixes to the host name in turn.
:::


:::tip NOTE
:
:::


:::tip NOTE
A switch can be configured with up to 6 domain name suffixes.
:::


:::tip NOTE
When the user enters a host name that does not contain a fully qualified domain name (FQDN), the system will attempt to resolve the DNS by appending these domain name suffixes to the host name in turn.
:::


### A Configuration Example

Case requirement: SWITCH can access the Server with IP address 2.2.2.106 through the domain name www.test.com.
- 1. Select Configuration > DNS in the navigation area to enter the DNS page.
- 2. Click the +Add button under DNS Host to enter the configuration page, fill in the parameters according to the requirements, as shown in Figure 3-86.
- 3. Click OK button to complete the configuration.

:::tip NOTE
4. Click Save button in the auxiliary area.
:::


<p align="center"><em>Figure 3-86 Static domain name configuration</em></p>
