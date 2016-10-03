import { Vue, router } from './boot/core';
import App from './app/components/app';

new Vue({
  router,
  el: '#app',
  render(h) {
    return (
      <App title="Tour of Heroes" />
    );
  },
});
