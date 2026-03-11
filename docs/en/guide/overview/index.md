# Overview


## Brief

The device provides the Web-based network management function to facilitate the operations and maintenance on devices. Through this function, the administrator can visually manage and maintain network devices through the Web-based configuration interfaces. Figure 1-1 shows a Web-based network management operating environment:

![Web-based network management operating environment](/images/en/image1.png)   
<p align="center"><em>Figure 1-1 Web-based network management operating environment</em></p>


## Log in to the Web Interface

The device is provided with the default Web login information. The user can use the following default information to log in to the Web interface:
- Username: admin
- Password: admin
- IP address of the device: 192.168.56.166
To log in to the device through the Web interface:
1.  Connect the Ethernet interface of the device to the PC using a crossover Ethernet cable.
2.  Configure an IP address for the PC and ensure that the PC and device can communicate with each other properly.
3.  Modify the IP address of the PC to one that within the network segment 192.168.56.0/24 (except for 192.168.56.166), for example, 192.168.56.2.
4.  Open the browser, and input the login information.
5.  On the PC, open the browser, type the IP address http://192.168.56.166 in the address bar, press Enter and users can enter the login page of the Web interface, as shown in Figure 1-2. Input the username admin and password admin, and click Login.

:::tip 📝<strong>NOTE:</strong>
- For better display results, please use Edge, Chrome or Firefox browser for that other browsers may have compatible issues.
:::

![Login page of the Web interface](/images/en/image2.png)   
<p align="center"><em>Figure 1-2 Login page of the Web interface</em></p>

## Log out of the Web Interface

Click Logout button <image src="/images/en/image3.png"></image>in Auxiliary area to quit Web-based network management, as shown in Figure 1-3. The system does not save the current configuration before the user log out of the Web interface. Therefore, we recommend that the user save the current configuration before logout.

![logging out of Web interface](/images/en/image4.png)   
<p align="center"><em>Figure 1-3 logging out of Web interface</em></p>

:::tip 📝<strong>NOTE:</strong>
- You cannot log out by directly closing the browser.
:::

## Log Configuration


<p align="center"><em>Figure 1-4 Log configuration</em></p>


![Image](/images/en/image6.png)

This function enables capacity configuration, clearing and download of device logs with a default maximum capacity of 20 logs.

<p align="center"><em>Figure 1-5 Log information</em></p>


## Save Configuration

The save configuration module provides the function to save the current configuration to the configuration file for the next startup.

![Image](/images/en/image8.png)


<p align="center"><em>Figure 1-6 Save configuration</em></p>


## Reboot


:::tip NOTE
NOTE:Before rebooting the device, save the configuration; otherwise, all unsaved configurations are lost after device reboot. After the device reboots, you must re-log in to the Web interface. NOTENOTE:Before rebooting the device, save the configuration; otherwise, all unsaved configurations are lost after device reboot. After the device reboots, you must re-log in to the Web interface.
:::


:::tip NOTE
:
:::


:::tip NOTE
Before rebooting the device, save the configuration; otherwise, all unsaved configurations are lost after device reboot. After the device reboots, you must re-log in to the Web interface.
:::


:::tip NOTE
:
:::


:::tip NOTE
Before rebooting the device, save the configuration; otherwise, all unsaved configurations are lost after device reboot. After the device reboots, you must re-log in to the Web interface.
:::


![Image](/images/en/image10.png)


<p align="center"><em>Figure 1-7 Reboot configuration</em></p>


## Introduction to the Web Interface

The Web interface is composed of three parts: navigation area, auxiliary area, and body area, as shown in Figure 1-8.

<p align="center"><em>Figure 1-8 Web-based configuration interface</em></p>

（1）Navigation area
（2）Auxiliary area
（3）Body area
- Navigation area: Organize the Web-based NM function menus in the form of a navigation area where the user can select function menus as needed. The result is displayed in the body area. The Web network management functions not supported by the device are not displayed in the navigation area.
- Auxiliary area：The area where the user can search, alarm message prompt, save, exit, restart device, etc.
- Body area: The area where you can configure and display a function.

## Introduction to the Web-based Functions

Table 1-1 describes the Web-based network management functions in detail.
Table 1-1 Description of Web-based functions
Menu/ tab
Function Description
Monitor
Overview
Display the device's MAC address, serial number, software and hardware version, CPU usage, operating status such as uptime, and the link status and flow of the port
Port Statistics
Display the count of ports
Loop Protection
Display the loop protection status of the device
Security
Display the security class relating status of the device
Serial Server State
Display the working status of the serial port server of the device
LLDP State
Display the LLDP working status of the device
IGMP Snooping State
Display the device’s IGMP Snooping status
DHCP Snooping State
Display the DHCP snooping status of the device
QinQ Information
Display the device’s QinQ status
LoopDetect State
Display the port’s loop status
MAC Table
Display the MAC address table information
ARP/Neighbor Information
Display the port’s ARP/neighbor information
NTP State
Display the device’s NTP information
Configuration
VLAN
Create, modify, delete VLANs, and configure port attributes and VLAN attribution
Port
Port
Configuration
Set ports’ relating properties
Port Extension
Set ports’ rate limit, storm suppression and isolation
Port Mirroring
Add/remove mirroring of ports
Port
Aggregation
Add/delete aggregation of ports
Port Violation
Set the port’s violation rule
Spanning Tree
Set STP, RSTP, MSTP
ERPS
Set ERPS single ring, tangent ring, intersecting ring
PoE
Set PoE power, non-standard mode. Enable/disable PoE port power supply
Security
Port Security
Configure and delete the port’s security function
IP Source
Guard
Configure and delete the IP Source Guard function
Dot1x
Configure 802.1X Authentication
MAC Auth
Configure MAC Authentication Profiles
RADIUS
Configure the RADIUS server
Control
Serial Server
Configure serial server
IO Control
Configure DI, DO
LoopDetect
Configure the port’s loop detection function
DNS
Configure the DNS of the device
Advance
Layer 2
LLDP
Configuration
Configure and delete the LLDP function of the device
IGMP Snooping
Configuration
Display/Configure IGMP Snooping
MAC
Configuration
Configure the MAC address management mode of the device
DHCP
Snooping
Configuration
Configure DHCP Snooping on the Device
QinQ
Configuration
Configure the QinQ function of the device
Layer 3
ARP/Neighbor
Configuration
Configure the ARP/Neighbor function
Static Route
Configure the static route
Security
ACL
Configuration
Configure the ACL function of the device
QoS
Configuration
Configure the QoS function of the device
DoS
Configuration
Configure the DoS function of the device
Maintenance
System Configuration
Set the electronic label of the device, enable/disable Telnet, SSH, HTTP, HTTPS functions,
Set management IP
File Management
Firmware upgrade management, configuration management, certificate management, page package management
User Management
Create/delete users, set user passwords
Time Management
Display/set system current date and time
SNMP
Create, modify, delete SNMP configuration
Syslog Server
Create a new, edit, and delete the Syslog server
Diagnosis
Network Utility
Execute ping/trace route operation and display the execution result
Transceiver Information
View optical module information, such as manufacturer information, serial number, optical power, etc.
One-click Collection
Generate a diagnostic information file and open the file for viewing or saving to the local host
Dying Gasp
Enable/disable the power failure alarm function of dying gasp
Cable Detect
Check the electrical port ‘s cable status