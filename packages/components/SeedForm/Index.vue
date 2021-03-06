<template>
  <el-form
    class="seed-container"
    ref="form"
    :model="model"
    :inline="inline"
    :rules="rules"
    v-if="form"
  >
    <el-form-item
      :key="seed.key"
      :prop="seed.key"
      v-for="(seed, index) of tableSeeds"
      :label="seed.label || seed.key"
    >
      <Render
        :slots="$scopedSlots"
        :seed="seed"
        :scope="{ model, index }"
        :form.sync="form"
      />
    </el-form-item>
    <el-form-item>
      <slot :ref="$refs.form" :form="model" :immutableForm="form"></slot>
    </el-form-item>
  </el-form>
</template>

<script>
import Immutable from "immutable";
import debounce from "lodash/debounce";
import Render from "./render/Index.vue";

export default {
  name: "SeedForm",
  components: {
    Render
  },
  props: {
    seeds: {
      type: Array
    },
    inline: {
      type: Boolean,
      default: false
    },
    defaultForm: {
      type: Object
    }
  },
  data() {
    const { defaultForm } = this;
    const form = Immutable.fromJS(defaultForm || {});
    return {
      isUpdating: false,
      form,
      tableSeeds: [...this.seeds],
      // eslint-disable-next-line
      _formCache: form // form的缓存，不需要vue遍历
    };
  },
  computed: {
    rules() {
      return this.seeds.reduce((rules, seed) => {
        const { key, label, options = {} } = seed;
        const customerRules = options.rules;
        let _rules = [
          options.required
            ? {
                required: true,
                message: `${label || key}字段 必填！`,
                trigger: "blur"
              }
            : null
        ];

        if (Array.isArray(customerRules)) {
          _rules = [..._rules, ...customerRules];
        } else {
          _rules = [..._rules, customerRules];
        }

        rules[key] = _rules.filter(item => !!item);
        return rules;
      }, {});
    },
    // 模型，方便验证
    model: ({ form }) => form.toJS()
  },
  methods: {
    update: debounce(function(form) {
      Promise.all(
        this.seeds.map(({ show, key }) => {
          if (typeof show === "function") {
            return Promise.resolve(show(form.toJS()));
          } else {
            return Promise.resolve(key);
          }
        })
      )
        .then(keys => {
          this.tableSeeds = this.seeds.filter(({ key }) => keys.includes(key));
        })
        .catch(e => {
          // eslint-disable-next-line
          console.error(e)
          this.tableSeeds = [...this.seeds];
        });
      const { $data } = this;
      this.$emit("endUpdate", form.toJS(), $data._formCache.toJS());
      $data._formCache = form;
    }, 500),
    validate() {
      const form = this.$refs.form;
      return form.validate();
    }
  },
  watch: {
    form(form) {
      this.update(form);
      if (this.isUpdating) {
        return;
      }
      this.isUpdating = true;
      this.$emit("startUpdate");
    }
  }
};
</script>
<style lang="stylus" scoped>
.seed-container
  width 100%
</style>
