// arkenfox
user_pref("privacy.sanitize.sanitizeOnShutdown", false); // do not clear data on shutdown
user_pref("webgl.disabled", false); // enable webgl
user_pref("privacy.resistFingerprinting.letterboxing", false); // disable letterboxing
user_pref("browser.startup.page", 3); // restore previous session
user_pref("browser.startup.homepage", "https://start.duckduckgo.com"); // set duckduckgo as a homepage

// my settings
user_pref("browser.tabs.warnOnClose", true); // warn beforce closing multiple tabs


// Awwsome potato css
// my config
user_pref("uc.tweak.sidebar-full-collapse", true); // arc like fully hidden sidebar when not hovered over

// required prefs
// userchrome.css usercontent.css activate
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Fill SVG Color
user_pref("svg.context-properties.content.enabled", true);

// CSS's `:has()` selector 
user_pref("layout.css.has-selector.enabled", true);

// Integrated calculator at urlbar
user_pref("browser.urlbar.suggest.calculator", true);

// Integrated unit convertor at urlbar
user_pref("browser.urlbar.unitConversion.enabled", true);

/* Trim  URL */
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.trimURLs", true);

/* show compact mode */
user_pref("browser.compactmode.show", true);