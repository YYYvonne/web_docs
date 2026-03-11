# Advanced


## LLDP


### Overview

In a heterogeneous network, a standard configuration exchange platform ensures that different types of network devices from different vendors can discover one another and exchange configuration.
The Link Layer Discovery Protocol (LLDP) is specified in IEEE 802.1AB. The protocol operates on the data link layer to exchange device information between directly connected devices. With LLDP, a device sends local device information as TLV (type, length, and value) triplets in LLDP Data Units (LLDPDUs) to the directly connected devices. Local device information includes its system capabilities, management IP address, device ID, port ID, and so on. The device stores the device information in LLDPDUs from the LLDP neighbors in a standard MIB. LLDP enables a network management system to quickly detect and identify Layer 2 network topology changes.

:::tip NOTE
NOTE:TLV for PoE-related sections is not supported. NOTENOTE:TLV for PoE-related sections is not supported.
:::


:::tip NOTE
:
:::


:::tip NOTE
TLV for PoE-related sections is not supported.
:::


:::tip NOTE
:
:::


:::tip NOTE
TLV for PoE-related sections is not supported.
:::


### Configuring LLDP

LLDP Global Configuration
Select Advance > Layer2 > LLDP Configuration in the navigation area to enter the Global Configuration page, as shown in Figure 4-1. Table 4-1 describes the Global Configuration items.

![Image](/images/en/image118.png)

2. Type the boxes behind of the System Name and Description.
3. Click Apply button to enable LLDP Configuration.

<p align="center"><em>Figure 4-1 LLDP global configuration</em></p>

Table 4-1 LLDP global configuration items
Item
Description
Status
Disable: global disable
Enable: global enable
System Name
The name of the device, can be empty
Description
Description of the system, can be empty
Apply
Click to enable
LLDP Port Setting

:::tip NOTE
1. The LLDP Port Configuration page appears after global configuration is enabled, as shown in Figure 4-2.
:::


<p align="center"><em>Figure 4-2 LLDP port configuration status</em></p>

2. Click Batch Edit button below Port Configuration or Edit button correspond of the port to enter the page for configuring ports, as shown in Figure 4-3. Table 4-2 describes the configuration items of configuring ports.

<p align="center"><em>Figure 4-3 LLDP port status</em></p>

Table 4-2 LLDP port configuration items
Item
Description
Description
Description of the currently configured LLDP port
Agent Circuit ID
Agent circuit identification. Can be used as a value for port-id-tlv
Locally Assigned
Locally Assigned
Admin Status
Disabled: No LLDP packets are sent/receive on the interface
TxOnly: LLDP packets are sent on the interface
RxOnly: LLDP packets are received on the interface
TxRx: LLDP packets are sent/receive on the interface
Chassis Subtype
Mac-address: indicates the MAC address
If-alias: Indicates the interface alias
If-name: indicates the interface name
IP-address: Indicates the IP address
Locally-assigned: indicates local configuration
Port ID Subtype
Mac-address: indicates the MAC address
If-alias: Indicates the interface alias
If-name: indicates the interface name
IP-address: Indicates the IP address
Agt -circuit-id: Indicates the agt-circuit-id
Locally-assigned: indicates locally-assigned value
Management
Address Subtype
Mac-address: Device MAC address
IP-address: Device IP address
Basic Tlvs
port-description: port descriptor
system-description: system descriptor
management-address: management address
system-name: system name
system-capabilities: system capabilities

## Tlvs

port-vlanid: port's vlanid
ptcl -identity: protocol id
vid-digest: vid digest
vlan-name: vlan name
port-ptcl - vlanid: port protocol vlanid
link- agg mgmt -vid: Link Aggregation Management vid

## Tlvs

mac-phy: The rate and duplex status supported by the port, whether it supports port rate auto-negotiation, whether the auto-negotiation function is enabled, and the current rate and duplex status
max - mtu -size: maximum mtu value
Tx hold
Transmission hold, the default value txFastInit is 4, used for packet TTL calculation; TTL= msgTxInterval * msgTxHold + 1
Tx interval
Transfer intervals, default is 30 s; admin can change this value to any value between5and 300.
Reinit delay
Indicates the amount of delay between when adminStatus becomes ' disabled' and when reinitialization is attempted. The default value of reinitDelay is 2 s.
Fast tx
Defines the time interval for the timer interval between two transfers within a fast transfer period (ie txFast is not zero). The default value for msgFastTx is 1; administrators can change this value to any value between 1 and 3600.
Tx fast init
This variable is used as the initial value of the txFast variable. This value determines the number of LLDPDUs transmitted during the fast transmission period.
Tx credit max
Configure the maximum value of txCredit. The default value is 5. Administrators can change this value to any value in the range 1 to 10.
View LLDP State
In the current page, click the LLDP State button on the right to enter the LLDP State page, as shown in Figure 4-4, and the specific parameters are described as described in Table 4-3.

<p align="center"><em>Figure 4-4 LLDP port statistics</em></p>

Table 4-3 LLDP port configuration items
Item
Description
Name
Description of the currently configured LLDP port
Tx
The number of packets sent on the interface
Aged
The number of packets aged on the interface
Rx
The number of packets received on the interface
Rx Errors
The number of error packets received on the interface
Discards
The number of packets discarded on the interface
Discard Tlvs
The number of Tlv packets of discarded on the interface
Unknown Tlvs
The number of unknown Tlvs packets on the interface
CLEAR
Clear counters on the current interface
View Neighbor Information
On the current LLDP State page, click the Neighbor button of the corresponding port to enter the Neighbor Information view interface.

<p align="center"><em>Figure 4-5 LLDP neighbor information</em></p>


## IGMP Snooping

