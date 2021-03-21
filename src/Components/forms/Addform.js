import React, {useState} from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'


const initialFormData = {
  title: "",
  hr: 0,
}
export const Addform = ({buttonClicked}) => {
 const [task, setTask] = useState(initialFormData );
 const handleOnChange = e => {
   const {name,value} = e.target;
   setTask({
     ...task,
     [name]: name === 'hr' ? +value: value,

   })
 }

 const handleOnSubmit = e => {
   e.preventDefault();
   buttonClicked(task);
 }


  
    return (
        <Form onSubmit = {handleOnSubmit}>
  <Row>
    <Col>
      <Form.Control onChange= {handleOnChange} name= 'title' placeholder="Task Name" value= {task.title} />
    </Col>
    <Col>
      <Form.Control onChange = {handleOnChange} placeholder = 'number' type = 'number' name = 'hr' value ={task.hr}/>
    </Col>
    <Col>
    
    <Button type= 'submit'> Add Task </Button>
    </Col>
  </Row>
</Form>
    )
}

