import { useLocalizedObject } from "./localized";
import cvconfig from "../app/cvconfig";
import { useLanguage } from "./geolocation";
export async function useCV() {
  const localization = await useLanguage();
  return useLocalizedObject(cvconfig, localization);
}