Internet Group Management Protocol Snooping (IGMP snooping) is a multicast constraining mechanism that runs on Layer 2 devices to manage and control multicast groups.

### Principle of IGMP Snooping

By analyzing received IGMP messages, a Layer 2 device running IGMP snooping establishes mappings between ports and multicast MAC addresses and forwards multicast data based on these mappings. As shown in Figure 4-6, when IGMP snooping is not running on the switch, multicast packets are flooded to all devices at Layer 2. However, when IGMP snooping is running on the switch, multicast packets for known multicast groups are multicast to the receivers, rather than broadcast to all hosts, at Layer 2.

<p align="center"><em>Figure 4-6 Multicast forwarding before and after IGMP snooping runs</em></p>


### Configure the IGMP Snooping

4.2.2.1 Global Configuration
Select Advance > Layer2 > IGMP Snooping Configuration in the navigation area to enter the Global Configuration page, as shown in Figure 4-7. Table 4-4 describes the IGMP snooping configuration items.

<p align="center"><em>Figure 4-7 IGMP global configuration</em></p>

Table 4-4 IGMP snooping summary items
Item
Description
Global Configuration
State
Disabled: global disable
Enabled: global enable
Discard Unknown Multicast
If this option is enabled, unknown multicast traffic will be dropped by switch.
TC Suppression
If this option is enabled, topology change event will be ignored by switch
4.2.2.2 IGMP Mrouter Interface Configuration
1. Select Advance > Layer2 > IGMP Snooping Configuration in the navigation area to enter the IGMP M-router Interface section as shown in Figure 4-8. Table 4-5 describes the IGMP M-router Interface configuration items.

<p align="center"><em>Figure 4-8 IGMP M-router interface</em></p>

Table 4-5 IGMP M-router interface items
Item
Description
IGMP M-router Interface
VID
VLAN ID
Interface
Interface Name.
Delete
Click to delete this entry.
2. Click the +Add button to create an IGMP M-router Interface, as shown in Figure 4-9. Configure VID and Interface,then click OK.

<p align="center"><em>Figure 4-9 Creating IGMP M-router interface</em></p>

4.2.2.3 IGMP Static Group Configuration
1. Select Advance > Layer2 > IGMP Snooping Configuration in the navigation area to enter the IGMP Static Group section as shown in Figure 4-10. Table 4-6 describes the IGMP static group configuration items.

<p align="center"><em>Figure 4-10 IGMP static group</em></p>

Table 4-6 IGMP static group items
Item
Description
IGMP Static Group
VID
VLAN ID
Group Address
Group IP address
Source Address
Source IP address
Interface
Interface name.
Delete
Click to delete this entry.
2. Click the +Add button to create an IGMP static group, as shown in Figure 4-11. Configure VID, Group Address, Source Address and Interface, then click OK.

<p align="center"><em>Figure 4-11 Creating IGMP static group</em></p>


## MAC Management


### Overview

A device maintains a MAC address table for frame forwarding. Each entry in this table indicates the MAC address of a connected device, to which interface this device is connected and to which VLAN the interface belongs. A MAC address table consists of two types of entries: static and dynamic. Static entries are manually configured and never age out. Dynamic entries can be manually configured or dynamically learned and will age out.
Your device learns a MAC address after it receives a frame from a port, port A for example, as it executes the following steps.
1. Checks the frame for the source MAC address (MAC-SOURCE for example).
2. Looks up the MAC address table for an entry corresponding to the MAC address and do the following:
If an entry is found for the MAC address, updates the entry.
If no entry containing the MAC address is found, adds an entry that contains the MAC address and the receiving port (port A) to the MAC address table.
3. After the MAC address (MAC-SOURCE) is learned, if the device receives a frame destined for MAC-SOURCE, the device looks up the MAC address table and then forwards the frame from port A.
When forwarding a frame, the device adopts the following forwarding modes based on the MAC address table:
Unicast mode: If an entry matching the destination MAC address exists, the device forwards the frame directly from the sending port recorded in the entry.
Broadcast mode: If the device receives a frame with the destination address being all FS, or no entry matches the destination MAC address, the device broadcasts the frame to all the ports except the receiving port.

<p align="center"><em>Figure 4-12 MAC address table of the device</em></p>


### Configuring MAC Addresses

MAC addresses configuration includes the configuring and displaying of static MAC address, Filter MAC Address, and the setting of MAC address entry aging time.
Global Configuration
1. Select Advance > Layer2 > MAC Configuration in the navigation area to enter the MAC Global Configuration page shown in Figure 4-13. Table 4-7 describes the MAC configuration items.

<p align="center"><em>Figure 4-13 MAC global configuration</em></p>

Table 4-7 MAC global configuration items
Item
Description
Global
configuration
Aging time
Set the aging time for the MAC address, the default value is 300 seconds.
Apply
Click to enable
Configuring Static MAC Address
1. Select Advance > Layer2 > MAC Configuration in the navigation area to enter the Static MAC Address Configuration page shown in Figure 4-14.

<p align="center"><em>Figure 4-14 MAC static address page</em></p>

2. Click +Add to enter the page for creating static MAC address, as shown in Figure 4-15. Table 4-8 shows the detailed configuration for creating a static MAC address.
3. Type in MAC address box, for example ‘00eb.fc00.8877’, select the VID in the VLAN drop down list, select the Interface in the Interface drop list.
4. Click OK to end the operation.

<p align="center"><em>Figure 4-15 Creating static MAC address</em></p>

Table 4-8 Static MAC address items
Item
Description
Static
Mac
Address
MAC Address
Set the MAC address to be added.
VID
Sets the ID of the VLAN to which the MAC address belongs.
Interface
Sets the port to which the MAC address belongs.
Configuring Filter MAC Address
1. Select Advance > Layer2 > MAC Configuration from the navigation area. The system automatically displays the Filter MAC Address page, as shown in Figure 4-16.

