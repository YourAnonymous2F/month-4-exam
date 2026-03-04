import { useState } from "react"
import SubjectCard from "./Components/SubjectCard"
import StudentHeader from "./Components/StudentHeader"

function App() {
  const [search, setSearch] = useState('')

  const subjects = [
    {id:1, subject: 'Mathematics', grade: 95, teacher: 'Mr. Fohdil'},
    {id:2, subject: 'English', grade: 95, teacher: 'Mr. Tope'},
    {id:3, subject: 'Biology', grade: 94, teacher: 'Mrs. Smith'},
    {id:4, subject: 'Chemistry', grade: 49, teacher: 'Miss T'},
    {id:5, subject: 'Physics', grade: 49, teacher: 'Miss A'}
  ]

  const overallAverage = subjects.reduce((total, sub) => total + sub.grade, 0) /subjects.length

  const filteredSubjects = subjects.filter((sub) => 
    sub.subject.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <StudentHeader name='Olayanju' studentId={'1780'} overallAverage={overallAverage}/>

      <input type="text" placeholder="Search Subject..." value={search} onChange={(e) => setSearch(e.target.value)} style={{marginBottom: '15px', padding: '5px'}}/>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '10px'}}>
        {filteredSubjects.length > 0 ? (
          filteredSubjects.map((sub) => (
            <SubjectCard 
              key={sub.id} 
              subject={sub.subject}
              grade={sub.grade} 
              teacher={sub.teacher}
            />
          ))
        ) : 
        <div> 
          <p>No Subjects found</p>
        </div>
        }
      </div>
      
    </>
  )
}

export default App
