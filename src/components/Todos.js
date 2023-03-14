import React,{useState} from "react";
import { ListGroup,ListGroupItem } from "reactstrap";
import {FaCheck} from 'react-icons/fa'
import { connect } from "react-redux";
import {removeTodo} from '../action/todo'


const Todos=({todos,markComplete})=>{
    return(
        <ListGroup className="mt-5 mb-2">
            {
                todos.map((todo)=>{
                    return(
                        <ListGroupItem key={todo.id}>
                            {todo.title}
                            <span onClick={()=>{markComplete(todo.id)}} className="float-end">
                                <FaCheck></FaCheck>
                            </span>
                        </ListGroupItem>
                    )
                })
                          }
        </ListGroup>
    )

}

const mapStateToProps =state =>({
    todos:state.todos
})
const mapDispatchToProps =dispatch =>({
    markComplete:id=>{
        dispatch(removeTodo(id))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Todos)