<p align="center"><em>Figure 4-16 MAC static address page</em></p>

2. Click +Add to enter the page for creating filter MAC address, as shown in Figure 4-17. Table 4-9 shows the detailed configuration for creating a filter MAC address.
3. Type in MAC address, for example ‘00eb.fc00.8877’, select the VID in the VLAN drop down list.
4. Click Apply to end the operation.

<p align="center"><em>Figure 4-17 Creating filter MAC address</em></p>

Table 4-9 Filter MAC address items
Item
Description
Static
Mac
Address
MAC Address
Set the MAC address to be filtered.
VID
Sets the ID of the VLAN to which the MAC address belongs.

## DHCP Snooping


### Overview

DHCP (Dynamic Host Configuration Protocol) snooping is a security feature that acts like a firewall between untrusted hosts and trusted DHCP servers. When DHCP snooping is enabled on a VLAN, the system examines DHCP messages sent from untrusted hosts associated with the VLAN and extracts their IP addresses and lease information. This information is used to build and maintain the DHCP snooping database.
DHCP snooping is enabled on a per-VLAN basis. By default, the feature is inactive on all VLANs. You can enable the feature on a single VLAN or a range of VLANs.
Trusted Sources
The DHCP snooping feature determines whether traffic sources are trusted or untrusted. DHCP snooping acts as a guardian of network security by keeping track of valid IP addresses assigned to downstream network devices by a trusted DHCP server. The default trust state of all interfaces is untrusted.
DHCP Snooping Limit Rate
Configure the number of DHCP packets per second that an interface can receive, to reduce or eliminate the impact of DHCP packet attack from this interface.
MAC Address Verification
With DHCP snooping MAC address verification enabled, DHCP snooping verifies that the source MAC address and the client hardware address match in DHCP packets that are received on untrusted ports. The source MAC address is a Layer 2 field associated with the packet, and the client hardware address is a Layer 3 field in the DHCP packet.
Option-82 Insertion
DHCP Option82 option is also called DHCP relay agent information option, one of many DHCP options. The Option82 option is a DHCP option proposed to enhance the security of the DHCP server and improve the IP address allocation strategy. The addition and stripping of options are implemented by the relay component.
DHCP Database
The DHCP snooping feature dynamically builds and maintains the database using information extracted from intercepted DHCP messages. The database contains an entry for each untrusted host with a leased IP address if the host is associated with a VLAN that has DHCP snooping enabled. The database does not contain entries for hosts connected through trusted interfaces. When the IP verify source function is enabled on the interface, database entries act as valid users on the interface.

### Configuring DHCP Snooping

Configuring DHCP Snooping Globally
1. Select Advance > Layer2 > DHCP Snooping from the navigation tree to enter the DHCP Snooping Configuration page, as shown in Figure 4-18. Table 4-10 describes the configuration items of configuring DHCP globally.

<p align="center"><em>Figure 4-18 DHCP snooping global configuration</em></p>

Table 4-10 The description of DHCP snooping global configuration
Item
Description
Status
Enable/Disable the DHCP Snooping globally
VLAN
Enable/Disable the DHCP Snooping on the VLANs
Verify mac-address
Verify the source MAC address and the client hardware address is matched in DHCP packets
option-82
Enable/Disable option-82 insertion
DB write-delay(s)
Configure the interval time database writing to flash
Configuring DHCP Snooping Ports
1. Select Advance > Layer2 > DHCP Snooping from the navigation tree, as shown in Figure 4-19.

<p align="center"><em>Figure 4-19 DHCP snooping interface configuration status</em></p>

2. Click Batch Edit button below Port Configuration or Edit button correspond of the port to enter the page for configuring ports.
3. Check the ports to be configured, click Edit to enter the Interface Configuration page as shown in Figure 4-20. Table 4-11 describes the configuration items of DHCP snooping interface configuration.

<p align="center"><em>Figure 4-20 DHCP snooping global configuration</em></p>

Table 4-11 The description of DHCP snooping interface configuration
Item
Description
Trust
determines whether traffic sources are trusted or untrusted
Ratelimit(pps)
Configure the number of DHCP packets per second that an interface can receive

:::tip NOTE
NOTE:✦ Due to hardware limitations, for DHCP rate limit, when the limit value is not 0, the software rate limit is used, and when the limit value is 0, the hardware rate limit is used. Software rate limit will consume CPU resources. NOTENOTE:✦ Due to hardware limitations, for DHCP rate limit, when the limit value is not 0, the software rate limit is used, and when the limit value is 0, the hardware rate limit is used. Software rate limit will consume CPU resources.
:::


:::tip NOTE
:
:::

✦ Due to hardware limitations, for DHCP rate limit, when the limit value is not 0, the software rate limit is used, and when the limit value is 0, the hardware rate limit is used. Software rate limit will consume CPU resources.

:::tip NOTE
:
:::

✦ Due to hardware limitations, for DHCP rate limit, when the limit value is not 0, the software rate limit is used, and when the limit value is 0, the hardware rate limit is used. Software rate limit will consume CPU resources.
View DHCP Snooping State
1. Click the DHCP Snooping state button in the current page to enter the DHCP Snooping State page, as shown in Figure 4-21. Table 4-12 describes the configuration items of configuring DHCP snooping database.

<p align="center"><em>Figure 4-21 DHCP snooping database</em></p>

Table 4-12 The description of DHCP snooping database
Item
Description
Search
Search database entries by fuzzy match the input strings
WRITE
Write database entries to flash
READ
Read database entries from flash
CLEAR
Clear database entries, you can narrow the scope by selecting keywords

## QinQ


### Overview

