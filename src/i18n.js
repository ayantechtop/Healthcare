/**
 * Copyright 2018-2019 bluefox <dogafox@gmail.com>
 *
 * MIT License
 *
 **/

class I18n {
    static translations = {
    };

    static lang = window.sysLang || 'en';

    static setLanguage(lang) {
        if (lang) {
            I18n.lang = lang;
        }
    }
    static getLanguage() {
        return I18n.lang;
    }
    static t(word, arg1, arg2, arg3) {
        if (I18n.translations[I18n.lang]) {
            const w = I18n.translations[I18n.lang][word];
            if (w) {
                word = w;
            } else {
                console.log(`Translate: ${word}`);
            }
        }
        if (arg1 !== undefined) {
            word = word.replace('%s', arg1);
            if (arg2 !== undefined) {
                word = word.replace('%s', arg2);
                if (arg3 !== undefined) {
                    word = word.replace('%s', arg3);

                }
            }
        }
        return word;
    }
}

/*I18n.translations = {
    'en': require('./i18n/en'),
    'ru': require('./i18n/ru'),
    'de': require('./i18n/de'),
};
I18n.fallbacks = true;
I18n.t = function () {};*/

export default I18n;