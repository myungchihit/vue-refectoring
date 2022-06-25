<template>
  <div>
    <p>
      <check-box v-model="checked"></check-box>
    </p>
    <p>
      <input-box v-model="inputVal"></input-box>
    </p>
  </div>
</template>

<script>
import CheckBox from './components/CheckBox.vue';
import InputBox from './components/inputBox.vue';

export default {
  components: {
    CheckBox,
    InputBox
  },
  data() {
    return {
      checked : false,
      inputVal : '',
    }
  }
}
</script>