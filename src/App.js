import React, { Component } from 'react'
import Header from './components/ui/Header/Header'
import BookList from './components/ui/BookDisplay/BookList'
import FormGroup from './components/ui/Form/FormGroup'
import Controller from './Controller'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {showForm: true, list: []};
  }

  async componentDidMount(){
    let bookList = await Controller.fetchBooks();
    this.setState({list: bookList, key: await Controller.requestKey()});
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

  changeFormShowState = ()=>{
    this.setState({showForm: !this.state.showForm})
    console.log(`showform = ${this.state.showForm}`);
  }

  editState = (id, title, author) =>{
    let bookList = this.state.list;
    let bookIndex;
    for (let i = 0; i < bookList.length; i++){
      if (bookList[i].id === id){
        bookIndex = i;
      }
    }
    Controller.edit(id, title, author);
    bookList[bookIndex] = {id: id, title: title, author: author}
    this.setState({list: bookList});
  }

  setNewKey = async () => {
    Controller.setNewKey();
    this.setState({key: await Controller.requestKey(), list: []});

  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row form-section">
            <form className="book-form col-6">
              <legend>Lägg till dina favoritböcker </legend>
              {this.state.showForm ?
              <FormGroup submitFunc={this.submitState} />
              :false}
              <button type="button" style={{border: "none", backgroundcolor: "white", margin: "10px 0px" }} onClick={this.changeFormShowState}> {this.state.showForm ? "Göm" : "Visa"}</button>
            </form>
          </div>
        </div>
        <div className="display-books">
          <div className="container">
            <div className="col-12"> 
              <BookList list={this.state.list} deleteFunc={this.deleteState} submitEditFunc={this.editState}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

//<div id="keyInfo" style={{color: "white"}}>Key = {this.state.key} <button onClick={this.setNewKey}>Generate new key</button></div>



export default App;
