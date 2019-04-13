import React, {Component} from 'react'
import TextField from '../Form/TextField'

export default class BookItem extends Component{
   
    constructor(props){
        super(props);
        this.state = {
            edit: false,
             // Se till att state som används i komponenten deklareras i konstruktor
             // Introducera inte nya "on the fly"
            title: this.props.title, 
            author: this.props.author
        }
    }

    delete = () => {
        this.props.deleteFunc(this.props.id);
    }

    editButton = () => {
        if (this.state.edit){
           this.props.submitEditFunc(this.props.id, this.state.title, this.state.author);
        }
        this.setState({edit: !this.state.edit});
    }

    titleListener = (input)=>{
        this.setState({title: input})
    }

    authorListener = (input)=>{
        this.setState({author: input})
    }

    render(props){
        return (
            <li className="list-item list-group-item d-flex align-items-center">
            <div className="title">
            {this.state.edit ? 
            <TextField listenerFunc= {this.titleListener} default={this.state.title}/>  :
            this.state.title
            }
            </div>

            <div className="author">
            {this.state.edit ? 
            <TextField listenerFunc= {this.authorListener} default={this.state.author}/>  :
            this.state.author
            }
            </div>

            <div className="buttons">
            <button type="button" onClick={this.editButton} className="btn btn-success">
                {this.state.edit ? "Bekräfta" : "Editera"}
            </button>
            <button type="button" className="btn btn-danger" onClick={this.delete}>
                Ta bort
            </button>
            </div>
        </li>
        )
    }

}
