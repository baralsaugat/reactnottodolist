import React from 'react'
import {Card, Button, Table, Alert} from 'react-bootstrap'

export const Nottodolist = ({notToDoList, markAsToDo, handleOnChangeNotToDo}) => {
  const totalSavedTime = notToDoList.reduce((subTtl, item) =>
  { return subTtl += item.hr}, 0)



    return (
      <>
      <h2>Not To Do List</h2>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Task</th>
          <th>Hours</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {notToDoList.map((row, i) =>
    <tr key = {i}>
      <td>
      <input type="checkbox" 
      defaultValue = {i} 
      onChange = {handleOnChangeNotToDo}/>
        <label htmlFor="">{row?.title}</label>
        {row?.title}</td>
      <td>{row?.hr}</td>
      <td>
        <Button variant = 'primary' onClick = {()=> markAsToDo(i)}>Mark as To Do</Button>
       
         
       
      </td>
      
    </tr>)}
   
       
      </tbody>
      
    </Table>
    
    <Alert variant="success">
  <Alert.Heading>You just saved {totalSavedTime}hrs</Alert.Heading>

</Alert>
    </>
          
    )
}
