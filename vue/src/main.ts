import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { Ripple } from "vuetify/directives";
import { VBtn } from "vuetify/components/VBtn";
import { VIcon } from "vuetify/components/VIcon";
import { VList, VListItem } from "vuetify/components/VList";
import { VMenu } from "vuetify/components/VMenu";
import { VProgressLinear } from "vuetify/components/VProgressLinear";

import "@/assets/base.css";

const app = createApp(App);

const vuetify = createVuetify({
  components: { VBtn, VIcon, VList, VListItem, VMenu, VProgressLinear },
  directives: {
    Ripple,
  },
});

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount("#app");
