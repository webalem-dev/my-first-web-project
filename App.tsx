import { useState } from 'react'

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
}

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)

  const jobs: Job[] = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "EthioTech Solutions",
      location: "Addis Ababa (Remote/Office)",
      type: "Full-time",
      description: "We are looking for a final year Computer Science student or graduate to build modern web applications using React and Node.js."
    },
    {
      id: 2,
      title: "Electrical Control Engineer",
      company: "Addis Power PLC",
      location: "Addis Ababa",
      type: "Full-time",
      description: "Manage a team of 10-20 technicians, supervise electrical installations, and ensure safety standards on site."
    },
    {
      id: 3,
      title: "Python & AI Research Intern",
      company: "NextGen AI Lab",
      location: "Remote",
      type: "Internship",
      description: "Exciting opportunity to learn and build data science and AI models using Python. Perfect for passionate programmers."
    }
  ]

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div style={{
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      backgroundColor: '#f4f6f9',
      minHeight: '100vh',
      padding: '20px'
    }}>
      {/* Header */}
      <header style={{
        textAlign: 'center',
        padding: '30px',
        backgroundColor: '#1e293b',
        color: 'white',
        borderRadius: '10px',
        marginBottom: '30px'
      }}>
        <h1 style={{ margin: '0 0 10px 0', fontSize: '2.5rem' }}>Tech Job Board</h1>
        <p style={{ margin: 0, opacity: 0.8 }}>የቴክኖሎጂ እና የምህንድስና ሥራዎችን በቀላሉ ያግኙ</p>
      </header>

      {/* Main Content */}
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Search Bar */}
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="የሥራ መደብ ወይም የድርጅት ስም ይፈልጉ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 20px',
              fontSize: '1rem',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
              boxSizing: 'border-box',
              outline: 'none'
            }}
          />
        </div>

        {/* Job Container */}
        <div style={{ display: 'grid', gridTemplateColumns: selectedJob ? '1fr 1fr' : '1fr', gap: '20px' }}>
          
          {/* Job List */}
          <div>
            {filteredJobs.map(job => (
              <div 
                key={job.id}
                onClick={() => setSelectedJob(job)}
                style={{
                  backgroundColor: 'white',
                  padding: '20px',
                  borderRadius: '8px',
                  marginBottom: '15px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  cursor: 'pointer',
                  borderLeft: selectedJob?.id === job.id ? '5px solid #3b82f6' : '5px solid transparent',
                  transition: '0.2s'
                }}
              >
                <h3 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>{job.title}</h3>
                <p style={{ margin: '0 0 10px 0', color: '#3b82f6', fontWeight: 'bold' }}>{job.company}</p>
                <div style={{ display: 'flex', gap: '10px', fontSize: '0.85rem', color: '#64748b' }}>
                  <span>📍 {job.location}</span>
                  <span>💼 {job.type}</span>
                </div>
              </div>
            ))}
            {filteredJobs.length === 0 && (
              <p style={{ textAlign: 'center', color: '#64748b' }}>ምንም ሥራ አልተገኘም!</p>
            )}
          </div>

          {/* JobDetails View */}
          {selectedJob && (
            <div style={{
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              position: 'sticky',
              top: '20px',
              height: 'fit-content'
            }}>
              <button 
                onClick={() => setSelectedJob(null)}
                style={{
                  float: 'right',
                  background: 'none',
                  border: 'none',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  color: '#94a3b8'
                }}
              >
                ✕
              </button>
              <h2 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>{selectedJob.title}</h2>
              <p style={{ margin: '0 0 15px 0', color: '#3b82f6', fontWeight: 'bold' }}>{selectedJob.company}</p>
              <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '15px 0' }} />
              <h4 style={{ margin: '0 0 10px 0' }}>ስለ ሥራው ዝርዝር መግለጫ፦</h4>
              <p style={{ color: '#334155', lineHeight: '1.6', fontSize: '0.95rem' }}>{selectedJob.description}</p>
              <button style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '20px'
              }}>
                አሁን ማመልከቻ አስገባ (Apply Now)
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default App