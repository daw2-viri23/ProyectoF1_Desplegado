import { createClient } from '@supabase/supabase-js';  
const supabaseUrl = 'https://bysymefmjzjanlxwckzx.supabase.co/'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5c3ltZWZtanpqYW5seHdja3p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4NzU3NTcsImV4cCI6MjAyNjQ1MTc1N30.4wgvCeh6Bw2NGJ2s918m4O5BoBlW25axIQ__jov8W6s';  
export const supabase = createClient(supabaseUrl, supabaseKey);