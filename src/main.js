import { createApp } from 'vue'
import App from './App.vue'

// Router
import { router } from './router'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// FontAwesome Components
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faSquareParking } from '@fortawesome/free-solid-svg-icons'
import { faWifi } from '@fortawesome/free-solid-svg-icons'
import { faKitchenSet } from '@fortawesome/free-solid-svg-icons'
import { faTv } from '@fortawesome/free-solid-svg-icons'
import { faWaterLadder } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import { faRotate } from '@fortawesome/free-solid-svg-icons'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Generics Components

library.add(faXmark, faSquareParking, faWifi, faKitchenSet, faTv, faWaterLadder, faUserTie, faBackward, faForward, faRotate);

// App
const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');

/*
FontAwesome component of services icon:

<font-awesome-icon icon="fa-solid fa-square-parking" />     <!-- square-parking -->
<font-awesome-icon icon="fa-solid fa-wifi" />     <!-- wifi -->
<font-awesome-icon icon="fa-solid fa-kitchen-set" />     <!-- kitchen-set -->
<font-awesome-icon icon="fa-solid fa-tv" />     <!-- tv -->
<font-awesome-icon icon="fa-solid fa-water-ladder" />     <!-- water-ladder -->
<font-awesome-icon icon="fa-solid fa-user-tie" />     <!-- user-tie -->
*/
