<template>
  <div>
    <div class="clr-form-control">
      <label class="clr-control-label">Preview colors in: </label>
      <div class="clr-control-container clr-control-inline">
        <div class="clr-radio-wrapper">
          <input type="radio" :id="'hsl-radio-' + listSetId" value="hsl" class="clr-radio" v-model="picked" />
          <label :for="'hsl-radio-' + listSetId" class="clr-control-label">HSL</label>
        </div>
        <div class="clr-radio-wrapper">
          <input type="radio" :id="'hex-radio-' + listSetId" value="hex" class="clr-radio" v-model="picked" />
          <label :for="'hex-radio-' + listSetId" class="clr-control-label">HEX</label>
        </div>
      </div>
    </div>
    <ClrRow>
      <ClrColorList v-for="colorListData in colorListSet" :colorCode="picked" :colorData="colorListData"></ClrColorList>
    </ClrRow>
  </div>
</template>

<script>
export default {
  name: 'ClrColorListSet',
  props: {
    colorListSet: Object,
  },
  computed: {
    listSetId: function () {
      return 'list-set-id-' + this._uid;
    },
  },
  data: function () {
    return {
      picked: 'hsl',
    };
  },
};
</script>

<style lang="scss" scoped>
.clr-form-control {
  flex-direction: row;
  & > .clr-control-label {
    line-height: unset;
    margin-right: 0.5rem;
  }
}
</style>
