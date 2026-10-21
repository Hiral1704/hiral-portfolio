
import { useState } from "react";
import "./App.css";

const skills = [
  { name: "HTML5", icon: "🌐", level: 90 },
  { name: "CSS3", icon: "🎨", level: 85 },
  { name: "JavaScript", icon: "⚡", level: 75 },
  { name: "Bootstrap", icon: "🅱️", level: 80 },
  { name: "React.js", icon: "⚛️", level: 75 },
  { name: "Redux", icon: "🔄", level: 65 },
  { name: "Node.js", icon: "🟢", level: 60 },
  { name: "Express.js", icon: "🚀", level: 60 },
  { name: "MySQL", icon: "🗄️", level: 65 },
];


const projects = [
  {
    title: "React Blog Application",
    description:
      "A full-featured blog application with post creation, editing and deletion. State is managed with Redux Toolkit, and a JSON Server acts as the REST API backend.",
    tech: ["React.js", "Redux Toolkit", "JSON Server", "CRUD Operations"],
    image: "/images/blog.png",
    preview: "MY BLOG",
    style: "blog-preview",
    github: "https://github.com/Hiral1704/Blog-Project",
    demo: "",
  },
  {
    title: "VrajraVarahi Website",
    description:
      "A responsive multi-page business website with interactive JavaScript features, served by an Express backend connected to a MySQL database.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL"],
    image: "/images/vrajra.png",
    github: "",
    demo: "",
  },
  {
    title: "Ayurvedic E-commerce Website",
    description:
      "A user-friendly e-commerce website for Ayurvedic products, designed to provide a smooth and simple online shopping experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/ayurvedic.png",
    preview: "AYURVEDIC STORE",
    style: "student-preview",
    github: "",
    demo: "",
  },
];


const education = [
  {
    title: "BCA – Bachelor of Computer Applications",
    place: "Swarrnim Startup & Innovation University",
    detail: "Computer applications, programming and web development.",
  },
  {
    title: "12th Standard",
    place: "Higher Secondary Education",
    detail: "Add your school name and passing year here.",
  },
  {
    title: "10th Standard",
    place: "Secondary Education",
    detail: "Add your school name and passing year here.",
  },
];

