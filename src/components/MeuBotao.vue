<template>
    <button :class="computedClass"><slot /></button>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from "vue";
  
  export default defineComponent({
    name: "MeuBotao",
    props: {
      primary: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    setup(props) {
      const computedClass = computed(() =>
        props.primary ? "btn-primary" : "btn-secondary"
      );
  
      return { computedClass };
    },
  });
  </script>
  
  <style>
  button {
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  .btn-primary {
    background-color: blue;
    color: white;
  }
  .btn-secondary {
    background-color: gray;
    color: black;
  }
  </style>
  