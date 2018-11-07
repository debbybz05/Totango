import React, { Component } from 'react';
import BookDetails from './BookDetails.js';
import { Redirect } from 'react-router';

class Book extends Component {
 isDelete;
  constructor (props) {
    super(props);
    this.state = {
      showDetails: false,
      isDelete:false
    }
    this.showDetails = this.showDetails.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }
  showDetails(){
    if(!this.isDelete)
      this.setState({ showDetails: true });
  }
  deleteBook(){
    this.isDelete=true;
    this.props.deleteBook(this.props.book);
    this.setState({ showDetails: false });
  }
  render() {
    if (this.state.showDetails && !this.isDelete ) {
      return <Redirect  to={{pathname: "/BookDetails", state: { book: this.props.book }}} />;
    }
    return (
      <div>
        <li className="book" onClick={this.showDetails}>
        <a href="" className="delete-btn" onClick={this.deleteBook}></a>
        <div className="book-title">
            {this.props.book.title}
          { this.state.showDetails ? <BookDetails book= {this.props.book} /> : null }
        </div>
          
        </li> 
      </div>
    );
  }
}

export default Book;