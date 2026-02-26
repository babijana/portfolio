import "../styles/About.css";

export default function About() {
  return (
    <div className="about">
      <section className="glass about__card">
        <h1 className="about__title">About Me</h1>
        <p className="about__text">
          I’m a Computer Science undergraduate passionate about building clean
          and functional web applications. I enjoy understanding core concepts
          deeply and continuously improving my technical skills.
        </p>
      </section>

      
      <section className="about__section">
        <h2 className="about__sectionTitle">Skills</h2>

        <div className="stats">
          <div className="stat">
            <div className="stat__value">React</div>
            <div className="stat__label">Components • Router</div>
          </div>

          <div className="stat">
            <div className="stat__value">JavaScript</div>
            <div className="stat__label">ES6 • DOM Basics</div>
          </div>

          <div className="stat">
            <div className="stat__value">HTML</div>
            <div className="stat__label">Semantic Layout</div>
          </div>

          <div className="stat">
            <div className="stat__value">CSS</div>
            <div className="stat__label">Flex • Grid • UI</div>
          </div>

          <div className="stat">
            <div className="stat__value">Git</div>
            <div className="stat__label">GitHub • Versioning</div>
          </div>
        </div>
      </section>

     
      <section className="glass about__card">
        
        <h2 className="about__title2">My Vision</h2>
        <p className="about__text">
          My goal is to become a strong full-stack developer who builds scalable
          and meaningful digital products that solve real-world problems.
        </p>
      </section>
    </div>
  );
}