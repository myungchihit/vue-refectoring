<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    // validation 문법.
    title: String,
  }
}
</script>