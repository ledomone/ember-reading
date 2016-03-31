import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveBook: function() {
      let newBook = this.store.createRecord('book', {
        title: this.get('title'),
        author: this.get('author'),
        pages: new Number(this.get('pages')),
      });
      newBook.save();
      this.set('title', '');
      this.set('author', '');
      this.set('pages', '');
      this.transitionToRoute('books');
    },
  },
});