Introduction to QinQ
QinQ stands for 802.1Q in 802.1Q. QinQ is a flexible, easy-to-implement Layer 2 VPN technology based on IEEE 802.1Q. QinQ enables the edge device on a service provider network to insert an outer VLAN tag in the Ethernet frames from customer networks, so that the Ethernet frames travel across the service provider network (public network) with double VLAN tags. QinQ enables a service provider to use a single SVLAN to serve customers who have multiple CVLANs.
Background and Benefits
The IEEE 802.1Q VLAN tag uses 12 bits for VLAN IDs. A device supports a maximum of 4094 VLANs. This is far from enough for isolating users in actual networks, especially in metropolitan area networks (MANs).
By tagging tagged frames, QinQ expands the available VLAN space from 4094 to 4094 × 4094. QinQ delivers the following benefits:
Releases the stress on the SVLAN resource.
Enables customers to plan their CVLANs without conflicting with SVLANs.
Provides an easy-to-implement Layer 2 VPN solution for small-sized MANs or intranets.
Allows the customers to keep their VLAN assignment schemes unchanged when the service provider upgrades the service provider network.

### QinQ Configuration

VPN Configuration
1. Select Advance > Layer2 > QinQ Configuration in the navigation area. The system automatically enters the page as shown in Figure 4-22.

<p align="center"><em>Figure 4-22 VPN configuration summary</em></p>

2. Click +Add button below VPN Configuration to enter the VPN Rule Creating page, as shown in Figure 4-23, Table 4-13 describes the items of configuring a QinQ rule.

<p align="center"><em>Figure 4-23 VPN configuration</em></p>

Table 4-13 VPN configuration description
Item
Description
Name
The name of the VLAN VPN Rule
CVID
The ID of the customer VLAN
SVID
The ID of the service provider VLAN
Port Configuration
1. Select Advance > Layer2 > QinQ Configuration in the navigation area. The system automatically enters the page as shown in Figure 4-24.

<p align="center"><em>Figure 4-24 Port configuration summary</em></p>

2. Click Batch Edit button below Port Configuration or Edit button correspond of the port to enter the QinQ Port Configuration page, as shown in Figure 4-25, Table 4-14 describes the items of configuring port.

<p align="center"><em>Figure 4-25 Port configuration</em></p>

Table 4-14 The description of configuring a QinQ rule
Item
Description
Basic
Enable VLAN mapping mode
VLAN Stacking
Multi-layer tag mode
VLAN Mapping
tag replacement mode

## ACL


### Overview

An access control list (ACL) is a set of rules (or permit or deny statements) for identifying traffic based on criteria such as source IP address, destination IP address, and port number. ACLs are essentially used for packet filtering. A packet filter drops packets that match a deny rule and permits packets that match a permit rule. ACLs are also widely used by many modules, for example, QoS and IP routing, for traffic identification.

### Configuring ACLs


:::tip NOTE
NOTE:✦A maximum of 128 rules can be configured under a single ACL-ID; due to hardware resource limitations, please refer to the specific product specification document for the maximum number of application rules supported by a single device. ✦When an ACL has been applied to a port, if you need to add and delete rules, you must first unapply them from the port.. NOTENOTE:✦A maximum of 128 rules can be configured under a single ACL-ID; due to hardware resource limitations, please refer to the specific product specification document for the maximum number of application rules supported by a single device. ✦When an ACL has been applied to a port, if you need to add and delete rules, you must first unapply them from the port..
:::


:::tip NOTE
:
:::

✦A maximum of 128 rules can be configured under a single ACL-ID; due to hardware resource limitations, please refer to the specific product specification document for the maximum number of application rules supported by a single device.
✦When an ACL has been applied to a port, if you need to add and delete rules, you must first unapply them from the port.
.

:::tip NOTE
:
:::

✦A maximum of 128 rules can be configured under a single ACL-ID; due to hardware resource limitations, please refer to the specific product specification document for the maximum number of application rules supported by a single device.
✦When an ACL has been applied to a port, if you need to add and delete rules, you must first unapply them from the port.
.
Configuring a Rule for an IP ACL
1. Select Advance > Security > ACL Configuration in the navigation area.
2. Click the +Add ACL button to enter the Rule Configuration page and choose the ACL type IP for a basic ACL as shown in Figure 4-26. Table 4-15 describes the configuration items of configuring an IP ACL.
Figure 4-26. Configuring a basic IP ACL
Table 4-15 The description of the basic IP ACL
Item
Description
ACL Type
IP
Standard IP ACL can match the source IP field in IPv4 packets
IP-Extend
the protocol number, source IP address, destination IP address, Layer 4 port number, etc. of IPv4 packets
IPV6
IPv6 ACL can match IPv6 packet source IP address, destination IP address, protocol number, etc
MAC
MAC ACL, which can match destination MAC address, source MAC address, Etype and other fields
Name
Standard IP valid number range: <1-99> | <1300-1999>
Extended IP valid number range: <100-199> | <2000-2699>
MAC ACL valid number range: <200-699>
IPv6 ACL only supports string naming. All ACLs support string naming.
The string length range is <1-64>
Count Enable
Enable the counting function. When a packet hits the ACL, the count value is increased by 1
Initial SN
Starting value of rule entry sequence number, default value: 10, range <1-2147483647>
Space
Increment the serial number, default value: 10, range <1-2147483647>
Description
Define the ACL description information
3. Configure a rule for an IP ACL, and click OK.
4. Select IP rule in the box below ACE Configuration and click +Add ACE button to enter ACE Configuration page as shown in Figure 4-27. Table 4-16 describes the configuration items of configuring an IP ACE configuration.

<p align="center"><em>Figure 4-27 IP type ACE configuration interface</em></p>

