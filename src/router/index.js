import { createRouter, createWebHashHistory } from 'vue-router'
import Recommend from '@views/recommend/Recommend'
const Mine = () => import('@views/mine/Mine')
const SocialContact = () => import('@views/social-contact/SocialContact')
const Singer = () => import('@views/singer/Singer')
const SingerDetail = () => import('@views/singer-detail/SingerDetail')
const Disc = () => import('@views/disc/Disc')
const Rank = () => import('@views/rank/Rank')
const Test = () => import('@views/test-tab/Test')

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend,
    children: [
      {
        path: ':id',
        name: 'Disc',
        component: Disc
      }
    ]
  },
  {
    path: '/social-contact',
    name: 'SocialContact',
    component: SocialContact
  },
  {
    path: '/singer',
    name: 'Singer',
    component: Singer,
    children: [
      {
        path: ':id',
        name: 'SingerDetail',
        component: SingerDetail
      }
    ]
  },
  {
    path: '/rank',
    component: Rank
  },
  {
    path: '/test',
    component: Test
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
