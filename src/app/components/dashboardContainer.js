import Vue from 'vue';
import Dashboard from './dashboard';

const DashboardContainer = Vue.extend({
  name: 'DashboardContainer',
  data: function data() {
    return {
      heroes: this.$select('app.heroes as heroes'),
    };
  },
  render: function render(h) {
    return (
      <Dashboard heroes={this.heroes.slice(1, 5)} />
    );
  },
});

export default DashboardContainer;
