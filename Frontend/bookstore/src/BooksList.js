import React, { Component } from 'react';
import  Book from './Book.js'
import  AddBook from './AddBook.js'
import axios from 'axios';

class BooksList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      books: [],
      showAddBook:false,
      showError:false,
      err:null
    }
    axios.get('http://localhost:4000')
      .then(response => {
        this.setState({books:response.data});
      })
      .catch(err => {console.log(err.message)
        this.setState({showError:true, err:err.message});
        //this.setState({});
      })
    this.deleteBook = this.deleteBook.bind(this);
    this.addBook = this.addBook.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.addNewBook = this.addNewBook.bind(this);
    this.closeError = this.closeError.bind(this);
  }
  deleteBook(book){
    axios.delete('http://localhost:4000/?_id=' +book._id)
      .then(response => {
         this.setState({books:response.data});       
      })
      .catch(err => {
        this.setState({showError:true, err:err.message});
      })
  }
  addBook(){
    this.setState({showAddBook:true});
  }
  hideModal(){
    this.setState({showAddBook:false});
  }
  addNewBook(newBook){
     axios.post('http://localhost:4000/',  newBook)
      .then(response => {
         this.setState({books:response.data});       
      })
      .catch(err => {
        this.setState({showError:true, err:err.message});
      })
      this.setState({showAddBook:false});
   }
   closeError(){
    this.setState({showError:false});
   }
  render() {
    return (
      <div>
        { this.state.showError 
          ?<div className="alert">
            <span className="closebtn" onClick={this.closeError}>&times;</span> 
            <strong>Error!</strong> {this.state.err}
          </div>  
          : null }
        <div className="app">
          <h1 className="title">BOOKS LIST</h1>
          <button className="add-btn" onClick={this.addBook}>Add New Book</button>
          <ul className="books">
              { this.state.books ? this.state.books.map((item, index) => 
                 <Book key= {item._id} book= {item} deleteBook={this.deleteBook}/> 
              ) 
              : null}
          </ul>
          <AddBook showAddBook={this.state.showAddBook} hideModal={this.hideModal} addNewBook={this.addNewBook} />
        </div>
      </div>
    );
  }
}

export default BooksList;
