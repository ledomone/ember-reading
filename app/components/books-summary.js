import Ember from 'ember';

export default Ember.Component.extend({
  bookPages: Ember.computed.mapBy('books', 'pages'),
  booksCount: Ember.computed('books', function() {
    return this.get('books').get('length');
  }),
  sumPages: Ember.computed.sum('bookPages'),
  avgPages: Ember.computed('sumPages', 'booksCount', function() {
    return this.get('sumPages') / this.get('booksCount');
  })
});
