<style>
.need-style-fix > a {
  color: #fff !important;
}
</style>
<template>
  <!--  <div class="home-wrapper">-->
  <main class="page-home">
    <div class="section-wrapper" cds-layout="vertical gap:md gap@sm:xxl">
      <!-- Hero -->
      <section class="home-hero" cds-layout="vertical align:horizontal-center">
        <h1 cds-text="display center semibold" cds-layout="m-t:x">Design + Build with Clarity</h1>
        <h2 cds-text="title center" cds-layout="m-t:xl m-x@sm:sm">
          Clarity is an open source design system that brings together UX guidelines, an HTML/CSS framework, and Angular
          components. Clarity is for both designers and developers.
        </h2>
        <cds-button cds-layout="m-t:xl">Get Started</cds-button>
        <img aria-hidden="true" cds-layout="m-t:xl container:fill" src="/images/home/img-hero.svg" />
      </section>
      <!-- image spacer -->
      <section class="hero-spacer" cds-layout="horizontal align:horizontal-stretch m-t:none">
        <img cds-layout="container:fill" aria-hidden="true" src="/images/home/bg-graphic1-fullwidth.svg" alt="" />
      </section>
      <!-- whats new -->
      <section class="whats-new" cds-layout="grid gap:sm">
        <div cds-layout="col:start-2 col:10">
          <h3 cds-text="heading" cds-layout="m-b:xl">What's New</h3>
          <WhatsNew version="latest" />
        </div>
        <div cds-layout="col:12">
          <div cds-layout="grid cols:auto align:horizontal-center">
            <cds-button class="btn-link" action="outline" cds-layout="m-t:xl m-b:sm m-b:md">
              <a href="/releases/v4">View Details</a>
            </cds-button>
          </div>
        </div>
      </section>
      <!-- spacer image -->
      <section class="section-spacer" cds-layout="m:none">
        <img cds-layout="container:fill" aria-hidden="true" src="/images/home/bg-graphic2-L-align.svg" />
      </section>
      <!-- design+dev section -->
      <section>
        <h3 cds-text="title center" cds-layout="m-b:xl">Build inclusive and intuitive products with Clarity</h3>
        <div cds-layout="grid cols@sm:8 cols@xs:12">
          <div cds-layout="col@sm:start-3">
            <div cds-layout="m-t:xl grid gap:sm cols@sm:6 cols@xs:12 ">
              <div class="image-cell" cds-layout="horizontal align:right">
                <img cds-layout="container:fill" src="/images/home/img-design-dev.svg" aria-hidden="true" />
              </div>
              <div class="content-cell" cds-layout="vertical gap:sm align:center m@xs:xs">
                <h4 cds-text="section" cds-layout="p-b:lg">Design + Development</h4>
                <p class="section-block" cds-text="body">
                  Clarity is designed and built by working directly within product teams. We do this to enable
                  developers and designers to deliver the best experience possible to their end users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- a11y section -->
      <section>
        <div cds-layout="grid cols@sm:8 cols@xs:12">
          <div cds-layout="col@sm:start-3">
            <div cds-layout="grid gap:sm cols@sm:6 cols@xs:12 ">
              <div class="content-cell" cds-layout="vertical gap:sm align:center m@xs:xs">
                <h4 cds-text="section" cds-layout="p-b:lg">Fully Accessible</h4>
                <p class="section-block" cds-text="body">
                  We are continually investing heavily in the accessibility of Clarity. We do this to set a foundation
                  for your application to be used by all users.
                </p>
              </div>
              <div class="image-cell" cds-layout="horizontal align:right">
                <img cds-layout="container:fill" src="/images/home/img-accessibility.svg" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- enterprise section -->
      <section>
        <div cds-layout="grid cols@sm:8 cols@xs:12">
          <div cds-layout="col@sm:start-3">
            <div cds-layout="grid gap:sm cols@sm:6 cols@xs:12 ">
              <div class="image-cell" cds-layout="horizontal align:right">
                <img cds-layout="container:fill" src="/images/home/img-enterprise-ready.svg" aria-hidden="true" />
              </div>
              <div class="content-cell" cds-layout="vertical gap:sm align:center m@xs:xs">
                <h4 cds-text="section" cds-layout="p-b:lg">Enterprise Ready</h4>
                <p class="section-block" cds-text="body">
                  Clarity is robust, designed at scale, and high-performance. As we use Clarity within VMware, we’re
                  building products that most of the Fortune 500 use. Clarity is at the core of VMware’s software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- open source section -->
      <section>
        <div cds-layout="grid cols@sm:8 cols@xs:12">
          <div cds-layout="col@sm:start-3">
            <div cds-layout="grid gap:sm cols@sm:6 cols@xs:12 ">
              <div class="content-cell" cds-layout="vertical gap:sm align:center m@xs:xs">
                <h4 cds-text="section" cds-layout="p-b:lg">Open Source</h4>
                <p class="section-block" cds-text="body">
                  We are continually investing heavily in the accessibility of Clarity. We do this to set a foundation
                  for your application to be used by all users.
                </p>
              </div>
              <div class="image-cell" cds-layout="horizontal align:right">
                <img cds-layout="container:fill" src="/images/home/img-open-source.svg" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- resources section -->
      <section>
        <div cds-layout="grid cols@sm:8 cols@xs:12">
          <div cds-layout="col@sm:start-3">
            <div cds-layout="m-y:xl grid gap:sm cols@sm:6 cols@xs:12">
              <div class="image-cell" cds-layout="m-b:xxl m-b@xs:none horizontal align:left">
                <img cds-layout="container:fill" src="/images/home/img-pr-components.svg" aria-hidden="true" />
                <h4 cds-text="title" cds-layout="m-t:lg">Components</h4>
                <p cds-text="body" cds-layout="m-t:md">
                  Access UX guidelines and developer documentation for interactive components.
                </p>
              </div>
              <div class="image-cell" cds-layout="horizontal align:left m-t@xs:sm m-t@sm:none">
                <img cds-layout="container:fill" src="/images/home/img-pr-icons.svg" aria-hidden="true" />
                <h4 cds-text="title left" cds-layout="m-t:lg">Icons</h4>
                <p cds-text="body" cds-layout="m-t:md">
                  Over 380 flexible and easy to use SVG icons, complete with variations to meet your design needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section cds-layout="m-l:lg m-b:lg">
      <Footer></Footer>
    </section>
  </main>
  <!--  </div>-->
</template>

<style>
.content-cell,
image-cell {
  height: 100%;
}

.page-home {
  max-width: 960px;
}
</style>

<script>
import Footer from '@theme/components/Footer';
export default {
  components: { Footer },
  name: 'Home',

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    currentSeason() {
      const now = new Date();
      const currentYear = now.getFullYear();
      let season = 'winter';

      if (now < new Date(currentYear, 2, 1)) {
        season = 'winter'; // Jan 1 - Mar 1
      } else if (now < new Date(currentYear, 5, 1)) {
        season = 'spring'; // Mar 1 - Jun 1
      } else if (now < new Date(currentYear, 8, 1)) {
        season = 'summer'; // Jun 1 - Sep 1
      } else if (now < new Date(currentYear, 11, 1)) {
        season = 'autumn'; // Sep 1 - Dec 1
      }

      return `bg-img-${season}`;
    },
  },
};
</script>
