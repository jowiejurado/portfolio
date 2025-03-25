import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
import '@fontsource-variable/montserrat';

const vuetify = createVuetify({
  components,
  directives,
	theme: {
    defaultTheme: 'dark'
  }
});

const app = createApp(App)

app.config.performance = true;

app
	.use(vuetify)
	.use(router)
	.mount('#app')
