import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: "#404184",
                secondary: "#25a286",
                accent: "#fde725",
            },
        },
    },
});
