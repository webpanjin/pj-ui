<template>
  <div class="xcw-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XcwCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style>

</style>
