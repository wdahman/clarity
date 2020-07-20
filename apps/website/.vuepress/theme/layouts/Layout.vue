<template>
  <div @touchstart="onTouchStart" @touchend="onTouchEnd" cds-layout="vertical align:stretch">
    <!-- Comment out following to use debugger -->
    <!--    <script src="http://localhost:8098"></script>-->
    <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" cds-layout="p:sm p@md:md" />

    <div class="page-block" cds-layout="horizontal align:stretch">
      <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
        <template #top>
          <slot name="sidebar-top" />
        </template>
        <template #bottom>
          <slot name="sidebar-bottom" />
        </template>
      </Sidebar>

      <div cds-layout="horizontal align:stretch" class="page-wrapper">
        <div cds-layout="align:stretch">
          <main>
            <Home v-if="$page.frontmatter.home" />

            <Page v-else :sidebar-items="sidebarItems">
              <template #top>
                <slot name="page-top" />
              </template>
              <template #bottom>
                <slot name="page-bottom" />
              </template>
            </Page>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.content-area {
  display: flex;
  flex-direction: column;
}
</style>

<script>
import Home from '@theme/components/Home';
import Navbar from '@theme/components/Navbar';
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
