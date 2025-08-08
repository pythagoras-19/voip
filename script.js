// Global variables
let currentQuizQuestion = 0;
let quizAnswers = [];
let userProgress = {
    courses: {
        fundamentals: 0,
        protocols: 0,
        networking: 0,
        security: 0,
        deployment: 0,
        troubleshooting: 0
    },
    quizScores: [],
    totalHours: 0
};

// Quiz questions and answers
const quizQuestions = [
    {
        question: "What does VoIP stand for?",
        options: [
            "Voice over Internet Protocol",
            "Video over Internet Protocol",
            "Voice over IP Network",
            "Virtual Online IP"
        ],
        correct: 0
    },
    {
        question: "Which protocol is most commonly used for VoIP signaling?",
        options: [
            "HTTP",
            "SIP",
            "FTP",
            "SMTP"
        ],
        correct: 1
    },
    {
        question: "What is the primary purpose of RTP in VoIP?",
        options: [
            "To establish connections",
            "To transport audio/video data",
            "To provide security",
            "To manage bandwidth"
        ],
        correct: 1
    },
    {
        question: "What does QoS stand for in VoIP?",
        options: [
            "Quality of Service",
            "Quantity of Signals",
            "Quick Online Setup",
            "Quality of Sound"
        ],
        correct: 0
    },
    {
        question: "Which codec is commonly used for VoIP calls?",
        options: [
            "MP3",
            "G.711",
            "WAV",
            "AAC"
        ],
        correct: 1
    },
    {
        question: "What is jitter in VoIP?",
        options: [
            "A type of encryption",
            "Variation in packet arrival times",
            "A network protocol",
            "A compression algorithm"
        ],
        correct: 1
    },
    {
        question: "Which network protocol is essential for VoIP security?",
        options: [
            "HTTP",
            "SRTP",
            "FTP",
            "SMTP"
        ],
        correct: 1
    },
    {
        question: "What is the typical sampling rate for VoIP audio?",
        options: [
            "8 kHz",
            "44.1 kHz",
            "96 kHz",
            "128 kHz"
        ],
        correct: 0
    },
    {
        question: "Which device converts analog signals to digital for VoIP?",
        options: [
            "Router",
            "Codec",
            "Switch",
            "Gateway"
        ],
        correct: 1
    },
    {
        question: "What is a common VoIP security threat?",
        options: [
            "Virus attacks",
            "Toll fraud",
            "Spam emails",
            "Data corruption"
        ],
        correct: 1
    }
];

