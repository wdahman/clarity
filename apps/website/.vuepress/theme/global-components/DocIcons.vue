<template>
  <div>
    <div class="searchbar-container">
      <div class="icon-search-wrapper">
        <label for="search-icons-sticky" class="searchbar-label">
          <cds-icon shape="search" size="20"></cds-icon> Search for an icon
        </label>
        <input ref="search" id="search-icons-sticky" type="text" class="searchbar-input" v-model="term" />
        <button
          aria-label="Clear search terms"
          type="button"
          class="close"
          :style="{ display: term ? 'inline-block' : 'none' }"
          @click="clear()"
        >
          <cds-icon shape="close" size="24"></cds-icon>
        </button>
        <div class="icon-preview-settings"></div>
      </div>
    </div>

    <template v-for="set in sets">
      <template v-if="set.shapes.length">
        <h3>{{ set.title }} Shapes</h3>
        <div class="clr-row">
          <DocIcon v-for="shape in set.shapes" :name="shape[0]"></DocIcon>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
import {
  chartCollectionIcons as chart,
  coreCollectionIcons as core,
  commerceCollectionIcons as commerce,
  essentialCollectionIcons as essential,
  mediaCollectionIcons as media,
  socialCollectionIcons as social,
  travelCollectionIcons as travel,
  textEditCollectionIcons as textEdit,
  technologyCollectionIcons as technology,
} from '@clr/core/icon-shapes';

function getIcons() {
  return [
    { title: 'Core', shapes: core },
    { title: 'Chart', shapes: chart },
    { title: 'Commerce', shapes: commerce },
    { title: 'Essential', shapes: essential },
    { title: 'Media', shapes: media },
    { title: 'Social', shapes: social },
    { title: 'Travel', shapes: travel },
    { title: 'Text Edit', shapes: textEdit },
    { title: 'Technology', shapes: technology },
  ];
}

export default {
  name: 'DocIcons',
  data: function () {
    return {
      term: '',
    };
  },
  computed: {
    sets: function () {
      const icons = getIcons();
      if (this.term) {
        return icons.map(set => {
          set.shapes = set.shapes.filter(shape => shape[0].indexOf(this.term) > -1);
          return set;
        });
      } else {
        return icons;
      }
    },
  },
  methods: {
    clear: function () {
      this.term = '';
      this.$refs.search.focus();
    },
  },
};
</script>

<style scoped lang="scss">
.icon-search-wrapper {
  display: grid;
  grid-template-columns: 160px auto 36px;

  .searchbar-label {
    line-height: 36px;
  }

  input {
    border: 1px solid #999;
    background: #fff;
    padding: 5px 10px;
    border-radius: 4px;
  }
}
</style>
