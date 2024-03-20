"use server";
import createSupabaseServerClient from "@/lib/supabase";

export async function getBXH() {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("bxh_dbg")
      .select("*")
      .order("score", { ascending: false })
      .limit(10);
    if (error) {
      return { status: 400, data: error };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}

export async function addBXH(newScore:any) {
  try {
    const supabase = await createSupabaseServerClient();

    const { data, error } = await supabase
      .from("bxh_dbg")
      .insert([newScore])
      .select();
    if (error) {
      return { status: 400, data: error };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}
