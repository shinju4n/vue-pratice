import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import NotFound from '@/views/NotFound.vue'
import NestedView from '@/views/nested/NestedView.vue'
import NestedHome from '@/views/nested/NestedHomeView.vue'
import NestedOne from '@/views/nested/NestedOneView.vue'
import NestedTwo from '@/views/nested/NestedTwoView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/posts',
    name: 'PostList',
    component: PostListView,
  },
  {
    path: '/posts/create',
    name: 'PostCreate',
    component: PostCreateView,
  },
  {
    path: '/posts/:id',
    name: 'PostDetail',
    component: PostDetailView,
  },
  {
    path: '/posts/edit/:id',
    name: 'PostEdit',
    component: PostEditView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/nested',
    name: 'Nested',
    component: NestedView,
    children: [
      {
        path: '',
        name: 'NestedHome',
        component: NestedHome,
      },
      {
        path: 'one',
        name: 'NestedOne',
        component: NestedOne,
      },
      {
        path: 'two',
        name: 'NestedTwo',
        component: NestedTwo,
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes: routes,
});

export default router;
