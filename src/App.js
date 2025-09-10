import React, { useEffect, useState } from "react";
import "./App.css";

// Hero image component with robust path handling for GitHub Pages (subdirectory deploy)
function HeroImage() {
  const [src, setSrc] = useState(() => {
    // Try relative path first (works after build inside same folder)
    return "me.jpeg";
  });
  const tried = React.useRef(0);

  return (
    <img
      src={src}
      alt="Taha Ikram"
      className="avatar"
      loading="lazy"
      onError={() => {
        if (tried.current > 2) return;
        tried.current += 1;
        // Attempt alternative public URL patterns
        const candidates = [
          `${process.env.PUBLIC_URL || ""}/me.jpeg`, // with PUBLIC_URL prefix
          `/my-portfolio/me.jpeg`, // explicit repo path
          "/me.jpeg", // root (last resort)
        ];
        setSrc(candidates[tried.current - 1]);
      }}
    />
  );
}

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formState, setFormState] = useState({ status: "idle", error: null });
  // Provide your actual Formspree (or other) endpoint in .env as REACT_APP_FORM_ENDPOINT
  const FORM_ENDPOINT =
    process.env.REACT_APP_FORM_ENDPOINT || "https://formspree.io/f/"; // placeholder base
  // Simple heuristic: expect something like https://formspree.io/f/abcdwxyz (id 6-12+ chars)
  const endpointConfigured = /https?:\/\/[^/]+\/f\/[a-zA-Z0-9]{4,}/.test(
    FORM_ENDPOINT.trim()
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <div className="App">
      <header className="site-header">
        <div className="brand">
          <h1 className="gradient-text">Taha Ikram</h1>
          <p className="subtitle">
            Software Engineering Student · Web & App Developer · Data & AI
            Enthusiast
          </p>
        </div>
        <nav className="main-nav" aria-label="Primary Navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#internships">Internships</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </header>

      <section className="hero" role="banner">
        <div className="hero-inner">
          <div className="hero-image-wrapper">
            <HeroImage />
          </div>
          <div className="hero-copy">
            <h2>Building thoughtful digital experiences.</h2>
            <p>
              I love turning complex problems into intuitive solutions. Focused
              on performant front‑end architectures, clean code, and continuous
              learning across the stack.
            </p>
            <div className="tags" aria-label="Key Skills">
              {[
                "React",
                "Next.js",
                "JavaScript",
                "C++",
                "Python",
                "SQL",
                "Data Structures",
                "Android",
                "REST APIs",
              ].map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="hero-cta">
              <a href="#projects" className="btn primary">
                View Projects
              </a>
              <a href="#contact" className="btn ghost">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="panel">
        <h2>About Me</h2>
        <p>
          I'm <strong>Taha Ikram</strong>, currently in the 7th semester of my
          BS Software Engineering at Superior University. I have hands‑on
          experience in web & mobile development, C++, Python, SQL, and modern
          frameworks like React & Next.js. I enjoy solving real problems,
          optimizing user experiences, and exploring AI + data driven tooling.
        </p>
        <p>
          Beyond coding, I'm constantly refining my understanding of system
          design, scalability patterns, and clean architecture principles to
          build resilient software.
        </p>
      </section>

      <section id="projects" className="panel">
        <h2>Projects</h2>
        <div className="project-grid">
          {[
            {
              title: "Rental Car System",
              stack: "C++",
              desc: "Console app managing fleet, users & bookings.",
            },
            {
              title: "Snake Game",
              stack: "C++",
              desc: "Classic arcade logic with optimized collision.",
            },
            {
              title: "Amazon Clone",
              stack: "React / Firebase",
              desc: "E‑commerce flows: auth, cart, checkout.",
            },
            {
              title: "Flower Ordering System",
              stack: "Web App",
              desc: "Catalog + order pipeline UI.",
            },
            {
              title: "Library Management",
              stack: "SQL / CRUD",
              desc: "Relational design & inventory ops.",
            },
            {
              title: "Home Décor Android App",
              stack: "Android",
              desc: "Category browsing & wishlists.",
            },
            {
              title: "MD Agent",
              stack: "AI / Routing",
              desc: "Medical triage & smart case assignment.",
            },
            {
              title: "Playlist DS Suite",
              stack: "Data Structures",
              desc: "Singly/Doubly/Circular lists + queues.",
            },
          ].map((p) => (
            <article
              key={p.title}
              className="project-card"
              aria-label={p.title}
            >
              <h3>{p.title}</h3>
              <p className="stack">{p.stack}</p>
              <p className="desc">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="certifications" className="panel certifications">
        <h2>Certifications</h2>
        <div className="cert-grid" role="list">
          {/* Left Column */}
          <div className="cert-col" role="listitem">
            <div className="cert-item">
              <span className="year">2024</span>
              <div className="cert-body">
                <h3>Advanced Python</h3>
                <p className="issuer">Sololearn</p>
              </div>
            </div>
            <div className="cert-item">
              <span className="year">2025</span>
              <div className="cert-body">
                <h3>AI & Data Analytics </h3>
                <p className="issuer italic">Intellisinc INC</p>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="cert-divider" aria-hidden="true" />
          {/* Right Column */}
          <div className="cert-col" role="listitem">
            <div className="cert-item">
              <span className="year">2024</span>
              <div className="cert-body">
                <h3>SQL</h3>
                <p className="issuer">Sololearn</p>
              </div>
            </div>
            <div className="cert-item">
              <span className="year">2025</span>
              <div className="cert-body">
                <h3>Android Development</h3>
                <p className="issuer">Excellence Delivered (ExD)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="internships" className="panel internships">
        <h2>Internships</h2>
        <div className="internship-grid">
          {[
            {
              company: "Intellisnc INC",
              focus: "Data Analytics · ML · AI",
              desc: "Contributed to analytical pipelines, feature engineering & exploratory visualization for decision support.",
              year: "2025",
            },
            {
              company: "Radian Sol",
              focus: "Next.js · Node.js",
              desc: "Implemented SSR pages, API routes & performance optimizations (bundle splitting, caching).",
              year: "2025",
            },
            {
              company: "Excellence Delivered (ExD)",
              focus: "Android Development",
              desc: "Built UI components & integrated REST endpoints; improved UX and code modularity.",
              year: "2025",
            },
          ].map((i) => (
            <article
              key={i.company}
              className="internship-card"
              aria-label={i.company}
            >
              <header className="internship-head">
                <h3>{i.company}</h3>
                <span className="badge year-badge">{i.year}</span>
              </header>
              <p className="focus">{i.focus}</p>
              <p className="desc">{i.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="panel contact">
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:tahax2233@gmail.com">tahax2233@gmail.com</a>
          <br />
          Phone: +92 324 4581134
          <br />
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/taha-ikram-1972372a0/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/taha-ikram
          </a>
          <br />
          Instagram:{" "}
          <a
            href="https://www.instagram.com/tahaaaa.x/"
            target="_blank"
            rel="noreferrer"
          >
            @tahaaaa.x
          </a>
        </p>
        <form
          className="contact-form"
          onSubmit={async (e) => {
            e.preventDefault();
            if (formState.status === "submitting") return;
            if (
              !formData.name.trim() ||
              !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email) ||
              formData.message.trim().length < 5
            ) {
              setFormState({
                status: "error",
                error: "Please fill all fields correctly.",
              });
              return;
            }
            if (!endpointConfigured) {
              setFormState({
                status: "error",
                error:
                  "Form endpoint not configured. Add REACT_APP_FORM_ENDPOINT to .env",
              });
              return;
            }
            try {
              setFormState({ status: "submitting", error: null });
              const res = await fetch(FORM_ENDPOINT, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify({
                  ...formData,
                  _subject: `Portfolio message from ${formData.name}`,
                  source: "portfolio-contact-form",
                }),
              });
              let payload = null;
              try {
                payload = await res.json();
              } catch {
                /* ignore parse */
              }
              if (!res.ok) {
                const apiError =
                  payload?.errors?.[0]?.message ||
                  payload?.message ||
                  "Service error";
                throw new Error(apiError);
              }
              setFormState({ status: "success", error: null });
              setFormData({ name: "", email: "", message: "" });
            } catch (err) {
              setFormState({
                status: "error",
                error: err.message || "Failed to send. Try again later.",
              });
            }
          }}
          aria-label="Quick message form"
        >
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData((f) => ({ ...f, name: e.target.value }))
              }
              required
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData((f) => ({ ...f, email: e.target.value }))
              }
              required
            />
          </div>
          <div className="field">
            <label htmlFor="msg">Message</label>
            <textarea
              id="msg"
              name="message"
              rows={4}
              placeholder="Say hello..."
              value={formData.message}
              onChange={(e) =>
                setFormData((f) => ({ ...f, message: e.target.value }))
              }
              required
            />
          </div>
          <button
            className="btn submit"
            type="submit"
            disabled={formState.status === "submitting"}
          >
            {formState.status === "submitting"
              ? "Sending..."
              : formState.status === "success"
              ? "Sent ✔"
              : "Send Message"}
          </button>
          {formState.status === "error" && (
            <p className="form-msg error" role="alert">
              {formState.error}
            </p>
          )}
          {formState.status === "success" && (
            <p className="form-msg success" role="status">
              Message delivered! I will reply soon.
            </p>
          )}
          {!endpointConfigured && formState.status === "idle" && (
            <p className="form-msg error" role="alert">
              Set REACT_APP_FORM_ENDPOINT in .env (e.g.
              https://formspree.io/f/abcdwxyz).
            </p>
          )}
        </form>
      </section>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Taha Ikram.</p>
        <a className="hidden-link" href="https://react.dev" aria-hidden="true">
          learn react
        </a>
      </footer>
    </div>
  );
}

export default App;
