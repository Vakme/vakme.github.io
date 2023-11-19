import { createI18n } from "vue-i18n";
import en_US from "@/assets/locale/en_US.json";

const messages = {
  en_US: en_US,
};

export const i18n = createI18n({
  locale: "en_US",
  messages,
});
