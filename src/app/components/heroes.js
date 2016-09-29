import Vue from 'vue';
import './heroes.css';

const Heroes = Vue.extend({
  name: 'Heroes',
  props: {
    heroes: Array,
    selectedHero: Object,
    onHeroClick: Function,
    onAddHeroClick: Function,
    onDeleteHeroClick: Function,
  },
  data: function data() {
    return {
      addHeroName: '',
    };
  },
  methods: {
    handleAddHeroClick: function handleAddHeroClick() {
      this.onAddHeroClick(this.addHeroName);
    },
    handleAddHeroNameChange: function handleAddHeroNameChange(event) {
      this.addHeroName = event.target.value;
    },
    handleDetailClick: function handleDetailClick() {
      this.$router.push(`/detail/${this.selectedHero.id}`);
    },
  },
  render: function render(h) {
    return (
      <div class="heroes-container">
        <h2>My Heroes</h2>
        <div>
          <label>Hero name:</label> <input type="text" value={this.addHeroName} on-change={this.handleAddHeroNameChange} />
          <button on-click={this.handleAddHeroClick}>Add</button>
        </div>
        <ul class="heroes">
          { this.heroes ?
              this.heroes.map(hero =>
                <li
                  class={[{ selected: (this.selectedHero && this.selectedHero.id === hero.id) }]}
                  on-click={this.onHeroClick.bind(this, hero)}>
                  <span class="badge">{hero.id}</span>
                  <span>{hero.name}</span>
                  <button class="delete" on-click={this.onDeleteHeroClick.bind(this, hero)}>x</button>
                </li>
              )
              : null }
        </ul>
        {
          this.selectedHero ?
            <div>
              <h2>{this.selectedHero.name} is my hero</h2>
              <button on-click={this.handleDetailClick}>View Details</button>
            </div>
            : null
        }
      </div>
    );
  },
});

export default Heroes;
