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
            <template #bottom>
              <slot name="page-bottom" />
            </template>
          </Page>
          <div
            class="nav-toc-container has-sticky-nav-toc"
            cds-layout="p@md:lg display:none display@md:block"
            v-if="shouldShowTOC"
          >
            <nav class="nav-toc">
              <b class="title">Content</b>
              <TOC />
            </nav>
          </div>
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
.nav-toc-container {
  position: relative;
  max-width: 12rem;
  width: 100%;

  &.has-sticky-nav-toc {
    height: calc(100vh - 8.1rem);
    .nav-toc {
      position: fixed;
      top: 8.1rem;
      max-height: calc(100vh - 3rem);
      overflow-y: auto;
      padding-bottom: 8.1rem;
      padding-left: 0.15rem;
      max-width: inherit;
    }
  }

  .title {
    padding-left: 6px;
    text-transform: uppercase;
  }

  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
    padding-top: 0.5rem;
    a {
      padding-left: var(--cds-token-space-size-4);
      display: inline-block;
      &:hover {
        text-decoration: none;
      }
    }
  }
  li a.router-link-active {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: -3px;
      width: 3px;
      height: 100%;
      background-color: #0079b8;
    }
  }
  li li {
    padding-top: 0;
    a {
      padding-left: var(--cds-token-space-size-8);
    }
  }
}

/* cds-alert-actions {
display: block;
} */

/*header {*/
/*  background-color: deeppink;*/
/*  max-height: 4rem;*/
/*}*/
/*nav {*/
/*  background-color: deepskyblue;*/
/*  max-width: 20%;*/
/*  max-height: calc(100vh - 4em);*/
/*  overflow: scroll;*/
/*}*/

/*main {*/
/*  background-color: cadetblue;*/
/*}*/
/*aside {*/
/*  background-color: blanchedalmond;*/
/*  max-width: 20%;*/
/*  max-height: calc(100vh - 4em);*/
/*  overflow: scroll;*/
/*}*/
/*footer {*/
/*  background-color: lavender;*/
/*  max-height: 4rem;*/
/*}*/
/*.app-container {*/
/*  height: 100vh;*/
/*}*/

/*.super-tall {*/
/*  height: 150vh;*/
/*}*/

/*.main-footer {*/
/*  overflow: scroll;*/
/*  max-height: calc(100vh - 4em);*/
/*  max-width: 1000px;*/
/*}*/

/*.demo-content {*/
/*  background-color: lightblue;*/
/*}*/

/*.demo-content {*/
/*  background-color: tan;*/
/*}*/
/*.demo-sidebar {*/
/*  background-color: antiquewhite*/
/*}*/
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
