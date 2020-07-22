<template>
  <div class="main-container" @touchstart="onTouchStart" @touchend="onTouchEnd" cds-layout="vertical align:stretch">
    <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" />

    <div class="content-container" cds-layout="horizontal align:vertical-stretch no-wrap">
      <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar" class="side-nav has-y-scroll" cds-layout="">
        <template #top>
          <slot name="sidebar-top" />
        </template>
        <template #bottom>
          <slot name="sidebar-bottom" />
        </template>
      </Sidebar>
      <div class="content-area" cds-layout="pl@sm:md">
        <Home v-if="$page.frontmatter.home" class="make-it-scrollable" />
        <div class="page-wrapper" v-else>
          <Page id="content-area" :sidebar-items="sidebarItems">
            <template #top>
              <slot name="page-top" />
            </template>
            <template #nav-toc>
              <NavToc v-if="shouldShowTOC" cds-layout="p-t:sm p-b:sm display@md:none" />
            </template>
            <template #bottom>
              <slot name="page-bottom" />
            </template>
          </Page>
          <NavToc :sticky="true" v-if="shouldShowTOC" cds-layout="p@md:lg display:none display@md:block" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.page-wrapper {
  display: flex;
  max-width: 60rem;
  flex-direction: row;
}
.content-area {
  display: flex;
  flex-direction: column;
}
</style>

<script>
import Home from '@theme/components/Home';
import Navbar from '@theme/components/Navbar';
import NavToc from '@theme/components/NavToc';
import Page from '@theme/components/Page';
import Sidebar from '@theme/components/Sidebar';
import Footer from '@theme/components/Footer';
import { resolveSidebarItems } from '../util';

export default {
  name: 'Layout',

  components: {
    Home,
    Page,
    Sidebar,
    Navbar,
    NavToc,
    Footer,
  },

  data() {
    return {
      isSidebarOpen: false,
      year: new Date().getFullYear(),
    };
  },

  computed: {
    shouldShowTOC() {
      return this.$frontmatter.toc ? true : false;
    },
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return this.$title || themeConfig.logo || themeConfig.repo || themeConfig.nav || this.$themeLocaleConfig.nav;
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return !frontmatter.home && frontmatter.sidebar !== false && this.sidebarItems.length;
    },

    sidebarItems() {
      return resolveSidebarItems(this.$page, this.$page.regularPath, this.$site, this.$localePath);
    },
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
    });
  },

  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen;
      this.$emit('toggle-sidebar', this.isSidebarOpen);
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      };
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    },
  },
};
</script>
