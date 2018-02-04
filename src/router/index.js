import singerList from "../components/singerList.vue";
import playList from "../components/playList.vue";

export default [
  {
    path: '/playList/',
    name:'playList',
    component: playList
  },
  {
    path: '/singerList/',
    name:'singerList',
    component: singerList
  } 
]

