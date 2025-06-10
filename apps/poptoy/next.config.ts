// eslint-disable-next-line @typescript-eslint/no-var-requires
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

module.exports = (phase: any) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environment variable
  const isDev =
    phase === PHASE_DEVELOPMENT_SERVER || process.env.ENVIRONMENT == 'dev';
  // when `next build` or `npm run build` is used
  const isProd =
    !isDev && phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

  return {
    env: {
      IS_PRODUCTION: `${isProd ? 1 : 0}`,
      IS_DEV: `${isDev ? 1 : 0}`,
      IS_STAGING: `${isStaging ? 1 : 0}`,
      SITE_URI: process.env.SITE_URI,
      REVALIDATE_SECRET_KEY: process.env.REVALIDATE_SECRET_KEY,
      GA_TRACKING_ID: process.env.GA_TRACKING_ID,
      SUPABASE_URI: process.env.SUPABASE_URI,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    },
    transpilePackages: ['@doldol-package/ui'],
    reactStrictMode: false,
    images: {
      // TODO: uri 수정
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'dev-file.pa1ette.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'prod-file.pa1ette.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'hanbee-file.s3.ap-northeast-2.amazonaws.com',
          port: '',
        },
      ],
      minimumCacheTTL: 5,
      disableStaticImages: true,
    },
    experimental: {
      largePageDataBytes: 600 * 1000, // 600KB // TODO: change to html
    },
  };
};
