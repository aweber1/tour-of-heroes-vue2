import Vue from 'vue';
import store from 'boot/store';
import * as actions from '../actions';
import Dashboard from './dashboard';

const DashboardContainer = Vue.extend({
  name: 'DashboardContainer',
  data: function data() {
    return {
      heroes: this.$select('app.heroes as heroes'),
    };
  },
  created: function created() {
    if (!this.heroes || this.heroes.length === 0) {
      store.dispatch(actions.getHeroes()); // ideally we'd make this call at app startup or something like that
    }
  },
  render: function render(h) {
    return (
      <Dashboard heroes={this.heroes.slice(1, 5)} />
    );
  },
});

export default DashboardContainer;
