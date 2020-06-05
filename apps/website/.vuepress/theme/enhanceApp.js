import * as Sentry from '@sentry/browser';
import { Vue as VueIntegration } from '@sentry/integrations';
import './styles/index.scss';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata,
  isServer,
}) => {
  if (!isServer) {
    import('./core');

    // Jeremy's Sentry for error tracking
    Sentry.init({
      dsn: 'https://3e41de8eb9e440d6b834fc556ad8e83c@o378402.ingest.sentry.io/5201749',
      integrations: [new VueIntegration({ Vue, attachProps: true })],
    });

    // Shijir's Sentry for error tracking
    Sentry.init({
      dsn: 'https://9731c6b554864f94ac614b04c68cc544@o405299.ingest.sentry.io/5270690',
      integrations: [new VueIntegration({ Vue, attachProps: true, logErrors: true })],
    });
  }
};
