import React, { Component } from 'react'
import Header from './components/ui/Header/Header'
import BookList from './components/ui/BookDisplay/BookList'
import FormGroup from './components/ui/Form/FormGroup'
import * as controller from './controller'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showForm: true, 
      list: [],
      key: ''
    };
  }

  async componentDidMount() {
    let bookList = await controller.fetchBooks();
    this.setState({list: bookList, key: await controller.requestKey()});
  }

  submitState = async (title, author) =>{
    const newBook = await controller.submit(title, author);
    const { list } = this.state;
   
    this.setState({list: list.concat([newBook])});
  }

  deleteState = async (id) => {
    const { list } = this.state;
    await controller.deleteBook(id);
    this.setState({list: [...list.filter((book) => book.id !== id)]});
  }

  changeFormShowState = () => {
    this.setState({showForm: !this.state.showForm})
    console.log(`showform = ${this.state.showForm}`);
  }

  // Det här skulle BookItem kunna hålla reda på
  // Behöver vi inte hantera listan på det här sättet

  editState = (id, title, author) =>{
    const { list } = this.state;
    const bookIndex = list.findIndex(item => item.id === id)
    controller.edit(id, title, author);
    list[bookIndex] = { id, title, author }
    this.setState({list: [...list]});
  }

  setNewKey = async () => {
    controller.setNewKey();
    this.setState({key: await controller.requestKey(), list: []});

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
