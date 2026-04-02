import { createClient } from '@supabase/supabase-js';

// Fallback values prevent createClient() from throwing during Vercel build when
// env vars haven't been set yet. Actual requests will fail gracefully and pages
// will render from their static fallback data instead.
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://placeholder.supabase.co';
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Database types
export type Catch = {
  id: string;
  created_at: string;
  image_url: string;
  fish_species: string;
  weight?: string;
  length?: string;
  angler_name: string;
  catch_date: string;
  tour_type?: string;
  lure_used?: string;
  location?: string;
  featured: boolean;
  published: boolean;
};

export type Tour = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  short_description?: string;
  duration?: string;
  price_range?: string;
  starting_price?: number;
  max_people?: number;
  included_items?: string[];
  target_fish?: string[];
  image_url?: string;
  gallery_images?: string[];
  featured: boolean;
  available: boolean;
  sort_order: number;
};

export type Lure = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  weight?: string;
  length?: string;
  hook_size?: string;
  target_fish?: string[];
  colors?: string[];
  image_url?: string;
  gallery_images?: string[];
  viewer_360_url?: string;
  available: boolean;
  featured: boolean;
  sort_order: number;
};

export type Testimonial = {
  id: string;
  client_name: string;
  quote: string;
  rating?: number;
  catch_date?: string;
  image_url?: string;
  tour_type?: string;
  featured: boolean;
};

export type Inquiry = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  tour_interest?: string;
  preferred_date?: string;
  num_people?: number;
};