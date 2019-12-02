import React from 'react'
import {connect} from 'react-redux'

const StudentList = (props)=>{
  const handleClick = (id)=>{
    props.deleteStudent(id)
   }

  const students = props.students.map(student=>{
    const {id, name, score, nationality} = student
    return(
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{score}</td>
        <td>{nationality}</td>
        <td><button onClick={()=>{handleClick(id)}}>Delete</button></td>
      </tr>
    )
  })
  return(
    <table>
      <thead>
        <tr>
          <th>S/N</th>
          <th>Name</th>
          <th>Score</th>
          <th>Nationality</th>
        </tr>
      </thead>
      <tbody>
        {students}
      </tbody>
    </table>
  )
}

const mapStateToProps = (state)=>{
  return{
    students:state.students
  }
}

const mapDispatchToProps = (dispatch)=>{
 return{
   deleteStudent: (id)=>{dispatch({type:'DELETE_STUDENT', record:{id}})}
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList)
