// import { createClient } from "@supabase/supabase-js";

// const bucket = "main-bucket";
// export const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

import { createClient } from "@supabase/supabase-js";

const bucket = "main-bucket";

export function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export const uploadImage = async (image: File) => {
  const supabase = getSupabase();
  const timestamp = Date.now();
  const newName = `${timestamp}-${image.name}`;
  const { data } = await supabase.storage
    .from(bucket)
    .upload(newName, image, { cacheControl: "3600" });
  if (!data) throw new Error("Image Upload failed!!!");
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};

export const deleteImage = (url: string) => {
  const supabase = getSupabase();
  const imageName = url.split("/").pop();
  if (!imageName) throw new Error("Invalid Url");
  return supabase.storage.from(bucket).remove([imageName]);
};
