import { defineComponent, defineAsyncComponent } from 'vue';

  const Header = defineAsyncComponent(() => import(/* webpackChunkName: "components_header" */
  '@/components/header/header.vue'));
  const HomePage = defineAsyncComponent(() => import(/* webpackChunkName: "views_home-page" */
  '@/views/home-page/home-page.vue'));


export default defineComponent({
  name: 'App',
  components: { Header, HomePage },
  props: {},
  data() { 
    return { };
},
  computed: {},
  watch: {},
  created: function() { },
  mounted: function() {},
  beforeUnmount: function() { /* clean all non-Vue listeners/objects */ },
  methods: {}
});
