import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://veketnqofareuwcaxnip.supabase.co";
const supabaseKey = "sb_publishable_C1Ee02bcNRu8zNhpaadhnw_xlnBAsyI";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);