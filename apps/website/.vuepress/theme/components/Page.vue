<template>
  <main class="page" style="height: calc(100vh - 3rem);">
    <slot name="top" />
    <PageSubnav v-bind="{ sidebarItems }" />
    <TOC cds-layout="display@lg:none" />
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
};
</script>

<style lang="scss">
.page {
  max-width: 50rem;
}
</style>
