<template>
  <div class="pj-form-item">
    <label class="pj-form-item__label" :style="labelStyle">{{label}}</label>
    <div class="pj-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PjFormItem',
  props: {
    label: String
  },
  inject: ['Form'],
  computed: {
    labelStyle () {
      return {
        width: this.Form.labelWidth
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pj-form-item {
  margin-bottom: 25px;
  &__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  &__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
