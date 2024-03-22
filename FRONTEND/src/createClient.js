import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://topncziqjkmetgmydraj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvcG5jemlxamttZXRnbXlkcmFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwNzM1ODQsImV4cCI6MjAyNjY0OTU4NH0.i111qqP3LrclbRClcCr-RCRVSWOZLs1CeR0eSJHeeCk";

export const supabase = createClient(supabaseUrl, supabaseKey);



