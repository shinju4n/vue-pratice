import App from './App.vue';
import './assets/main.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import router from '@/router';
import { createApp } from 'vue';

createApp(App).use(router).mount('#app');
