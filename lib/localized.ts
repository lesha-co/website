import React from "react";

import { useLanguage } from "./geolocation";
import { localizations } from "./localizations";

function getString(text: LocalizedString, localization: Localization) {
  if (typeof text === "string") return text;
  return text[localization];
}

function isLocalizedString(x: any): x is LocalizedString {
  if (typeof x === "string") return true;
  return (
    typeof x === "object" &&
    localizations.every((loc) => typeof x[loc] === "string")
  );
}

export const localized = async (text: LocalizedString) => {
  const lang = await useLanguage();
  return getString(text, lang);
};

function isObjectWithKeysAndValues(value: any) {
  return (
    value !== null &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    Object.keys(value).length > 0
  );
}

export function useLocalizedObject<T>(
  obj: T,
  localization: Localization
): LocalizedObject<T> {
  const newObj: any = {};
  if (typeof obj === "string") return obj as LocalizedObject<T>;
  for (const key in obj) {
    const value = obj[key];
    if (isLocalizedString(value)) {
      newObj[key] = getString(value, localization);
    } else if (React.isValidElement(value)) {
      newObj[key] = value;
    } else if (isObjectWithKeysAndValues(value)) {
      newObj[key] = useLocalizedObject(value, localization);
    } else if (Array.isArray(value)) {
      newObj[key] = value.map((item) => useLocalizedObject(item, localization));
    } else {
      newObj[key] = value;
    }
  }

  return newObj as LocalizedObject<T>;
}

type x = LocalizedObject<string>;
