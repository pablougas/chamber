<template>
  <vue-typer
    :text="text"
    :repeat='Infinity'
    :shuffle='false'
    initial-action='typing'
    :pre-type-delay='50'
    :type-delay='100'
    :pre-erase-delay='2000'
    :erase-delay='250'
    erase-style='clear'
    :erase-on-complete='false'
    caret-animation='blink'
  ></vue-typer>
</template>

<script>
export default {
  name: 'TypeWriter',
  props: ['text'],
};
</script>

<style>
  .vue-typer .custom.char.typed {
    color: #c1d82f;
  }
  .vue-typer .custom.caret {
    display: none;
  }
</style>
