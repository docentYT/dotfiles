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
user_pref("uc.tweak.borderless", true); // removes margins around the webpage
user_pref("uc.tweak.borderless.no-round", true); // don't round corners of browser contents when in borderless mode
user_pref("uc.tweak.no-animations", true); //  	disable animations added by this theme
user_pref("uc.tweak.urlbar.not-floating", true); // urlbar no longer floats in center of window when focused
user_pref("uc.tweak.sidebar.wide", true); // makes sidebar wider when hovering (200px)
user_pref("uc.tweak.no-blur", true); // remove blur and translucency from background of sidebery, navbar, urlbar, etc

// required prefs
// userchrome.css usercontent.css activate
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// fill svg color
user_pref("svg.context-properties.content.enabled", true);

// enable :has selector
user_pref("layout.css.has-selector.enabled", true);

// integrated calculator at urlbar
user_pref("browser.urlbar.suggest.calculator", true);

// integrated unit convertor at urlbar
user_pref("browser.urlbar.unitConversion.enabled", true);

// trim url
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.trimURLs", true);

// show profile management in hamburger menu
user_pref("browser.profiles.enabled", true);

// gtk rounded corners
user_pref("widget.gtk.rounded-bottom-corners.enabled", true);

// show compact mode
user_pref("browser.compactmode.show", true);

// fix sidebar tab drag on linux
user_pref("widget.gtk.ignore-bogus-leave-notify", 1);

// DISABLED SEE https://codeberg.org/awwpotato/potatofox/issues/22
// user_pref("browser.tabs.allow_transparent_browser", true);

// uidensity -> compact
user_pref("browser.uidensity", 1);
