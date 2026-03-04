

function StudentHeader({name, studentId, overallAverage}) {
  return (
    <div>
        <h2>Student Name: {name}</h2>
        <p>Student ID: {studentId}</p>
        <p>Average: {overallAverage}/100</p>

        {overallAverage >= 75 && (
            <div>
                <p style={{color: 'gold'}}>Honour Roll</p>
            </div>
        )}

        {overallAverage < 50 && (
            <div>
                <p style={{color: 'red'}}>Needs Improvement</p>
            </div>
        )}
    </div>
  )
}

export default StudentHeader