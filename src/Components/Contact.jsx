import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });
    setLoading(true);

    try {
      const SERVICE_ID = "YOUR_SERVICE_ID";
      const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
      const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      setStatus({ type: "success", msg: "Message sent successfully ✅" });
      formRef.current.reset();
    } catch (err) {
      setStatus({ type: "error", msg: "Failed to send. Try again later ❌" });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      <div className="contact__header">
        <h3 className="contact__greeting">Let's Connect 🤝</h3>
        <h2 className="contact__title">
          Contact <span>Me</span>
        </h2>
        <p className="contact__subtitle">
          Have a question, opportunity, or project idea? Send me a message.
        </p>
      </div>

      <div className="contact__grid">
        {/* Left: Form */}
        <div className="contact__card">
          <h3 className="card__title">Send a Message</h3>

          <form ref={formRef} onSubmit={handleSend} className="contact__form">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="from_name"
                type="text"
                placeholder="Your name"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="reply_to"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
                required
              />
            </div>

            <button className="btn contact__btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status.msg && (
              <p className={`contact__status ${status.type}`}>
                {status.msg}
              </p>
            )}
          </form>
        </div>

        {/* Right: Info */}
        <div className="contact__card contact__info">
          <h3 className="card__title">Contact Info</h3>

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
              linkedin.com/in/yourname
            </a>
          </div>

          <div className="info__note">
            <p>
              I’m currently open to internships, collaborations, and learning opportunities.
            </p>
          </div>

          <div className="info__buttons">
            <a className="btn" href="https://github.com/babijana" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn btn--ghost" href="https://www.linkedin.com/in/jegarashan-babijana-7b2054280/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}