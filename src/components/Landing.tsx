import "./Landing.css";

const Info = () => {
  return (
    <div className="information">
      <ul>
        <li>
          Studying{" "}
          <a href="http://catalog.northeastern.edu/undergraduate/engineering/electrical-computer/computer-engineering-computer-science-bscompe/" target="_blank" rel="noopener noreferrer">
            <span className="major">
              Computer Engineering and Computer Science
            </span>
          </a>{" "}
          at {" "}
          <a href="https://www.northeastern.edu/" target="_blank" rel="noopener noreferrer">
            <span className="college">Northeastern University</span>
          </a>
          .
        </li>
        <li>Awesome.</li>
      </ul>
    </div>
  );
};

const Landing = () => {
  return (
    <div>
      <div className="Iam">
        <div>Hi there!</div>
        <p>I'm</p>
        <b>
          <div className="innerIam">
            Mark Stouffer.
            <br />
            a student.
            <br />
            a programmer.
            <br />
            a team player.
            <br />
            self-motivated.
          </div>
        </b>
      </div>
      <Info />
    </div>
  );
};

export default Landing;
