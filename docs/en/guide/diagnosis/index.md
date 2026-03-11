# Diagnosis


## Network Utility


### Overview

Ping
You can use the ping function to check whether a device with a specified address is reachable, and to examine network connectivity. A successful execution of the ping command involves the following steps:
1. The source device sends an ICMP echo request (ECHO-REQUEST) to the destination device.
2. The destination device responds by sending an ICMP echo reply (ECHO-REPLY) to the source device after receiving the ICMP echo request.
3. The source device displays related statistics after receiving the reply. Output of the ping command falls into the following:
The ping command can be applied to the destination’s host name or IP address. If the destination’s host name is unknown, the prompt information is displayed.
If the source device does not receive an ICMP echo reply within the timeout time, it displays the prompt information and the statistics during the ping operation. If the source device receives an ICMP echo reply within the timeout time, it displays the number of bytes of the echo reply, the message sequence number, Time to Live (TTL), the response time, and the statistics during the ping operation. Statistics during the ping operation include number of packets sent, number of echo reply messages received, percentage of messages not received, and the minimum, average, and maximum response time.
Traceroute
By using the traceroute command, you can display the Layer 3 devices involved in delivering a packet from source to destination. This function is useful for identification of failed node(s) in the event of network failure.
The traceroute command involves the following steps in its execution:
1. The source device sends a packet with a TTL value of 1 to the destination device.
2. The first hop (the Layer 3 device that first receives the packet) responds by sending a TTL-expired ICMP message to the source, with its IP address encapsulated. In this way, the source device can get the address of the first Layer 3 device.
3. The source device sends a packet with a TTL value of 2 to the destination device.
4. The second hop responds with a TTL-expired ICMP message, which gives the source device the address of the second Layer 3 device.
This process continues until the ultimate destination device is reached. In this way, the source device can trace the addresses of all the Layer 3 devices involved to get to the destination device.
The traceroute command can be applied to the destination’s host name or IP address. If the destination’s host name is unknown, the prompt information is displayed

### Diagnostic Tool Operations

Ping Operation

:::tip NOTE
1. Select Diagnosis > Network Utility from the navigation tree to enter the IPv4&IPv6 Ping Configuration page.
:::

2. Type the IPv4/IPv6 address of the destination device in the text box, as shown in Figure 6-1.

:::tip NOTE
3. Click PING to execute the ping command, and you can see the result in the box below, as shown in Figure 6-2.
:::


<p align="center"><em>Figure 6-1 Network utility page</em></p>


<p align="center"><em>Figure 6-2 The ping result</em></p>

The Traceroute Operation
1. Select Diagnostic > Network Utility from the navigation tree.
2. Type the destination IP address in the text box.
3. Click Traceroute to execute the trace route command, and you see the result in the box below, as shown in Figure 6-3.

<p align="center"><em>Figure 6-3 The trace route result</em></p>


## Optical Transceiver Information

Optical fiber is commonly used for long distance data transmission. However, when link issues occur, it is very costly to troubleshoot fiber cables and fiber transceivers at remote sites. To solve this problem, Moxa industrial Ethernet switches provide digital diagnostics and monitoring (DDM) functions on SFP optical fiber links and allow users to measure optical parameters and its performance from a central site. This function can greatly facilitate the troubleshooting process for optical fiber links and reduce costs for onsite debugging.

### Displaying Optical Transceiver Information

Select Diagnosis > Transceiver Information from the navigation area. The system automatically displays the optical transceiver information, as shown in Figure 6-4. Table 6-1 describes the optical transceiver information items.

<p align="center"><em>Figure 6-4 Optical transceiver information</em></p>

Table 6-1 Optical transceiver information items
Item
Description
Name
Switch port number that the SFP is plugged into.
State
The state of the fiber interface, up/down.
Transceiver State
The absent of the transceiver.
Temperature(degree)
SFP casing temperature
Voltage(V)
Voltage supply to the transceiver.
Current(mA)
Current consumed by transceiver.
Rx Power(dBm)
The amount of light being received from the fiber optic cable
TX Power(dBm)
The amount of light being transmitted into the fiber optic cable
Detail
Click to show the detail information of the transceiver.

### Displaying Detail Information

Click Detail interface to enter the Transceiver Detail Information page. as shown in Figure 6-5.

<p align="center"><em>Figure 6-5 Transceiver detail information</em></p>


