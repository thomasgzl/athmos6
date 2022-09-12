import { createApp } from 'vue'
import App from './App.vue'
import { Plugin } from 'vue-responsive-video-background-player'

import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
dayjs.locale('fr');
dayjs.extend(utc);
dayjs.extend(duration);

import '@/index.css'

const app = createApp(App).use(Plugin)

app.mount('#app')
