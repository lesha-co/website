import { useCV } from "@/lib/useCV";

export const Status = async () => {
  const cv = await useCV();
  return <p>{cv.status}</p>;
};
