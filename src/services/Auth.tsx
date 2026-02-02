import { supabase } from "../supabaseClient";

export const signUpNewUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error("sign-up failed: ", error);
    return { sucess: false, error };
  }

  return { success: true, data };
};

export const signInUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error("signin failed: ", error);
    return { success: false, error };
  }

  return { success: true, data };
};

export const signOutUser = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("signout failed: ", error);
  }
};
