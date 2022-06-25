<template>
  <input type="text" :value="value" @change="onChange"/>
</template>

<script>
export default {
    props: ['value'],
    methods: {
        onChange(event) {
            this.$emit('input', event.target.value);
        }
    }
}
</script>

<style>

</style>