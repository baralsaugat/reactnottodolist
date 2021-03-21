
import {useState} from 'react'
import {Button, Container, Col, Row, Alert} from 'react-bootstrap';
import {Addform} from './Components/forms/Addform'
import {Tasklist} from './Components/tasklist/Tasklist';
import {Nottodolist} from './Components/tasklist/Nottodolist';
import './App.css';

const initialTasklists = [];

const App = () => {
  // create new state
  //To Dos
  // []Add form UI
  // []Add for data to state 
  // []render state data in list view
  //  []handle on mark as notoo and to do list
  // []select items and delete 
  //[] count total not to do hours
  // const [task, setTask] = useState(initialState)

  const [tasklists, setTasklists] = useState([]);

  const [notToDoList, setNotToDoList] = useState([]);

  // const [totalHrs, setTotalHrs] = useState(0);

  const [itemToDelete, setItemToDelete] = useState([])
  
  const [notToDoItemToDelete, setNotToDoItemToDelete] = useState([])


//  calculate total hours
const toDoTotalHrs = tasklists.reduce((subtotal, item) => subtotal + item.hr, 0); 
const notToDoTotalHrs = notToDoList.reduce((subtotal, item) => subtotal + item.hr, 0); 
const totalHrs = toDoTotalHrs + notToDoTotalHrs
  
  const handleOnAddTask = (frmDt => {
    if (
      totalHrs + frmDt.hr > 168
    ){
      return alert("You have exceeded the total allocated time for the week")
    }
    
    setTasklists([...tasklists, frmDt]);
    
  
    
  })
  const handleOnMarkAsNotToDo = index => {
 
    const item= tasklists[index];
    const newArg = tasklists.filter((item,i) => i !== index);
    setTasklists(newArg);
    setNotToDoList([...notToDoList, item]);
    
    
  };
  

  const markAsToDo = index => {
    const item= notToDoList[index];
    const newArg = notToDoList.filter((item,i) => i !== index)
    setNotToDoList(newArg);
    setTasklists([...tasklists, item]);
  }

const handleOnChange = e => {
  const {checked, value } = e.target;
console.log(value, itemToDelete)

  if (checked){
    // add to the array
    return setItemToDelete([...itemToDelete, +value])
  }
  
  const newlist = itemToDelete.filter (item=> item !== value);
  
  setItemToDelete(newlist);



}
const deleteFromToDo = () => {
  const newArg = tasklists.filter((item, i) => !itemToDelete.includes(i))
  setTasklists(newArg);
  // setItemToDelete([]);
  
 

}
const deleteFromNotToDo = () => {
  const newArgNotTo = notToDoList.filter((item, i) => !notToDoItemToDelete.includes(i))
  setNotToDoList(newArgNotTo);
  
  // setNotToDoItemToDelete([]);

}



//  delete item when delete button is clicked
const deleteItems = () => { if(
  window.confirm(" Are you sure want to delete the selected item")
){
  deleteFromToDo();
  deleteFromNotToDo();
  

  
  
  

}};



// Add and remove item in not to do list 
const handleOnChangeNotToDo = e => {
  const {checked, value } = e.target;
console.log(value, notToDoItemToDelete)

  if (checked){
    // add to the array
    return  setNotToDoItemToDelete([...notToDoItemToDelete, +value])
  }
  
  const newlist = notToDoItemToDelete.filter (item=> item !== value);
  
  setNotToDoItemToDelete(newlist);



}

  
 

 
  return (
    <div className="main">
      <Container>
        <Row>
          <Col>
          <div className="text-center mt-5"> 
          <div  className = 'forHelp'>
          <h6 className="dataHover">
          <span className="tooltiptext"> <p> This tool will to calculate your time spent on unwanted tasks and help to save your time.
             <br/>Add your weekly tasks with total hours spent.
             <br/></p> 
            </span><i class="far fa-question-circle"></i>
          
          </h6>
         
         
          </div>
         
         
          <h1 >
          Not To Do List  
            </h1>
            
            </div>
          </Col>
        </Row>
        <hr/>
        {/* form */}
        <Addform buttonClicked = {handleOnAddTask}/>
        <hr/>
        <Row>
          <Col>
      <Tasklist tasklists= {tasklists} handleOnMarkAsNotToDo= {handleOnMarkAsNotToDo}  handleOnChange ={ handleOnChange}  />
          </Col>
          <Col>
          <Nottodolist notToDoList= {notToDoList} markAsToDo= {markAsToDo} handleOnChangeNotToDo = {handleOnChangeNotToDo}
           /></Col>
        </Row>
        <Row><Alert variant="primary">
  <Alert.Heading>Your Total Allocated Time = {totalHrs}/ 168 hours</Alert.Heading>

</Alert>
          
        </Row>
      
         <Button className='dataHover' onClick = {() => {deleteItems()}} >Delete <span className = 'tooltiptext'> Delete the unwanted items</span> 
         </Button>
        
        

      </Container>


    </div>
  );
}

export default App;
