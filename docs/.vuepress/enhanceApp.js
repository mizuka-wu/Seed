import '@babel/polyfill';
import 'core-js/es/object/from-entries';
import Element from "element-ui";
import VueClipboard from "vue-clipboard2";
import "element-ui/lib/theme-chalk/index.css";
import Seed from "seed-toolkit/packages/index";

export default ({ Vue }) => {
  VueClipboard.config.autoSetContainer = true;

  Vue.use(Seed);
  Vue.use(Element);
  Vue.use(VueClipboard);
};
