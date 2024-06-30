import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesEN from './en/resources.json';

const resources = resourcesEN;

i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'en',
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18next;