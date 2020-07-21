<template>
  <main class="page" style="height: calc(100vh - 3rem);">
    <slot name="top" />
    <PageSubnav v-bind="{ sidebarItems }" />

    <nav class="nav-table-of-contents" v-if="shouldShowTOC" cds-layout="p:sm p@md:md display@md:none">
      <b class="title">Content</b>
      <TOC />
    </nav>

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />

    <Footer></Footer>
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit';
import PageNav from '@theme/components/PageNav';
import PageSubnav from '@theme/components/PageSubnav';
import Footer from '@theme/components/Footer';

export default {
  components: { Footer, PageEdit, PageNav, PageSubnav },
  props: ['sidebarItems'],
  computed: {
    shouldShowTOC() {
      return this.$frontmatter.toc ? true : false;
    },
  },
};
</script>

<style lang="scss">
.page {
  max-width: 50rem;
}
.nav-table-of-contents {
  li {
    ul li {
      padding-top: 0.3rem;
    }
  }
}
</style>
