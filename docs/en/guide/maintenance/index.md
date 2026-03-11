# Maintenance


## System Configuration

The system configuration module provides host name settings, services of Telnet, SSH, HTTP, HTTPS, and management IP setting.

### Host Name Settings

Select Maintenance > system configuration from the navigation area to enter the System Configuration page, as shown in Figure 5-1. User can set the host name of the switch here.

<p align="center"><em>Figure 5-1 Management information page</em></p>


### Services Enable

The service management module provides the following types of services: FTP, Telnet, SSH, SFTP, HTTP and HTTPS. You can enable or disable the services as needed. In this way, the performance and security of the system can be enhanced, thus secure management of the device can be achieved.
Telnet Server
The Telnet protocol is an application layer protocol that provides remote login and virtual terminal functions on the network.
SSH Server
Secure Shell (SSH) offers an approach to securely logging in to a remote device. By encryption and strong authentication, it protects devices against attacks such as IP spoofing and plain text password interception
HTTP Server
The Hypertext Transfer Protocol (HTTP) is used for transferring web page information across the Internet. It is an application-layer protocol in the TCP/IP protocol suite. You can log in to the device using the HTTP protocol with HTTP service enabled, accessing and controlling the device with Web-based network management.
HTTPS Server
The Secure HTTP (HTTPS) refers to the HTTP protocol that supports the Security Socket Layer (SSL) protocol. The SSL protocol of HTTPS enhances the security of the device in the following ways:
Uses the SSL protocol to ensure the legal clients to access the device securely and prohibit the illegal clients;
Encrypts the data exchanged between the HTTPS client and the device to ensure the data security and integrity, thus realizing the security management of the device;
Defines certificate attribute-based access control policy for the device to control the access right of the client, in order to further avoid attacks from illegal clients.
Configuring Service
- Select Maintenance > System Configuration from the navigation area to enter the System Configuration page, as shown in Figure 5-2.
- Check the box in front of the services, click Apply button to enable service.
- When HTTPS Server is enabled, the certificate and private key should be uploaded. If no certificate is specified, the device will use the default certificate.

<p align="center"><em>Figure 5-2 Service page</em></p>


### Management IP

1. Select Maintenance > System Configuration from the navigation area to enter the System Configuration page, as shown in Figure 5-3. Table 5-1 lists the configuration items of the management IP address.

<p align="center"><em>Figure 5-3 Management information page</em></p>

Table 5-1 Management information configuration items
Item
Description
VID
Specify the management VLAN ID.
The default management VLAN is 1.
IPv4 Type
None：IPv4 management address is not used.
Static：Select this option to manually specify an IPv4 address and the mask length
DHCP：Select the option to get an IPv4 address through DHCP.
IPv4 Address
Specify the IPv4 management address.
The default IP is 192.168.56.166.
IPv4 Mask
Specify the IPv4 management mask.
The default mask is 255.255.255.0.
IPv4 Gateway
Specify the IPv4 management gateway.
The default gateway is 192.168.56.1.
IPv6 Type
None：IPv6 management address is not used.
Static：Select this option to manually specify an IPv6 address and the mask length.
DHCP：Select the option to get an IPv6 address through DHCP.
IPv6 Address
Specify the IPv6 management address.
IPv6 Prefix Length
Specify the IPv6 management address prefix length.
IPv6 Gateway
Specify the IPv6 management gateway.

## File Management

The file management module includes basic information, image management, configuration management, certificate management, and page package management functions.

### Basic Information


![Image](/images/en/image179.png)


<p align="center"><em>Figure 5-4 Basic information page</em></p>


### Image Management

Software upgrade allows you to obtain a target application file from the current host and set the file as the main boot file or backup boot file to be used at the next reboot.

:::tip NOTE
NOTE:A software upgrade takes some time. Do not perform any operation on the web interface during the upgrading procedure; otherwise, the upgrade operation may be interrupted. NOTENOTE:A software upgrade takes some time. Do not perform any operation on the web interface during the upgrading procedure; otherwise, the upgrade operation may be interrupted.
:::


:::tip NOTE
:
:::


