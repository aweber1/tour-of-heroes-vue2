import Vue from 'vue';
import store from 'boot/store';
import * as actions from '../actions';
import Heroes from './heroes';

const HeroesContainer = Vue.extend({
  name: 'HeroesContainer',
  data: function data() {
    return {
      heroes: this.$select('app.heroes as heroes'),
      selectedHero: this.$select('app.selectedHero as selectedHero'),
    };
  },
  methods: {
    onHeroClick: function onHeroClick(hero) {
      store.dispatch(actions.selectHero(hero));
    },
    onAddHeroClick: function onAddHero(heroName) {
      store.dispatch(actions.addHero(heroName));
    },
    onDeleteHeroClick: function onDeleteHero(hero, e) {
      e.preventDefault();
      e.stopPropagation();
      store.dispatch(actions.deleteHero(hero));
    },
  },
  render: function render(h) {
    return (
      <Heroes heroes={this.heroes} selectedHero={this.selectedHero} onHeroClick={this.onHeroClick} onAddHeroClick={this.onAddHeroClick} onDeleteHeroClick={this.onDeleteHeroClick} />
    );
  },
});

export default HeroesContainer;
