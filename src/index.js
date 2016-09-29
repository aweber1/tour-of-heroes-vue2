import { Vue, router, store } from './boot/core';
import App from './app/components/app';

new Vue({
  router,
  el: '#app',
  render(h) {
    return (
      <App title="Tour of Heroes" />
    );
  },
  data: { store },
});