Table 4-16 The description of the IP type ACL
Item
Description
Access
Control
permit
Release the packets that match this rule
deny
Discard packets matching this rule
SN
Rule entry sequence number
Src Address
Source IP address, such as 192.168.64.1
Src Mask
The IP mask is inverted. If it matches the first 24 digits of the IP address, the mask is 255.255.255.0. Here it needs to be configured as 00.00.00.255
5. Configure ACE and click OK.
4. Click Batch Edit below Port Configuration to enter the ACL Port Configuration page, select the ACL rules of the corresponding port, as shown in Figure 4-28, and click OK.

<p align="center"><em>Figure 4-28 Apply the ACL rule to the port</em></p>

Configuring a Rule for an IP-Extend ACL
1. Select Advance > Security > ACL Configuration in the navigation area.
2. Click the +Add ACL button to enter the Rule Configuration page and choose the ACL type IP-Extend for a basic ACL as shown in Figure 4-26.
3. Configure a rule for an IP ACL, and click OK.
4. Select ACK rules in the box below ACE Configuration and click +Add ACE button to enter ACE Configuration page as shown in Figure 4-29. Table 4-17 describes the configuration items of configuring an IP ACE configuration.

<p align="center"><em>Figure 4-29 IP-Extend type ACE configuration interface</em></p>

Table 4-17 The description of the IP-Extend ACL
Item
Description
Access
Control
permit
Release the packets that match this rule
deny
Discard packets matching this rule
SN
Rule entry sequence number
Protocol
Supports common protocol message options, including tcp, udp, vrrp, igmp, gre, ipcomp, ospf, pim, rsvp, etc.
Supports all IP v4 packets
IPv4 messages of customized protocol
Src Address
Source IP address, such as 192.168.64.1
Src Mask
The IP mask is inverted. If it matches the first 24 digits of the IP address, the mask is 255.255.255.0. Here it needs to be configured as 00.00.00.255
Dest Address
Destination IP address, such as 192.168.64.100
Dest Mask
homology mask
5. Configure ACE and click OK.
6. Click Batch Edit below Port Configuration to enter the ACL Port Configuration page, select the ACL rules of the corresponding port, and click OK.
Configuring a Rule for an IPV6 ACL
1. Select Advance > Security > ACL Configuration in the navigation area.
2. Click the +Add ACL button to enter the rule configuration page and choose the ACL type IPV6 for a basic ACL as shown in Figure 4-26.
3. Configure a rule for an IP ACL, and click OK.
4. Select ACL rules in the box below ACE Configuration and click +Add ACE button to enter ACE Configuration page as shown in Figure 4-30. Table 4-18 describes the configuration items of configuring an IP ACE configuration.

<p align="center"><em>Figure 4-30 IPV6 type ACE configuration interface</em></p>

Table 4-18 The description of the IPV6 ACL
Item
Description
Access
Control
permit
Release the packets that match this rule
deny
Discard packets matching this rule
SN
Rule entry sequence number
Protocol
Supports common protocol message options , including tcp , udp , icmp , etc.
Supports all IP v 6 packets
Support IPv6 messages of customized protocol
Src Address
Source MAC address, such as 00.d 0.f 8.22.33.40
Src Mask
The MAC address mask is inverted. If it matches the first 24 digits of the MAC address , the mask is ffff.ff00.0000. Here it needs to be configured as 0000.00 ff.ffff
Dest Address
Destination MAC address, such as 00.d 0.f 8.22.33.41
Dest Mask
homology mask
5. Configure ACE and click OK.
6. Click Batch Edit below Port Configuration to enter the ACL Port Configuration page, select the ACL rules of the corresponding port, and click OK.
Configuring a Rule for an MAC ACL
1. Select Advance > Security > ACL Configuration in the navigation area.
2. Click the +Add ACL button to enter the Rule Configuration page and choose the ACL type IPV6 for a basic ACL as shown in Figure 4-26.
3. Configure a rule for an IP ACL, and click OK.
4. Select ACK rules in the box below ACE Configuration and click +Add ACE button to enter ACE Configuration page as shown in Figure 4-31. Table 4-19 describes the configuration items of configuring an IP ACE configuration.

<p align="center"><em>Figure 4-31 Apply the ACL rule to the port</em></p>

Table 4-19 The description of the MAC ACL
Item
Description
Access
Control
permit
Release the packets that match this rule
deny
Discard packets matching this rule
SN
Rule entry sequence number
Ethertype
Ethernet protocol type, range (0x05DD-0xFFFF)
CoS
CoS value of the message, range (0-7)
Src Address
Source MAC address, such as 00.d0.f 8.22.33.40
Src Mask
The MAC address mask is inverted. If it matches the first 24 digits of the MAC address, the mask is ffff.ff00.0000. Here it needs to be configured as 0000.00ff.ffff
Dest Address
Destination MAC address, such as 00.d0.f 8.22.33.41
Dest Mask
homology mask
5. Configure ACE and click OK.
6. Click Batch Edit below Port Configuration to enter the ACL Port Configuration page, select the ACL rules of the corresponding port, and click OK.

## QoS


### Overview

Quality of Service (QoS) reflects the ability of a network to meet customer needs. In an internet, QoS evaluates the ability of the network to forward packets of different services. The evaluation can be based on different criteria because the network may provide various services. Generally, QoS performance is measured with respect to bandwidth, delay, jitter, and packet loss ratio during packet forwarding process.

### Configuring QoS

Enable QoS
1. Select Advance > Security > QoS Configuration in the navigation area to enter the QoS Global Configuration page, as shown in Figure 4-32. Table 4-20 describes the QoS summary items.

<p align="center"><em>Figure 4-32 QoS global configuration</em></p>


![Image](/images/en/image150.png)

