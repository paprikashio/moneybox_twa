import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {enLocalization} from "./localizations/en";
import {ruLocalization} from "./localizations/ru";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enLocalization
            },
            ru: {
                translation: ruLocalization
            }
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });