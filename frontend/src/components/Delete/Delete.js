import React, {Component} from 'react';
import axios from "axios";
import {Redirect} from "react-router";

class Delete extends Component{

    constructor(props){
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            bookId : -1
        }
        //Bind the handlers to this class
        this.bookIdChangeHandler = this.bookIdChangeHandler.bind(this);
        this.delete = this.delete.bind(this);
    }
    bookIdChangeHandler = (e) => {
        this.setState({
            bookId : e.target.value
        })
    }
    delete = (e) => {
        e.preventDefault();
        //make a delete request with the book ID
        let url = "http://localhost:3001/delete/" + this.state.bookId;
        axios.delete(url)
            .then(response => {
                console.log("Status Code : ", response.status);
            });
    }

    render(){
        return(
            <div className="container">
                <form>
                    <div style={{width: "50%",float: "left"}} className="form-group">
                        <input  onChange={this.bookIdChangeHandler} type="number" className="form-control" name="BookID" placeholder="Search a Book by Book ID"/>
                    </div>
                    <div style={{width: "50%", float: "right"}}>
                            <button onClick={this.delete} className="btn btn-success" type="submit">Delete</button>
                    </div> 
                </form>
            </div>
        )
    }
}

export default Delete;