:::tip NOTE
A software upgrade takes some time. Do not perform any operation on the web interface during the upgrading procedure; otherwise, the upgrade operation may be interrupted.
:::


:::tip NOTE
:
:::


:::tip NOTE
A software upgrade takes some time. Do not perform any operation on the web interface during the upgrading procedure; otherwise, the upgrade operation may be interrupted.
:::

1. Select Maintenance > File Management > Image Management from the navigation area to enter the page as shown in Figure 5-5.

<p align="center"><em>Figure 5-5 Image management page</em></p>

2. Click Upgrade button, In the pop-up dialog box, select the upgrade file corresponding to the device, the upgrade file is *.bin format, and the upgrade process is shown in Figure 5-6. After upgrade finished, the device will be rebooted.

<p align="center"><em>Figure 5-6 Flash new firmware image page</em></p>


### Configuration Management

Select Maintenance > File Management > Image Management from the navigation area to enter the page as shown in Figure 5-7.

<p align="center"><em>Figure 5-7 Configuration file management page</em></p>

Backup Configuration
Click the Backup configuration button, a file download dialog box appears. You can save the file locally.
Restore Configuration
After you click the Choose File button in this figure, the file upload dialog box appears. You can select the *.conf file to be uploaded, then the device will be reboot.
Reset to Factory Defaults
This operation restores the system to factory defaults, delete the current configuration file, and reboot the device. Click the Reset to Factory Defaults button to apply this operation.

### Configuration Management

When you enable HTTPS, you need to upload the certificate and private key, as shown in Figure 5-8. If you do not specify a certificate, the device uses the default certificate.

<p align="center"><em>Figure 5-8 Configuration file management page</em></p>


### Page Package Management

The page package management module provides the ability to obtain the target page package file from the local host and apply the file as a device page package file, as shown in Figure 5-9.

<p align="center"><em>Figure 5-9 Configuration file management page</em></p>


## User Management

In the user management part, you can:
Set the username, password.
Create a new user.
Select Maintenance > User Management from the navigation area to enter the User Management page, as shown in Figure 5-10. Table 5-2 lists the configuration items of the user management.

<p align="center"><em>Figure 5-10 User management page</em></p>

Table 5-2 Account configuration items
Item
Description
Account
Name
User name
Edit
Click to change the password
Delete
Click to delete the user account
+Add…
Click to create a new user

## Time Management

The system time module allows you to display and set the device system time on the Web interface. The device supports setting system time through manual configuration and automatic synchronization of NTP server time.
An administrator cannot keep time synchronized among all the devices within a network by changing the system clock on each device, because this is a time consuming task and cannot guarantee clock precision.
Defined in RFC 1305, the Network Time Protocol (NTP) synchronizes timekeeping among distributed time servers and clients. NTP allows quick clock synchronization within the entire network and ensures a high clock precision so that the devices can provide diverse applications based on consistent time.

### View the System Time

Select Maintenance > Time Management from the navigation area to enter the Time Management page, as shown in Figure 5-11. The current system time and clock status are displayed. Table 5-3 shows the network time configuration items.

<p align="center"><em>Figure 5-11 System time configuration page</em></p>


:::tip NOTE
Table 5-3 System time configuration items
:::

Item
Description
Clock
System date and time
Time Zone
Choose time zone
Enable NTP
Enable/Disable NTP
NTP Server
Set the NTP server IP address
NTP IPv6 Server
Set the NTP server IPv6 address
NTP Host Server
Set the NTP host server

### Configuring System Time

1. Select Maintenance > Time Management from the navigation area to enter Time Management page.

![Image](/images/en/image188.png)

3. Click Save of the auxiliary area.

<p align="center"><em>Figure 5-12 System time configuration page</em></p>


### Configuring NTP Server

1. Select Maintenance > Time Management from the navigation area to enter Time Management page.
2. Enable NTP
3. Type 202.120.2.101 in the NTP Server IP box, as shown in Figure 5-13, click Apply.
4. Click Save of the auxiliary area.

<p align="center"><em>Figure 5-13 NTP server time configuration page</em></p>


## SNMP

