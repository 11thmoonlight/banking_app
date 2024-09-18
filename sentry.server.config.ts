import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://af634b5d41bda6040fd5d96b7d499a61@o4507964661628928.ingest.de.sentry.io/4507964699115600",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
