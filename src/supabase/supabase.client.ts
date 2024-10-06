import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

const SUPABASE_URL = "https://ifebbbxnprxmzlzdcfua.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmZWJiYnhucHJ4bXpsemRjZnVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwMjI5MjYsImV4cCI6MjA0MzU5ODkyNn0.IXPcy4TP_40FFB6nJrVb-CeIoNFQIvEZseMfM-z8m0k";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
