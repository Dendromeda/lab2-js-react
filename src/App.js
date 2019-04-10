import React, { Component } from 'react'
import Header from './components/ui/Header/Header'
import BookList from './components/ui/BookDisplay/BookList'
import FormGroup from './components/ui/Form/FormGroup'
import Controller from './Controller'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {list: []};
  }

  async componentDidMount(){
    let bookList = await Controller.fetchBooks();
    this.setState({list: bookList});
  }

  submitState = async (title, author) =>{
    let newBook = await Controller.submit(title, author);
    let bookList = this.state.list;
    bookList.push(newBook);
    this.setState({list: bookList});
  }

  deleteState = async (id) =>{
    let bookList = this.state.list;
    let newList = bookList.filter((book)=>book.id!==id);
    await Controller.deleteBook(id);
    this.setState({list: newList});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row form-section">
            <FormGroup submitFunc={this.submitState} />
          </div>
        </div>
        <div className="display-books">
          <div className="container">
            <div className="col-12">
              <BookList list={this.state.list} deleteFunc={this.deleteState}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default App;
