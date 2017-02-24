import Ember from 'ember';
import moment from 'moment';

const {
  computed
} = Ember;

export default Ember.Component.extend({

  date: computed(function() {
    return moment();
  }),

  month: computed('date', function() {
    return this.get('date').format('MMMM');
  })

});
