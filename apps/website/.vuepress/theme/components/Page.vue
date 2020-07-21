<template>
  <main class="page">
    <slot name="top" />
    <PageSubnav v-bind="{ sidebarItems }" />

    <div class="nav-toc-container" cds-layout="p-t:sm p-b:sm display@md:none" v-if="shouldShowTOC">
      <nav class="nav-toc">
        <b class="title">Content</b>
        <TOC />
      </nav>
    </div>

    <Content class="theme-default-content" />
    <PageEdit />

    <!--    <PageNav v-bind="{ sidebarItems }" />-->

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
  max-width: 48rem;
  width: 100%;
  height: calc(100vh - 3rem);

  @media (min-width: 992px) {
    width: calc(100% - 10rem);
  }
}
.nav-toc-container {
  li {
    ul li {
      padding-top: var(--cds-token-space-size-4);
    }
  }
}
</style>
