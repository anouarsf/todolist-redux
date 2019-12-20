
import React from 'react';
import {connect} from 'react-redux'
import {changeHandle ,  addHandle ,handleCompleted , deleteText} from './action' 
import Modal from './modal'
import './App.css';




function App(props) {
  return (

    <div className="App">
  <p className="header-title"> TodoList <br/> <i className="header-subtitle">Welcome to my todoList applications</i> </p>
<input type="text" className="itemtext" placeholder="Entre new task"  onChange={(e)=>props.changeHandle(e.target.value)} /> 
<button className="btn-add" onClick={props.addHandle}>add</button>
        
    
    { props.todo.putItems.map(((el,id)=>

  <li  className ="put-items-li">
 <button  className="btn-delete" onClick={()=>props.deleteText(id)} >Delete</button>
 <button type="checkbox" onClick={()=>props.handleCompleted(id)}  className='btn-complete'>Complete</button> 
 < Modal index={id} />

  <span style={{textDecoration:el.isX ?'line-through':'' } } className="text"> {el.Text}  </span>

  

    </li>
    )
    )}

</div>
    );
  }
const mapStateToProps =(state)=>{
  return {
    todo : state} 
};

const  mapDispatchToProps =(dispatch)=>{
 return{
  changeHandle : (payload) => dispatch(changeHandle(payload)),
  addHandle: () =>dispatch(addHandle()),
  handleCompleted: (id)=>dispatch(handleCompleted(id)),
  deleteText: (id)=>dispatch(deleteText(id)), 

}


}

export default connect(mapStateToProps,mapDispatchToProps)(App)
