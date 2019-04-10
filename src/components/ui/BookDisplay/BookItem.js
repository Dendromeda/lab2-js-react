import React, {Component} from 'react'

export default class BookItem extends Component{

    delete = ()=>{
        this.props.deleteFunc(this.props.id);
    }

    render(props){
        return (
            <li className="list-item list-group-item d-flex align-items-center">
            <div className="title">{this.props.title}</div>

            <div className="author">{this.props.author}</div>

            <div className="buttons">
            <button type="button" className="btn btn-success">
                Editera
            </button>
            <button type="button" className="btn btn-danger" onClick={this.delete}>
                Ta bort
            </button>
            </div>
        </li>
        )
    }

}
