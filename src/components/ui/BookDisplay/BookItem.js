import React, {Component} from 'react'
import TextField from '../Form/TextField'

export default class BookItem extends Component{

    constructor(props){
        super(props);
        this.state = {edit: false}
    }

    componentDidMount(){
        this.setState({title: this.props.title, author: this.props.author});
    }

    delete = ()=>{
        this.props.deleteFunc(this.props.id);
    }

    editButton = async ()=>{
        if (this.state.edit){
            await this.setState({title: this.state.editedTitle, author: this.state.editedAuthor});
            this.props.submitEditFunc(this.props.id, this.state.title, this.state.author);
        }
        this.setState({edit: !this.state.edit, editedAuthor: this.state.author, editedTitle: this.state.title});
    }

    titleListener = (input)=>{
        this.setState({editedTitle: input})
    }

    authorListener = (input)=>{
        this.setState({editedAuthor: input})
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
