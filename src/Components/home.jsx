import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      

      <div className="hero">
        <div className="hero__image avatar-blob">
          <img src="/photo.jpg" alt="Profile" />
        </div>

        <div className="hero__content">
          <h3 className="hero__greeting">Hello! 👋</h3>
          <h2 className="hero__name">
            I Am <span>Babijana Jegarashan</span>
          </h2>
          <p>
            I’m a Computer Science undergraduate currently learning React and
            building my first portfolio project. I enjoy solving problems and
            improving my skills step by step.
          </p>

          <p>
            My goal is to become a strong full-stack developer and work on
            meaningful real-world applications.
          </p>
        </div>
      </div> 

      <div className="home__links">
        <a
          className="btn"
          href="https://github.com/"
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