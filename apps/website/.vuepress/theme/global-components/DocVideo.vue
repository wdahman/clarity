<template>
  <div class="video-wrapper" :class="{ 'in-pause': !autoplay && !playing }" @click="toggleVideo()">
    <div class="video-overlay" v-if="!autoplay">
      <cds-icon
        v-bind:shape="playing ? 'pause' : 'play'"
        class="video-control-icon is-solid is-inverse"
        size="72"
      ></cds-icon>
    </div>
    <video ref="video" v-bind:width="width" v-bind:autoplay="autoplay ? 'autoplay' : null" loop muted>
      <source v-bind:src="src" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: 'DocVideo',
  props: {
    src: String,
    autoplay: Boolean,
    width: Number,
  },
  data: function () {
    return {
      playing: null,
    };
  },
  methods: {
    toggleVideo: function () {
      if (this.autoplay) return;
      if (this.playing) {
        this.$refs.video.pause();
      } else {
        this.$refs.video.play();
      }
      this.playing = !this.playing;
    },
  },
};
</script>

<style lang="scss" scoped>
.video-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 1.8rem 0.6rem;
  margin: 1.2rem 0;
  border-radius: 0.15rem;
  box-shadow: inset 0 0 0.6rem 0rem #e4e4e4;
  overflow: hidden;
  cursor: pointer;

  .video-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }

  &.in-pause .video-overlay {
    opacity: 1;
  }

  &:hover .video-overlay {
    opacity: 1;
  }
}
</style>
