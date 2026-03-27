import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">

      <div className="hero">

        <div className="hero__image avatar-blob">
          <img src="/maya-ali1.jpg" alt="Profile" />
        </div>

        <div className="hero__content">
          <h3 className="hero__greeting">Hello! 👋</h3>

          <h2 className="hero__name">
            I Am <span>Babijana Jegarashan</span>
          </h2>

          <p>
            A Computer Science undergraduate with experience in building full-stack web applications. 
            I enjoy designing efficient systems and creating user-friendly digital experiences.

            
          </p>

          <p>
            I’m passionate about solving real-world problems through clean and scalable solutions,
             and I’m working towards becoming a skilled full-stack developer.
          </p>
        </div>

      </div>

      <div className="home__links">
        <a
          className="btn"
          href="https://github.com/babijana/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          className="btn btn--ghost"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>

    </div>
  );
}