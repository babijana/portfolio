import "../styles/Activity.css";

const activities = [
  {
    title: "Portfolio Website (This Project)",
    bullets: [
      "Created multiple pages using React Router",
      "Practicing component structure and CSS styling",
      "Will add more projects over time",
    ],
  },
  {
    title: "University / Personal Learning",
    bullets: [
      "Currently learning React and web basics",
      "Planning to build 2–3 small projects next",
    ],
  },
];

export default function Activity() {
  return (
    <div className="activity">
      <h1>Activities / Leadership</h1>
      <p className="muted">
        I’m currently building my first projects. I will keep updating this
        section as I take on more roles and work.
      </p>

      <div className="grid">
        {activities.map((a) => (
          <div key={a.title} className="card">
            <h3>{a.title}</h3>
            <ul>
              {a.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}