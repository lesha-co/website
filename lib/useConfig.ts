import { useLocalizedObject } from "./localized";
import config from "../app/config";
import { useLanguage } from "./geolocation";
export async function useConfig() {
  const localization = await useLanguage();
  return useLocalizedObject(config, localization);
}
