import { useState } from 'react'
import StudentCard from './components/StudentCard'
import './App.css'

const students = [
  { id: 1, name: 'Aarav Sharma', rollNumber: '25B001', department: 'Computer Science', cgpa: 9.1 },
  { id: 2, name: 'Diya Patel', rollNumber: '25B002', department: 'Electronics', cgpa: 8.7 },
  { id: 3, name: 'Rohan Kumar', rollNumber: '25B003', department: 'Mechanical', cgpa: 8.9 },
  { id: 4, name: 'Meera Nair', rollNumber: '25B004', department: 'Civil Engineering', cgpa: 9.3 },
]

function App() {
  const [showProfiles, setShowProfiles] = useState(true)

  return (
    <main className="app">
      <header>
        <p className="eyebrow">Student Directory</p>
        <h1>Student Profiles</h1>
        <button type="button" onClick={() => setShowProfiles((visible) => !visible)}>
          {showProfiles ? 'Hide Profiles' : 'Show Profiles'}
        </button>
      </header>

      {showProfiles && (
        <section className="student-grid" aria-label="Student profiles">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              name={student.name}
              rollNumber={student.rollNumber}
              department={student.department}
              cgpa={student.cgpa}
            />
          ))}
        </section>
      )}
    </main>
  )
}

export default App
