import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const supabase = createClient(
  "https://tfrfplrwjiwyfwknokxp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmcmZwbHJ3aml3eWZ3a25va3hwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzMzI3NzIsImV4cCI6MjAzNzkwODc3Mn0.a0LxUs0JR-7sLnkjK4y61z_7YWMlD3HSp0sAiiD9nlI"
);
export default function SupAuth() {
  return (
    <div className="App">
      <header className="App-header">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={["discord"]}
        />
      </header>
    </div>
  );
}
