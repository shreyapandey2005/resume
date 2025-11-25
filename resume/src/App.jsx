export default function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav>
        <div className="logo">KD</div>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="wrapper">
        
        {/* HERO SECTION */}
        <div className="hero-img"></div>

        <div className="hero-title">
          Hii! I'm Shreya, <span style={{ fontSize: '40px' }}> I design and build <span>next-level experiences</span> </span>
        </div>

        <div className="hero-bio">
          A creative developer & designer who specializes in futuristic UI, smooth micro-interactions, and beautiful digital experiences.
        </div>

        <div className="hero-btns">
          <button className="btn btn-outline">Contact Me</button>cd res
          <button className="btn btn-primary">Download CV</button>
        </div>

        {/* EXPERIENCE */}
        <div className="exp-title">TOOLS & LANGUAGES</div>

        <div className="exp-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
        </div>

          {/* PERSONAL INFO */}
        <section id="personal" className="personal-section">
          <h2 className="personal-heading">Personal Info</h2>
          <div className="personal-grid">
            <div className="personal-item"><span className="label">Role:</span> Student </div>
            <div className="personal-item"><span className="label">Branch/ Year</span> 2023-2027/2025 </div>
            <div className="personal-item"><span className="label"> College </span> Rungta College of Engineering and Technology</div>
            <div className="personal-item"><span className="label">Email:</span> shreyapandey1652005@gmail.com</div>
            <div className="personal-item"><span className="label">Phone:</span> +91-7067117555</div>
            <div className="personal-item"><span className="label">Location:</span> Durg, Chhattishghar </div>
          </div>
        </section>

        {/* PROJECTS */}
        <div className="section-label">PROJECTS</div>

        <div className="projects">
          
          <div className="card">
            <img src="https://i.imgur.com/sj7gB2o.jpeg" alt="HTML Tutorial preview" />
            <div className="card-content">
              <div className="card-title">HTML Tutorial</div>
              <div className="card-link">Visit →</div>
            </div>
          </div>

          <div className="card">
            <img src="https://i.imgur.com/wX4E3Jx.jpeg" alt="CSS Tutorial preview" />
            <div className="card-content">
              <div className="card-title">CSS Tutorial</div>
              <div className="card-link">Visit →</div>
            </div>
          </div>

        </div>

      

        {/* ACADEMICS */}
        <section id="academics" className="academic-section">
          <h2 className="academic-heading">Academic Scores</h2>
          <div className="academic-list">
            <article className="academic-item">
              <div className="academic-row">
                <div className="academic-left">
                  <span className="academic-bullet" aria-hidden="true"></span>
                  <h3 className="academic-title">College</h3>
                </div>
                <div className="academic-score">CGPA: 8.6/10</div>
              </div>
              <p className="academic-desc">B.Tech in Computer Science, CSVTU University (2023–2027)</p>
            </article>

            <article className="academic-item">
              <div className="academic-row">
                <div className="academic-left">
                  <span className="academic-bullet" aria-hidden="true"></span>
                  <h3 className="academic-title">12th (HSC)</h3>
                </div>
                <div className="academic-score">Percentage: 82%</div>
              </div>
              <p className="academic-desc">Board: CBSE | Year: 2023</p>
            </article>

            <article className="academic-item">
              <div className="academic-row">
                <div className="academic-left">
                  <span className="academic-bullet" aria-hidden="true"></span>
                  <h3 className="academic-title">10th (SSC)</h3>
                </div>
                <div className="academic-score">CGPA: 85%</div>
              </div>
              <p className="academic-desc">Board: CBSE | Year: 2021</p>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <h2 className="contact-heading">Contact</h2>

          <div className="contact-meta">
            <div className="contact-list">
              <a className="contact-item" href="tel:+91XXXXXXXXXX" aria-label="Phone number">+91-7067117555</a>
              <a className="contact-item" href="mailto:you@example.com" aria-label="Email address">shreyapandey1652005@gmail.com</a>
            </div>
            <div className="socials">
              <a href="https://www.linkedin.com/in/your-handle" target="_blank" rel="noreferrer" className="social" aria-label="LinkedIn">in</a>
              <a href="https://github.com/your-handle" target="_blank" rel="noreferrer" className="social" aria-label="GitHub">GH</a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
