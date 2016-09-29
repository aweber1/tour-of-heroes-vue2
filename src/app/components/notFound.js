import Vue from 'vue';

const NotFound = Vue.extend({
  name: 'NotFound',
  render: function render(h) {
    return (
      <div>404! Where did the page go?</div>
    );
  },
});

export default NotFound;
