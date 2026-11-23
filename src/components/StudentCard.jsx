function StudentCard({ name, rollNumber, department, cgpa }) {
  return (
    <article className="student-card">
      <h2>{name}</h2>
      <p><span>Roll number</span>{rollNumber}</p>
      <p><span>Department</span>{department}</p>
      <p><span>CGPA</span>{cgpa}</p>
    </article>
  )
}

export default StudentCard
