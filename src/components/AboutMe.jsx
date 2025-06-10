import React from "react";
import "./AboutMe.css"; // Make sure this CSS file exists

function AboutMe() {
  return (
    <section className="about-me">
      <h3>🌸 About Me</h3>
       <p>
        I'm <strong>Shreya Sharma</strong>, a front-end developer who enjoys crafting
        clean, responsive, and user-focused web applications.
      </p>
      <p>
        I specialize in <strong>React.js</strong>, <strong>JavaScript (ES6+)</strong>, and <strong>HTML/CSS</strong>, and use tools
        like <strong>Git</strong>, <strong>Vite</strong>, and <strong>Webpack</strong> in modern development workflows.
      </p>
      <p>
        This app demonstrates reusable components, state management with
        <code> useState</code> and <code> useEffect</code>, and filter-based task logic.
      </p>
      <div className="social-links">
        <a href="https://github.com/sshreya1809" target="_blank" rel="noreferrer">
          🌐 GitHub
        </a>
        <a href="https://www.linkedin.com/in/shreya-sharma-231450289/" target="_blank" rel="noreferrer">
          💼 LinkedIn
        </a>
      </div>
    </section>
  );
}

export default AboutMe;
