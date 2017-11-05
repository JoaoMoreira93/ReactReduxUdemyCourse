export function selectBook(book){
  // SelectBook -> ActionCreator must return an action
  // An Object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  }
}
