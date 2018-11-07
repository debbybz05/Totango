import React, { Component } from 'react';
import Modal from 'react-modal';
import  Book from './Book.js'
import DatePicker from 'react-date-picker';

Modal.setAppElement('#root')

class AddBook extends Component {
  constructor (props) {
    super(props);
    this.state = {
      date: new Date()
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
  }


  handleSubmit(event){
    event.preventDefault();
    let newBook={
      title: event.target.title.value,
      description: event.target.description.value,
      ISBN: event.target.ISBN.value,
      Author: event.target.Author.value,
      PublicationDate: this.state.date,
      Genre: event.target.Genre.value,
      Price: event.target.Price.value
    }
    this.props.addNewBook(newBook);
  }

  onChangeDate(date){
    this.setState({ date })
  } 

  render() {
    return (
      <div >
        <Modal className="addNewBook" isOpen={this.props.showAddBook} onRequestClose={this.props.hideModal}>
        <div className="text-addNewBook">
          <h1 className="title">ADD NEW BOOK </h1>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <label>title:  
                <input type="text" name="title" />
              </label> 
            </div>
            <div className="row">
              <label> description:
                <input type="text" name="description" />
              </label>
            </div>
            <div className="row">
              <label> ISBN: 
                <input type="text" name="ISBN" />
              </label>
            </div>
            <div className="row">
              <label> Author: 
                <input type="text" name="Author" />
              </label>
            </div>
            <div className="row">
              <label> PublicationDate: </label>
               <DatePicker name="PublicationDate" onChange={this.onChangeDate} value={this.state.date} />
            </div>
            <div className="row">
              <label> Genre: 
                <select name="Genre">
                  <option>Science</option>
                  <option>fiction</option>
                  <option>Drama</option>
                  <option>Satire</option>
                  <option>Action</option>
                  <option>Romance</option>
                  <option>Mystery</option>
                  <option>Horror</option>
                </select>
              </label>
            </div>
            <div className="row">
              <label> Price: 
                <input type="text" name="Price" />
              </label>
            </div>  
          <button className="close-btn" onClick={this.props.hideModal}>
            Cancel
          </button>
          <input className="close-btn" type="submit" value="Save" />
          </form> 
        </div>
        </Modal>
      </div>
 );
  }
}

export default AddBook;