Table 4-20 Descriptions of QoS summary
Item
Description
QoS
Configuration
State
Enable QoS, all QoS functions do not support configuration before enabling
Algorithm
Sp
Absolute priority scheduling, the queue ID is large, the priority is high, and the low-priority queue is processed after the high -priority queue is processed.
Wrr
robin scheduling algorithm schedules each queue in turn according to the queue weight, from the largest to the smallest queue ID.
QoS Mapping
1. In current page, click Queue button below QoS Mapping to enter Queue Configuration page, as shown in Figure 4-33. Table 4-21 describes the QoS summary items.

<p align="center"><em>Figure 4-33 Queue configuration</em></p>

Table 4-21 Descriptions of queue configuration
Item
Description
Queue
weight
Queue
< 0, 7 >
weight
< 0, 32>, the larger the value, the higher the weight, and the higher the probability of preferential processing of packets in this queue under the condition of channel congestion, 0 means infinity.
2. Click CoS button below QoS Mapping to enter CoS Configuration page, as shown in Figure 4-34. Table 4-22 describes the CoS configuration items.

<p align="center"><em>Figure 4-34 CoS configuration</em></p>

Table 4-22 Descriptions of CoS configuration
Item
Description
CoS
Configuration
CoS
<0, 7>
Queue
< 0, 7>, CoS-queue mapping relationship, based on the CoS marked on the port, modifying the packet egress queue takes effect when the port is configured as no trust, trust CoS or trust DSCP and non-IP packets.
DSCP
CoS-dscp mapping relationship takes effect when the port is configured as no trust, trust cos or trust DSCP and is not IP packets. Modify the packet DSCP value.
3. Click DSCP button below QoS Mapping to enter DSCP Configuration page, as shown in Figure 4-35. Table 4-23 describes the DSCP configuration items.

<p align="center"><em>Figure 4-35 CoS configuration</em></p>

Table 4-23 Descriptions of CoS configuration
Item
Description
DSCP
Map
DSCP
<0, 63>
Queue
< 0, 7>, dsp-queue mapping relationship, which takes effect when the port is configured as trust DSCP and IP packets, modify the packet export queue
CoS
< 0, 7>, dscp-cos mapping relationship, which takes effect when the port is configured as trust DSCP and IP packets, modify the cos field of the packet
New
DSCP
< 0, 63 >, dscp-dscp mapping relationship, which takes effect when the port is configured as trust DSCP and IP packets, first perform dscp-dscp mapping, and then perform dscp-cos mapping
Class Setting
1. In current page, click +Add button below Class Setting to enter Class Setting page, as shown in Figure 4-36. Table 4-24 describes the QoS summary items.

<p align="center"><em>Figure 4-36 Class setting page</em></p>

Table 4-24 Descriptions of class setting
Item
Description
Class Setting
Name
Create a category, define the category name
Match
Define match type, support associated ACL;
Support packet ETYPE, DSCP, CoS, l4port, VLAN field matching
Policy Setting
1. In current page, click +Add Policy button below Policy Setting to enter Policy Setting page, as shown in Figure 4-37. Text the box behind Name, click OK button.

<p align="center"><em>Figure 4-37 Class setting page</em></p>

2. Click +Add Policy Rule button below Policy Setting to enter Policy Rule Setting page, as shown in Figure 4-38. Table 4-25 describes the QoS rule configuration items.

<p align="center"><em>Figure 4-38 Rule configuration page</em></p>

Table 4-25 Descriptions of class setting
Item
Description
Rule
Configuration
Name
Rule name
Class Name
Create a policy, define a policy name
Modify
policy, supports modifying CoS, DSCP, VLAN and other actions
Ratelimit
Action 2 corresponding to the strategy, speed limit
CIR
Speed limit waterline, unit kbps
CBS
burst capability, unit Kbyte
Port Configuration
1. In current page, click +Batch Edit button below Port Configuration to enter Port Configuration page, as shown in Figure 4-39. Table 4-26 describes the port configuration items.

<p align="center"><em>Figure 4-39 Port configuration page</em></p>

Table 4-26 Descriptions of port configuration
Item
Description
Port
Configuration
Default
CoS
< 0, 7>, when the configuration port is not trusted, or the configuration is trusted but the message does not meet the trust condition, the port default cos is used to mark the ingress message
Trust
Support untrust, trust cos, trust DSCP configuration. When in no trust mode, the entry stage modifies the cos field and DSCP field of the message according to the default cos of the port; when trust cos is configured, the same as the no trust mode for untagged messages, and for tagged messages, choose the message with its own CoS; When configuring trust DSCP, for IP packets, select the packet with DSCP , and for non-IP packets, it is the same as trust cos mode.
Ingress
Policy
Select Ingress Policy

## DoS


### Overview

