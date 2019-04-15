import React, {Component} from 'react'
import TextField from './TextField'

export default class BookItem extends Component{

    constructor(props){
        super(props);
        // Se till att state som används i komponenten deklareras i konstruktor
        // Introducera inte nya "on the fly"
        this.state = {
          show: false,
          title: '',
          author: ''
        };
    }


    submit = () =>{
        this.props.submitFunc(this.state.title, this.state.author);
    } 
    
    updateTitle = (input) =>{
        this.setState({title: input})
    }

    updateAuthor = (input) =>{
        this.setState({author: input})
    }

    changeShowState = () =>{
      this.setState({show: !this.state.show});
    }

    render(props){
        return (
            <div>
              <div className="form-group">
                <TextField id="title" placeholder="Lägg till titel" listenerFunc={this.updateTitle} />
                <TextField id="author" placeholder="Lägg till författare" listenerFunc={this.updateAuthor} />
              </div>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
                id="submitbtn"
                onClick={this.submit} 
              >
                Skicka
              </button>
            </div>
        )
    }

}