## One-click Collection

Each functional module has its own running information, and generally, you need to view the output information for each module one by one. To receive as much information as possible in one operation during daily maintenance or when system failure occurs, the diagnostic information module allows you to save the running statistics of multiple functional modules to a file, and then you can locate problems faster by checking this file.
1. Select Diagnosis > One-click Collection from the navigation area to enter the page as shown in Figure 6-6.
2. When you click One-click Collection button, the system begins to generate the diagnostic information file, and after the file is generated, the File Download dialog box appears. You can save this file to the local host.

<p align="center"><em>Figure 6-6 Backup log page</em></p>


## Dying Gasp


### Overview

The networking devices rely on a temporary back-up power supply on a capacitor, that allows for a graceful shutdown and the generation of the dying-gasp message. This temporary power supply is designed to last from 10 to 20 milliseconds to perform these tasks.
According to the definition in 802.3ah, when a device power failure event occurs, the device sends an OAM event message to its connected device. Since OAM is a point-to-point protocol, the power failure event message will not be sent to the next device that supports OAM. Continue to forward again. The device that receives a power failure event will output a power failure LOG prompt message.
In addition to the OAM alarm information, the power-off device will also send a trap message to the SNMP server.
Node information
Data
Mib files
DOT3-OAM-MIB.mib
Oid
1, 3, 6, 1, 2, 1, 158, 1, 6, 1, 4
Value
DyingGaspEvent(257)

### Configuring Dying Gasp

1. Select Diagnosis > Dying Gasp from the navigation area to enter the Dying Gasp Configuration page, as shown in Figure 6-7.
2. Select the box of dying gasp, click Apply button to enable dying gasp.

<p align="center"><em>Figure 6-7 Dying gasp configuration page</em></p>


## Cable Detect

Note Only electrical ports support this commandPerforming this operation will cause the already Up port to automatically go Down and Up again.When the line length is less than 6 meters, there is a deviation between the test results and the actual value. Note Only electrical ports support this commandPerforming this operation will cause the already Up port to automatically go Down and Up again.When the line length is less than 6 meters, there is a deviation between the test results and the actual value.
Note
Only electrical ports support this command
Performing this operation will cause the already Up port to automatically go Down and Up again.
When the line length is less than 6 meters, there is a deviation between the test results and the actual value.
Note
Only electrical ports support this command
Performing this operation will cause the already Up port to automatically go Down and Up again.
When the line length is less than 6 meters, there is a deviation between the test results and the actual value.
Cable detection means that users can detect the current status of the cable connected to the Ethernet interface on the device, and the system will return the detection results within 5 seconds. The detection content includes whether there is a short circuit or open circuit in the cable and the length of the faulty cable.
Step 1: Select Diagnosis > Cable Detect in the navigation bar to enter the Cable Detection page, as shown in Figure 6-8.
Step 2: Select the interface to be tested, click the Detect button to start the incoming line test, and the system will return the test results within 5 seconds.
Step 3: As shown in Figure 6-9, view the detection results on the pop-up page.

<p align="center"><em>Figure 6-8 Cable detection page</em></p>


<p align="center"><em>Figure 6-9 Detection results</em></p>

Note Pair X length: unit meter, cable length, in case of fault, the length from the interface to the fault locationPair X status:OK (normal): Indicates that the line pair (PAIR) is terminated normallyOpen: Indicates that the line pair is openShort: Indicates a short circuit on the pairUnknown: Other unknown causes of failure Note Pair X length: unit meter, cable length, in case of fault, the length from the interface to the fault locationPair X status:OK (normal): Indicates that the line pair (PAIR) is terminated normallyOpen: Indicates that the line pair is openShort: Indicates a short circuit on the pairUnknown: Other unknown causes of failure
Note
Pair X length: unit meter, cable length, in case of fault, the length from the interface to the fault location
Pair X status:
OK (normal): Indicates that the line pair (PAIR) is terminated normally
Open: Indicates that the line pair is open
Short: Indicates a short circuit on the pair
Unknown: Other unknown causes of failure
Note
Pair X length: unit meter, cable length, in case of fault, the length from the interface to the fault location
Pair X status:
OK (normal): Indicates that the line pair (PAIR) is terminated normally
Open: Indicates that the line pair is open
Short: Indicates a short circuit on the pair
Unknown: Other unknown causes of failure