Denial of Service (DoS) attack aims to prevent the computer or network from providing normal service. There are many kinds of DoS attacks, and also many different implementation methods. Its common trait is that the victim host or network can not receive and process external requests in time. Here are some typical DoS attack types.
SYN Flood Message Attack:
SYN Flood attack is the most common DDOS attack on the current network, but also the most classic DoS attack. By sending a large number of attack messages with fake source addresses to the port of the network service, the target server connection queue is full, thus blocking access to other legitimate users.
ICMP Flood Message Attack:
ICMP Flood attack is a DDOS attack that sends a large number of ping packets to the target host in a short period of time and consumes the host resources. The host can’t provide any other service after its resources are exhausted.
ARP Flood Message Attack:
ARP Flood attack is a DDOS attack that sends a large number of ARP request packets to the target host in a short period of time and consumes the host resources. Unable to answer other ARP requests after the host resources are exhausted.
NULL SCAN Message Attack:
NULL SCAN attack is mainly that the attacker sends TCP packets without any flag to the target host’s IP, and parts of operating systems actively feedback RST messages, so that the attacker obtains the port that does not close the session. Anti-NULL SCAN attack is to discard TCP messages without any TCP flag bits, which can effectively prevent attackers from launching subsequent attacks after obtaining the closure of each port through NULL SCAN.
TCP Message with SYN and FIN：
Normally, the SYN sign (connection request sign) and the FIN sign (connection removal sign) can’t appear in one TCP message, and the RFC does not specify how the IP stack will handle such a deformed message. The attacker can take advantage of this feature to determine the type of operating system by sending TCP messages with SYN and FIN settings.
TCP Message with FIN without ACK:
Under normal circumstances, except for the first message(SYN message), all messages possess ACK signs, including the TCP connection removal message (message with FIN sign setting). However, some attackers may send TCP messages which are with FIN and without ACK to the target host so that it may cause the target host to crash.
TCP Message with SYN and Source Port Number Between 0-1023:
0-1023 is the known port number assigned by IANA and in most systems can be used only by the system (or root) process or the procedure executed by privileged users. These ports (0-1023) can’t be used as the source port number for the first TCP message (already has been set the SYN sign). Start the anti-illegal TCP message attack function, the device will check according to the characteristics of non-TCP message, if illegal, then discarded.
Our company provides the above several anti-DoS attack functions.

### Configuring DoS

In the navigation area, select Advance > Security > DoS Configuration and enter the DoS Configuration page. This page contains four parts: Global Configuration, SYN Configuration, ICMP Configuration, and ARP Configuration.
Global Configuration
The DoS Global Configuration page is shown in Figure 4-40, including several global anti-DoS attack configurations, and the specific parameters are shown in Table 4-27. Global SYN Flood, ICMP Flood and ARP Flood configure in the same way. Take the ARP Flood Configuration for example, the setting page is as Figure 4-41.

<p align="center"><em>Figure 4-40 Global configuration page</em></p>

Table 4-27 Descriptions of global configuration
Item
Description
NULL SCAN Deny
Configure the global anti-NULL SCAN attack, and discard the TCP message without any flag
SYN FIN Deny
Configure global anti-SYN FIN attack, and discard TCP messages set by both SYN and FIN flag
SYN SPORT1024 Deny
Configure the global anti-SYN SPORTL1024 attack, and discard the synchronous message of the source port (0-1023) TCP after opening
FIN NOACK Deny
Configure global anti-FIN NOACK attack, and discard TCP messages with FIN set without ACK set
SYN/ICMP/ARP Flood
Configure global anti-SYN/ICMP/ARP Flood attack
SYN/ICMP/ARP Flood rate-limit
Configure the rate limit range of anti-SYN/ICMP/ARP Flood attack and if its value is 0, deny all attack messages
Counter enable
Configure the counter enable function of anti-SYN/ICMP/ARP Flood attack and if it’s enabled, count the hit attack message

<p align="center"><em>Figure 4-41 ARP configuration page</em></p>

Operating Steps
1. Select Advance > Security > DoS Configuration in the navigation bar to enter the DoS Configuration page.
2. Click the Edit button in the Global Configuration table to enter the anti-DoS attack creation modal, and fill in the parameters according to requirements. Take the Global ARP Flood Configuration for instance, as shown in Figure 4-42, and click the OK button to complete the configuration.

<p align="center"><em>Figure 4-42 ARP Flood configuration page</em></p>

After above steps, the successful DoS Global Configuration page is shown in Figure 4-43.

<p align="center"><em>Figure 4-43 Global ARP Flood configuration page</em></p>

SYN/ICMP/ARP Configuration
Port Configuration against DoS attack includes SYN Flood, ICMP Flood and ARP Flood. The configuration page is shown in Figure 4-44~46, and the parameters’ descriptions is shown in Table 4-28.
Table 4-28 Descriptions of SYN/ ICMP/ARP configuration
Item
Description
SYN Flood
Enable SYN Flood attack
SYN Flood rate-limit
Limit the SYN message attack flow rate
ICMP Flood
Enable ICMP Flood attack
ICMP Flood rate-limit
Limit the ICMP message attack flow rate
ARP Flood
Enable ARP Flood attack
ARP Flood rate-limit
Limit the ARP message attack flow rate

<p align="center"><em>Figure 4-44 SYN configuration page</em></p>


<p align="center"><em>Figure 4-45 ICMP configuration page</em></p>


<p align="center"><em>Figure 4-46 ARP configuration page</em></p>

Operating Steps
1. Select Advance > Security > DoS Configuration in the navigation bar to enter the DoS Configuration page.
2. Click the Batch Edit button under SYN/ICMP/ARP Configuration to enter the creation page. Take the ARP Configuration as an example, as shown in Figure 4-47.

<p align="center"><em>Figure 4-47 ARP configuration page</em></p>

After above steps, the successful ARP Configuration page is shown in Figure 4-48.

<p align="center"><em>Figure 4-48 ARP configuration table</em></p>

A Configuration Example
Take ARP Flood Configuration for example, the following networking requirements are shown in Figure 4-49:
• Port gi0/1 connects to FTP server while port gi0/2 and gi0/3 connect to terminal devices respectively.
• The connecting terminal of port gi0/2 forges a large number of IP and MAC addresses to launch ARP attacks, leaving the FTP server unable to handle normal requesting ARP messages.

<p align="center"><em>Figure 4-49 Network topology</em></p>

1. Select Advance > Security > DoS Configuration in the navigation bar to enter the DoS Configuration page.
2. Click the Batch Edit button under ARP Configuration to enter the ARP Configuration modal, select GigabitEthernet0/2 in the port panel, and click OK to complete the configuration, as shown in Figure 4-50.

<p align="center"><em>Figure 4-50 ARP configuration page</em></p>

3. Click the Save button in the navigation bar to save such configuration.

## Route


