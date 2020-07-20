<template>
  <main class="page" cds-layout="horizontal align:stretch no-wrap">
    <!--  <main class="page" cds-layout="horizontal align:horizontal-stretch no-wrap">-->
    <div class="page-content">
      <slot name="top" />
      <PageSubnav v-bind="{ sidebarItems }" />

      <Content />
      <PageEdit />

      <PageNav v-bind="{ sidebarItems }" />

      <slot name="bottom" />
    </div>
    <nav class="nav-table-of-contents" v-if="shouldShowTOC">
      <b class="title">Content</b>
      <TOC />
    </nav>
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit';
import PageNav from '@theme/components/PageNav';
import PageSubnav from '@theme/components/PageSubnav';

export default {
  components: { PageEdit, PageNav, PageSubnav },
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
  width: min-content;
  flex-wrap: nowrap;
}
.nav-table-of-contents {
  margin-top: 3rem;
  padding-left: 1.5rem;
  width: 10rem;
  min-width: 10rem;
  max-width: 10rem;
  overflow-y: auto;

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
      padding-left: 6px;
      display: inline-block;
    }
  }
  li a.router-link-active {
    padding-left: 4px;
    border-left: 2px solid #0f5e80;
  }
  li li {
    padding-top: 0;
  }
  li li a {
    padding-left: 16px;
  }
  li li a.router-link-active {
    padding-left: 14px;
  }
}
</style>
