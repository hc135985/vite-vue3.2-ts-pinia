import { createWebHashHistory, createRouter } from 'vue-router';
import { routes } from './routes';
const history = createWebHashHistory();

export const router = createRouter({
  history,
  routes
});