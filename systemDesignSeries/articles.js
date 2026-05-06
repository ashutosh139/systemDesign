// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD A NEW DAY — no HTML, no CSS, just content:
//
//   { type: "text",      value: "A paragraph of text." }
//   { type: "heading",   value: "🍳 Your Section Title" }
//   { type: "flow",      value: "User → Server → Database" }
//   { type: "list",      value: ["Item one", "Item two", "Item three"] }
//   { type: "checklist", value: ["Improves performance", "Reduces load"] }
//   { type: "cards",     value: [{ title: "Card A", text: "Detail..." }, { title: "Card B", text: "Detail..." }] }
//   { type: "takeaway",  value: "The one thing to remember." }
// ─────────────────────────────────────────────────────────────────────────────

const ARTICLES = [

  {
    day: 1,
    title: "Basics of System Design",
    subtitle: "Breaking down the core building blocks of any scalable system.",
    tag: "Fundamentals",
    readTime: "3 min",
    content: [
      { type: "text", value: "Today I started reading the basics of System Design. 🚀 Initially, it felt overwhelming, but I realized it's actually built on simple concepts." },
      { type: "text", value: "At its core, every system has three main parts:" },
      { type: "flow", value: "User → Server → Database" },
      { type: "text", value: "The user sends a request, the server processes it, and the database stores or retrieves data. But things get interesting when scale increases. If millions of users hit a single server, it can crash." },
      { type: "text", value: "That's where concepts like <strong>load balancing</strong> and <strong>horizontal scaling</strong> come in." },
      { type: "heading", value: "🍳 A Simple Analogy" },
      { type: "text", value: "A server is like a restaurant kitchen. If too many orders come in, one chef can't handle it. So we add more chefs (servers) and distribute the workload." },
      { type: "takeaway", value: "System design is not about complex tools — it's about solving simple problems at scale. 🚀" },
    ]
  },

  {
    day: 2,
    title: "Load Balancer",
    subtitle: "How systems distribute traffic to stay fast, available, and reliable.",
    tag: "Infrastructure",
    readTime: "4 min",
    content: [
      { type: "text", value: "🚀 Today I learned about Load Balancers. Imagine thousands of users trying to access a website at the same time. If all requests go to a single server, it can easily crash. That's where a Load Balancer comes in." },
      { type: "text", value: "Instead of sending all traffic to one server, it distributes requests across multiple servers:" },
      { type: "flow", value: "User → Load Balancer → Multiple Servers" },
      { type: "heading", value: "🏢 A Simple Analogy" },
      { type: "text", value: "Think of a load balancer as a receptionist in an office. When people arrive, the receptionist directs them to available staff instead of overloading one person." },
      { type: "heading", value: "✅ This Improves" },
      { type: "checklist", value: ["Performance", "Availability", "Reliability"] },
      { type: "heading", value: "⚙️ Common Strategies" },
      { type: "list", value: ["<strong>Round Robin</strong> — distribute requests one-by-one across servers", "<strong>Least Connections</strong> — send to the least busy server"] },
      { type: "takeaway", value: "A load balancer ensures no single server becomes a bottleneck. Excited to learn more about scaling tomorrow!" },
    ]
  },

  {
    day: 3,
    title: "Scaling — Horizontal vs Vertical",
    subtitle: "Two approaches to growing a system as traffic increases.",
    tag: "Scalability",
    readTime: "4 min",
    content: [
      { type: "text", value: "🚀 Today I learned about Horizontal vs Vertical Scaling. As systems grow, handling more users becomes a challenge. There are two ways to scale:" },
      { type: "cards", value: [
        { title: "🔹 Vertical Scaling (Scale Up)", text: "Increase the power of a single server — more CPU, RAM, storage." },
        { title: "🔹 Horizontal Scaling (Scale Out)", text: "Add more servers and distribute the load across them." }
      ]},
      { type: "flow", value: "User → Load Balancer → Multiple Servers" },
      { type: "heading", value: "🚲 A Simple Analogy" },
      { type: "text", value: "<strong>Vertical scaling</strong> is like upgrading your bike to a faster one.<br><strong>Horizontal scaling</strong> is like adding more bikes to handle more deliveries." },
      { type: "heading", value: "🌐 Why Horizontal Scaling Wins at Scale" },
      { type: "text", value: "In real-world systems like Amazon or Flipkart, horizontal scaling is preferred because:" },
      { type: "checklist", value: ["It handles massive traffic", "It improves availability", "It avoids single point of failure"] },
      { type: "takeaway", value: "Scaling is not just about power — it's about distributing load efficiently." },
    ]
  },

  // ── BONUS / CONCEPT ARTICLES (no day number) ─────────────────────────────

  {
    day: 103,
    title: "Interface vs Abstract Class",
    subtitle: "Both enable abstraction — but they solve different problems.",
    tag: "Clean Code",
    readTime: "3 min",
    content: [
      { type: "text",    value: "🚀 I used to get confused between Interface and Abstract Class. Both are used for abstraction… but they solve <strong>different problems</strong>." },
      { type: "cards",   value: [
        { title: "🔹 Interface → WHAT to do",       text: "Defines a contract only. Every implementation decides how to fulfill it. Flexible and loosely coupled." },
        { title: "🔹 Abstract Class → WHAT + SOME HOW", text: "Provides a contract plus shared logic. Common behaviour lives here; specific behaviour is overridden." }
      ]},

      { type: "heading", value: "🔹 Interface — Contract Only" },
      { type: "text",    value: "An interface defines <strong>what</strong> a class must do, nothing more. Each implementation decides <em>how</em>." },
      { type: "code",    value: `interface IPayment {\n    void Pay();\n}\n\nclass CreditCardPayment : IPayment {\n    public void Pay() { /* credit card logic */ }\n}\n\nclass UpiPayment : IPayment {\n    public void Pay() { /* UPI logic */ }\n}` },

      { type: "heading", value: "🔹 Abstract Class — Contract + Shared Logic" },
      { type: "text",    value: "An abstract class lets you <strong>share common code</strong> while still forcing subclasses to implement specific behaviour." },
      { type: "code",    value: `abstract class Payment {\n    public void Validate() {\n        Console.WriteLine("Validating...");\n    }\n\n    public abstract void Pay(); // must override\n}` },

      { type: "heading", value: "💡 When to Use What?" },
      { type: "cards",   value: [
        { title: "Use Interface when…",       text: "You need flexibility · Multiple unrelated implementations · Loose coupling · Dependency injection" },
        { title: "Use Abstract Class when…",  text: "You want to reuse code · Share common logic across related classes · Avoid duplication" }
      ]},

      { type: "text",    value: "In modern applications — especially with <strong>Dependency Injection</strong> — interfaces are preferred because they make systems more testable and scalable." },
      { type: "takeaway", value: "Interface = contract only. Abstract class = contract + shared behaviour. Knowing which to reach for keeps your code clean and your systems flexible." }
    ]
  },

  {
    day: 102,
    title: "SOLID Principles",
    subtitle: "Why some codebases scale beautifully — and others break with every new feature.",
    tag: "Clean Code",
    readTime: "4 min",
    content: [
      { type: "text",    value: "🚀 I finally understood why some codebases scale beautifully… while others break with every new feature. The difference often comes down to <strong>SOLID principles</strong>." },
      { type: "text",    value: "SOLID isn't just theory — it's a practical way to write <strong>clean, maintainable, and scalable code</strong>." },

      { type: "heading", value: "🔹 S — Single Responsibility Principle" },
      { type: "text",    value: "A class should have <strong>only one reason to change</strong>. Instead of one class handling business logic + database + logging, split each responsibility into its own class." },
      { type: "checklist", value: ["Easier debugging", "Cleaner code", "Changes in one area don't break others"] },

      { type: "heading", value: "🔹 O — Open/Closed Principle" },
      { type: "text",    value: "Code should be <strong>open for extension, closed for modification</strong>. Add new classes or implementations instead of editing existing ones for every new feature." },
      { type: "checklist", value: ["Safer code changes", "Fewer regressions", "New features don't touch proven code"] },

      { type: "heading", value: "🔹 L — Liskov Substitution Principle" },
      { type: "text",    value: "Child classes should <strong>behave correctly when used as the parent</strong>. If swapping a base class for a subclass breaks the system, the design is wrong." },
      { type: "checklist", value: ["Reliable inheritance hierarchies", "Predictable behavior", "Fewer runtime surprises"] },

      { type: "heading", value: "🔹 I — Interface Segregation Principle" },
      { type: "text",    value: "Don't force classes to implement methods they don't need. <strong>Break large interfaces into smaller, focused ones</strong> so each class only depends on what it actually uses." },
      { type: "checklist", value: ["Cleaner design", "Better flexibility", "No bloated implementations"] },

      { type: "heading", value: "🔹 D — Dependency Inversion Principle" },
      { type: "text",    value: "<strong>Depend on abstractions, not concrete implementations.</strong> Use interfaces and dependency injection to decouple high-level modules from low-level details." },
      { type: "checklist", value: ["Loose coupling", "Easier unit testing", "Better scalability"] },

      { type: "heading", value: "⚖️ Real-World Impact" },
      { type: "cards", value: [
        { title: "❌ Without SOLID", text: "Tight coupling · Hard to scale · Difficult to test · Every change risks breaking something else." },
        { title: "✅ With SOLID",    text: "Clean architecture · Easy to extend · Better team collaboration · Confident refactoring." }
      ]},

      { type: "takeaway", value: "SOLID is not about writing more code — it's about writing code that survives change and growth." }
    ]
  },

  {
    day: 101,
    title: "Reverse Proxy vs Load Balancer vs API Gateway",
    subtitle: "Three tools that look similar but serve very different purposes.",
    tag: "Fundamentals",
    readTime: "4 min",
    content: [
      { type: "text",     value: "🚀 I used to think Reverse Proxy, Load Balancer, and API Gateway were the same thing. They're not — and understanding the difference cleared a big gap in my system design fundamentals." },

      { type: "heading",  value: "🔹 Reverse Proxy" },
      { type: "flow",     value: "User → Reverse Proxy → Backend Server" },
      { type: "text",     value: "A reverse proxy sits in front of your backend and <strong>forwards client requests</strong> to the right server. Clients never talk to backend servers directly — they only see the proxy." },
      { type: "checklist", value: [
        "SSL termination — decrypts HTTPS so backend servers don't have to",
        "Caching — serves repeated responses without hitting the server",
        "Security — hides backend IPs, blocks malicious traffic",
        "Compression — reduces payload size before sending to the client"
      ]},
      { type: "text",     value: "Think of it as a <strong>receptionist</strong> — it takes every call and routes it internally, shielding the team behind it." },

      { type: "heading",  value: "🔹 Load Balancer" },
      { type: "flow",     value: "User → Load Balancer → Server 1 / Server 2 / Server 3" },
      { type: "text",     value: "A load balancer distributes incoming traffic across multiple servers so no single server gets overwhelmed. It's about <strong>scale and availability</strong>, not just forwarding." },
      { type: "list",     value: [
        "<strong>Round Robin</strong> — rotates requests evenly across all servers",
        "<strong>Least Connections</strong> — sends new requests to the server with fewest active connections",
        "<strong>IP Hash</strong> — routes the same client to the same server (useful for sessions)"
      ]},
      { type: "checklist", value: [
        "Eliminates single points of failure",
        "Enables horizontal scaling — add more servers transparently",
        "Improves availability — unhealthy servers are automatically removed"
      ]},

      { type: "heading",  value: "🔹 API Gateway" },
      { type: "flow",     value: "User → API Gateway → Microservice A / B / C" },
      { type: "text",     value: "An API Gateway is the <strong>single entry point</strong> for all client requests in a microservices architecture. It does far more than route traffic." },
      { type: "list",     value: [
        "<strong>Authentication & Authorization</strong> — validates tokens before requests reach services",
        "<strong>Rate Limiting</strong> — prevents abuse by capping requests per client",
        "<strong>Request Transformation</strong> — translates between REST, GraphQL, gRPC as needed",
        "<strong>Response Aggregation</strong> — combines data from multiple services into one response",
        "<strong>Routing</strong> — directs requests to the correct microservice"
      ]},
      { type: "text",     value: "Without a gateway, every microservice would need its own auth, rate limiting, and routing logic — repeated across dozens of services. The gateway centralizes all of it." },

      { type: "heading",  value: "💡 How They Work Together in a Real System" },
      { type: "flow",     value: "User → Load Balancer → API Gateway → Microservices" },
      { type: "cards",    value: [
        { title: "Reverse Proxy",  text: "Forwarding + Protection — hides servers, handles SSL termination, caching, and compression." },
        { title: "Load Balancer",  text: "Distribution + Scalability — spreads traffic, enables horizontal scaling, prevents failure." },
        { title: "API Gateway",    text: "Central Control — auth, rate limiting, routing, and response aggregation in one layer." }
      ]},

      { type: "takeaway", value: "These three often work together — but confusing their roles in a system design interview will cost you. Know the job each one does." },
    ]
  },

  // ── ADD NEW DAYS BELOW ────────────────────────────────────────────────────

  {
    day: 5,
    title: "Message Queues — How Systems Handle Millions of Requests",
    subtitle: "Why Kafka and message queues are the backbone of every scalable system.",
    tag: "Distributed Systems",
    readTime: "4 min",
    content: [
      { type: "text",     value: "🚀 I finally understood how systems handle <strong>millions of requests</strong> without crashing. The answer is: <strong>Message Queues</strong> (like Kafka)." },
      { type: "heading",  value: "❌ Without Queues" },
      { type: "flow",     value: "User → API → DB + Email + SMS" },
      { type: "text",     value: "Everything happens synchronously — the user waits for every step to finish. This is slow, fragile, and falls apart under load." },
      { type: "heading",  value: "✅ With Kafka" },
      { type: "flow",     value: "User → API → Queue → Workers" },
      { type: "list",     value: [
        "API responds instantly ⚡",
        "Heavy work happens in the background",
        "System absorbs traffic spikes without crashing"
      ]},
      { type: "heading",  value: "💡 Real Example" },
      { type: "text",     value: "When you place an order on Amazon, three things need to happen — payment, confirmation email, and inventory update. None of these block your checkout screen. They're all processed <strong>asynchronously</strong> through queues." },
      { type: "heading",  value: "⚖️ Trade-offs" },
      { type: "checklist", value: ["Scalable & reliable — handles millions of events ✅", "Decouples producers from consumers ✅", "Slight processing delay compared to synchronous calls ❌"] },
      { type: "takeaway", value: "Queues turn <strong>traffic spikes into smooth, reliable processing</strong> — the secret weapon behind every high-scale system." },
    ]
  },

  {
    day: 4,
    title: "Caching — The Secret to Instant Apps",
    subtitle: "Why some apps feel instant and how caching makes it possible.",
    tag: "Performance",
    readTime: "3 min",
    content: [
      { type: "text",      value: "I finally understood why some apps feel instant ⚡ The answer is <strong>Caching</strong>." },
      { type: "text",      value: "Instead of hitting the database every time (which is slow), systems store frequently used data in memory — like Redis." },
      { type: "flow",      value: "User → Server → Cache → Database" },
      { type: "list",      value: ["If data is in cache → serve it super fast ⚡", "If not → fetch from DB, store it in cache for next time"] },
      { type: "heading",   value: "💡 Real Example" },
      { type: "text",      value: "Your Instagram feed loads instantly because posts are cached — you're not waiting for a database query every time you open the app." },
      { type: "heading",   value: "⚖️ Trade-offs" },
      { type: "list",      value: ["Fast performance ✅", "Risk of stale data ❌"] },
      { type: "takeaway",  value: "Caching trades <strong>freshness for speed</strong> — use it for data that's read often and doesn't change frequently." },
    ]
  },

  {
        date: "May 6, 2025",
        category: "Clean Code",
        icon: "🧱",
        title: "SOLID Principles",
        note: "Why some codebases scale beautifully — and others break with every new feature.",
        content: [
            { type: "text", value: "🚀 I finally understood why some codebases scale beautifully… while others break with every new feature. The difference often comes down to <strong>SOLID principles</strong>." },
            { type: "text", value: "SOLID isn't just theory — it's a practical way to write <strong>clean, maintainable, and scalable code</strong>." },
            { type: "cards", value: [
                { title: "S — Single Responsibility", text: "A class should have only one reason to change. Split business logic, database access, and logging into separate classes." },
                { title: "O — Open/Closed", text: "Code should be open for extension, closed for modification. Add new classes instead of modifying existing ones for every new feature." },
                { title: "L — Liskov Substitution", text: "Child classes should behave correctly when used as the parent. If replacing a base class breaks behavior, the design is wrong." },
                { title: "I — Interface Segregation", text: "Don't force classes to implement methods they don't need. Break large interfaces into smaller, focused ones." }
            ]},
            { type: "heading", value: "🔹 D — Dependency Inversion Principle" },
            { type: "text", value: "Depend on abstractions, not concrete implementations. Use interfaces and dependency injection." },
            { type: "checklist", value: ["Loose coupling", "Easier testing", "Better scalability"] },
            { type: "heading", value: "⚖️ Real-World Impact" },
            { type: "cards", value: [
                { title: "❌ Without SOLID", text: "Tight coupling · Hard to scale · Difficult to test" },
                { title: "✅ With SOLID", text: "Clean architecture · Easy to extend · Better team collaboration" }
            ]},
            { type: "takeaway", value: "SOLID is not about writing more code — it's about writing code that survives change and growth." }
        ]
    },

];
