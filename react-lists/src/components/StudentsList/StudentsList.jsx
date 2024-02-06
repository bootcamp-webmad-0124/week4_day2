const students = ['Marc', 'Lucy', 'Anna', 'Anna']

const StudentsList = () => {

    return (
        <div className="StudentsList">
            {
                students.map((elm, idx) => {
                    return <p key={idx}>{elm}</p>
                })
            }
        </div>

    )
}

export default StudentsList