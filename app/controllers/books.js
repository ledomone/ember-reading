import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteBook(book) {
      book.deleteRecord();
      book.save();
    },
  },
});
