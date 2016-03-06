import Ember from 'ember';

export default Ember.Component.extend({
  bookPages: Ember.computed.mapBy('books', 'pages'),
  sumPages: Ember.computed.sum('bookPages')
});
