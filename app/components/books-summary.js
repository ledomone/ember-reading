import Ember from 'ember';

export default Ember.Component.extend({
  bookPages: Ember.computed.mapBy('books', 'pages'),
  booksCount: Ember.computed('books.length', function() {
    return this.get('books').get('length');
  }),
  sumPages: Ember.computed.sum('bookPages'),
  avgPages: Ember.computed('sumPages', 'booksCount', function() {
    return Math.floor(this.get('sumPages') / this.get('booksCount'));
  })
});
