import {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
  {parth: '/', redirect: '/notes'},
  {path: '/notes', component: () => import('@/views/NotesView.vue')},
  {path: '/stats', component: () => import('@/views/StatsView.vue')},
]

export default routes
