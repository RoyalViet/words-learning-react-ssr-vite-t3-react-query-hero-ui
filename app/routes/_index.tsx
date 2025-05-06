import { redirect } from "react-router";

// homepage just redirect to first book
export const loader = async () => {
  return redirect(`/Oxford-5000-words/words`);
};
