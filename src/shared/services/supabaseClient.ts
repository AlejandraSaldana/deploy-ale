import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase no configurado: añade VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en .env para usar Watch Party y otras funciones."
  );
}

export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-key"
);

const supabaseUrl2 = import.meta.env.VITE_SUPABASE_URL2 ?? "";
const supabaseAnonKey2 = import.meta.env.VITE_SUPABASE_ANON_KEY2 ?? "";

export const supabase2 = createClient(
  supabaseUrl2 || "https://placeholder.supabase.co",
  supabaseAnonKey2 || "placeholder-key"
);