import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/index.css";

// importing AOS css style globally
import 'aos/dist/aos.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

const app = createApp(App);

app.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
app.mount("#app");
