import Vue from 'vue';
import './dashboard.css';

const Dashboard = Vue.extend({
  name: 'Dashboard',
  props: {
    heroes: {
      type: Array,
    },
  },
  methods: {
    handleHeroClick: function handleHeroClick(hero) {
      this.$router.push(`/detail/${hero.id}`);
    },
  },
  render: function render(h) {
    return (
      <div class="dashboard">
        <h2>Top Heroes</h2>
        <div class="grid grid-pad">
          {
            this.heroes ?
              this.heroes.map(hero =>
                <div class="col-1-4" on-click={this.handleHeroClick.bind(this, hero)}>
                  <div class="module hero">
                    <h4>{hero.name}</h4>
                  </div>
                </div>
              )
              : null }
        </div>
      </div>
    );
  },
});

export default Dashboard;
