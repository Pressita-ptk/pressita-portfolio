import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// SVG Icons as React Components to avoid external library installation issues
const IconMail = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
const IconLinkedin = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const IconGithub = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const IconMapPin = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
const IconSun = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="18.36" x2="5.64" y2="19.78"></line><line x1="18.36" y1="4.22" x2="19.78" y2="5.64"></line></svg>
);
const IconMoon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
);
const IconTerminal = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
);
const IconPlay = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
);
const IconGraduation = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
);
const IconAward = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
);
const IconCode = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);
const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);
const IconUser = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);
const IconMenu = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);
const IconX = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
const IconExternalLink = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

function App() {
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('about');
  const [displaySection, setDisplaySection] = useState('about');
  const [transitionState, setTransitionState] = useState('entered');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPlayground, setSelectedPlayground] = useState('pandas');
  const [playgroundRunning, setPlaygroundRunning] = useState(false);
  const [playgroundOutput, setPlaygroundOutput] = useState(null);
  
  // Interactive orbit skills state
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [skillsTab, setSkillsTab] = useState('orbit'); // 'orbit' or 'notebook'

  // Projects filtering
  const [projectFilter, setProjectFilter] = useState('all');
  const [projectSearch, setProjectSearch] = useState('');

  // Contact form submission state
  const [contactData, setContactData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Theme effect (custom light modes)
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleNavClick = (sectionKey) => {
    if (sectionKey === displaySection) return;
    setMobileMenuOpen(false);
    
    // Start fade-out and slide-up/down animation
    setTransitionState('exiting');
    
    setTimeout(() => {
      // Switch the display component
      setDisplaySection(sectionKey);
      setActiveSection(sectionKey);
      setTransitionState('entering');
      
      // Scroll the container to top instantly
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      // Allow DOM update, then fade-in
      setTimeout(() => {
        setTransitionState('entered');
      }, 50);
    }, 250);
  };

  // Cosmic Skill Orbit Data structures
  const skillsList = [
    { name: 'Python', level: '90%', desc: 'Primary programming language used for script execution, automation, and model training.', color: '#dda494', delay: '0s', speed: '15s', ring: 'ring-1' },
    { name: 'SQL', level: '80%', desc: 'Relational data query engine. Specialized in index query optimization and database design.', color: '#a0c4ff', delay: '-2.5s', speed: '20s', ring: 'ring-2' },
    { name: 'Java', level: '60%', desc: 'Used for object-oriented logic parsing. Designed underlying Quiz structures.', color: '#bdb2ff', delay: '-5s', speed: '25s', ring: 'ring-3' },
    { name: 'Pandas', level: '85%', desc: 'Data frame structuring and file parsing module. Processes data tables.', color: '#ffd166', delay: '-7.5s', speed: '18s', ring: 'ring-1' },
    { name: 'NumPy', level: '85%', desc: 'High-speed matrix array parser. Essential for numerical algebraic vectors.', color: '#ffadad', delay: '-10s', speed: '22s', ring: 'ring-2' },
    { name: 'Matplotlib', level: '80%', desc: 'Visualization plotting. Outputs graphical representations of data trends.', color: '#9bf6ff', delay: '-12.5s', speed: '27s', ring: 'ring-3' }
  ];

  // Notebook code simulation runners
  const runCode = () => {
    setPlaygroundRunning(true);
    setPlaygroundOutput(null);
    setTimeout(() => {
      setPlaygroundRunning(false);
      if (selectedPlayground === 'pandas') {
        setPlaygroundOutput(
          <div className="output-table-container animate-fade-in">
            <span className="output-label">Out[1]: pandas.DataFrame</span>
            <table className="playground-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Category</th>
                  <th>Total Sales ($)</th>
                  <th>Transaction Count</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>Electronics</td>
                  <td>124,500.00</td>
                  <td>450</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Apparel</td>
                  <td>98,200.50</td>
                  <td>610</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Home & Kitchen</td>
                  <td>75,430.20</td>
                  <td>320</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Groceries</td>
                  <td>143,120.80</td>
                  <td>890</td>
                </tr>
              </tbody>
            </table>
            <div className="playground-summary-stat">
              Shape: (4, 3) | Memory Usage: 228.0 bytes
            </div>
          </div>
        );
      } else if (selectedPlayground === 'numpy') {
        setPlaygroundOutput(
          <div className="output-console animate-fade-in">
            <span className="output-label">Out[2]: Console stdout</span>
            <pre>
{`>>> np.mean(sales): 198.57
>>> np.std(sales): 73.06
>>> Normalized Sales Array:
[-1.08 -0.66 -1.49  0.02 -0.25  0.7   1.39]
>>> Outliers detected (> 2 std): None`}
            </pre>
          </div>
        );
      } else if (selectedPlayground === 'matplotlib') {
        setPlaygroundOutput(
          <div className="output-chart-container animate-fade-in">
            <span className="output-label">Out[3]: matplotlib.pyplot.figure</span>
            <div className="svg-chart-wrapper">
              <svg viewBox="0 0 500 240" className="chart-svg">
                <line x1="50" y1="40" x2="450" y2="40" className="chart-grid-line" />
                <line x1="50" y1="90" x2="450" y2="90" className="chart-grid-line" />
                <line x1="50" y1="140" x2="450" y2="140" className="chart-grid-line" />
                <line x1="50" y1="190" x2="450" y2="190" className="chart-grid-line" />
                
                <line x1="50" y1="40" x2="50" y2="190" className="chart-axis" />
                <line x1="50" y1="190" x2="450" y2="190" className="chart-axis" />
                
                <text x="40" y="44" className="chart-label-y">25k</text>
                <text x="40" y="94" className="chart-label-y">18k</text>
                <text x="40" y="144" className="chart-label-y">11k</text>
                <text x="40" y="194" className="chart-label-y">4k</text>

                <path 
                  d="M 50 145 L 130 115 L 210 152 L 290 90 L 370 65 L 450 42" 
                  fill="none" 
                  stroke="var(--primary-teal)" 
                  strokeWidth="3.5"
                  className="chart-line-draw"
                />

                <circle cx="50" cy="145" r="5" className="chart-dot" />
                <circle cx="130" cy="115" r="5" className="chart-dot" />
                <circle cx="210" cy="152" r="5" className="chart-dot" />
                <circle cx="290" cy="90" r="5" className="chart-dot" />
                <circle cx="370" cy="65" r="5" className="chart-dot" />
                <circle cx="450" cy="42" r="5" className="chart-dot" />

                <text x="50" y="132" className="chart-val">12k</text>
                <text x="130" y="102" className="chart-val">15k</text>
                <text x="210" y="169" className="chart-val">11k</text>
                <text x="290" y="78" className="chart-val">18.5k</text>
                <text x="370" y="53" className="chart-val">22k</text>
                <text x="450" y="30" className="chart-val">26k</text>

                <text x="50" y="212" className="chart-label-x">W1</text>
                <text x="130" y="212" className="chart-label-x">W2</text>
                <text x="210" y="212" className="chart-label-x">W3</text>
                <text x="290" y="212" className="chart-label-x">W4</text>
                <text x="370" y="212" className="chart-label-x">W5</text>
                <text x="450" y="212" className="chart-label-x">W6</text>
              </svg>
            </div>
            <div className="chart-legend">
              <span className="legend-marker"></span> Weekly Retail Store Sales Trend
            </div>
          </div>
        );
      }
    }, 850);
  };

  // Reset output when selected code snippet changes
  useEffect(() => {
    setPlaygroundOutput(null);
  }, [selectedPlayground]);

  // Code snippet definitions
  const codeSnippets = {
    pandas: `# Import Pandas Library
import pandas as pd

# Load store data in structured DataFrame
df = pd.read_csv('retail_sales.csv')

# Group, aggregate and sort sales by category
summary = df.groupby('Category').agg(
    Total_Sales=('Sales', 'sum'),
    Transactions=('Sales', 'count')
).reset_index()

print(summary)`,
    numpy: `# Import NumPy Library
import numpy as np

# Load array of sales parameters
sales = np.array([120, 150, 90, 200, 180, 250, 300])

# Compute array summary metrics
mean = np.mean(sales)
std = np.std(sales)
norm_sales = (sales - mean) / std

print(f"Mean: {mean:.2f}")
print(f"Std: {std:.2f}")
print("Normalized Sales Array:\\n", norm_sales)`,
    matplotlib: `# Import Matplotlib plotting module
import matplotlib.pyplot as plt

# Weekly timeline and corresponding sales data
weeks = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6']
sales = [12000, 15000, 11000, 18500, 22000, 26000]

plt.figure(figsize=(6, 3))
plt.plot(weeks, sales, marker='o', color='#5f8d8c')
plt.title('Weekly Store Sales Trend')
plt.grid(True)
plt.show()`
  };

  // Project data based on resume
  const projectsData = [
    {
      id: 'flask-journey',
      title: 'AI Learning Journey',
      category: 'web-dev',
      tags: ['Python', 'Flask', 'Backend', 'Web Development'],
      description: 'Built my first web application using Python and the Flask framework as part of my AI development learning journey.',
      details: 'Designed backend routes and controllers in Python. Implemented HTML rendering, dynamic routing, and basic form handling. Hosted code and shared updates to demonstrate milestone software engineering steps.',
      link: 'https://lnkd.in/gfZQwDBd',
      linkText: 'LinkedIn Post',
      linkLabel: 'View the project demo and learning write-up on LinkedIn'
    },
    {
      id: 'quiz',
      title: 'Quiz Management System',
      category: 'java',
      tags: ['Java', 'MySQL', 'Database Design'],
      description: 'Developed a mini quiz management system for managing quizzes, questions database, score tracking, and detailed user management controls.',
      details: 'Designed structured MySQL tables for security and user permissions. Implemented core object-oriented structures in Java for parsing quizzes, recording timestamps, and providing feedback analytics on overall test performances.'
    },
    {
      id: 'analyzer',
      title: 'Word Analyzer',
      category: 'python',
      tags: ['Python', 'Text Processing', 'Algorithms'],
      description: 'Built a specialized text processing script that scans word occurrences, counts character frequencies, and performs analytical sentence structures.',
      details: 'Optimized word search and frequency indexing using native Python collections. Implemented file I/O controls to read external text documents, clean punctuations, and export summary analytics in formatted text report formats.'
    },
    {
      id: 'sales',
      title: 'Retail Store Sales Prediction',
      category: 'data-science',
      tags: ['Python', 'Kaggle Dataset', 'Pandas', 'Matplotlib'],
      description: 'Performed key data cleansing operations and built mathematical model arrays to predict store sales trends using structured Kaggle dataset resources.',
      details: 'Leveraged NumPy and Pandas for parsing missing database rows, standardizing currencies, and sorting sales categories. Built rich trend charts using Matplotlib to demonstrate anomalies, weekend spikes, and seasonality variations.'
    },
    {
      id: 'hiring',
      title: 'Smart Hiring Website',
      category: 'web-dev',
      tags: ['AI-Assisted Web Dev', 'NLP Parser', 'HTML/JS'],
      description: 'Built a web dashboard for recruiters, supporting keyword-based candidate indexing, resume sorting, and candidate profile shortlists.',
      details: 'Developed a responsive frontend interface featuring quick filtering algorithms. Integrates simple string tokenizers and keyword mapping scripts that scan candidate profiles and grade them against job requirement parameters.'
    }
  ];

  // Projects filter and search logic
  const filteredProjects = projectsData.filter(proj => {
    const matchesCategory = projectFilter === 'all' || proj.category === projectFilter;
    const matchesSearch = proj.title.toLowerCase().includes(projectSearch.toLowerCase()) ||
                          proj.description.toLowerCase().includes(projectSearch.toLowerCase()) ||
                          proj.tags.some(t => t.toLowerCase().includes(projectSearch.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Contact form submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactData.name || !contactData.email || !contactData.message) {
      setFormError('Please fill out all fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactData.email)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setFormError('');
    setFormSubmitted(true);
    setContactData({ name: '', email: '', message: '' });
  };

  return (
    <div className={`portfolio-wrapper bg-state-${activeSection}`}>
      
      {/* Mobile Top Navigation */}
      <header className="mobile-header">
        <div className="mobile-branding">
          <span className="name-icon">PK</span>
          <div>
            <h3>PRESSITA K</h3>
            <p>AI and Data Science Student</p>
          </div>
        </div>
        <div className="mobile-actions">
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
            {theme === 'light' ? <IconMoon /> : <IconSun />}
          </button>
          <button onClick={() => setMobileMenuOpen(true)} className="menu-btn" aria-label="Open Menu">
            <IconMenu />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={e => e.stopPropagation()}>
            <div className="drawer-header">
              <h3>Navigation</h3>
              <button onClick={() => setMobileMenuOpen(false)} className="close-btn"><IconX /></button>
            </div>
            <nav className="drawer-nav">
              <button onClick={() => handleNavClick('about')} className={activeSection === 'about' ? 'active' : ''}>About Me</button>
              <button onClick={() => handleNavClick('education')} className={activeSection === 'education' ? 'active' : ''}>Education</button>
              <button onClick={() => handleNavClick('skills')} className={activeSection === 'skills' ? 'active' : ''}>Technical Skills</button>
              <button onClick={() => handleNavClick('projects')} className={activeSection === 'projects' ? 'active' : ''}>Mini Projects</button>
              <button onClick={() => handleNavClick('achievements')} className={activeSection === 'achievements' ? 'active' : ''}>Achievements</button>
              <button onClick={() => handleNavClick('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact Me</button>
            </nav>
          </div>
        </div>
      )}

      <div className="split-layout">
        
        {/* LEFT SIDEBAR (Desktop) */}
        <aside className="sidebar-container">
          <div className="sidebar-profile">
            {/* Visual avatar/graphic drawing */}
            <div className="avatar-graphic pulse-glow">
              <span className="avatar-initials">PK</span>
              <div className="avatar-ring avatar-ring-1"></div>
              <div className="avatar-ring avatar-ring-2"></div>
            </div>
            
            <h1 className="sidebar-name">PRESSITA K</h1>
            <p className="sidebar-title">CSE (IST) Student</p>
            <p className="sidebar-specialty">Specialization in AI and Data Science</p>
          </div>

          <nav className="sidebar-nav">
            <ul>
              <li>
                <button onClick={() => handleNavClick('about')} className={activeSection === 'about' ? 'active' : ''}>
                  <IconUser /> <span>About Me</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('education')} className={activeSection === 'education' ? 'active' : ''}>
                  <IconGraduation /> <span>Education</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('skills')} className={activeSection === 'skills' ? 'active' : ''}>
                  <IconCode /> <span>Technical Skills</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('projects')} className={activeSection === 'projects' ? 'active' : ''}>
                  <IconBriefcase /> <span>Mini Projects</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('achievements')} className={activeSection === 'achievements' ? 'active' : ''}>
                  <IconAward /> <span>Achievements</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className={activeSection === 'contact' ? 'active' : ''}>
                  <IconMail /> <span>Contact Me</span>
                </button>
              </li>
            </ul>
          </nav>

          <div className="sidebar-section">
            <h4 className="sidebar-section-title">Soft Skills</h4>
            <div className="pill-container">
              <span className="skill-pill-soft">Teamwork</span>
              <span className="skill-pill-soft">Communication</span>
              <span className="skill-pill-soft">Problem Solving</span>
            </div>
          </div>

          <div className="sidebar-contact-info">
            <h4 className="sidebar-section-title">Contact Details</h4>
            <a href="tel:8861082867" className="contact-link">
              <IconPhone /> <span>8861082867</span>
            </a>
            <a href="mailto:pressitakhatmal@gmail.com" className="contact-link">
              <IconMail /> <span>pressitakhatmal@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/pressita" target="_blank" rel="noopener noreferrer" className="contact-link">
              <IconLinkedin /> <span>linkedin.com/in/pressita</span>
            </a>
            <a href="https://github.com/Pressita-ptk" target="_blank" rel="noopener noreferrer" className="contact-link">
              <IconGithub /> <span>github.com/Pressita-ptk</span>
            </a>
            <div className="contact-link text-only">
              <IconMapPin /> <span>Bangalore, Karnataka</span>
            </div>
          </div>

          <div className="sidebar-footer">
            <button onClick={toggleTheme} className="theme-toggle-desktop" title="Toggle Light/Dark Theme">
              {theme === 'light' ? (
                <>
                  <IconMoon /> <span>Night Pastel</span>
                </>
              ) : (
                <>
                  <IconSun /> <span>Day Pastel</span>
                </>
              )}
            </button>
          </div>
        </aside>

        <main className="main-content">
          
          <div className={`page-transition-container ${transitionState}`}>
            {displaySection === 'about' && (
              <>
                {/* Brand Peach Top Banner */}
                <header className="brand-top-banner animate-fade-in">
                  <div className="banner-context">
                    <h2>Presidency University Student</h2>
                    <p>Developing practical solutions in computer science, machine learning, and structured data science models.</p>
                  </div>
                  <div className="banner-stats">
                    <div className="stat-card">
                      <span className="stat-value">9.37</span>
                      <span className="stat-label">CGPA Score</span>
                    </div>
                  </div>
                </header>

                {/* Section: About Me */}
                <section id="about" className="content-section animate-fade-in-up">
                  <div className="section-title-wrapper">
                    <IconUser className="section-icon" />
                    <h2>About Me</h2>
                  </div>
                  <div className="card-panel">
                    <p className="large-lead-text">
                      Passionate about Python, Artificial Intelligence, and software development with a keen interest in learning new technologies and building practical projects.
                    </p>
                    <p className="body-text">
                      As a Computer Science Engineering student specialized in AI and Data Science, I have actively participated in hackathons, engineering battles, and technical sprints to challenge my limits, improve my rapid prototyping skills, and build collaborative solutions. I excel at resolving logic issues, querying relational tables, and turning raw structured inputs into insights. I look forward to working with industry teams through software engineering and data science internships.
                    </p>
                    
                    <div className="about-grid-highlights">
                      <div className="highlight-item">
                        <div className="highlight-badge-icon">AI</div>
                        <h4>Focus Areas</h4>
                        <p>Neural Networks, Data Cleaning, Trend Analytics</p>
                      </div>
                      <div className="highlight-item">
                        <div className="highlight-badge-icon">PY</div>
                        <h4>Tech Stack</h4>
                        <p>Python (Pandas, NumPy, Matplotlib), SQL, Java</p>
                      </div>
                      <div className="highlight-item">
                        <div className="highlight-badge-icon">⚙️</div>
                        <h4>Development</h4>
                        <p>Rapid prototyping, Database design, AI integrations</p>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}

            {displaySection === 'education' && (
              /* Section: Education */
              <section id="education" className="content-section animate-fade-in-up">
                <div className="section-title-wrapper">
                  <IconGraduation className="section-icon" />
                  <h2>Education</h2>
                </div>
                <div className="card-panel education-panel">
                  <div className="education-timeline-item">
                    <div className="education-duration">2024 – Present</div>
                    <div className="education-details">
                      <h3>Presidency University</h3>
                      <p className="education-degree">B.Tech in Computer Science Engineering (IST)</p>
                      <p className="education-spec">Specialization in AI and Data Science</p>
                      
                      <div className="education-cgpa-box">
                        <div className="cgpa-progress-circle" style={{'--cgpa-percentage': '93.7%'}}>
                          <div className="cgpa-value">9.37</div>
                          <span className="cgpa-max">/ 10</span>
                        </div>
                        <div className="cgpa-description">
                          <h4>Excellent Academic Record</h4>
                          <p>Currently maintaining a CGPA of 9.37/10.0, placing in the top tier of the CSE batch. Focused coursework includes advanced data structures, database querying, data science models, and AI principles.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {displaySection === 'skills' && (
              /* Section: Technical Skills with Orbit Blackhole & Jupyter Notebook */
              <section id="skills" className="content-section animate-fade-in-up">
                <div className="section-title-wrapper">
                  <IconCode className="section-icon" />
                  <h2>Technical Skills</h2>
                </div>

                <div className="skills-layout-container card-panel">
                  <div className="skills-navigation-tabs">
                    <button 
                      onClick={() => setSkillsTab('orbit')} 
                      className={`skills-nav-tab ${skillsTab === 'orbit' ? 'active' : ''}`}
                    >
                      🪐 Space Skill Orbit
                    </button>
                    <button 
                      onClick={() => setSkillsTab('notebook')} 
                      className={`skills-nav-tab ${skillsTab === 'notebook' ? 'active' : ''}`}
                    >
                      💻 Jupyter Notebook Lab
                    </button>
                  </div>

                  {skillsTab === 'orbit' ? (
                    /* ORBIT SPACE BLACKHOLE INTERACTIVE VIEW */
                    <div className="cosmic-orbit-view animate-fade-in">
                      <div className="orbit-instructions">
                        <h3>Interactive Skill Gravity Well</h3>
                        <p>Hover over orbiting skill nodes to inspect parameters, proficiency rates, and core library usages.</p>
                      </div>

                      <div className="orbit-playground-wrapper">
                        
                        {/* The Space Gravity System */}
                        <div className="orbit-zone">
                          <div className="orbit-plane">
                            
                            {/* Gravitational Core (Blackhole Center) */}
                            <div className="gravitational-core">
                              <div className="core-nebula"></div>
                              <div className="core-singularity">
                                <span className="core-symbol">AI</span>
                              </div>
                              <div className="core-flare"></div>
                            </div>

                            {/* Orbit Ellipse Lines */}
                            <div className="orbit-line-ring ring-1"></div>
                            <div className="orbit-line-ring ring-2"></div>
                            <div className="orbit-line-ring ring-3"></div>

                            {/* Orbiting Skill Labels */}
                            {skillsList.map((skill, index) => (
                              <div 
                                key={skill.name}
                                className={`orbit-node-wrapper path-${index} ${skill.ring}`}
                                style={{ 
                                  '--orbit-speed': skill.speed,
                                  '--orbit-delay': skill.delay
                                }}
                              >
                                <div 
                                  className={`skill-orbit-node ${hoveredSkill?.name === skill.name ? 'highlighted' : ''}`}
                                  style={{ '--skill-color': skill.color }}
                                  onMouseEnter={() => setHoveredSkill(skill)}
                                  onMouseLeave={() => setHoveredSkill(null)}
                                >
                                  <span className="node-glow" style={{ backgroundColor: skill.color }}></span>
                                  <span className="node-name">{skill.name}</span>
                                  <span className="node-level">{skill.level}</span>
                                </div>
                              </div>
                            ))}

                          </div>
                        </div>

                        {/* Orbit Interactive Detail HUD Box */}
                        <div className="orbit-hud-panel">
                          {hoveredSkill ? (
                            <div className="hud-card animate-fade-in" style={{ borderColor: hoveredSkill.color }}>
                              <div className="hud-header">
                                <span className="hud-bullet" style={{ backgroundColor: hoveredSkill.color }}></span>
                                <h4>{hoveredSkill.name}</h4>
                                <span className="hud-metric">{hoveredSkill.level} Strength</span>
                              </div>
                              <p className="hud-desc">{hoveredSkill.desc}</p>
                            </div>
                          ) : (
                            <div className="hud-card placeholder-hud">
                              <h4>Gravitational Orbit HUD</h4>
                              <p>Hover on a float node to parse library details.</p>
                            </div>
                          )}
                        </div>

                      </div>
                    </div>
                  ) : (
                    /* JUPYTER CODE NOTEBOOK TAB VIEW */
                    <div className="grid-two-columns animate-fade-in">
                      {/* Left Column: Traditional Skill Bars */}
                      <div className="traditional-skills-panel">
                        <h3>Core Technologies</h3>
                        <p className="panel-sub-desc">Self-assessed familiarity and project application levels.</p>
                        
                        <div className="skills-meter-container">
                          <div className="skill-meter-item">
                            <div className="skill-meter-header">
                              <span>Python (Advanced)</span>
                              <span className="skill-percentage">90%</span>
                            </div>
                            <div className="meter-track">
                              <div className="meter-fill" style={{ width: '90%' }}></div>
                            </div>
                          </div>

                          <div className="skill-meter-item">
                            <div className="skill-meter-header">
                              <span>SQL & Databases</span>
                              <span className="skill-percentage">80%</span>
                            </div>
                            <div className="meter-track">
                              <div className="meter-fill" style={{ width: '80%' }}></div>
                            </div>
                          </div>

                          <div className="skill-meter-item">
                            <div className="skill-meter-header">
                              <span>Java (Basics)</span>
                              <span className="skill-percentage">60%</span>
                            </div>
                            <div className="meter-track">
                              <div className="meter-fill" style={{ width: '60%' }}></div>
                            </div>
                          </div>
                        </div>

                        <div className="data-skills-summary-box">
                          <h4>Featured Data Science Stack</h4>
                          <p>Active proficiency in cleaning structural inputs with <strong>Pandas</strong>, designing numerical arrays with <strong>NumPy</strong>, and outputting analytical visualizations using <strong>Matplotlib</strong>.</p>
                        </div>
                      </div>

                      {/* Right Column: Interactive Jupyter Code Notebook */}
                      <div className="notebook-panel">
                        <div className="notebook-header">
                          <div className="notebook-circles">
                            <span className="circle circle-red"></span>
                            <span className="circle circle-yellow"></span>
                            <span className="circle circle-green"></span>
                          </div>
                          <div className="notebook-title">
                            <IconTerminal /> <span>datascience_lab.ipynb</span>
                          </div>
                          <span className="notebook-badge">Python 3.10 (ipykernel)</span>
                        </div>

                        <div className="notebook-body">
                          <div className="notebook-tabs">
                            <button 
                              onClick={() => setSelectedPlayground('pandas')} 
                              className={`notebook-tab ${selectedPlayground === 'pandas' ? 'active' : ''}`}
                            >
                              pandas
                            </button>
                            <button 
                              onClick={() => setSelectedPlayground('numpy')} 
                              className={`notebook-tab ${selectedPlayground === 'numpy' ? 'active' : ''}`}
                            >
                              numpy
                            </button>
                            <button 
                              onClick={() => setSelectedPlayground('matplotlib')} 
                              className={`notebook-tab ${selectedPlayground === 'matplotlib' ? 'active' : ''}`}
                            >
                              matplotlib
                            </button>
                          </div>

                          <div className="notebook-code-cell">
                            <div className="cell-num">In [1]:</div>
                            <div className="cell-editor">
                              <pre><code>{codeSnippets[selectedPlayground]}</code></pre>
                            </div>
                          </div>

                          <div className="notebook-run-bar">
                            <button 
                              onClick={runCode} 
                              disabled={playgroundRunning}
                              className="run-btn"
                            >
                              {playgroundRunning ? (
                                <>
                                  <span className="spinner"></span> <span>Running cell...</span>
                                </>
                              ) : (
                                <>
                                  <IconPlay /> <span>Run Cell</span>
                                </>
                              )}
                            </button>
                            <span className="notebook-hint">Click Run to execute Python snippet and compile outputs</span>
                          </div>

                          <div className="notebook-output-cell">
                            {playgroundOutput ? (
                              playgroundOutput
                            ) : (
                              <div className="output-placeholder">
                                {playgroundRunning ? 'Compiling structures...' : 'Cell output will render here after execution.'}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {displaySection === 'projects' && (
              /* Section: Mini Projects */
              <section id="projects" className="content-section animate-fade-in-up">
                <div className="section-title-wrapper">
                  <IconBriefcase className="section-icon" />
                  <h2>Mini Projects</h2>
                </div>

                <div className="projects-controls-card card-panel">
                  <div className="search-bar-wrapper">
                    <input 
                      type="text" 
                      placeholder="Search projects by title, description or technology..." 
                      value={projectSearch}
                      onChange={e => setProjectSearch(e.target.value)}
                      className="project-search-input"
                    />
                  </div>

                  <div className="filters-wrapper">
                    <button 
                      onClick={() => setProjectFilter('all')} 
                      className={`filter-btn ${projectFilter === 'all' ? 'active' : ''}`}
                    >
                      All Projects
                    </button>
                    <button 
                      onClick={() => setProjectFilter('data-science')} 
                      className={`filter-btn ${projectFilter === 'data-science' ? 'active' : ''}`}
                    >
                      Data Science (Python)
                    </button>
                    <button 
                      onClick={() => setProjectFilter('web-dev')} 
                      className={`filter-btn ${projectFilter === 'web-dev' ? 'active' : ''}`}
                    >
                      AI & Web Dev
                    </button>
                    <button 
                      onClick={() => setProjectFilter('java')} 
                      className={`filter-btn ${projectFilter === 'java' ? 'active' : ''}`}
                    >
                      Java & SQL
                    </button>
                  </div>
                </div>

                {filteredProjects.length > 0 ? (
                  <div className="projects-grid">
                    {filteredProjects.map(proj => (
                      <div key={proj.id} className="project-card animate-fade-in-up">
                        <div className="project-card-header">
                          <span className="project-icon-wrapper">
                            {proj.category === 'data-science' ? <IconTerminal /> : <IconCode />}
                          </span>
                          <h3>{proj.title}</h3>
                        </div>
                        <div className="project-card-body">
                          <p className="project-short-desc">{proj.description}</p>
                          <div className="project-expanded-details">
                            <p>{proj.details}</p>
                          </div>
                        </div>
                        <div className="project-card-footer">
                          <div className="project-tags">
                            {proj.tags.map(t => (
                              <span key={t} className="tag-pill">{t}</span>
                            ))}
                          </div>
                          <a href={proj.link || "https://github.com/Pressita-ptk"} target="_blank" rel="noopener noreferrer" className="project-source-link" title={proj.linkLabel || "Open source code repository"}>
                            {proj.link && (proj.link.includes('linkedin.com') || proj.link.includes('lnkd.in')) ? <IconLinkedin /> : (proj.link ? <IconExternalLink /> : <IconGithub />)} <span>{proj.linkText || "Code"}</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="card-panel empty-projects">
                    <p>No projects match your search queries. Please clear search criteria to list all repositories.</p>
                    <button onClick={() => { setProjectFilter('all'); setProjectSearch(''); }} className="clear-btn">Reset Filters</button>
                  </div>
                )}
              </section>
            )}

            {displaySection === 'achievements' && (
              /* Section: Achievements & Timeline */
              <section id="achievements" className="content-section animate-fade-in-up">
                <div className="section-title-wrapper">
                  <IconAward className="section-icon" />
                  <h2>Achievements & Participations</h2>
                </div>
                
                <div className="card-panel timeline-panel">
                  <div className="timeline-container">
                    
                    <div className="timeline-item">
                      <div className="timeline-marker animate-pulse"></div>
                      <div className="timeline-content">
                        <span className="timeline-date">Technopia Event</span>
                        <h3>Prompt Engineering Battle</h3>
                        <p className="timeline-desc">
                          Competed in a high-intensity prompt optimization sprint. Developed advanced conditional prompting instructions, system personas, and parameters to solve logic puzzles, structure analytical records, and streamline text outputs using leading Large Language Models.
                        </p>
                      </div>
                    </div>

                    <div className="timeline-item">
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <span className="timeline-date">InnovateX International Tech Fest</span>
                        <h3>Rapid Build with AI Hackathon</h3>
                        <p className="timeline-desc">
                          Collaborated on an intensive 24-hour sprint powered by Unstop. Used AI assistant models and modern build systems to rapidly scaffold database relations, design responsive interfaces, and package operational application backends. Refined teamwork and problem-solving parameters under tight constraints.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </section>
            )}

            {displaySection === 'contact' && (
              /* Section: Contact */
              <section id="contact" className="content-section animate-fade-in-up">
                <div className="section-title-wrapper">
                  <IconMail className="section-icon" />
                  <h2>Contact Me</h2>
                </div>

                <div className="grid-two-columns">
                  {/* Left Form Panel */}
                  <div className="card-panel">
                    <h3>Send a Message</h3>
                    <p className="panel-sub-desc">Interested in collaborating or discussing internships? Drop a message directly!</p>

                    {formSubmitted ? (
                      <div className="contact-success-alert animate-fade-in">
                        <div className="success-icon-container">
                          <svg viewBox="0 0 24 24" width="48" height="48" stroke="var(--primary-teal)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        </div>
                        <h3>Message Sent Successfully!</h3>
                        <p>Thank you for reaching out. I will read your email parameters and respond to you as soon as possible.</p>
                        <button onClick={() => setFormSubmitted(false)} className="reset-form-btn">Send Another Message</button>
                      </div>
                    ) : (
                      <form onSubmit={handleContactSubmit} className="contact-form">
                        {formError && <div className="form-error-alert">{formError}</div>}
                        
                        <div className="form-group">
                          <label htmlFor="form-name">Your Name</label>
                          <input 
                            type="text" 
                            id="form-name"
                            value={contactData.name}
                            onChange={e => setContactData(prev => ({ ...prev, name: e.target.value }))}
                            placeholder="John Doe"
                            required 
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="form-email">Your Email</label>
                          <input 
                            type="email" 
                            id="form-email"
                            value={contactData.email}
                            onChange={e => setContactData(prev => ({ ...prev, email: e.target.value }))}
                            placeholder="john.doe@example.com"
                            required 
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="form-msg">Message</label>
                          <textarea 
                            id="form-msg" 
                            rows="4" 
                            value={contactData.message}
                            onChange={e => setContactData(prev => ({ ...prev, message: e.target.value }))}
                            placeholder="I would like to talk about an internship opportunity..."
                            required
                          ></textarea>
                        </div>

                        <button type="submit" className="submit-form-btn">
                          Submit Message
                        </button>
                      </form>
                    )}
                  </div>

                  {/* Right Context Panel */}
                  <div className="card-panel info-panel">
                    <h3>Direct Inquiries</h3>
                    <p className="panel-sub-desc">Feel free to connect directly on social profiles or dial the phone line.</p>

                    <div className="info-cards-stack">
                      <div className="info-card">
                        <div className="info-icon-wrapper"><IconPhone /></div>
                        <div className="info-content">
                          <h4>Phone</h4>
                          <a href="tel:8861082867">+91 8861082867</a>
                        </div>
                      </div>

                      <div className="info-card">
                        <div className="info-icon-wrapper"><IconMail /></div>
                        <div className="info-content">
                          <h4>Email</h4>
                          <a href="mailto:pressitakhatmal@gmail.com">pressitakhatmal@gmail.com</a>
                        </div>
                      </div>

                      <div className="info-card">
                        <div className="info-icon-wrapper"><IconLinkedin /></div>
                        <div className="info-content">
                          <h4>LinkedIn</h4>
                          <a href="https://www.linkedin.com/in/pressita" target="_blank" rel="noopener noreferrer">linkedin.com/in/pressita</a>
                        </div>
                      </div>

                      <div className="info-card">
                        <div className="info-icon-wrapper"><IconGithub /></div>
                        <div className="info-content">
                          <h4>GitHub</h4>
                          <a href="https://github.com/Pressita-ptk" target="_blank" rel="noopener noreferrer">github.com/Pressita-ptk</a>
                        </div>
                      </div>
                    </div>

                    <div className="social-badge-cta">
                      <h4>Let's build something practical together!</h4>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Page Footer */}
          <footer className="page-footer">
            <p>&copy; {new Date().getFullYear()} Pressita K. All rights reserved.</p>
            <p className="footer-built">Designed with custom CSS orbits & frames. Compiled using React & Vite.</p>
          </footer>

        </main>
      </div>
    </div>
  );
}

export default App;
