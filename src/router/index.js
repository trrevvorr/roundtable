import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/new',
    name: 'new',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "new" */ '../views/NewGameView.vue'),
  },
  {
    path: '/current',
    name: 'current',
    component: () => import(/* webpackChunkName: "current" */ '../views/CurrentGameView.vue'),
  },
  {
    path: '/past-games',
    name: 'past-games',
    component: () => import(/* webpackChunkName: "past-games" */ '../views/PreviousGamesView.vue'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/SettingsView.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
