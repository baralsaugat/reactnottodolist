import React from 'react'
import { Button, Table} from 'react-bootstrap'

export const Tasklist = ({tasklists, handleOnMarkAsNotToDo,handleOnChange}) => {
   
   return (
<>
      <h2>Task List</h2>
        <Table striped bordered hover variant="dark" size = "sm">
  <thead>
    <tr>
      <th>Task</th>
      <th>Hours</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>

   
    {tasklists.map((row, i) =>
    <tr key = {i}>
      
      <td>
      <input type="checkbox" 
      defaultValue = {i} 
      onChange = {handleOnChange}/>
        <label htmlFor="">{row?.title}</label>
        </td>
      <td>{row?.hr}</td>
      <td>
        
        <Button onClick = {()=> handleOnMarkAsNotToDo(i)}>Mark as not to do</Button>
        
      </td>
      
    </tr>)}
   
  </tbody>
</Table>
</>
    )
}
