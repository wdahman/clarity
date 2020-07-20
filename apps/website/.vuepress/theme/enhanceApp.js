import * as Sentry from '@sentry/browser';
import { Vue as VueIntegration } from '@sentry/integrations';
import VueResource from 'vue-resource';
import { scrollToGuard } from './util/route-guards';

import './styles/index.scss';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata,
  isServer,
}) => {
  Vue.use(VueResource);

  if (!isServer) {
    import('./core');

    Sentry.init({
      dsn: 'https://3e41de8eb9e440d6b834fc556ad8e83c@o378402.ingest.sentry.io/5201749',
      integrations: [new VueIntegration({ Vue, attachProps: true, logErrors: true })],
    });

    router.afterEach((to, from) => {
      // ...
      // console.log('afterEach');
      // console.log('from: ', to, 'to: ', from);
      // console.log(`from: ${from} to: ${to}`);

      // if(from.fullPath === to.fullPath && )
      if (scrollToGuard(from, to)) {
        console.log('HANDLE SCROLLING!!!!!');
        // document
        //   .getElementById(to.hash.substring(1))
        //   .scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        // console.log('afterEach running');
      }
    });

    // router.beforeEach((to, from, next) => {
    //   // ...
    //   console.log(`to: ${to} and from ${from}`);
    // })
  }
  // console.log(this.$router);
  // // need to wait until everything is rendered or it doesnt scroll to correct element.
  // document.onreadystatechange = () => {
  //   if (document.readyState == 'complete' && this.$router.history.current.hash) {
  //     document
  //       .getElementById(this.$router.history.current.hash.substring(1))
  //       .scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  //   }
  // };
};
