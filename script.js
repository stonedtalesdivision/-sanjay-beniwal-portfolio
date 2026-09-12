<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Sanjay Beniwal — self-directed software developer building practical web applications, AI products, business platforms and interactive systems.">
  <title>Sanjay Beniwal — Software Developer</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="nav">
    <a class="brand" href="#top" aria-label="Sanjay Beniwal home">SB<span>.</span></a>
    <nav aria-label="Primary navigation">
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#about">About</a>
      <a class="nav-cta" href="mailto:beniwalssanjay@gmail.com">Contact</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero section">
      <div class="hero-copy">
        <p class="eyebrow">SOFTWARE DEVELOPER · INDIA</p>
        <h1>I build practical software and AI-powered systems.</h1>
        <p class="lead">
          I’m Sanjay Beniwal, a self-directed software developer with an engineering background,
          focused on web development, AI-assisted engineering, business platforms, game systems and debugging.
        </p>
        <div class="actions">
          <a class="button primary" href="#projects">View projects</a>
          <a class="button secondary" href="mailto:beniwalssanjay@gmail.com">Get in touch</a>
        </div>
        <div class="quick-links">
          <a href="https://github.com/stonedtalesdivision" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="mailto:beniwalssanjay@gmail.com">Email ↗</a>
          <a href="Sanjay_Beniwal_Software_Engineer_Resume_Final.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
        </div>
      </div>

      <div class="hero-card">
        <div class="terminal">
          <div class="terminal-top" aria-hidden="true"><span></span><span></span><span></span></div>
          <pre><code><b>developer</b>: sanjay
focus:
  software engineering
  AI-powered products
  web applications
  interactive systems

stack:
  JavaScript
  C#
  HTML / CSS
  Unity
  APIs
  Git / GitHub

