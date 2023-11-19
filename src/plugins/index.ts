/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import Toast, {POSITION} from "vue-toastification";
// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import { i18n } from "./i18n";

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  loadFonts()
  app.use(vuetify);
  app.use(Toast,{
    position: POSITION.BOTTOM_LEFT
  });
  app.use(i18n);
}
