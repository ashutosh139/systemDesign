
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

  // ── ADD NEW DAYS BELOW ────────────────────────────────────────────────────

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

];
