import React from 'react';
import './About.css'; // Import the CSS file for this component

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I'm [Your Name]! I'm a passionate and driven aspiring data analyst with a strong foundation in [mention your skills - e.g., statistics, data manipulation, visualization, programming]. I'm eager to leverage my analytical skills to help businesses make data-driven decisions.
            </p>
            <p>
              My background in [mention your education or previous experience] has provided me with a solid understanding of [mention relevant concepts]. I'm proficient in tools like Python (with Pandas, NumPy, Scikit-learn), SQL, and Tableau/Power BI.
            </p>
            <p>
              I'm currently seeking opportunities to contribute to a dynamic team and further develop my data analysis skills. I'm a quick learner, a problem-solver, and I'm always excited to take on new challenges.
            </p>
          </div>
          {/* Optional: Add a profile picture */}
          {/* <div className="about-image">
            <img src="/path/to/your/image.jpg" alt="Your Name" />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default About;