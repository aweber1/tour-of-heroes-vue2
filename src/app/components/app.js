import Vue from 'vue';
import store from 'boot/store';
import * as actions from '../actions';
import './app.css';

const App = Vue.extend({
  name: 'App',
  props: {
    title: String,
  },
  data: function data() {
    return {
      loading: this.$select('app.loading as loading'),
    };
  },
  beforeCreate: function beforeCreate() {
    store.dispatch(actions.getHeroes());
  },
  // can't use arrow functions if we need access to 'this' within render
  // https://github.com/vuejs/babel-plugin-transform-vue-jsx/issues/9
  // https://github.com/vuejs/babel-plugin-transform-vue-jsx/issues/11
  render: function render(h) {
    return (
      <div>
        <h1>{this.title}</h1>
        {
          this.loading ?
            <div class="loading"></div> :
            <div>
              <nav>
                <router-link to="/dashboard">Dashboard</router-link>
                <router-link to="/heroes">Heroes</router-link>
              </nav>
              <router-view></router-view>
            </div>
        }
      </div>
    );
  },
  // alternative is to use a functional component.
  // However, as with React, we don't have access to lifecycle methods or state
  // functional: true,
  // render: (h, context) => <div>Hello world {context.props.title}!</div>,
});

export default App;
