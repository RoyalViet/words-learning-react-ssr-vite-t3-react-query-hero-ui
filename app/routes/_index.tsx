import { redirect } from "react-router";

// homepage just redirect to first book
export const loader = async () => {
  return redirect(`/oxford-idioms-and-phrasal-verbs-advanced/words`);
};