### ARP/Neighbor Configuration

4.9.1.1 Overview
ARP resolves an IP address into a physical address, such as an Ethernet MAC address.
On an Ethernet LAN, a device uses ARP to get the MAC address of the target device for a packet
ARP Table
After obtaining the MAC address for the destination host, the device puts the IP-to-MAC mapping into its own ARP table. This mapping is used for forwarding packets with the same destination in the future.
An ARP table stores dynamic and static ARP entries.
Dynamic ARP Entry
ARP automatically creates and updates dynamic entries. A dynamic ARP entry is removed when its aging timer expires or the output interface goes down, and it can be overwritten by a static ARP entry.
Static ARP Entry
A static ARP entry is manually configured and maintained. It cannot get aged or be overwritten by a dynamic ARP entry.
Static ARP entries protect communication between devices, because attack packets cannot modify the IP-to-MAC mapping in a static ARP entry.
4.9.1.2 Configuring ARP/Neighbor
Displaying ARP/Neighbor
1. Select Monitor > ARP/Neighbor Information in the navigation area to enter ARP/Neighbor displaying page as shown in Figure 4-51. Table 4-29 describes the configuration items of ARP/Neighbor.

<p align="center"><em>Figure 4-51 Port configuration page</em></p>

Table 4-29 Descriptions of ARP/Neighbor
Item
Description
IPv4/IPv6
Address
Terminal IP address
MAC Address
Terminal MAC address
Interface
The name of the Layer 3 interface where the terminal is located
Type
ARP/neighbor address type
Configuring ARP/Neighbor
1. Select Advance > Layer3 > ARP/Neighbor Configuration in the navigation area to enter ARP/Neighbor Configuration page as shown in Figure 4-52.
2. Click +Add button to enter the crating page as shown in Figure 4-53.
3. Configure the IP address and MAC address.
4. Click OK button to complete the configuration.

<p align="center"><em>Figure 4-52 ARP/Neighbor configuration page</em></p>


<p align="center"><em>Figure 4-53 Creating a new ARP/Neighbor</em></p>


### Route

Routers are responsible for routing packets on the Internet. A router selects an appropriate route according to the destination address of a received packet and forwards the packet to the next router. The last router on the path is responsible for sending the packet to the destination host.
4.9.2.1 Routing Table
Routers forward packets through a routing table. Each entry in the table specifies which physical interface a packet should go out to reach the next hop (the next router) or the directly connected destination.
Routes in a routing table fall into three categories by origin:
Direct routes: Routes discovered by data link protocols, also known as interface routes.
Static routes: Routes that are manually configured.
Dynamic routes: Routes that are discovered dynamically by routing protocols.
A route entry has the following items:
Destination IP address: Destination IP address or destination network.
Mask (IPv4)/prefix length (IPv6): Specifies, together with the destination address, the address of the destination network.
Outbound interface: Specifies the interface through which a matching IP packet is to be forwarded.
Next hop: Specifies the address of the next hop router on the path.
Preference for the route: Routes to the same destination may be found by various routing protocols or manually configured, and routing protocols and static routes have different priorities configured. The route with the highest priority (the smallest value) will be selected as the optimal route.
4.9.2.2 Static Route
A static route is manually configured. If a network ‘s topology is simple, you only need to configure static routes for the network to work normally. The proper configuration and usage of static routes can improve network performance and ensure bandwidth for important network applications.
The disadvantage of using static routes is that they cannot adapt to network topology changes. If a fault or a topological change occurs in the network, some routes will be unreachable. In this case, the network administrator has to modify the static routes manually.
While configuring a static route, you can specify either the output interface or the next hop address as needed. The next hop address cannot be a local interface ‘s IP address; otherwise, the route configuration will not take effect.
Actually, it is necessary to identify next hop addresses for all route entries because the router needs to use the next hop address of a matching entry to resolve the corresponding link layer address.
4.9.2.3 Configuring Static Route
Displaying Static Route
1. Select Advance > Layer3 > Static Route in the navigation area to enter Static Route displaying page as shown in Figure 4-54. Table 4-30 describes the configuration items of static route.

<p align="center"><em>Figure 4-54 Creating a new static ARP</em></p>

Table 4-30 Descriptions of static route
Item
Description
Route Type
IPv4 or IPv6 route
Prefix
Routing prefix address, or routing network segment; for example, common route 0.0.0.0/0 192.168.1.1, the prefix IP is 0.0.0.0
Next Hop
Next hop IP address of the route
Description
Route description information, optional configuration
Action
Delete or modify
Creating New the Static Route
1. Select Configuration > VLAN in the navigation area to create VLAN ID.
2. Select Configuration > Port > Port Configuration > L3 port in the navigation area to create L3 SVI port as shown in Figure 4-55.

<p align="center"><em>Figure 4-55 Creating a L3 SVI port</em></p>

3. Select Advance > Layer3 > Static Route in the navigation area to enter Static Route page, click +Add button to enter the crating page as shown in Figure 4-56.
4. Configure the Prefix and Next Hop.
5. Click OK button to complete the configuration.

<p align="center"><em>Figure 4-56 Creating a new static route</em></p>


:::tip NOTE
NOTE:✦ When adding a new SVI port, the default management IP address will be automatically deleted. Please ensure that the new SVI port can continue to be accessed. NOTENOTE:✦ When adding a new SVI port, the default management IP address will be automatically deleted. Please ensure that the new SVI port can continue to be accessed.
:::


:::tip NOTE
:
:::

✦ When adding a new SVI port, the default management IP address will be automatically deleted. Please ensure that the new SVI port can continue to be accessed.

:::tip NOTE
:
:::

✦ When adding a new SVI port, the default management IP address will be automatically deleted. Please ensure that the new SVI port can continue to be accessed.