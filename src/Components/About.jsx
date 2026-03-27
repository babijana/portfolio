import "../styles/About.css";

export default function About() {
  return (
    <div className="about">
      <section className="glass about__card">
        <h1 className="about__title">About Me</h1>
        <p className="about__text">
          I’m a Computer Science undergraduate focused on building clean and practical web applications.
          I enjoy solving problems, improving systems, and learning by building.
        </p>
      </section>

      
      <section className="about__section">
        <h2 className="about__sectionTitle">Skills</h2>

        <div className="stats">
          <div className="stat">
            <div className="stat__value">Frontend</div>
            <div className="stat__label">UI development (React, JavaScript)</div>
          </div>

          <div className="stat">
            <div className="stat__value">Backend</div>
            <div className="stat__label">APIs & server logic (Spring Boot)</div>
          </div>

          <div className="stat">
            <div className="stat__value">Database</div>
            <div className="stat__label">Data handling (MySQL) </div>
          </div>

          <div className="stat">
            <div className="stat__value">Tools</div>
            <div className="stat__label">Version control & debugging (Git)</div>
          </div>

    
        </div>
      </section>

     
      <section className="glass about__card">
        
        <h2 className="about__title2">My Vision</h2>
        <p className="about__text">
          I aim to build applications that are simple, reliable, and designed to solve real problems.
        </p>
      </section>
    </div>
  );
}