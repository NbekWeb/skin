import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'home',
         component: HomeView,
         children: [
            {
               path: '',
               name: 'buyer',
               component: () => import('../views/Buyer.vue'),
            },
           {
               path: '/buyer/:id',
               name: 'buyerId',
               component: () => import('../views/SingleBuyer.vue'),
            },
            {
               path: '/offer/:id',
               name: 'offer',
               component: () => import('../views/Offers.vue'),
            }
         ]
      },
   ],
})

export default router
