export const IS_PRODUCTION = process.env.IS_PRODUCTION == '1';
export const IS_DEV = process.env.IS_DEV == '1';
export const IS_STAGING = process.env.IS_STAGING == '1';

export const SITE_URI = process.env.SITE_URI ?? '';

export const GA_TRACKING_ID = process.env.GA_TRACKING_ID ?? '';

export const REVALIDATE_SECRET_KEY = process.env.REVALIDATE_SECRET_KEY ?? '';

export const SUPABASE_URI = process.env.SUPABASE_URI ?? '';
export const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY ?? '';
