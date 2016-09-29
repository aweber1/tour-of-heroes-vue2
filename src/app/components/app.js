import Vue from 'vue';
import './app.css';

const styles = {
  h1: {
    fontSize: '1.2em',
    color: '#999',
    marginBottom: '0px', // need to quote numerical values for vue.js inline styles
  },
};

const App = Vue.extend({
  name: 'App',
  props: {
    title: String,
  },
  // can't use arrow functions if we need access to 'this' within render
  // https://github.com/vuejs/babel-plugin-transform-vue-jsx/issues/9
  // https://github.com/vuejs/babel-plugin-transform-vue-jsx/issues/11
  render: function render(h) {
    return (
      <div>
        <h1 style={styles.h1}>{this.title}</h1>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/dashboard">Dashboard</router-link>
          <router-link to="/heroes">Heroes</router-link>
        </nav>
        <router-view></router-view>
      </div>
    );
  },
  // alternative is to use a functional component.
  // However, as with React, we don't have access to lifecycle methods or state
  // functional: true,
  // render: (h, context) => <div>Hello world {context.props.title}!</div>,
});

export default App;
