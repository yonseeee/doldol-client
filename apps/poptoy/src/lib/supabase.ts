import { createClient } from '@supabase/supabase-js';
import { SUPABASE_ANON_KEY, SUPABASE_URI } from './config/env';

export const supabase = createClient(SUPABASE_URI, SUPABASE_ANON_KEY);
