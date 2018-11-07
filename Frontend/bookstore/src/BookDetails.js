import React, { Component } from 'react';
import { Redirect } from 'react-router';

class BookDetails extends Component {
  constructor (props) {
    super(props);
    this.state = {
      close: false
    }
    this.close = this.close.bind(this);
  }
  close(){
     this.setState({ close: true });
  }
  render() {
     if (this.state.close) {
      return <Redirect  to={{pathname: "/BookStore"}} />;
    }
    return (
      <div className="details">
        <h1 className="title">BOOK {this.props.location.state.book.title}</h1>
        <div className="text-details">
           <div className="row">
            <label> title: {this.props.location.state.book.title}</label>
          </div>
          <div className="row">
            <label> description: {this.props.location.state.book.description}</label>
          </div>
          <div className="row">
             <label> ISBN: {this.props.location.state.book.ISBN}</label>
          </div>
          <div className="row">
            <label> Author: {this.props.location.state.book.Author}</label>
          </div>
          <div className="row">
            <label> PublicationDate: {this.props.location.state.book.PublicationDate}</label>
          </div>
          <div className="row">
            <label> Genre: {this.props.location.state.book.Genre}</label>
          </div>
          <div className="row">
            <label> Price: {this.props.location.state.book.Price}</label>
          </div>  
            <button className="close-btn" onClick={this.close}>
            Back
          </button>
        </div>
      </div> 
    );
  }
}

export default BookDetails;