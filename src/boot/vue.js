import Vue from 'vue';

// Vue Plugins
import Router from 'vue-router';

[Router].forEach(Plugin => Vue.use(Plugin));

export { Vue, Router };
