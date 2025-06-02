// a helper object that FORCES us to use ALL languages
// don't use it
const _localizations: Record<Localization, null> = {
  en: null,
  ru: null,
};
// _localizations is only needed here:
export const localizations = Object.keys(_localizations) as Localization[];
