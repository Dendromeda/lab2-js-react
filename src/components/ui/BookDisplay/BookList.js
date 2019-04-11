import React , {Component} from 'react'
import BookItem from './BookItem'
import TextField from '../Form/TextField'

export default class BookList extends Component{


    constructor(){
        super();
        this.state = {searchString: ""};
    }


    searchListener = (input)=>{
        this.setState({searchString: input});
    }


    render(){
        return (
            <ul>
                <li className="list-item list-group-item d-flex align-items-center">
                    <strong>Sök:</strong>
                    <div style={{width: '10%'}}/>
                    <TextField listenerFunc={this.searchListener}/>
                </li>
                <li className="list-item list-group-item d-flex align-items-center">
                    <strong className="title">Titel</strong>

                    <strong className="author">Författare</strong>

                    <div className="buttons" style={{opacity: 0}}>
                    <button type="button" className="btn btn-success">
                        Editera
                    </button>
                    <button type="button" className="btn btn-danger" >
                        Ta bort
                    </button>
                    </div>
                </li>
                 {(this.props.list
                 .filter(x => {
                     let searchStr = this.state.searchString.toUpperCase();
                     return x.title.toUpperCase().includes(searchStr) || x.author.toUpperCase().includes(searchStr) || searchStr === "";
                 })
                 .map(x=>
                    <BookItem key={x.id} {...x} deleteFunc={this.props.deleteFunc} submitEditFunc={this.props.submitEditFunc}/>
                ))} 
                
            </ul>
        )
    }


}
    