// Course content
const courseContent = {
    fundamentals: {
        title: "VoIP Fundamentals",
        modules: [
            {
                title: "Introduction to VoIP",
                content: `
                    <h3>What is Voice over IP?</h3>
                    <p>Voice over Internet Protocol (VoIP) is a technology that allows you to make voice calls using a broadband Internet connection instead of a regular (or analog) phone line. VoIP converts analog voice signals into digital data packets that can be transmitted over IP networks.</p>
                    
                    <h3>Historical Context:</h3>
                    <p>VoIP technology emerged in the 1990s as a cost-effective alternative to traditional circuit-switched telephony. The first commercial VoIP service was launched in 1995, and since then, the technology has evolved significantly.</p>
                    
                    <h3>Key Concepts:</h3>
                    <ul>
                        <li><strong>Analog vs Digital:</strong> Traditional phones use analog signals, while VoIP converts voice to digital data</li>
                        <li><strong>Packet Switching:</strong> Voice data is broken into small packets and sent over the network</li>
                        <li><strong>Real-time Communication:</strong> VoIP enables instant voice communication over IP networks</li>
                        <li><strong>Convergence:</strong> Voice, video, and data can share the same network infrastructure</li>
                    </ul>
                    
                    <h3>Benefits of VoIP:</h3>
                    <ul>
                        <li><strong>Cost Savings:</strong> Significant reduction in long-distance and international call costs</li>
                        <li><strong>Integration:</strong> Seamless integration with other business applications and CRM systems</li>
                        <li><strong>Scalability:</strong> Easy to add or remove phone lines without physical infrastructure changes</li>
                        <li><strong>Advanced Features:</strong> Call forwarding, voicemail, conference calling, and more</li>
                        <li><strong>Mobility:</strong> Users can make calls from anywhere with an internet connection</li>
                        <li><strong>Unified Communications:</strong> Integration with email, instant messaging, and video conferencing</li>
                    </ul>
                    
                    <h3>VoIP vs Traditional Telephony:</h3>
                    <table>
                        <tr>
                            <th>Aspect</th>
                            <th>Traditional Telephony</th>
                            <th>VoIP</th>
                        </tr>
                        <tr>
                            <td>Infrastructure</td>
                            <td>Circuit-switched network</td>
                            <td>Packet-switched network</td>
                        </tr>
                        <tr>
                            <td>Cost</td>
                            <td>Higher per-minute rates</td>
                            <td>Lower costs, often flat-rate</td>
                        </tr>
                        <tr>
                            <td>Features</td>
                            <td>Basic calling features</td>
                            <td>Advanced features and integration</td>
                        </tr>
                        <tr>
                            <td>Scalability</td>
                            <td>Requires physical infrastructure</td>
                            <td>Software-based scaling</td>
                        </tr>
                    </table>
                `
            },
            {
                title: "Digital Signal Processing",
                content: `
                    <h3>How Voice Becomes Digital</h3>
                    <p>VoIP converts analog voice signals into digital data through a process called sampling. This involves capturing the analog signal at regular intervals and converting each sample into a digital value.</p>
                    
                    <h3>Sampling Process:</h3>
                    <ul>
                        <li><strong>Sampling Rate:</strong> Typically 8,000 samples per second (8 kHz) for narrowband, 16 kHz for wideband</li>
                        <li><strong>Bit Depth:</strong> Usually 8 or 16 bits per sample, affecting audio quality and file size</li>
                        <li><strong>Compression:</strong> Codecs compress the digital data for efficient transmission</li>
                        <li><strong>Quantization:</strong> Converting continuous analog values to discrete digital values</li>
                    </ul>
                    
                    <h3>Common Codecs:</h3>
                    <ul>
                        <li><strong>G.711:</strong> Standard codec, uncompressed, 64 kbps, excellent quality</li>
                        <li><strong>G.729:</strong> Compressed codec, 8 kbps, good quality with small bandwidth</li>
                        <li><strong>G.722:</strong> Wideband codec for better quality, 48-64 kbps</li>
                        <li><strong>G.723.1:</strong> Very low bitrate codec, 5.3-6.3 kbps</li>
                        <li><strong>Opus:</strong> Modern codec, variable bitrate, excellent quality</li>
                    </ul>
                    
                    <h3>Codec Comparison:</h3>
                    <table>
                        <tr>
                            <th>Codec</th>
                            <th>Bitrate</th>
                            <th>Quality</th>
                            <th>Use Case</th>
                        </tr>
                        <tr>
                            <td>G.711</td>
                            <td>64 kbps</td>
                            <td>Excellent</td>
                            <td>High-quality calls</td>
                        </tr>
                        <tr>
                            <td>G.729</td>
                            <td>8 kbps</td>
                            <td>Good</td>
                            <td>Bandwidth-constrained networks</td>
                        </tr>
                        <tr>
                            <td>G.722</td>
                            <td>48-64 kbps</td>
                            <td>Excellent</td>
                            <td>HD voice</td>
                        </tr>
                        <tr>
                            <td>Opus</td>
                            <td>6-510 kbps</td>
                            <td>Excellent</td>
                            <td>Modern applications</td>
                        </tr>
                    </table>
                    
                    <h3>Audio Quality Metrics:</h3>
                    <ul>
                        <li><strong>MOS (Mean Opinion Score):</strong> Subjective quality rating from 1-5</li>
                        <li><strong>PESQ (Perceptual Evaluation of Speech Quality):</strong> Objective quality measurement</li>
                        <li><strong>POLQA (Perceptual Objective Listening Quality Assessment):</strong> Modern quality measurement</li>
                    </ul>
                `
            },
            {
                title: "Network Requirements",
                content: `
                    <h3>Network Infrastructure for VoIP</h3>
                    <p>VoIP requires a reliable network infrastructure to ensure quality communication. Unlike traditional telephony, VoIP is sensitive to network conditions and requires proper planning and implementation.</p>
                    
                    <h3>Key Requirements:</h3>
                    <ul>
                        <li><strong>Bandwidth:</strong> Minimum 100 kbps per call, recommended 1 Mbps for HD voice</li>
                        <li><strong>Latency:</strong> Less than 150ms for good quality, ideally under 100ms</li>
                        <li><strong>Jitter:</strong> Less than 30ms variation for acceptable quality</li>
                        <li><strong>Packet Loss:</strong> Less than 1% for acceptable quality, ideally under 0.1%</li>
                        <li><strong>Network Stability:</strong> Consistent performance without frequent interruptions</li>
                    </ul>
                    
                    <h3>Network Components:</h3>
                    <ul>
                        <li><strong>VoIP Phones/Softphones:</strong> Endpoint devices for making calls</li>
                        <li><strong>VoIP Gateway/Server:</strong> Central call management and routing</li>
                        <li><strong>Network Switches:</strong> With QoS support for traffic prioritization</li>
                        <li><strong>Internet Connection:</strong> Sufficient bandwidth and reliability</li>
                        <li><strong>Firewall:</strong> Properly configured for VoIP traffic</li>
                        <li><strong>Power over Ethernet (PoE):</strong> For powering IP phones</li>
                    </ul>
                    
                    <h3>Network Planning Considerations:</h3>
                    <ul>
                        <li><strong>Bandwidth Calculation:</strong> Number of concurrent calls × bandwidth per call</li>
                        <li><strong>QoS Implementation:</strong> Prioritize voice traffic over data</li>
                        <li><strong>Redundancy:</strong> Backup internet connections and power supplies</li>
                        <li><strong>Security:</strong> Encryption and authentication for voice traffic</li>
                        <li><strong>Monitoring:</strong> Tools to track call quality and network performance</li>
                    </ul>
                    
                    <h3>Network Topology Examples:</h3>
                    <p><strong>Small Office (1-10 users):</strong> Single internet connection, basic QoS, simple switch</p>
                    <p><strong>Medium Business (10-100 users):</strong> Multiple internet connections, advanced QoS, managed switches</p>
                    <p><strong>Large Enterprise (100+ users):</strong> Redundant infrastructure, dedicated voice VLAN, enterprise-grade equipment</p>
                `
            },
            {
                title: "VoIP Architecture",
                content: `
                    <h3>Understanding VoIP Architecture</h3>
                    <p>VoIP systems can be deployed in various architectures depending on the organization's size, requirements, and budget. Understanding these architectures helps in planning and implementing VoIP solutions.</p>
                    
                    <h3>Common VoIP Architectures:</h3>
                    
                    <h4>1. On-Premises PBX</h4>
                    <ul>
                        <li><strong>Description:</strong> Traditional PBX system with VoIP capabilities</li>
                        <li><strong>Advantages:</strong> Full control, no internet dependency, advanced features</li>
                        <li><strong>Disadvantages:</strong> High upfront costs, maintenance required, limited scalability</li>
                        <li><strong>Best For:</strong> Large enterprises with existing infrastructure</li>
                    </ul>
                    
                    <h4>2. Hosted VoIP (Cloud PBX)</h4>
                    <ul>
                        <li><strong>Description:</strong> VoIP service hosted by a third-party provider</li>
                        <li><strong>Advantages:</strong> Low upfront costs, automatic updates, scalability</li>
                        <li><strong>Disadvantages:</strong> Internet dependency, monthly fees, less control</li>
                        <li><strong>Best For:</strong> Small to medium businesses, remote workers</li>
                    </ul>
                    
                    <h4>3. Hybrid VoIP</h4>
                    <ul>
                        <li><strong>Description:</strong> Combination of on-premises and cloud solutions</li>
                        <li><strong>Advantages:</strong> Flexibility, gradual migration, cost optimization</li>
                        <li><strong>Disadvantages:</strong> Complexity, potential integration issues</li>
                        <li><strong>Best For:</strong> Organizations transitioning from traditional to VoIP</li>
                    </ul>
                    
                    <h3>Network Topology Components:</h3>
                    <ul>
                        <li><strong>Core Network:</strong> High-speed backbone for voice and data traffic</li>
                        <li><strong>Access Layer:</strong> Switches connecting end devices</li>
                        <li><strong>Distribution Layer:</strong> Aggregation and routing between VLANs</li>
                        <li><strong>WAN Connection:</strong> Internet or private network links</li>
                        <li><strong>Security Devices:</strong> Firewalls, intrusion prevention systems</li>
                    </ul>
                `
            }
        ]
    },
    protocols: {
        title: "VoIP Protocols",
        modules: [
            {
                title: "SIP (Session Initiation Protocol)",
                content: `
                    <h3>Understanding SIP</h3>
                    <p>SIP is the most widely used signaling protocol for VoIP. It handles call setup, modification, and termination. SIP is an application-layer protocol that uses request-response transactions similar to HTTP.</p>
                    
                    <h3>SIP Architecture Components:</h3>
                    <ul>
                        <li><strong>User Agent (UA):</strong> SIP phones, softphones, or any SIP endpoint</li>
                        <li><strong>Proxy Server:</strong> Routes SIP messages between endpoints</li>
                        <li><strong>Registrar:</strong> Maintains user location information and registration</li>
                        <li><strong>Redirect Server:</strong> Provides alternative locations for call routing</li>
                        <li><strong>Location Server:</strong> Database of user locations and capabilities</li>
                    </ul>
                    
                    <h3>SIP Methods (Request Types):</h3>
                    <ul>
                        <li><strong>INVITE:</strong> Initiates a call or session</li>
                        <li><strong>ACK:</strong> Confirms call establishment</li>
                        <li><strong>BYE:</strong> Terminates a call or session</li>
                        <li><strong>REGISTER:</strong> Registers user location with the server</li>
                        <li><strong>CANCEL:</strong> Cancels a pending request</li>
                        <li><strong>OPTIONS:</strong> Queries server capabilities</li>
                        <li><strong>INFO:</strong> Sends mid-session information</li>
                        <li><strong>UPDATE:</strong> Modifies session parameters</li>
                    </ul>
                    
                    <h3>SIP Response Codes:</h3>
                    <table>
                        <tr>
                            <th>Code Range</th>
                            <th>Category</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>100-199</td>
                            <td>Informational</td>
                            <td>Request received, processing</td>
                        </tr>
                        <tr>
                            <td>200-299</td>
                            <td>Success</td>
                            <td>Request successful</td>
                        </tr>
                        <tr>
                            <td>300-399</td>
                            <td>Redirection</td>
                            <td>Further action required</td>
                        </tr>
                        <tr>
                            <td>400-499</td>
                            <td>Client Error</td>
                            <td>Request contains bad syntax</td>
                        </tr>
                        <tr>
                            <td>500-599</td>
                            <td>Server Error</td>
                            <td>Server failed to fulfill request</td>
                        </tr>
                        <tr>
                            <td>600-699</td>
                            <td>Global Failure</td>
                            <td>Request cannot be fulfilled</td>
                        </tr>
                    </table>
                    
                    <h3>SIP Message Structure:</h3>
                    <pre>
INVITE sip:user@domain.com SIP/2.0
Via: SIP/2.0/UDP 192.168.1.100:5060
From: &lt;sip:caller@domain.com&gt;;tag=12345
To: &lt;sip:user@domain.com&gt;
Call-ID: abc123@192.168.1.100
CSeq: 1 INVITE
Contact: &lt;sip:caller@192.168.1.100:5060&gt;
Content-Type: application/sdp
Content-Length: 200

[Session Description Protocol (SDP) content]
                    </pre>
                    
                    <h3>SIP Call Flow Example:</h3>
                    <ol>
                        <li><strong>INVITE:</strong> Caller sends INVITE to callee</li>
                        <li><strong>100 Trying:</strong> Server acknowledges receipt</li>
                        <li><strong>180 Ringing:</strong> Callee's phone rings</li>
                        <li><strong>200 OK:</strong> Callee accepts the call</li>
                        <li><strong>ACK:</strong> Caller confirms call establishment</li>
                        <li><strong>Media Exchange:</strong> RTP packets carry voice data</li>
                        <li><strong>BYE:</strong> Either party terminates call</li>
                        <li><strong>200 OK:</strong> Call termination confirmed</li>
                    </ol>
                `
            },
            {
                title: "RTP (Real-time Transport Protocol)",
                content: `
                    <h3>RTP for Media Transport</h3>
                    <p>RTP is used to transport audio and video data in real-time applications. It provides end-to-end delivery services for data with real-time characteristics, such as interactive audio and video.</p>
                    
                    <h3>RTP Features:</h3>
                    <ul>
                        <li><strong>Sequence Numbers:</strong> Detect packet loss and reordering</li>
                        <li><strong>Timestamps:</strong> Synchronize audio/video playback</li>
                        <li><strong>Payload Type:</strong> Identifies the codec being used</li>
                        <li><strong>SSRC:</strong> Synchronization source identifier</li>
                        <li><strong>CSRC:</strong> Contributing source identifiers for mixed streams</li>
                        <li><strong>Extension Headers:</strong> Custom header extensions for specific applications</li>
                    </ul>
                    
                    <h3>RTP Header Structure:</h3>
                    <table>
                        <tr>
                            <th>Field</th>
                            <th>Bits</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>Version</td>
                            <td>2</td>
                            <td>RTP version (currently 2)</td>
                        </tr>
                        <tr>
                            <td>Padding</td>
                            <td>1</td>
                            <td>Indicates if packet has padding</td>
                        </tr>
                        <tr>
                            <td>Extension</td>
                            <td>1</td>
                            <td>Indicates if header extension follows</td>
                        </tr>
                        <tr>
                            <td>CSRC Count</td>
                            <td>4</td>
                            <td>Number of CSRC identifiers</td>
                        </tr>
                        <tr>
                            <td>Marker</td>
                            <td>1</td>
                            <td>Significant event (e.g., frame boundary)</td>
                        </tr>
                        <tr>
                            <td>Payload Type</td>
                            <td>7</td>
                            <td>Format of the payload</td>
                        </tr>
                        <tr>
                            <td>Sequence Number</td>
                            <td>16</td>
                            <td>Increments by 1 for each packet</td>
                        </tr>
                        <tr>
                            <td>Timestamp</td>
                            <td>32</td>
                            <td>Sampling instant of first octet</td>
                        </tr>
                        <tr>
                            <td>SSRC</td>
                            <td>32</td>
                            <td>Synchronization source identifier</td>
                        </tr>
                    </table>
                    
                    <h3>RTP Payload Types:</h3>
                    <table>
                        <tr>
                            <th>Type</th>
                            <th>Codec</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>0</td>
                            <td>PCMU</td>
                            <td>G.711 μ-law</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>PCMA</td>
                            <td>G.711 A-law</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>G729</td>
                            <td>G.729</td>
                        </tr>
                        <tr>
                            <td>96</td>
                            <td>Dynamic</td>
                            <td>Dynamically assigned</td>
                        </tr>
                    </table>
                    
                    <h3>RTCP (RTP Control Protocol):</h3>
                    <p>RTCP provides feedback on the quality of data distribution and carries information about participants in a session.</p>
                    <ul>
                        <li><strong>Sender Report (SR):</strong> Contains transmission and reception statistics</li>
                        <li><strong>Receiver Report (RR):</strong> Contains reception statistics</li>
                        <li><strong>Source Description (SDES):</strong> Contains participant information</li>
                        <li><strong>Goodbye (BYE):</strong> Indicates end of participation</li>
                        <li><strong>Application-Defined (APP):</strong> Application-specific functions</li>
                    </ul>
                `
            },
            {
                title: "H.323 Protocol Suite",
                content: `
                    <h3>H.323 Standard</h3>
                    <p>H.323 is an ITU-T standard for multimedia communications over packet networks. It was one of the first VoIP standards and is still used in some legacy systems and video conferencing applications.</p>
                    
                    <h3>H.323 Components:</h3>
                    <ul>
                        <li><strong>Terminal:</strong> Endpoints (phones, softphones, video endpoints)</li>
                        <li><strong>Gateway:</strong> Connects H.323 networks to other networks (PSTN, SIP)</li>
                        <li><strong>Gatekeeper:</strong> Provides call control, address translation, and bandwidth management</li>
                        <li><strong>MCU (Multipoint Control Unit):</strong> Enables conference calls with multiple participants</li>
                    </ul>
                    
                    <h3>H.323 Protocol Stack:</h3>
                    <ul>
                        <li><strong>H.225:</strong> Call signaling and registration</li>
                        <li><strong>H.245:</strong> Media control and capability exchange</li>
                        <li><strong>H.235:</strong> Security and authentication</li>
                        <li><strong>H.450:</strong> Supplementary services</li>
                        <li><strong>RTP/RTCP:</strong> Media transport</li>
                    </ul>
                    
                    <h3>H.323 vs SIP Comparison:</h3>
                    <table>
                        <tr>
                            <th>Feature</th>
                            <th>H.323</th>
                            <th>SIP</th>
                        </tr>
                        <tr>
                            <td>Complexity</td>
                            <td>More complex, binary protocol</td>
                            <td>Simpler, text-based protocol</td>
                        </tr>
                        <tr>
                            <td>Flexibility</td>
                            <td>Less flexible, rigid structure</td>
                            <td>More flexible, extensible</td>
                        </tr>
                        <tr>
                            <td>Adoption</td>
                            <td>Legacy systems, video conferencing</td>
                            <td>Modern systems, widespread adoption</td>
                        </tr>
                        <tr>
                            <td>Interoperability</td>
                            <td>Good with legacy equipment</td>
                            <td>Excellent with modern systems</td>
                        </tr>
                        <tr>
                            <td>Development</td>
                            <td>More complex to implement</td>
                            <td>Easier to implement and debug</td>
                        </tr>
                    </table>
                    
                    <h3>H.323 Call Flow:</h3>
                    <ol>
                        <li><strong>Registration:</strong> Terminal registers with Gatekeeper</li>
                        <li><strong>Admission:</strong> Gatekeeper authorizes call</li>
                        <li><strong>Call Setup:</strong> H.225 messages establish call</li>
                        <li><strong>Capability Exchange:</strong> H.245 negotiates media parameters</li>
                        <li><strong>Media Exchange:</strong> RTP carries audio/video</li>
                        <li><strong>Call Termination:</strong> H.225/H.245 messages end call</li>
                    </ol>
                `
            },
            {
                title: "MGCP (Media Gateway Control Protocol)",
                content: `
                    <h3>Understanding MGCP</h3>
                    <p>MGCP is a protocol used for controlling media gateways from external call control elements called media gateway controllers or call agents. It's commonly used in VoIP deployments where centralized call control is desired.</p>
                    
                    <h3>MGCP Architecture:</h3>
                    <ul>
                        <li><strong>Call Agent (CA):</strong> Central controller that manages call state</li>
                        <li><strong>Media Gateway (MG):</strong> Handles media conversion and transport</li>
                        <li><strong>Signaling Gateway:</strong> Converts between different signaling protocols</li>
                    </ul>
                    
                    <h3>MGCP Commands:</h3>
                    <ul>
                        <li><strong>CreateConnection (CRCX):</strong> Creates a connection for media</li>
                        <li><strong>ModifyConnection (MDCX):</strong> Modifies existing connection parameters</li>
                        <li><strong>DeleteConnection (DLCX):</strong> Terminates a connection</li>
                        <li><strong>NotificationRequest (RQNT):</strong> Requests event notifications</li>
                        <li><strong>Notify (NTFY):</strong> Sends event notifications</li>
                        <li><strong>AuditEndpoint (AUEP):</strong> Queries endpoint status</li>
                        <li><strong>AuditConnection (AUCX):</strong> Queries connection status</li>
                    </ul>
                    
                    <h3>MGCP vs SIP:</h3>
                    <table>
                        <tr>
                            <th>Aspect</th>
                            <th>MGCP</th>
                            <th>SIP</th>
                        </tr>
                        <tr>
                            <td>Control Model</td>
                            <td>Centralized control</td>
                            <td>Distributed control</td>
                        </tr>
                        <tr>
                            <td>Complexity</td>
                            <td>Simpler endpoints</td>
                            <td>More complex endpoints</td>
                        </tr>
                        <tr>
                            <td>Scalability</td>
                            <td>Limited by controller</td>
                            <td>Highly scalable</td>
                        </tr>
                        <tr>
                            <td>Use Cases</td>
                            <td>Large deployments</td>
                            <td>General purpose</td>
                        </tr>
                    </table>
                `
            }
        ]
    },
    networking: {
        title: "Network Infrastructure",
        modules: [
            {
                title: "QoS (Quality of Service)",
                content: `
                    <h3>Understanding QoS for VoIP</h3>
                    <p>Quality of Service (QoS) is crucial for VoIP deployments to ensure voice traffic receives priority over other network traffic. Without proper QoS, voice quality can degrade significantly.</p>
                    
                    <h3>QoS Mechanisms:</h3>
                    <ul>
                        <li><strong>Classification:</strong> Identifying and marking voice packets</li>
                        <li><strong>Queuing:</strong> Prioritizing voice traffic in network queues</li>
                        <li><strong>Policing:</strong> Limiting bandwidth usage for different traffic types</li>
                        <li><strong>Shaping:</strong> Smoothing traffic bursts to prevent congestion</li>
                    </ul>
                    
                    <h3>QoS Models:</h3>
                    
                    <h4>1. Best Effort</h4>
                    <ul>
                        <li><strong>Description:</strong> No QoS guarantees, first-come-first-served</li>
                        <li><strong>Use Case:</strong> Simple networks with low voice traffic</li>
                        <li><strong>Limitations:</strong> No voice quality guarantees</li>
                    </ul>
                    
                    <h4>2. Integrated Services (IntServ)</h4>
                    <ul>
                        <li><strong>Description:</strong> Resource reservation for each flow</li>
                        <li><strong>Use Case:</strong> Small networks with predictable traffic</li>
                        <li><strong>Limitations:</strong> Scalability issues in large networks</li>
                    </ul>
                    
                    <h4>3. Differentiated Services (DiffServ)</h4>
                    <ul>
                        <li><strong>Description:</strong> Traffic classification and prioritization</li>
                        <li><strong>Use Case:</strong> Most VoIP deployments</li>
                        <li><strong>Advantages:</strong> Scalable, widely supported</li>
                    </ul>
                    
                    <h3>QoS Configuration Best Practices:</h3>
                    <ul>
                        <li><strong>Voice Priority:</strong> Mark voice traffic with highest priority (DSCP 46)</li>
                        <li><strong>Bandwidth Reservation:</strong> Reserve 20-30% of bandwidth for voice</li>
                        <li><strong>Jitter Buffer:</strong> Configure appropriate jitter buffer sizes</li>
                        <li><strong>Monitoring:</strong> Continuously monitor QoS effectiveness</li>
                    </ul>
                `
            },
            {
                title: "Bandwidth Management",
                content: `
                    <h3>Bandwidth Planning for VoIP</h3>
                    <p>Proper bandwidth management is essential for VoIP success. Insufficient bandwidth leads to poor call quality, while over-provisioning wastes resources.</p>
                    
                    <h3>Bandwidth Calculation:</h3>
                    <ul>
                        <li><strong>Per Call Bandwidth:</strong> Codec bitrate + IP overhead + Ethernet overhead</li>
                        <li><strong>Total Bandwidth:</strong> Number of concurrent calls × per call bandwidth</li>
                        <li><strong>Safety Margin:</strong> Add 20-30% for network overhead and growth</li>
                    </ul>
                    
                    <h3>Bandwidth Requirements by Codec:</h3>
                    <table>
                        <tr>
                            <th>Codec</th>
                            <th>Bitrate</th>
                            <th>IP Overhead</th>
                            <th>Total per Call</th>
                        </tr>
                        <tr>
                            <td>G.711</td>
                            <td>64 kbps</td>
                            <td>~16 kbps</td>
                            <td>~80 kbps</td>
                        </tr>
                        <tr>
                            <td>G.729</td>
                            <td>8 kbps</td>
                            <td>~16 kbps</td>
                            <td>~24 kbps</td>
                        </tr>
                        <tr>
                            <td>G.722</td>
                            <td>64 kbps</td>
                            <td>~16 kbps</td>
                            <td>~80 kbps</td>
                        </tr>
                        <tr>
                            <td>Opus</td>
                            <td>20-40 kbps</td>
                            <td>~16 kbps</td>
                            <td>~36-56 kbps</td>
                        </tr>
                    </table>
                    
                    <h3>Bandwidth Management Strategies:</h3>
                    <ul>
                        <li><strong>Traffic Shaping:</strong> Smooth traffic bursts to prevent congestion</li>
                        <li><strong>Rate Limiting:</strong> Limit bandwidth usage for non-critical applications</li>
                        <li><strong>Compression:</strong> Use efficient codecs to reduce bandwidth requirements</li>
                        <li><strong>Monitoring:</strong> Track bandwidth usage and identify bottlenecks</li>
                    </ul>
                `
            },
            {
                title: "Network Optimization",
                content: `
                    <h3>Optimizing Networks for VoIP</h3>
                    <p>Network optimization ensures consistent voice quality and reliable VoIP service. This involves both network design and ongoing maintenance.</p>
                    
                    <h3>Network Design Principles:</h3>
                    <ul>
                        <li><strong>Segmentation:</strong> Separate voice and data traffic using VLANs</li>
                        <li><strong>Redundancy:</strong> Implement backup paths and power supplies</li>
                        <li><strong>Scalability:</strong> Design for future growth and capacity</li>
                        <li><strong>Security:</strong> Implement proper security measures</li>
                    </ul>
                    
                    <h3>Network Optimization Techniques:</h3>
                    
                    <h4>1. VLAN Configuration</h4>
                    <ul>
                        <li><strong>Voice VLAN:</strong> Dedicated VLAN for voice traffic</li>
                        <li><strong>Data VLAN:</strong> Separate VLAN for data traffic</li>
                        <li><strong>Management VLAN:</strong> VLAN for network management</li>
                    </ul>
                    
                    <h4>2. Switch Configuration</h4>
                    <ul>
                        <li><strong>Port Configuration:</strong> Enable QoS and PoE on voice ports</li>
                        <li><strong>Queue Management:</strong> Configure priority queues for voice</li>
                        <li><strong>Storm Control:</strong> Prevent broadcast storms</li>
                    </ul>
                    
                    <h4>3. Router Configuration</h4>
                    <ul>
                        <li><strong>QoS Policies:</strong> Implement end-to-end QoS</li>
                        <li><strong>Traffic Shaping:</strong> Smooth traffic on WAN links</li>
                        <li><strong>Compression:</strong> Enable header compression where appropriate</li>
                    </ul>
                    
                    <h3>Performance Monitoring:</h3>
                    <ul>
                        <li><strong>Call Quality Metrics:</strong> Monitor MOS, latency, jitter, packet loss</li>
                        <li><strong>Network Metrics:</strong> Track bandwidth utilization, error rates</li>
                        <li><strong>Capacity Planning:</strong> Plan for growth and peak usage</li>
                        <li><strong>Alerting:</strong> Set up alerts for performance degradation</li>
                    </ul>
                `
            }
        ]
    },
    security: {
        title: "VoIP Security",
        modules: [
            {
                title: "VoIP Security Threats",
                content: `
                    <h3>Understanding VoIP Security Risks</h3>
                    <p>VoIP systems face unique security challenges compared to traditional telephony. Understanding these threats is essential for implementing proper security measures.</p>
                    
                    <h3>Common VoIP Security Threats:</h3>
                    
                    <h4>1. Denial of Service (DoS) Attacks</h4>
                    <ul>
                        <li><strong>Flooding Attacks:</strong> Overwhelm servers with excessive traffic</li>
                        <li><strong>Resource Exhaustion:</strong> Consume system resources</li>
                        <li><strong>Impact:</strong> Service unavailability, poor call quality</li>
                        <li><strong>Prevention:</strong> Rate limiting, traffic filtering</li>
                    </ul>
                    
                    <h4>2. Eavesdropping</h4>
                    <ul>
                        <li><strong>Packet Capture:</strong> Intercepting voice packets</li>
                        <li><strong>Man-in-the-Middle:</strong> Intercepting and modifying traffic</li>
                        <li><strong>Impact:</strong> Confidentiality breach, privacy violation</li>
                        <li><strong>Prevention:</strong> Encryption, secure protocols</li>
                    </ul>
                    
                    <h4>3. Call Hijacking</h4>
                    <ul>
                        <li><strong>Call Interception:</strong> Redirecting calls to unauthorized parties</li>
                        <li><strong>Caller ID Spoofing:</strong> Falsifying caller identification</li>
                        <li><strong>Impact:</strong> Fraud, social engineering attacks</li>
                        <li><strong>Prevention:</strong> Authentication, call validation</li>
                    </ul>
                    
                    <h4>4. Toll Fraud</h4>
                    <ul>
                        <li><strong>Unauthorized Calls:</strong> Making calls using stolen credentials</li>
                        <li><strong>Premium Rate Calls:</strong> Exploiting expensive call services</li>
                        <li><strong>Impact:</strong> Financial loss, legal issues</li>
                        <li><strong>Prevention:</strong> Access controls, call restrictions</li>
                    </ul>
                    
                    <h3>Attack Vectors:</h3>
                    <ul>
                        <li><strong>Network Level:</strong> Exploiting network vulnerabilities</li>
                        <li><strong>Application Level:</strong> Targeting VoIP applications</li>
                        <li><strong>Social Engineering:</strong> Manipulating users</li>
                        <li><strong>Physical Access:</strong> Direct access to equipment</li>
                    </ul>
                `
            },
            {
                title: "Encryption and Authentication",
                content: `
                    <h3>Securing VoIP Communications</h3>
                    <p>Encryption and authentication are fundamental security measures for protecting VoIP communications from unauthorized access and interception.</p>
                    
                    <h3>VoIP Encryption Methods:</h3>
                    
                    <h4>1. SRTP (Secure Real-time Transport Protocol)</h4>
                    <ul>
                        <li><strong>Description:</strong> Encrypted version of RTP</li>
                        <li><strong>Encryption:</strong> AES encryption for media packets</li>
                        <li><strong>Authentication:</strong> HMAC-SHA1 for packet integrity</li>
                        <li><strong>Key Management:</strong> Automatic key exchange</li>
                    </ul>
                    
                    <h4>2. SIPS (SIP over TLS)</h4>
                    <ul>
                        <li><strong>Description:</strong> Encrypted SIP signaling</li>
                        <li><strong>Protocol:</strong> SIP over Transport Layer Security</li>
                        <li><strong>Port:</strong> Typically 5061 (vs 5060 for unencrypted)</li>
                        <li><strong>Benefits:</strong> Protects call setup and control messages</li>
                    </ul>
                    
                    <h4>3. ZRTP (Zimmermann Real-time Transport Protocol)</h4>
                    <ul>
                        <li><strong>Description:</strong> End-to-end encryption for RTP</li>
                        <li><strong>Key Exchange:</strong> Diffie-Hellman key exchange</li>
                        <li><strong>Features:</strong> Perfect forward secrecy, no PKI required</li>
                        <li><strong>Use Case:</strong> Peer-to-peer secure communications</li>
                    </ul>
                    
                    <h3>Authentication Methods:</h3>
                    <ul>
                        <li><strong>Username/Password:</strong> Basic authentication for SIP registration</li>
                        <li><strong>Digital Certificates:</strong> PKI-based authentication</li>
                        <li><strong>Two-Factor Authentication:</strong> Additional security layer</li>
                        <li><strong>Biometric Authentication:</strong> Fingerprint or voice recognition</li>
                    </ul>
                    
                    <h3>Security Best Practices:</h3>
                    <ul>
                        <li><strong>Strong Passwords:</strong> Use complex, unique passwords</li>
                        <li><strong>Regular Updates:</strong> Keep systems and software updated</li>
                        <li><strong>Network Segmentation:</strong> Isolate voice traffic</li>
                        <li><strong>Monitoring:</strong> Continuous security monitoring</li>
                        <li><strong>Access Control:</strong> Limit access to authorized users</li>
                    </ul>
                `
            },
            {
                title: "Security Implementation",
                content: `
                    <h3>Implementing VoIP Security</h3>
                    <p>Effective VoIP security requires a comprehensive approach that addresses multiple layers of protection, from network infrastructure to end-user devices.</p>
                    
                    <h3>Network Security Measures:</h3>
                    
                    <h4>1. Firewall Configuration</h4>
                    <ul>
                        <li><strong>VoIP-Aware Firewalls:</strong> Deep packet inspection for VoIP traffic</li>
                        <li><strong>Port Management:</strong> Open only necessary ports (5060, 5061, RTP ports)</li>
                        <li><strong>Stateful Inspection:</strong> Track connection states</li>
                        <li><strong>Application Layer Filtering:</strong> Filter based on SIP messages</li>
                    </ul>
                    
                    <h4>2. Intrusion Prevention Systems (IPS)</h4>
                    <ul>
                        <li><strong>Signature-Based Detection:</strong> Identify known attack patterns</li>
                        <li><strong>Behavioral Analysis:</strong> Detect anomalous traffic patterns</li>
                        <li><strong>Real-Time Response:</strong> Block suspicious traffic automatically</li>
                        <li><strong>Custom Rules:</strong> Create rules for VoIP-specific threats</li>
                    </ul>
                    
                    <h4>3. Network Segmentation</h4>
                    <ul>
                        <li><strong>Voice VLAN:</strong> Separate voice traffic from data</li>
                        <li><strong>Access Control Lists (ACLs):</strong> Restrict traffic between segments</li>
                        <li><strong>Virtual Private Networks (VPNs):</strong> Secure remote access</li>
                        <li><strong>DMZ Configuration:</strong> Isolate public-facing services</li>
                    </ul>
                    
                    <h3>Endpoint Security:</h3>
                    <ul>
                        <li><strong>Device Hardening:</strong> Remove unnecessary services and features</li>
                        <li><strong>Firmware Updates:</strong> Keep device firmware current</li>
                        <li><strong>Physical Security:</strong> Secure physical access to devices</li>
                        <li><strong>User Training:</strong> Educate users on security best practices</li>
                    </ul>
                    
                    <h3>Security Monitoring and Response:</h3>
                    <ul>
                        <li><strong>Log Analysis:</strong> Monitor system and network logs</li>
                        <li><strong>Call Detail Records (CDR):</strong> Track call patterns for anomalies</li>
                        <li><strong>Real-Time Alerts:</strong> Immediate notification of security events</li>
                        <li><strong>Incident Response Plan:</strong> Documented procedures for security incidents</li>
                    </ul>
                `
            }
        ]
    },
    deployment: {
        title: "System Deployment",
        modules: [
            {
                title: "Planning and Design",
                content: `
                    <h3>VoIP Deployment Planning</h3>
                    <p>Successful VoIP deployment requires careful planning and design. A well-planned deployment ensures optimal performance, security, and user satisfaction.</p>
                    
                    <h3>Pre-Deployment Assessment:</h3>
                    
                    <h4>1. Network Assessment</h4>
                    <ul>
                        <li><strong>Bandwidth Analysis:</strong> Measure available bandwidth and capacity</li>
                        <li><strong>Network Topology Review:</strong> Document current network structure</li>
                        <li><strong>Traffic Analysis:</strong> Understand current traffic patterns</li>
                        <li><strong>Performance Baseline:</strong> Establish current network performance metrics</li>
                    </ul>
                    
                    <h4>2. Requirements Gathering</h4>
                    <ul>
                        <li><strong>User Requirements:</strong> Number of users, call patterns, features needed</li>
                        <li><strong>Business Requirements:</strong> Integration needs, compliance requirements</li>
                        <li><strong>Technical Requirements:</strong> Performance, security, scalability needs</li>
                        <li><strong>Budget Constraints:</strong> Available funding and ROI expectations</li>
                    </ul>
                    
                    <h4>3. Risk Assessment</h4>
                    <ul>
                        <li><strong>Technical Risks:</strong> Network capacity, compatibility issues</li>
                        <li><strong>Business Risks:</strong> Service disruption, user adoption</li>
                        <li><strong>Security Risks:</strong> Vulnerabilities, compliance gaps</li>
                        <li><strong>Mitigation Strategies:</strong> Backup plans, rollback procedures</li>
                    </ul>
                    
                    <h3>Design Considerations:</h3>
                    <ul>
                        <li><strong>Scalability:</strong> Design for future growth</li>
                        <li><strong>Redundancy:</strong> Implement backup systems and paths</li>
                        <li><strong>Security:</strong> Plan security measures from the start</li>
                        <li><strong>Management:</strong> Consider ongoing maintenance and support</li>
                    </ul>
                `
            },
            {
                title: "Implementation Strategy",
                content: `
                    <h3>VoIP Implementation Approaches</h3>
                    <p>Choosing the right implementation strategy is crucial for successful VoIP deployment. Different approaches suit different organizations and requirements.</p>
                    
                    <h3>Implementation Strategies:</h3>
                    
                    <h4>1. Phased Rollout</h4>
                    <ul>
                        <li><strong>Description:</strong> Deploy VoIP gradually across the organization</li>
                        <li><strong>Advantages:</strong> Lower risk, easier troubleshooting, user training</li>
                        <li><strong>Disadvantages:</strong> Longer timeline, potential compatibility issues</li>
                        <li><strong>Best For:</strong> Large organizations, risk-averse environments</li>
                    </ul>
                    
                    <h4>2. Parallel Deployment</h4>
                    <ul>
                        <li><strong>Description:</strong> Run VoIP alongside existing system during transition</li>
                        <li><strong>Advantages:</strong> Minimal disruption, easy rollback</li>
                        <li><strong>Disadvantages:</strong> Higher costs, complexity</li>
                        <li><strong>Best For:</strong> Critical environments, conservative organizations</li>
                    </ul>
                    
                    <h4>3. Big Bang Deployment</h4>
                    <ul>
                        <li><strong>Description:</strong> Complete cutover to VoIP at once</li>
                        <li><strong>Advantages:</strong> Faster implementation, lower long-term costs</li>
                        <li><strong>Disadvantages:</strong> Higher risk, potential service disruption</li>
                        <li><strong>Best For:</strong> Small organizations, aggressive timelines</li>
                    </ul>
                    
                    <h3>Implementation Checklist:</h3>
                    <ul>
                        <li><strong>Network Preparation:</strong> Upgrade infrastructure, configure QoS</li>
                        <li><strong>System Installation:</strong> Install servers, configure software</li>
                        <li><strong>Endpoint Deployment:</strong> Install phones, configure settings</li>
                        <li><strong>Testing:</strong> Verify functionality and performance</li>
                        <li><strong>Training:</strong> Educate users and administrators</li>
                        <li><strong>Go-Live:</strong> Activate service, monitor closely</li>
                    </ul>
                `
            },
            {
                title: "Testing and Validation",
                content: `
                    <h3>VoIP Testing and Quality Assurance</h3>
                    <p>Comprehensive testing is essential to ensure VoIP system reliability and performance. Testing should cover functionality, performance, and security aspects.</p>
                    
                    <h3>Testing Categories:</h3>
                    
                    <h4>1. Functional Testing</h4>
                    <ul>
                        <li><strong>Call Flow Testing:</strong> Verify basic calling functionality</li>
                        <li><strong>Feature Testing:</strong> Test voicemail, call forwarding, etc.</li>
                        <li><strong>Integration Testing:</strong> Test with other business systems</li>
                        <li><strong>User Acceptance Testing:</strong> Validate with end users</li>
                    </ul>
                    
                    <h4>2. Performance Testing</h4>
                    <ul>
                        <li><strong>Load Testing:</strong> Test system under expected load</li>
                        <li><strong>Stress Testing:</strong> Test system limits and failure points</li>
                        <li><strong>Quality Testing:</strong> Measure call quality metrics</li>
                        <li><strong>Network Testing:</strong> Verify network performance</li>
                    </ul>
                    
                    <h4>3. Security Testing</h4>
                    <ul>
                        <li><strong>Vulnerability Assessment:</strong> Identify security weaknesses</li>
                        <li><strong>Penetration Testing:</strong> Simulate real-world attacks</li>
                        <li><strong>Compliance Testing:</strong> Verify regulatory compliance</li>
                        <li><strong>Access Control Testing:</strong> Test authentication and authorization</li>
                    </ul>
                    
                    <h3>Testing Tools and Methods:</h3>
                    <ul>
                        <li><strong>Call Quality Testing:</strong> Tools to measure MOS, latency, jitter</li>
                        <li><strong>Network Analysis:</strong> Wireshark, network analyzers</li>
                        <li><strong>Load Testing:</strong> SIPp, Asterisk stress testing</li>
                        <li><strong>Security Testing:</strong> Vulnerability scanners, penetration testing tools</li>
                    </ul>
                    
                    <h3>Validation Criteria:</h3>
                    <ul>
                        <li><strong>Call Quality:</strong> MOS score > 4.0, latency < 150ms</li>
                        <li><strong>Reliability:</strong> 99.9% uptime, < 1% packet loss</li>
                        <li><strong>Performance:</strong> Support expected concurrent calls</li>
                        <li><strong>Security:</strong> Pass security assessments</li>
                    </ul>
                `
            }
        ]
    },
    troubleshooting: {
        title: "Troubleshooting",
        modules: [
            {
                title: "Diagnostic Tools",
                content: `
                    <h3>VoIP Troubleshooting Tools</h3>
                    <p>Effective VoIP troubleshooting requires the right tools and techniques. Understanding available diagnostic tools helps identify and resolve issues quickly.</p>
                    
                    <h3>Network Analysis Tools:</h3>
                    
                    <h4>1. Packet Capture Tools</h4>
                    <ul>
                        <li><strong>Wireshark:</strong> Comprehensive network protocol analyzer</li>
                        <li><strong>tcpdump:</strong> Command-line packet capture tool</li>
                        <li><strong>tshark:</strong> Terminal-based version of Wireshark</li>
                        <li><strong>Use Cases:</strong> Analyze SIP messages, RTP streams, network issues</li>
                    </ul>
                    
                    <h4>2. VoIP-Specific Tools</h4>
                    <ul>
                        <li><strong>SIPp:</strong> SIP protocol testing and load generation</li>
                        <li><strong>sngrep:</strong> SIP call flow analyzer</li>
                        <li><strong>RTP Tools:</strong> RTP analysis and manipulation</li>
                        <li><strong>Use Cases:</strong> Test SIP functionality, analyze call flows</li>
                    </ul>
                    
                    <h4>3. Network Monitoring Tools</h4>
                    <ul>
                        <li><strong>Nagios:</strong> Network and service monitoring</li>
                        <li><strong>Zabbix:</strong> Enterprise monitoring solution</li>
                        <li><strong>PRTG:</strong> Network monitoring with VoIP support</li>
                        <li><strong>Use Cases:</strong> Monitor system health, detect issues proactively</li>
                    </ul>
                    
                    <h3>Call Quality Testing Tools:</h3>
                    <ul>
                        <li><strong>PESQ (Perceptual Evaluation of Speech Quality):</strong> Objective voice quality measurement</li>
                        <li><strong>POLQA (Perceptual Objective Listening Quality Assessment):</strong> Modern quality measurement</li>
                        <li><strong>MOS Testing:</strong> Subjective quality assessment</li>
                        <li><strong>Network Quality Testing:</strong> Measure latency, jitter, packet loss</li>
                    </ul>
                    
                    <h3>Common Diagnostic Commands:</h3>
                    <ul>
                        <li><strong>ping:</strong> Test network connectivity and latency</li>
                        <li><strong>traceroute:</strong> Trace network path and identify bottlenecks</li>
                        <li><strong>netstat:</strong> View network connections and statistics</li>
                        <li><strong>ss:</strong> Socket statistics and connection information</li>
                    </ul>
                `
            },
            {
                title: "Common Issues and Solutions",
                content: `
                    <h3>VoIP Troubleshooting Guide</h3>
                    <p>Understanding common VoIP issues and their solutions helps resolve problems quickly and efficiently. This guide covers the most frequent problems encountered in VoIP deployments.</p>
                    
                    <h3>Call Quality Issues:</h3>
                    
                    <h4>1. Poor Audio Quality</h4>
                    <ul>
                        <li><strong>Symptoms:</strong> Choppy audio, robotic voice, echo</li>
                        <li><strong>Causes:</strong> High latency, jitter, packet loss, codec issues</li>
                        <li><strong>Solutions:</strong> Check network performance, adjust QoS, verify codec settings</li>
                        <li><strong>Prevention:</strong> Monitor network metrics, implement proper QoS</li>
                    </ul>
                    
                    <h4>2. One-Way Audio</h4>
                    <ul>
                        <li><strong>Symptoms:</strong> Call connects but only one party can hear</li>
                        <li><strong>Causes:</strong> Firewall blocking RTP, NAT issues, asymmetric routing</li>
                        <li><strong>Solutions:</strong> Check firewall rules, verify NAT configuration, test routing</li>
                        <li><strong>Prevention:</strong> Proper firewall configuration, symmetric routing</li>
                    </ul>
                    
                    <h4>3. Call Drops</h4>
                    <ul>
                        <li><strong>Symptoms:</strong> Calls disconnect unexpectedly</li>
                        <li><strong>Causes:</strong> Network instability, server issues, power problems</li>
                        <li><strong>Solutions:</strong> Check network stability, verify server health, test power</li>
                        <li><strong>Prevention:</strong> Redundant systems, UPS, network monitoring</li>
                    </ul>
                    
                    <h3>Registration and Authentication Issues:</h3>
                    <ul>
                        <li><strong>Registration Failures:</strong> Check credentials, network connectivity, server status</li>
                        <li><strong>Authentication Errors:</strong> Verify username/password, certificate validity</li>
                        <li><strong>Expired Registrations:</strong> Check registration timeout settings</li>
                        <li><strong>Multiple Registration Attempts:</strong> Investigate network issues or misconfiguration</li>
                    </ul>
                    
                    <h3>Network-Related Issues:</h3>
                    <ul>
                        <li><strong>Bandwidth Problems:</strong> Monitor usage, implement QoS, upgrade capacity</li>
                        <li><strong>Latency Issues:</strong> Check routing, optimize network paths</li>
                        <li><strong>Jitter Problems:</strong> Implement jitter buffers, optimize network</li>
                        <li><strong>Packet Loss:</strong> Check network quality, replace faulty equipment</li>
                    </ul>
                `
            },
            {
                title: "Performance Optimization",
                content: `
                    <h3>Optimizing VoIP Performance</h3>
                    <p>Performance optimization is an ongoing process that ensures VoIP systems deliver the best possible call quality and reliability. Regular optimization helps maintain system efficiency.</p>
                    
                    <h3>Network Optimization:</h3>
                    
                    <h4>1. QoS Optimization</h4>
                    <ul>
                        <li><strong>Traffic Classification:</strong> Properly mark voice traffic with appropriate DSCP values</li>
                        <li><strong>Queue Management:</strong> Configure priority queues for voice traffic</li>
                        <li><strong>Bandwidth Allocation:</strong> Reserve adequate bandwidth for voice calls</li>
                        <li><strong>Monitoring:</strong> Continuously monitor QoS effectiveness</li>
                    </ul>
                    
                    <h4>2. Network Infrastructure</h4>
                    <ul>
                        <li><strong>Switch Configuration:</strong> Optimize switch settings for voice traffic</li>
                        <li><strong>Router Optimization:</strong> Configure routers for optimal voice routing</li>
                        <li><strong>VLAN Segmentation:</strong> Separate voice and data traffic</li>
                        <li><strong>Redundancy:</strong> Implement backup paths and systems</li>
                    </ul>
                    
                    <h3>System Optimization:</h3>
                    <ul>
                        <li><strong>Server Performance:</strong> Optimize server resources and settings</li>
                        <li><strong>Database Optimization:</strong> Optimize database queries and indexes</li>
                        <li><strong>Codec Selection:</strong> Choose appropriate codecs for network conditions</li>
                        <li><strong>Jitter Buffer Tuning:</strong> Adjust buffer sizes for optimal performance</li>
                    </ul>
                    
                    <h3>Monitoring and Maintenance:</h3>
                    <ul>
                        <li><strong>Performance Monitoring:</strong> Track key metrics continuously</li>
                        <li><strong>Capacity Planning:</strong> Plan for growth and peak usage</li>
                        <li><strong>Regular Maintenance:</strong> Update systems and firmware regularly</li>
                        <li><strong>Documentation:</strong> Maintain detailed system documentation</li>
                    </ul>
                    
                    <h3>Best Practices:</h3>
                    <ul>
                        <li><strong>Proactive Monitoring:</strong> Detect issues before they affect users</li>
                        <li><strong>Regular Testing:</strong> Test system performance regularly</li>
                        <li><strong>User Feedback:</strong> Gather feedback from end users</li>
                        <li><strong>Continuous Improvement:</strong> Implement improvements based on data</li>
                    </ul>
                `
            }
        ]
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeQuiz();
    initializeSimulator();
    loadUserProgress();
    updateProgressDisplay();
});

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Course management
function startCourse(courseId) {
    const modal = document.getElementById('courseModal');
    
    if (courseContent[courseId]) {
        displayCourseContent(courseId);
        modal.style.display = 'block';
    } else {
        console.error('Course not found:', courseId);
        alert('Course content is being loaded. Please try again.');
    }
}

