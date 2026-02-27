import "../styles/Activity.css";

export default function Activities() {
  return (
    <div className="activities">

      <div className="activities__header">
        <h3 className="activities__greeting">My Work </h3>
        <h2 className="activities__title">
          Projects & <span>Leadership</span>
        </h2>
      </div>

      <div className="activities__content">

        {/* Hospital Management System */}
        <div className="activity__card featured">
          <h3>🏥 Hospital Management System</h3>
          <p>
            A full-stack web application to manage hospital operations including
            patient registration, doctor scheduling, appointment booking and
            admin management.
          </p>

          <ul>
            <li>Full-stack development</li>
            <li>Authentication system</li>
            <li>Admin & user dashboards</li>
            <li>Database integration</li>
          </ul>

          <div className="activity__buttons">
            <a href="#" className="btn">GitHub</a>
            <a href="#" className="btn btn--ghost">Live Demo</a>
          </div>
        </div>

        {/* Portfolio */}
        <div className="activity__card">
          <h3>🌐 Portfolio Website</h3>
          <p>
            A responsive personal portfolio built with React to showcase my
            projects, skills and achievements.
          </p>

          <ul>
            <li>Modern dark UI</li>
            <li>Responsive layout</li>
            <li>Clean component structure</li>
          </ul>
        </div>

        {/* Leadership */}
        <div className="activity__card">
          <h3>👩‍💼 Vice President – Moratuwa Pilot Exam</h3>
          <p>
            Assisted in organizing academic events, coordinating teams and
            managing responsibilities effectively.
          </p>

          <ul>
            <li>Leadership & coordination</li>
            <li>Team communication</li>
            <li>Event planning</li>
          </ul>
        </div>

      </div>

    </div>
  );
}