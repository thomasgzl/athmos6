import { defineComponent, defineAsyncComponent } from 'vue';

const HomeLogo = defineAsyncComponent(() => import(/* webpackChunkName: "components_home-logo" */
  '@/components/home-logo/home-logo.vue'));

export default defineComponent({
  name: 'HomePage',
  components: { HomeLogo },
  props: {},
  data() { return {} },
  computed: {},
  created: function() {},
  mounted: function() {},
  beforeUnmount: function() { /* clean all non-Vue listeners/objects */ },
  methods: {}
});
