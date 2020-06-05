<template>
  <ClrColorListSet :colorListSet="colorListSetData"></ClrColorListSet>
</template>

<script>
import functionalColorsSet from '../../../data/functional-colors-light.json';

export default {
  name: 'ClrColorsFunctional',
  computed: {
    colorListSetData: function () {
      return functionalColorsSet;
    },
  },
};
</script>
