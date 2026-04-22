import React from 'react';
import './Projects.css';

const projects = [
  {
    number: '01',
    title: 'MovieMate',
    subtitle: 'Conversational AI Recommender',
    description: 'A context-aware movie recommendation chatbot using FAISS vector search, sentence-transformers (all-MiniLM-L6-v2), and a Groq-hosted LLaMA 3.3 70B backend. Dataset assembled via OMDb API, BeautifulSoup scraping, and multi-source merging. Deployed with a Streamlit frontend.',
    tags: ['Python', 'FAISS', 'LLaMA 3.3', 'Streamlit', 'NLP'],
    github: 'https://github.com/AK-0110/MovieMate',
  },
  {
    number: '02',
    title: 'Predictive Maintenance',
    subtitle: 'NASA CMAPSS Dataset',
    description: 'Applied KMeans clustering on the NASA CMAPSS turbofan engine dataset to detect anomalous degradation patterns and predict remaining useful life. Used sensor fusion and dimensionality reduction to surface failure signals before breakdown.',
    tags: ['Python', 'KMeans', 'scikit-learn', 'ML', 'Data Science'],
    github: 'https://github.com/Teddy-bear-123/CS4285-Project',
  },
  {
    number: '03',
    title: 'Lense MCP',
    subtitle: 'Computer Vision Project',
    description: 'A computer vision project built collaboratively, focusing on visual intelligence and image processing pipelines.',
    tags: ['Python', 'Computer Vision', 'MCP'],
    github: 'https://github.com/chandrakoushik1225/Lense_mcp',
  },
  {
    number: '04',
    title: 'Hostel Management System',
    subtitle: 'Full Stack Application',
    description: 'A full-stack hostel management system built to handle student allocations, room management, and administrative workflows efficiently.',
    tags: ['Full Stack', 'Database', 'Web App'],
    github: 'https://github.com/D-L-C-S/Hostel-Management-System',
  },
];

function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-hero">
        <div className="projects-hero-inner">
          <span className="section-label">Projects</span>
          <h1 className="projects-title">Things I've<br /><span className="outline">Built</span></h1>
          <p className="projects-sub">
            A selection of hands-on engineering work — from ML research to full-stack applications.
          </p>
        </div>
      </div>

      <div className="projects-list">
        {projects.map((p) => (
          <article className="project-card" key={p.number}>
            <div className="project-number">{p.number}</div>
            <div className="project-body">
              <div className="project-header">
                <div>
                  <h2 className="project-name">{p.title}</h2>
                  <p className="project-subtitle">{p.subtitle}</p>
                </div>
                <a href={p.github} target="_blank" rel="noreferrer" className="github-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.8c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58C20.57 21.8 24 17.31 24 12 24 5.37 18.63 0 12 0z"/>
                  </svg>
                  <span>View on GitHub</span>
                </a>
              </div>
              <p className="project-desc">{p.description}</p>
              <div className="project-tags">
                {p.tags.map((t, i) => (
                  <span className="tag" key={i}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;