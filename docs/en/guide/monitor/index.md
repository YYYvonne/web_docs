# Monitor


## Overview

Select Monitor > Overview from the navigation tree to enter the Overview page. As shown in Figure 2-1, The Overview page is divided into 3 sections, namely System Information, Panel Port, and Traffic.
1. In the System Information section, the user can check the product ID, serial number, MAC address, hardware and software version of the device, and the specific parameters are described as shown in Table 2-1.

<p align="center"><em>Figure 2-1 Overview page</em></p>

Table2-1 Basic information configuration items
Item
Description
Host Name
Display the device name. Allows user to change it.
MAC Address
Display the device’s MAC address.
Hardware Version
Display the device’s hardware version.
Software Version
Display the device’s software version.
Release Date
Display the device software’s release date.
Product SN
Display the device’s serial number.
CPU Used
Display the device’s cpu status.
Memory Avail
Display the device’s memory status.
System Uptime
Display the time from last system start.
2. In the Panel Port section, the user can see the panel diagram of the device and the working conditions of the panel ports.
3. In the Traffic part, the user can observe the traffic situation of the port.

## Port Statistics

The port statistics module displays statistics about the packets received and sent through
ports.
Displaying Port Statistics
Select Monitor > Port Statistics in the navigation area to enter the page shown in Figure 2-2. The page displays the port’s Rx Load, Tx Load, Speed, Under size, Over size, CRC Error and Collision Count. Table 2-2 describes the items of port statistics.

<p align="center"><em>Figure 2-2 The port statistics page</em></p>

Table 2-2 The parameters of port statistics
Item
Description
Port
The name of the logical interface.
Rx Load
The port receives the load rate
Tx Load
The port sends the load rate
Speed
The port operating rate
Under Size
The number of packets received by the port is less than 64 bytes
Over Size
The number of packets received by the port is greater than the maximum MTU configuration
CRC Error
The number of packets received of CRC checking error
Collision Count
The number of conflicting packets received by the port
Clear
Click to clear the statistics.

## Loop Protection

The Loop Protection page is used to display the working status of device loop-related protocols, such as ERPS and Spanning Tree Protocols.
1. Select Monitor > Loop Protection in the navigation area to enter the Loop Protection Status page, as shown in Figure 2-3.
2. The user can see the working status of the ERPS and Spanning Tree Protocol that have been enabled, and the specific parameters can be described in the relevant sections of the protocol.
3. Click the ERPS Configuration and Spanning Tree Configuration buttons to directly switch to the relevant configuration page.

<p align="center"><em>Figure 2-3 Loop protection status</em></p>


## Serial Server State

The Serial Server State page is used to display the working status of Serial Server.
1. Select Monitor > Serial Server State in the navigation area to enter the Serial Server State page, as shown in Figure 2-4.

<p align="center"><em>Figure 2-4 Serial server status</em></p>

2. In this page, you can see the working status of the serial server. Table 2-3 describes the items of port statistics.
Table 2-3 Items of serial server
Item
Description
ID
Serial port ID number of the serial port server
Net Octets Rx
The number of bytes received by the network
Net Packets Rx
The number of packets received by the network
Net Octets Tx
The number of bytes sent by the network
Net Packets Tx
The number of packets sent by the network
Serial Octets Rx
The number of bytes received by the serial port
Serial Packets Rx
The number of packets received by the serial port
Serial Octets Tx
The number of bytes sent by the serial port
Serial Packets Tx
The number of packets sent by the serial port
Net Connect Up/Down times
Number of network connections
Serial Overload Drop Packets
Number of packets discarded by serial port overflow
3. Click the Configuration button to directly switch to the relevant configuration interface.

## Security

The Security page is used to display the working status of device security-related protocols, with three parts: Port Security, IP Source Guard, and MAC Auth.

:::tip NOTE
1. Select Monitor > Security in the navigation area to enter the Security Display page, as shown in Figure 2-5, Figure 2-6, and Figure 2-7.
:::


<p align="center"><em>Figure 2-5 Port security state</em></p>


<p align="center"><em>Figure 2-6 IP source guard state</em></p>


<p align="center"><em>Figure 2-7 MAC auth state</em></p>

2. In this page, you can see the working status of the ERPS, Spanning tree, IP Source Guard, and MAC Auth, and the specific parameters can be described in the relevant sections of the protocol.
3. Click the corresponding Configuration button to directly switch to the relevant configuration interface.

## PoE State

The PoE State page is used to display the current PoE working status of the device.
1. Select Monitor > PoE State in the navigation bar to enter the PoE Status page, as shown in Figure 2-8.

<p align="center"><em>Figure 2-8 PoE state</em></p>

