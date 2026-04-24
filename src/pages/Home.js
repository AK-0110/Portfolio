import React from 'react';
import './Home.css';

const skills = [
  'Python + NumPy + Pandas',
  'scikit-learn',
  'PyTorch',
  'Matplotlib / Seaborn',
  'FastAPI',
  'MySQL',
  'Git + GitHub',
  'C',
  'Java',
  'NLP',
];

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-bg-text">ARUSHI</div>
        <div className="hero-content">
          <img src="/portfolio/profile.jpg" alt="Arushi Khethavath" className="hero-img" />
          <p className="hero-pre">Computer Science</p>
          <h1 className="hero-name">
            Arushi<br />
            <span className="hero-last">Khethavath</span>
          </h1>
          <div className="hero-cta">
            <a href="mailto:arushi@example.com" className="btn-primary">Get In Touch</a>
            <a href="https://github.com/AK-0110" target="_blank" rel="noreferrer" className="btn-ghost">GitHub ↗</a>
          </div>
        </div>
        <div className="hero-scroll">scroll</div>
      </section>

      <section className="section" id="about">
        <div className="section-inner two-col">
          <div className="col-left">
            <span className="section-label">01 — About Me</span>
            <h2 className="section-title">Bridging data<br />& decisions</h2>
          </div>
          <div className="col-right">
            <p>
              I'm a third-year <strong>Computer Science</strong> undergraduate passionate
              about turning raw data into actionable intelligence. My work spans predictive maintenance,
              conversational AI, and scalable data pipelines.
            </p>
            <p style={{ marginTop: '1rem' }}>
              I'm driven by the idea that technology should create meaningful impact, not just exist as an exercise in complexity. This drives my interest in Artificial Intelligence and Machine Learning, where I focus on building intelligent systems that solve real-world problems. I focus on developing end-to-end solutions that span data processing through deployment, working with real datasets and continuously improving model performance.
            </p>

            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Kaggle</span>
                <a href="https://www.kaggle.com/arushikhethavath" target="_blank" rel="noreferrer" className="detail-value link">
                  arushikhethavath ↗
                </a>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-value">khethavatharushi@gmail.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">College Email</span>
                <span className="detail-value">se23ucse031@mahindrauniversity.edu.in</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone</span>
                <span className="detail-value">+91 7569279322</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner two-col">
          <div className="col-left">
            <span className="section-label">02 — Research Interests</span>
            <h2 className="section-title">What drives<br />my curiosity</h2>
          </div>
          <div className="col-right">
            <div className="interest-list">
              {[
                { icon: '⚙️', title: 'Predictive Maintenance', desc: 'Applying KMeans clustering and sensor-fusion on NASA CMAPSS datasets to predict equipment failure before it happens.' },
                { icon: '🤖', title: 'Conversational AI', desc: 'Building context-aware chatbots using LLMs (LLaMA 3.3), vector search (FAISS), and sentence transformers for semantic retrieval.' },
                { icon: '📊', title: 'Big Data Analytics', desc: 'OLAP systems, star/snowflake schemas, and windowed SQL analytics to extract insight from large-scale datasets.' },
                { icon: '🧠', title: 'ML for Decision Systems', desc: 'Combining classical ML with modern deep learning to power automated enterprise decision-making at scale.' },
              ].map((item, i) => (
                <div className="interest-card" key={i}>
                  <span className="interest-icon">{item.icon}</span>
                  <div>
                    <h4 className="interest-title">{item.title}</h4>
                    <p className="interest-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <span className="section-label">03 — Skills</span>
          <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>Toolbox</h2>
          <div className="skills-wrap">
            {skills.map((s, i) => (
              <span className="skill-pill" key={i}>{s}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

export default Home;
