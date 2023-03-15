import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import'bootstrap/dist/js/bootstrap.bundle.js'
import'bootstrap/dist/css/bootstrap.min.css'
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

const app = createApp(App)
app.use(router)
app.mount('#app')
