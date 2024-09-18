import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router' // Importação com "type"
import HomeView from '@/views/HomeView.vue'
import EquipmentDetails from '@/views/EquipmentDetails.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/equipment/:id', name: 'Equipment', component: EquipmentDetails }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
