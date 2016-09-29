import Vue from 'vue';
import './heroDetail.css';

const HeroDetail = Vue.extend({
  name: 'HeroDetail',
  props: {
    hero: Object,
    onSaveClick: Function,
  },
  data: function data() {
    return {
      editedHeroName: '',
    };
  },
  methods: {
    handleHeroNameChange: function handleHeroNameChange(event) {
      this.editedHeroName = event.target.value;
    },
    handleSaveClick: function handleSaveClick() {
      const heroName = this.editedHeroName ? this.editedHeroName : this.hero.name;
      const hero = Object.assign({}, this.hero, { name: heroName });
      this.onSaveClick(hero);
    },
    goBack: function goBack() {
      this.$router.go(-1);
    },
  },
  render: function render(h) {
    if (!this.hero) {
      return null;
    }

    return (
      <div class="detail">
        <h2>{this.hero.name} details!</h2>
        <div><label>id: </label>{this.hero.id}</div>
        <div>
          <label>name: </label>
          <input type="text" value={this.editedHeroName ? this.editedHeroName : this.hero.name} on-change={this.handleHeroNameChange} />
        </div>
        <button on-click={this.handleSaveClick}>Save</button>
        <button on-click={this.goBack}>Back</button>
      </div>
    );
  },
});

export default HeroDetail;
