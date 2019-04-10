import React, {Component} from 'react'
import TextField from './TextField'

export default class BookItem extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }


    submit = () =>{
        console.log("Title: " + this.state.title)
        console.log("Author: " + this.state.author)
        this.props.submitFunc(this.state.title, this.state.author);
    } 
    
    updateTitle = (input) =>{
        this.setState({title: input})
    }

    updateAuthor = (input) =>{
        this.setState({author: input})
    }

    render(props){
        return (
            <form className="book-form col-6">
              <legend>Lägg till dina favoritböcker</legend>
              <div className="form-group">

                <TextField id="title" placeholder="Lägg till titel" listenerFunc={this.updateTitle} />
                <TextField id="author" placeholder="Lägg till författare" listenerFunc={this.updateAuthor} />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                id="submitbtn"
                onClick={this.submit} 
              >
                Skicka
              </button>
            </form>
        )
    }

}
