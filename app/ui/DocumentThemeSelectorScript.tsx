export const DocumentThemeSelectorScript = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        // I need to run this as early as possible to prevent the flash of white
        // that's why I'm doing this instead of useEffect()
        __html: `
          try {
            const theme = localStorage.getItem('theme');
            if (theme && theme !== 'system') {
              document.documentElement.setAttribute('data-theme', theme);
            }
          } catch (e) {}
        `,
      }}
    />
  );
};
