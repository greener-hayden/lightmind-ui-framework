/**
 * Theme initialization script to prevent flash of incorrect theme
 * This runs before React hydration
 */

export const themeInitScript = `
  (function() {
    try {
      const stored = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Apply theme immediately
      if (stored === 'dark' || (stored === 'system' && systemPrefersDark) || (!stored && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      // Also handle style preference
      const stylePreference = localStorage.getItem('ui-style');
      if (stylePreference) {
        document.documentElement.setAttribute('data-style', stylePreference);
        document.documentElement.classList.add('style-' + stylePreference);
      }
    } catch (e) {}
  })()
`;