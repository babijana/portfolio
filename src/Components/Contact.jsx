import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact"> <div className="contact__header"> <h3 className="contact__greeting">Let's Connect 🤝</h3> <h2 className="contact__title"> Contact <span>Me</span> </h2> <p className="contact__subtitle"> Have a question, opportunity, or project idea? Send me a message. </p> </div>

      <div className="contact__grid">
        <div className="contact__card contact__info">
          <div className="info__item">
            <span className="info__label">Email</span>
            <a className="info__value" href="mailto:janajega789@gmail.com">
              janajega789@gmail.com
            </a>
          </div>

          <div className="info__item">
            <span className="info__label">GitHub</span>
            <a
              className="info__value"
              href="https://github.com/babijana"
              target="_blank"
              rel="noreferrer"
            >
              github.com/babijana
            </a>
          </div>

          <div className="info__item">
            <span className="info__label">LinkedIn</span>
            <a
              className="info__value"
              href="https://www.linkedin.com/in/jegarashan-babijana-7b2054280/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/jegarashan-babijana
            </a>
          </div>

          <div className="info__note">
            <p>Currently open to opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}