Simple Network Management Protocol (SNMP) offers the communication rules between a management device and the managed devices on the network; it defines a series of messages, methods, and syn taxes to implement the access and management from the management device to the managed devices. SNMP has the following characteristics:

:::tip NOTE
Automatic network management. SNMP enables network administrators to search and modify information, find and diagnose network problems, plan for network growth, and generate reports on network nodes.
:::


:::tip NOTE
SNMP shields the physical differences between various devices and thus realizes automatic management of products from different manufacturers. Offering only the basic set of functions, SNMP makes the management tasks independent of both the physical features of the managed devices and the underlying networking technology. Thus, SNMP achieves effective management of devices from different manufacturers, especially in small, high-speed, and low-cost network environments.
:::

SNMP Mechanism
An SNMP enabled network comprises Network Management Station (NMS) and agent.

:::tip NOTE
An NMS is a station that runs the SNMP client software. It offers a user-friendly interface, making it easier for network administrators to perform most network management tasks.
:::


:::tip NOTE
An agent is a program on the device. It receives and handles requests sent from the NMS. Only under certain circumstances, such as interface state change, will the agent inform the NMS. NMS manages an SNMP enabled network, whereas agents are the managed network device. NMS and agents exchange management information through the SNMP protocol.
:::

SNMP provides the following four basic operations:

:::tip NOTE
Get operation: NMS gets the value of a certain variable of the agent through this operation.
:::


:::tip NOTE
Set operation: NMS can reconfigure the value of one or more objects in the agent MIB (Management Information Base) by means of this operation.
:::


:::tip NOTE
Trap operation: The agent sends traps to the NMS through this operation.
:::


:::tip NOTE
Inform operation: The NMS sends traps to other NMSs through this operation.
:::

SNMP Configuration
- Select Maintenance > SNMP from the navigation area to enter the SNMP page, as shown in Figure 5-15.
2. Select the SNMP version, configure the user, authentication encryption password, Trap host, and click the Apply button to complete the configuration.

<p align="center"><em>Figure 5-15 SNMP configuration page</em></p>


## Syslog Server


### Overview

During the operation of the device, various state changes such as link state UP, DOWN, etc. and also there will occur some events like abnormal handling and so on. The system log provides a serial of service that automatically generates messages in a fixed format during a status changes or an event happens, which are recorded on the device’s log file. It can be displayed on the trunk port and remote login terminal, and can also be sent to 1~3 groups of log servers on the network for administrators to analyze the network conditions and locate the problems.
To facilitate administrator reading and management of log messages, these log messages can be time-stamped, and graded by the priority of log information.

### Configuring Syslog Server

Select Maintenance > Syslog Server in the navigation area to enter the Syslog Server page, as shown in Figure 5-16, parameter instructions as shown in Table 5-4.

<p align="center"><em>Figure 5-16 Syslog server configuration page</em></p>


:::tip NOTE
Table 5-4 Syslog server parameters
:::

Item
Description
ID
The ID of the Syslog Server
Syslog Server
Configure the IP address of the remote server, and supports up to 3 remote server configurations
UDP port
Support remote server UDP protocol port configuration, range <1-65535>; default port number is 514 when UDP port isn’t configured
Operating Steps
1. Select Maintenance > Syslog Server in the navigation area to enter the Syslog Server page.
2. Click the +Add button under Syslog Server to enter the creation page, fill in the parameters according to the requirements, as shown in Figure 5-17, and click the OK button to complete the configuration.

:::tip NOTE
Table 5-17 Syslog server configuration page
:::

A Configuration Example
Device’s syslog sends to the remote server and the device’s IP is 192.168.1.240 while the remote server IP is 192.168.1.33, and the UDP port number is 10514.
1. Select Maintenance > Syslog Server in the navigation area to enter the Syslog Server page.
2. Click the +Add button under Syslog Server to enter the creation page, fill in the parameters according to the requirements, and click OK to complete the configuration, as shown in Figure 5-18.
3. Click the Save in the auxiliary area to save the configuration.

<p align="center"><em>Figure 5-18 Syslog server configuration page</em></p>
