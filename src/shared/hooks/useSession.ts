import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase, supabase2 } from "../services/supabaseClient";

export function useSession() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async(_event, next) => {
      setSession(next);

      if (_event === "SIGNED_IN" && next?.user) {
        const email = next.user.email;
        console.log("Usuario ha iniciado sesión:", email);
        const userId = next.user.id;
        console.log("ID de usuario:", userId);
        await supabase2.from("profiles").upsert({ id: userId, email: email }, { onConflict: "id" });

      }

    });

    return () => subscription.unsubscribe();
  }, []);

  console.log(session?.user.email)

  return session;
}