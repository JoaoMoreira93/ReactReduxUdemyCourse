import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key= { book.title } 
                    onClick={()=>this.props.selectBook(book)}
                    className= "list-group-item" >
                     { book.title }
                </li >
            );
    });
}

render() {
    return (
        <ul className= "list-group col-sm-4" >{ this.renderList() }</ul >
    );
    }
}

function mapStateToProps(state){
    // Returns goes to props inside BookList
    return {
        books: state.books
    };
}

// Qqlr resultado desta função -> props no BookList(container)
function mapDispatchToProps(dispatch){
  // Qd selectBook(action) é chamada, o resultado deve passar para todos os reducers
  return bindActionCreators({ selectBook:selectBook}, dispatch);
}

// Promove BookList de Component a container
// Tem conhecimento deste metodo dispatch, selectBook
// Tornando-o numa prop
export default connect(mapStateToProps,mapDispatchToProps)(BookList);
