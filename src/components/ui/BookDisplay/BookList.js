import React , {Component} from 'react'
import BookItem from './BookItem'

export default class BookList extends Component{




    render(){
        return (
            <ul>
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
                 {(this.props.list.map(x=>
                    <BookItem key={x.id} {...x} deleteFunc={this.props.deleteFunc}/>
                ))} 
                
            </ul>
        )
    }


}
    