2. On the current page, the user can see the total power supply of the device, the number of power supply ports, and the power supply status of each port. Specific parameter descriptions are shown in Table 2-4.
Table 2-4 Items of PoE state
Item
Description
Global
state
Power
Consumption (W)
Current PoE external power supply of the device
Powered ports
The current total number of powered up ports
Port
Name
Indication panel port number
State
PoE current power supply status,
disable: power supply off state
enable: power supply on state
Description
PoE port description
Reason
The reason why the port cannot supply power,
Short: load short
Management: insufficient power
Power(W)
The power consumed by the current port
Icut(mA)
The working current of the current port
Class
Class level of the PD device connected to this port
Admin State
Display whether the PoE function of this port is enabled or disabled
3. Click the PoE Configuration button to directly switch to the PoE Configuration interface.

## LLDP State

The LLDP Status page is used to display the device LLDP working status.
1. Select Monitor > LLDP State in the navigation area to enter the LLDP Status page, as shown in Figure 2-9.
2. The user can see the working status of the LLDP protocol that has been enabled in the page, and the specific parameters are described in the relevant sections of the protocol.
3. Click the LLDP Configuration button to directly switch to the LLDP Configuration interface.

<p align="center"><em>Figure 2-9 LLDP state</em></p>


## IGMP Snooping State

The IGMP Snooping State page is used to display the working status of the device IGMP Snooping protocol.
1. Select Monitor > IGMP Snooping State in the navigation area to enter the IGMP Snooping Status page, as shown in Figure 2-10.
2. The user can see the working status of the IGMP Snooping protocol that has been enabled in the page, and the specific parameters can be described in the relevant sections of the protocol.
3. Click the IGMP Snooping Configuration button to directly switch to the IGMP Snooping Configuration interface.

<p align="center"><em>Figure 2-10 IGMP snooping state</em></p>


## DHCP Snooping State

The DHCP Snooping State page is used to display the working status of the DHCP Snooping protocol of the device.
1. Select Monitor > DHCP Snooping State in the navigation area to enter the DHCP Snooping State page, as shown in Figure 2-11.
2. The user can see the working status of DHCP Snooping Protocol that has been enabled in the page, and the specific parameters can be described in the relevant sections of the protocol.
3. Click the DHCP Snooping Configuration button to directly switch to the DHCP Snooping Configuration interface.

<p align="center"><em>Figure 2-11 DHCP snooping state</em></p>


## QinQ Information

The QinQ Information page is used to display the working status of the device QinQ information.
1. Select Monitor > QinQ Information in the navigation area to enter the QinQ Status page, as shown in Figure 2-12.
2. The user can see the working status of QinQ that has been turned on in the page, and the specific parameters can be described in the relevant sections of the protocol.
3. Click the QinQ Configuration button to quickly switch to the QinQ Configuration interface.

<p align="center"><em>Figure 2-12 QinQ information</em></p>


## LoopDetect State

The LoopDetect State page is used to display the working status of the loop.
1. Select Monitor > LoopDetect State in the navigation area to enter the LoopDetect Status page, as shown in Figure 2-13.
2. The user can see the working status of loop detection that has been turned on in the page, and the specific parameters can be described in the relevant sections of the protocol.
3. Click the LoopDetect Configuration button to quickly switch to the Loopdetect Configuration interface.

<p align="center"><em>Figure 2-13 LoopDetect state</em></p>


## MAC Table

The MAC Table page is used to display the MAC address table item information.
- Select Monitor > MAC Table in the navigation area to enter the MAC table page, as shown in Figure 2-14.
- You can see the working information of MAC table that has been turned on in the page, and the specific parameters can be described in the relevant sections of the protocol.
- Click the MAC Configuration button to quickly switch to the MAC Configuration page.Figure 2-14 MAC table information

## ARP/Neighbor Information

The ARP/Neighbor Information page is used to display the working status of the device ARP/Neighbor information.
1. Select Monitor > ARP/Neighbor Information in the navigation area to enter the ARP/Neighbor status page, as shown in Figure 2-15.
2. You can see the working status of ARP/Neighbor that has been turned on in the page, and the specific parameters can be described in the relevant sections of the protocol.
3. Click the ARP/Neighbor Configuration button to quickly switch to the ARP/Neighbor Configuration page.

<p align="center"><em>Figure 2-15 ARP/Neighbor information</em></p>


## NTP State

The NTP State page is used to display the working status of the device NTP information.
- Select Monitor > NTP State in the navigation area to enter the NTP State page, as shown in Figure 2-16.
- You can see all NTP items of the device in the page, and the specific parameters can be described as the following Table 2-5.
- 3. Click the NTP Configuration button to quickly switch to the NTP Configuration page.

<p align="center"><em>Figure 2-15 NTP information</em></p>

Table 2-5 NTP state parameters’ description
Item
Description
remote
The host name or IP address of clock
refid
Reference ID
st
Stratum
t
Type
u: unicast or manycast client
b: broadcast or multicast client
l: local (reference clock)
when
Sec/min/hr since the last synchronization time
poll
Poll interval (log2 s)
reach
The last 8 consecutive reach situation inquiry(octal)
delay
Round-trip delay
offset
Clock offset
jitter
Clock jitter