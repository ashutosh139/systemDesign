# 🚀 Ashutosh's System Design Journal

A personal, open-source learning journal covering system design concepts — built as a static site with clean UI and zero frameworks. Designed for engineers preparing for system design interviews or deepening architectural thinking.

---

## ✨ Features

- **30-Day System Design Series** — structured articles progressing from fundamentals to advanced distributed systems concepts
- **Topic Deep-Dives** — curated pages per topic (Databases, Caching, Networking, Messaging Queues) with multiple articles each
- **Search & Filter** — client-side article search on the home page
- **Reading Progress Tracker** — visual progress bar tracking articles read (localStorage)
- **Fully Responsive** — mobile-first layout using Bootstrap 5
- **No build tools** — plain HTML, CSS, and vanilla JS; runs anywhere

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | [Bootstrap 5.3.3](https://getbootstrap.com/) |
| Icons | [Bootstrap Icons 1.11.3](https://icons.getbootstrap.com/) |
| Markup | Semantic HTML5 |
| Styling | Modular vanilla CSS (external stylesheets) |
| Scripting | Vanilla JavaScript (ES6) |
| Hosting | GitHub Pages / any static host |

---

## 📁 Project Structure

```
systemDesign/
├── index.html                    # Home page (hero, search, article grid, topics)
├── .gitignore
│
├── stylesheets/                  # Shared CSS — one file per page type
│   ├── common.css                # Navbar, footer, back-btn (all pages)
│   ├── home.css                  # Hero, stats, article cards, modals
│   ├── article.css               # Article layout, highlight boxes, tags
│   └── topic.css                 # Topic index pages, article card grid
│
├── systemDesignSeries/           # 30-day structured learning series
│   ├── day1.html                 # What is System Design?
│   ├── day2.html                 # Horizontal vs Vertical Scaling
│   └── day3.html                 # (and counting…)
│
└── topics/                       # Deep-dive topic sections
    ├── databases/
    │   ├── index.html            # Topic landing page (lists articles)
    │   ├── acid.html             # ACID Properties Explained
    │   └── nosql-vs-sql.html     # SQL vs NoSQL — When to Use Which?
    ├── caching/
    │   └── index.html            # Coming soon
    ├── networking/
    │   └── index.html            # Coming soon
    └── messaging/
        └── index.html            # Coming soon
```

---

## 🚀 Running Locally

No install required. Just clone and serve:

```bash
git clone https://github.com/ashutosh139/systemDesign.git
cd systemDesign

# Option 1: Python (built-in)
python3 -m http.server 5500

# Option 2: Node (npx)
npx serve .

# Option 3: VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

Then open [http://localhost:5500](http://localhost:5500) in your browser.

---

## ✍️ Adding Content

### Add a new Day article

1. Copy an existing file: `cp systemDesignSeries/day3.html systemDesignSeries/day4.html`
2. Update the `<title>`, breadcrumb, heading, and article body content
3. Update the prev/next navigation links at the bottom
4. Add a new card to the `#articles` grid in `index.html`

### Add a new Topic article

1. Create the HTML file inside the appropriate `topics/<topic>/` folder
2. Link `../../stylesheets/common.css` and `../../stylesheets/article.css`
3. Add a card entry to `topics/<topic>/index.html`
4. Update the article count badge in the topic index

### Add a new Topic section

1. Create the folder: `topics/<new-topic>/`
2. Create `topics/<new-topic>/index.html` — copy from an existing topic index
3. Add the topic card to the `#topics` section in `index.html`

---

## 📚 Content Roadmap

### ✅ Published

| Day | Topic |
|-----|-------|
| Day 1 | What is System Design? |
| Day 2 | Horizontal vs Vertical Scaling |
| Day 3 | Load Balancers |

| Topic | Articles |
|-------|----------|
| Databases | ACID Properties, SQL vs NoSQL |

### 🔜 Coming Soon

- **Caching** — Redis, CDN, cache invalidation strategies
- **Networking** — DNS, HTTP/HTTPS, TCP vs UDP, WebSockets
- **Messaging Queues** — Kafka, RabbitMQ, event-driven architecture
- **Day 4+** — CAP theorem, consistent hashing, rate limiting, and more

---

## 📬 Contact

Built by **Ashutosh Pandey**

- 📧 [imaashutoshpandey@gmail.com](mailto:imaashutoshpandey@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/ashutosh-pandey-ukg)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