workflow:
  build → test → debug → improve</code></pre>
        </div>
      </div>
    </section>

    <section id="projects" class="section">
      <div class="section-heading">
        <p class="eyebrow">SELECTED WORK</p>
        <h2>Products and projects I’ve built.</h2>
      </div>

      <article class="project featured product-project">
        <div class="project-meta">
          <span>01</span><span>AI PRODUCT · ACTIVE</span>
        </div>
        <h3>SARLX.Ai</h3>
        <p class="project-sub">AI for Coding</p>
        <p>
          My AI coding-agent project focused on helping developers build software through AI-assisted
          implementation, code inspection, debugging and iterative development. I’m developing the
          product as a practical software engineering system rather than a simple chatbot.
        </p>
        <div class="tags">
          <span>AI Coding</span><span>JavaScript</span><span>Web Application</span><span>APIs</span><span>Debugging</span>
        </div>
        <span class="status active">Active development</span>
      </article>

      <div class="project-grid">
        <article class="project product-project">
          <div class="project-meta"><span>02</span><span>AI PRODUCT · ACTIVE</span></div>
          <h3>SARLX.Bi</h3>
          <p class="project-sub">AI for Business</p>
          <p>
            A business-focused AI platform designed to support business intelligence and operations.
            The project explores how AI can turn business requirements and workflows into useful,
            practical software capabilities.
          </p>
          <div class="tags">
            <span>AI</span><span>Business</span><span>Web Platform</span><span>Automation</span><span>Product Engineering</span>
          </div>
          <span class="status active">Active development</span>
        </article>

        <article class="project product-project">
          <div class="project-meta"><span>03</span><span>WEB APPLICATION · DEPLOYED</span></div>
          <h3>SONGISTAN</h3>
          <p class="project-sub">Music discovery & playback platform</p>
          <p>
            A deployed web application built around playlist discovery and playback. I implemented
            YouTube API integration, playback controls, queue behaviour, persistent playback state,
            resume-after-reopen behaviour, deployment and production debugging.
          </p>
          <div class="tags">
            <span>JavaScript</span><span>HTML</span><span>CSS</span><span>YouTube API</span><span>Deployment</span>
          </div>
          <div class="project-links">
            <a href="https://songistan.onrender.com/" target="_blank" rel="noreferrer">Live demo ↗</a>
            <a href="https://github.com/stonedtalesdivision" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </article>

        <article class="project">
          <div class="project-meta"><span>04</span><span>GAME DEVELOPMENT · PROTOTYPE</span></div>
          <h3>AMRIT: 187</h3>
          <p class="project-sub">Mobile-first third-person action game</p>
          <p>
            A game development project currently focused on Unity 6 and C# prototyping, including
            character switching, gameplay systems, combat concepts, enemy behaviour and companion AI.
            Unreal Engine 5 architecture is part of the longer-term direction.
          </p>
          <div class="tags">
            <span>Unity 6</span><span>C#</span><span>Gameplay Systems</span><span>AI Behaviour</span><span>Prototyping</span>
          </div>
          <a class="text-link" href="#amrit">View technical case study ↓</a>
        </article>

        <article class="project">
          <div class="project-meta"><span>05</span><span>WEB DEVELOPMENT · BUSINESS</span></div>
          <h3>AAJAD ELECTRONICS</h3>
          <p class="project-sub">Appliance store website</p>
          <p>
            A business website project for an appliance retailer, focused on presenting products,
            brands, store information and customer contact paths in a practical web experience.
          </p>
          <div class="tags">
            <span>HTML</span><span>CSS</span><span>JavaScript</span><span>Responsive Web</span><span>Business Website</span>
          </div>
        </article>
      </div>
    </section>

    <section id="amrit" class="case section">
      <div class="section-heading">
        <p class="eyebrow">TECHNICAL CASE STUDY</p>
        <h2>AMRIT: 187</h2>
      </div>
      <div class="case-layout">
        <div>
          <p class="large">
            The project is designed around a smartphone-first third-person combat loop where the player
            can switch between two active characters while an AI partner supports the player.
          </p>
        </div>
        <div class="case-points">
          <div><b>Character switching</b><span>Player and AI control states are designed to transfer during gameplay without a loading transition.</span></div>
          <div><b>Partner AI</b><span>Follow, combat, protect and revive behaviours are being designed around a Behaviour Tree / Blackboard architecture.</span></div>
          <div><b>Companion AI</b><span>Sugar has distinct follow, detect, warn, weak-target attack and strong-target retreat behaviours.</span></div>
          <div><b>Current implementation</b><span>Unity 6 and C# are the current prototyping environment; broader Unreal Engine 5 architecture remains a future direction.</span></div>
        </div>
      </div>
      <p class="disclaimer">Status: pre-production / prototype development. Unreal Engine 5 production implementation is not presented as completed work.</p>
    </section>

    <section id="workflow" class="section workflow">
      <div class="section-heading">
        <p class="eyebrow">HOW I WORK</p>
        <h2>AI accelerates the work. Engineering validates it.</h2>
      </div>
      <div class="steps">
        <div><span>01</span><h3>Define</h3><p>Turn a product idea or bug report into concrete technical requirements.</p></div>
        <div><span>02</span><h3>Build</h3><p>Use conventional coding and AI-assisted implementation to move quickly.</p></div>
        <div><span>03</span><h3>Inspect</h3><p>Read the generated code, question assumptions and identify failure cases.</p></div>
        <div><span>04</span><h3>Test</h3><p>Run the software, reproduce problems and validate behaviour against the requirement.</p></div>
        <div><span>05</span><h3>Improve</h3><p>Refactor, fix, document and iterate until the result works in the real project.</p></div>
      </div>
    </section>

    <section id="skills" class="section">
      <div class="section-heading">
        <p class="eyebrow">TOOLKIT</p>
        <h2>Technical skills</h2>
      </div>
      <div class="skills">
        <div><h3>Languages</h3><p>JavaScript · C# · HTML5 · CSS3</p></div>
        <div><h3>Web</h3><p>Responsive web development · APIs · Web applications · Frontend development</p></div>
        <div><h3>Engineering</h3><p>Git · GitHub · Debugging · Code review · Testing · Rapid prototyping</p></div>
        <div><h3>AI & Game</h3><p>AI-assisted coding · Prompt engineering · AI output evaluation · Unity 6 · Gameplay systems</p></div>
      </div>
    </section>

    <section id="about" class="section about">
      <div>
        <p class="eyebrow">ABOUT</p>
        <h2>Engineering background, software focus.</h2>
      </div>
      <div>
        <p>
          I hold a B.Tech in Mechanical Engineering from Arya College of Engineering & IT,
          affiliated with Rajasthan Technical University, Kota, graduating in 2017.
        </p>
        <p>
          Software development started as a serious self-directed part-time pursuit alongside my
          engineering background. I build practical projects to learn by implementation, debugging
          and iteration rather than only studying theory.
        </p>
        <p>
          My current work spans web applications, AI-powered products, business platforms and game
          systems. I use AI as a development accelerator while taking responsibility for testing,
          debugging and validating the resulting software.
        </p>
      </div>
    </section>

    <section class="contact section">
      <p class="eyebrow">OPEN TO OPPORTUNITIES</p>
      <h2>Have a software problem worth solving?</h2>
      <p>Web development, AI-assisted engineering, debugging and practical software projects.</p>
      <a class="button primary" href="mailto:beniwalssanjay@gmail.com">beniwalssanjay@gmail.com</a>
    </section>
  </main>

  <footer>
    <span>© <span id="year"></span> Sanjay Beniwal</span>
    <a href="https://github.com/stonedtalesdivision" target="_blank" rel="noreferrer">GitHub ↗</a>
  </footer>

  <script src="script.js"></script>
</body>
</html>
