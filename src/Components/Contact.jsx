import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p className="muted">
        You can reach me using the links below.
      </p>

      <div className="contact__box">
        <div>
          <div className="label">Email</div>
          <div className="value">yourname@email.com</div>
        </div>

        <div>
          <div className="label">GitHub</div>
          <a className="value" href="https://github.com/" target="_blank" rel="noreferrer">
            github.com/yourusername
          </a>
        </div>

        <div>
          <div className="label">LinkedIn</div>
          <a className="value" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            linkedin.com/in/yourprofile
          </a>
        </div>
      </div>
    </div>
  );
}