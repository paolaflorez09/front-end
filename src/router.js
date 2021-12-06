import gql from "graphql-tag";
import { createRouter, createWebHistory } from "vue-router";
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

import Home from './components/Home.vue'
import LogIn from './components/LogIn.vue'
import products from './components/Products.vue'
import About from './components/About.vue'
import SignUp from './components/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/About',
    name: 'about',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/logIn',
    name: "logIn",
    component: LogIn 
},
{
  path: '/SignUp',
  name: "signUp",
  component: SignUp 
},
  {
    path: '/products',
    name: "products",
    component: products 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const apolloClient = new ApolloClient({
  link: createHttpLink({ uri: 'https://mintic-p5-g4-dw-apigateway.herokuapp.com/' }),
  cache: new InMemoryCache()
})

export default router
