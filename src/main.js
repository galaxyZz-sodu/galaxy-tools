import { createApp } from 'vue'
import App from './App.vue'
import galaxyTools from 'galaxyzz-tools';
const app = createApp(App)
app.config.globalProperties.galaxyTools = galaxyTools
app.mount('#app')