const certificates = [
  {
    title: "JavaScript for Beginners",
    description: "Simplilearn SkillUP · June 2026",
    image: "javascript.png",
  },
  {
    title: "React for Beginners",
    description: "Simplilearn SkillUP · October 2026",
    image: "react.png",
  },

];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      <span className="title-line" />
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={dark ? "portfolio dark" : "portfolio light"}>
      <header className="navbar">
        <div className="container nav-inner">
          <a className="brand" href="#home" onClick={closeMenu}>
            Hiral<span>Kshatriya</span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {["Home", "About", "Skills", "Projects", "Education", "Certificates", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                >
                  {item}
                </a>
              )
            )}

            <button
              className="theme-toggle"
              onClick={() => setDark(!dark)}
              aria-label="Toggle color theme"
              title="Toggle theme"
            >
              {dark ? "☀️" : "🌙"}
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container hero-content">
            <span className="availability">
              <span className="status-dot" />
              Open to opportunities
            </span>

            <p className="hero-intro">Hello, welcome to my portfolio</p>
            <h1>
              Hi, I'm
              <br />
              <span>Hiral Kshatriya</span>
            </h1>

            <h3>Frontend Developer &amp; Full Stack Development Learner</h3>

            <p className="hero-description">
              I enjoy creating clean, responsive and user-friendly web
              applications. I love learning new technologies and turning
              ideas into real projects through code.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                View My Work <span>↗</span>
              </a>
              <a className="btn btn-outline" href="#contact">
                Let's Talk
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/Hiral1704" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/hiral-kshatriya-0294b0419" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href="mailto:kshatriyahiral52@gmail.com">Email ↗</a>
            </div>
          </div>
          <div className="hero-glow" />
        </section>

        <section className="section" id="about">
          <div className="container">
            <SectionTitle
              eyebrow="GET TO KNOW ME"
              title="About Me"
              subtitle="A little introduction about who I am."
            />

            <div className="about-grid">
              <article className="glass-card about-card">
                <div className="avatar">HK</div>
                <h3>Hiral Kshatriya</h3>
                <p className="accent-text">
                  Frontend Developer | Full Stack Learner
                </p>
                <p>
                  I'm passionate about web development and enjoy building
                  websites that are simple, attractive and easy to use.
                  I'm continuously improving my skills by learning and
                  building practical projects.
                </p>
                <div className="mini-tags">
                  <span>Creative</span>
                  <span>Problem Solver</span>
                  <span>Always Learning</span>
                </div>
              </article>

              <div className="about-details">
                <article className="glass-card">
                  <span className="card-icon">🎓</span>
                  <h3>Education</h3>
                  <p>Bachelor of Computer Applications (BCA)</p>
                  <p className="muted">
                    Swarrnim Startup &amp; Innovation University
                  </p>
                </article>

                <article className="glass-card">
                  <span className="card-icon">💻</span>
                  <h3>What I Do</h3>
                  <p>Frontend development and web application projects.</p>
                  <p className="muted">
                    React, JavaScript, Node.js and database fundamentals.
                  </p>
                </article>

                <article className="glass-card purpose-card">
                  <span className="card-icon">🎯</span>
                  <h3>My Purpose</h3>
                  <p>
                    To grow as a developer, create meaningful digital
                    experiences and contribute to real-world projects.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="skills">
          <div className="container">
            <SectionTitle
              eyebrow="MY TOOLKIT"
              title="Skills"
              subtitle="Technologies and tools I have learned and practised."
            />

            <div className="skills-grid">
              {skills.map((skill) => (
                <article className="glass-card skill-card" key={skill.name}>
                  <div className="skill-top">
                    <span className="skill-icon">{skill.icon}</span>
                    <h3>{skill.name}</h3>
                  </div>
                  <div
                    className="skill-track"
                    role="img"
                    aria-label={`${skill.name} practice level: ${skill.level}%`}
                  >
                    <span style={{ width: `${skill.level}%` }} />
                  </div>
                </article>
              ))}
            </div>
            <p className="small-note">
              Skill bars are editable examples. Adjust them to reflect your
              actual experience.
            </p>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <SectionTitle
              eyebrow="WHAT I'VE BUILT"
              title="Featured Projects"
              subtitle="A selection of my learning and development projects."
            />

            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className="glass-card project-card" key={project.title}>
                  <div className={`project-preview ${project.style}`}>
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="project-image"
                      loading="lazy"
                    />
                    
                    <strong>{project.preview}</strong>
                    <span className="preview-mark">↗</span>
                    
                    <span className="preview-number">PROJECT 0{index + 1}</span>
                    <strong>{project.preview}</strong>
                    <span className="preview-mark">↗</span>
                  </div>

                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="project-tags">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="project-actions">
                      {project.demo ? (
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          Live Demo ↗
                        </a>
                      ) : (
                        <span className="muted">Add live link</span>
                      )}

                      {project.github ? (
                        <a href={project.github} target="_blank" rel="noreferrer">
                          GitHub ↗
                        </a>
                      ) : (
                        <span className="muted">Add GitHub link</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="education">
          <div className="container">
            <SectionTitle
              eyebrow="MY JOURNEY"
              title="Education"
              subtitle="My academic background and learning journey."
            />

            <div className="timeline">
              {education.map((item) => (
                <article className="glass-card timeline-card" key={item.title}>
                  <span className="timeline-dot">✦</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="accent-text">{item.place}</p>
                    <p className="muted">{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="certificates">
          <div className="container">
            <SectionTitle
              eyebrow="MILESTONES"
              title="Certificates"
              subtitle="Courses and certificates from my learning journey."
            />

            <div className="certificates-grid">
              {certificates.map((certificate) => (
                <article className="glass-card certificate-card" key={certificate.title}>
                  {certificate.image ? (
                    <img src={certificate.image} alt={certificate.title} />
                  ) : (
                    <div className="certificate-placeholder">
                      <span>✧</span>
                      <strong>Certificate</strong>
                    </div>
                  )}

                  <div className="certificate-body">
                    <h3>{certificate.title}</h3>
                    <p className="muted">{certificate.description}</p>
                    <span className="small-note">
                      Add your actual certificate image and link.
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="contact">
          <div className="container">
            <SectionTitle
              eyebrow="GET IN TOUCH"
              title="Let's Connect"
              subtitle="Have an opportunity or want to connect? Send me a message."
            />

            <div className="contact-grid">
              <div className="contact-details">
                <a className="glass-card contact-item" href="mailto:YOUR_EMAIL@example.com">
                  <span>✉️</span>
                  <div>
                    <strong>Email</strong>
                    <p>kshatriyahiral52@gmail.com</p>
                  </div>
                  <span className="contact-arrow">↗</span>
                </a>

                <a
                  className="glass-card contact-item"
                  href="https://www.linkedin.com/in/hiral-kshatriya-0294b0419"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>💼</span>
                  <div>
                    <strong>LinkedIn</strong>
                    <p>Let's connect professionally</p>
                  </div>
                  <span className="contact-arrow">↗</span>
                </a>

                <a
                  className="glass-card contact-item"
                  href="https://github.com/Hiral1704"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>💻</span>
                  <div>
                    <strong>GitHub</strong>
                    <p>Explore my code and projects</p>
                  </div>
                  <span className="contact-arrow">↗</span>
                </a>

              </div>

              <form
                className="glass-card contact-form"
                action="https://formsubmit.co/kshatriyahiral52@gmail.com"
                method="POST"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New portfolio contact message"
                />
                <input type="hidden" name="_captcha" value="true" />

                <div className="form-row">
                  <label>
                    Your Name
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </label>
                  <label>
                    Your Email
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </label>
                </div>

                <label>
                  Subject
                  <input
                    type="text"
                    name="subject"
                    placeholder="What is this about?"
                    required
                  />
                </label>

                <label>
                  Message
                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    rows="5"
                    required
                  />
                </label>

                <button className="btn btn-primary submit-btn" type="submit">
                  Send Message <span>↗</span>
                </button>
                <p className="small-note">
                  Replace the FormSubmit placeholder with your email before
                  using this form.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <a className="brand" href="#home">
            Hiral<span>Kshatriya</span>
          </a>
          <a href="#home">Back to top ↑</a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Hiral Kshatriya. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
