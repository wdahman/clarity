<template>
  <div class="demo-container" :id="id">
    <div class="demo-wrapper" v-if="demoHTML">
      <span v-html="demoHTML"></span>
    </div>
    <div class="code-wrapper" :class="{ expanded: state }">
      <button class="btn btn-primary btn-sm toggle-button" @click="toggleState()" v-if="showToggle">
        <cds-icon v-bind:shape="state ? 'resize-down' : 'resize-up'"></cds-icon>
      </button>
      <div
        class="code"
        v-bind:aria-expanded="state ? 'true' : 'false'"
        v-bind:style="{ height: this.getHeight() }"
        ref="code-snippet"
      >
        <pre v-if="codeHTML" :class="'language' + prismLang"><code v-html="codeHTML"></code></pre>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs';

const COLLAPSED_HEIGHT = 75;

export default {
  name: 'DocDemo',
  props: {
    id: String,
    src: String,
    demo: String,
    toggle: { type: Boolean | String, default: true },
    file: String | { file: String, lang: { type: String, default: 'html' } },
  },
  mounted: function () {
    if (this.file) {
      this.src = this.file;
      this.demo = this.file;
    }
    if (this.src) {
      this.$http.get(this.src).then(result => {
        this.codeHTML = Prism.highlight(result.bodyText.trim(), Prism.languages[this.prismLang], this.prismLang);
      });
    }
    if (this.demo) {
      this.$http.get(this.demo).then(result => {
        this.demoHTML = result.bodyText.trim();
      });
    }
    if (!this.toggle || (typeof this.toggle === 'string' && this.toggle.toLowerCase().trim() == 'false')) {
      this.state = true;
      this.showToggle = false;
    }
  },
  data: function () {
    return {
      showToggle: true,
      demoHTML: '',
      codeHTML: '',
      state: false,
      prismLang: this.getLanguage(this.src),
    };
  },
  methods: {
    toggleState: function () {
      this.state = !this.state;
    },
    getHeight: function () {
      if (!this.showToggle) {
        return;
      }
      if (this.state) {
        return this.$refs['code-snippet'].querySelector('pre').offsetHeight + 'px';
      } else {
        return COLLAPSED_HEIGHT + 'px';
      }
    },
    getLanguage: function (src) {
      if (src) {
        const ext = src.split('.').pop();
        if (ext === 'ts' || ext === 'js' || ext === 'json') {
          return 'javascript';
        } else if (ext === 'css' || ext === 'scss') {
          return 'css';
        } else {
          return 'html';
        }
      }
    },
  },
};
</script>

<style lang="scss">
.demo-container {
  margin: 0.6rem 0;
  padding: 0.6rem 0;
}
.demo-wrapper {
  margin-bottom: 1.2rem;
}
.code-wrapper {
  position: relative;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 0.15rem;

  &.expanded:after {
    display: none;
  }

  &:after {
    content: '';

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.85));
    z-index: 0;

    display: block;
  }

  .toggle-button {
    position: absolute;
    right: 0;
    top: 0;
    color: inherit;
    margin: 0;
    padding: 0;
    outline: none 0;
    box-shadow: none;
    background: #dedede;

    width: 1.8rem;
    height: 1.2rem;
    min-width: 1.8rem;

    border: none;
    border-radius: 0;
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-bottom-left-radius: 0.15rem;

    z-index: 1;

    &:hover {
      background: #ccc;
      color: inherit;
    }
    &:active {
      box-shadow: none;
    }
  }

  .code {
    transition: height 0.3s ease-in-out;
    position: relative;
    overflow: hidden;
    pre {
      margin: 0;
      padding: 0;
      border: none;
      background: none;
    }
  }
}
</style>
