import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: '/case-one',
      children: [
        {
          path: 'case-one',
          name: 'case-one',
          component: () => import('@/pages/caseOne/caseOne.vue')
        },
        {
          path: 'case-two',
          name: 'case-two',
          component: () => import('@/pages/caseTwo/caseTwo.vue')
        },
        {
          path: 'case-three',
          name: 'case-three',
          component: () => import('@/pages/caseThree/caseThree.vue')
        },
        {
          path: 'user/:id',
          name: 'user',
          component: () => import('@/pages/user/user.vue')
        }
      ]
    }
  ]
})

export default router
