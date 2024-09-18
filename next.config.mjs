/** @type {import('next').NextConfig} */
const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {};

module.exports = withSentryConfig(nextConfig, {
  org: "aida-9s",
  project: "javascript-nextjs",
  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: false,
});

export default nextConfig;