function displayCourseContent(courseId) {
    const course = courseContent[courseId];
    const contentDiv = document.getElementById('courseContent');
    
    let html = `
        <h2>${course.title}</h2>
        <div class="course-modules">
    `;
    
    course.modules.forEach((module, index) => {
        html += `
            <div class="module">
                <h3>${module.title}</h3>
                <div class="module-content">
                    ${module.content}
                </div>
                <button class="btn btn-primary" onclick="completeModule('${courseId}', ${index})">
                    Mark as Complete
                </button>
            </div>
        `;
    });
    
    html += '</div>';
    contentDiv.innerHTML = html;
}

function completeModule(courseId, moduleIndex) {
    const progress = userProgress.courses[courseId] || 0;
    const newProgress = Math.min(100, progress + 33.33); // Each module is ~33.33%
    
    userProgress.courses[courseId] = newProgress;
    updateCourseProgress(courseId, newProgress);
    saveUserProgress();
    
    // Show completion message
    alert(`Module completed! Course progress: ${Math.round(newProgress)}%`);
}

function updateCourseProgress(courseId, progress) {
    const courseCard = document.querySelector(`[data-course="${courseId}"]`);
    if (courseCard) {
        const progressFill = courseCard.querySelector('.progress-fill');
        const progressText = courseCard.querySelector('.progress-text');
        
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}% Complete`;
    }
}

// Simulator functionality
function initializeSimulator() {
    const networkLoad = document.getElementById('networkLoad');
    const networkLoadValue = document.getElementById('networkLoadValue');
    const packetLoss = document.getElementById('packetLoss');
    const packetLossValue = document.getElementById('packetLossValue');
    
    networkLoad.addEventListener('input', function() {
        networkLoadValue.textContent = this.value + '%';
    });
    
    packetLoss.addEventListener('input', function() {
        packetLossValue.textContent = this.value + '%';
    });
}

function startSimulation() {
    const callQuality = document.getElementById('callQuality').value;
    const networkLoad = parseInt(document.getElementById('networkLoad').value);
    const packetLoss = parseFloat(document.getElementById('packetLoss').value);
    
    // Animate packets
    animatePackets();
    
    // Calculate metrics based on settings
    const metrics = calculateMetrics(callQuality, networkLoad, packetLoss);
    
    // Update display after animation
    setTimeout(() => {
        updateMetrics(metrics);
    }, 3000);
}

function animatePackets() {
    const packets = document.querySelectorAll('.packet');
    
    packets.forEach((packet, index) => {
        setTimeout(() => {
            packet.style.opacity = '1';
            packet.style.left = '50%';
            
            setTimeout(() => {
                packet.style.opacity = '0';
                packet.style.left = '100%';
            }, 1000);
        }, index * 500);
    });
}

function calculateMetrics(callQuality, networkLoad, packetLoss) {
    let mosScore, latency, jitter;
    
    switch(callQuality) {
        case 'excellent':
            mosScore = 4.5 - (packetLoss * 0.1);
            latency = 20 + (networkLoad * 0.5);
            jitter = 5 + (packetLoss * 2);
            break;
        case 'good':
            mosScore = 4.0 - (packetLoss * 0.15);
            latency = 50 + (networkLoad * 0.8);
            jitter = 10 + (packetLoss * 3);
            break;
        case 'poor':
            mosScore = 3.0 - (packetLoss * 0.2);
            latency = 100 + (networkLoad * 1.2);
            jitter = 20 + (packetLoss * 4);
            break;
        case 'very-poor':
            mosScore = 2.0 - (packetLoss * 0.25);
            latency = 200 + (networkLoad * 1.5);
            jitter = 40 + (packetLoss * 5);
            break;
    }
    
    return {
        mosScore: Math.max(1.0, Math.min(5.0, mosScore)),
        latency: Math.round(latency),
        jitter: Math.round(jitter),
        packetLoss: packetLoss
    };
}

function updateMetrics(metrics) {
    document.getElementById('mosScore').textContent = metrics.mosScore.toFixed(1);
    document.getElementById('latency').textContent = metrics.latency + ' ms';
    document.getElementById('jitter').textContent = metrics.jitter + ' ms';
    document.getElementById('packetLossResult').textContent = metrics.packetLoss + '%';
}

// Quiz functionality
function initializeQuiz() {
    loadQuizQuestion();
}

function loadQuizQuestion() {
    if (currentQuizQuestion >= quizQuestions.length) {
        showQuizResults();
        return;
    }
    
    const question = quizQuestions[currentQuizQuestion];
    document.getElementById('quizQuestion').textContent = question.question;
    document.getElementById('currentQuestion').textContent = currentQuizQuestion + 1;
    document.getElementById('totalQuestions').textContent = quizQuestions.length;
    
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionDiv);
    });
    
    // Update navigation buttons
    document.getElementById('prevBtn').disabled = currentQuizQuestion === 0;
    document.getElementById('nextBtn').textContent = currentQuizQuestion === quizQuestions.length - 1 ? 'Finish' : 'Next';
}

function selectOption(optionIndex) {
    // Remove previous selection
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Select new option
    event.target.classList.add('selected');
    quizAnswers[currentQuizQuestion] = optionIndex;
}

function nextQuestion() {
    if (quizAnswers[currentQuizQuestion] === undefined) {
        alert('Please select an answer before continuing.');
        return;
    }
    
    if (currentQuizQuestion === quizQuestions.length - 1) {
        showQuizResults();
    } else {
        currentQuizQuestion++;
        loadQuizQuestion();
    }
}

function previousQuestion() {
    if (currentQuizQuestion > 0) {
        currentQuizQuestion--;
        loadQuizQuestion();
        
        // Restore previous selection
        if (quizAnswers[currentQuizQuestion] !== undefined) {
            document.querySelectorAll('.quiz-option')[quizAnswers[currentQuizQuestion]].classList.add('selected');
        }
    }
}

function showQuizResults() {
    const correctAnswers = quizAnswers.filter((answer, index) => 
        answer === quizQuestions[index].correct
    ).length;
    
    const score = (correctAnswers / quizQuestions.length) * 100;
    const scoreText = `You scored ${correctAnswers}/${quizQuestions.length} (${Math.round(score)}%)`;
    
    document.getElementById('scoreText').textContent = scoreText;
    document.getElementById('scoreFill').style.width = score + '%';
    
    // Hide quiz interface and show results
    document.querySelector('.quiz-header').style.display = 'none';
    document.querySelector('.quiz-options').style.display = 'none';
    document.querySelector('.quiz-controls').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';
    
    // Update user progress
    userProgress.quizScores.push(score);
    saveUserProgress();
    updateProgressDisplay();
}

function restartQuiz() {
    currentQuizQuestion = 0;
    quizAnswers = [];
    
    // Reset display
    document.querySelector('.quiz-header').style.display = 'flex';
    document.querySelector('.quiz-options').style.display = 'block';
    document.querySelector('.quiz-controls').style.display = 'flex';
    document.getElementById('quizResults').style.display = 'none';
    
    loadQuizQuestion();
}

// Progress tracking
function loadUserProgress() {
    const saved = localStorage.getItem('voipUserProgress');
    if (saved) {
        userProgress = JSON.parse(saved);
    }
}

function saveUserProgress() {
    localStorage.setItem('voipUserProgress', JSON.stringify(userProgress));
}

function updateProgressDisplay() {
    // Calculate overall progress
    const courseProgress = Object.values(userProgress.courses).reduce((sum, progress) => sum + progress, 0) / 6;
    const quizProgress = userProgress.quizScores.length > 0 ? 
        userProgress.quizScores.reduce((sum, score) => sum + score, 0) / userProgress.quizScores.length : 0;
    const overallProgress = (courseProgress + quizProgress) / 2;
    
    // Update progress circle
    const progressCircle = document.getElementById('progressCircle');
    const circumference = 2 * Math.PI * 50;
    const offset = circumference - (overallProgress / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;
    
    document.getElementById('overallProgress').textContent = Math.round(overallProgress) + '%';
    
    // Update stats
    const completedCourses = Object.values(userProgress.courses).filter(progress => progress >= 100).length;
    document.getElementById('coursesCompleted').textContent = completedCourses;
    
    const totalHours = Math.round(Object.values(userProgress.courses).reduce((sum, progress) => sum + progress, 0) / 100 * 20);
    document.getElementById('hoursLearned').textContent = totalHours;
    
    const avgQuizScore = userProgress.quizScores.length > 0 ? 
        Math.round(userProgress.quizScores.reduce((sum, score) => sum + score, 0) / userProgress.quizScores.length) : 0;
    document.getElementById('quizScore').textContent = avgQuizScore;
    
    // Update course progress bars
    Object.keys(userProgress.courses).forEach(courseId => {
        updateCourseProgress(courseId, userProgress.courses[courseId]);
    });
}

// Resource functions
function openGlossary() {
    alert('VoIP Glossary would open here with comprehensive terms and definitions.');
}

function openTutorials() {
    alert('Video tutorials would open here with step-by-step guides.');
}

function openWhitePapers() {
    alert('White papers and technical documents would be available for download.');
}

function openForum() {
    alert('Community forum would open here for discussions and Q&A.');
}



// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('courseModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }
    
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
});

// Utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add notification styles
const notificationStyles = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    }
    
    .notification-info {
        background: #667eea;
    }
    
    .notification-success {
        background: #4CAF50;
    }
    
    .notification-warning {
        background: #ff9800;
    }
    
    .notification-error {
        background: #f44336;
    }
    
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);
