import Ember from 'ember';
import moment from 'moment';

const {
  computed
} = Ember;

export default Ember.Controller.extend({

  date: computed(function() {
    return moment();
  }),

  formatted: computed('date', function() {
    return this.get('date').format('DD/MM/YYYY');
  }),

  nextMonth: computed('date', function(){ 
    return this.get('date').clone().startOf('month').add(1, 'month');
  }),

  actions: {
    next() {
      let date = this.get('date');
      let nextMonth = date.clone().startOf('month').add(1, 'month');
      this.set('date', nextMonth);
    },
    previous() {
      let date = this.get('date');
      let previousMonth = date.clone().startOf('month').subtract(1, 'month');
      this.set('date', previousMonth);
    }
  }
});
