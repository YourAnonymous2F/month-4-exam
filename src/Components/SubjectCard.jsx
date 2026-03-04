import { useState } from "react"

function SubjectCard({subject, grade, teacher}) {
    const [expanded, isExpanded] = useState(false)

  return (
    <div style={{
        border: '1px solid lightgray',
        borderLeft: grade >= 50 ? '3px solid green' : '3px solid red',
        padding: '10px'
    }}>
        <h2>Subject: {subject}</h2>
        <p>Grade: <span style={{color: grade >= 50 ? 'green' : 'red'}}>{grade}</span>/100 <span style={{display: 'flex', justifyContent: 'center', marginTop: '10px', backgroundColor: 'lightgray', padding: '2px 0', borderRadius: '10px'}}>{grade >= 50 ? 'Pass' : 'Fail'}</span></p>

        <button onClick={() => isExpanded(!expanded)}>{expanded ? 'Less Details' : 'More Details'}</button>

        {expanded && (
            <div>
                <p>Teacher's Name: {teacher}</p>
            </div>
        )}
    </div>
  )
}

export default SubjectCard