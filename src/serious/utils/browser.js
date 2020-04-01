import _ from './helper';

const navigatorGlobal = typeof navigator !== 'undefined' && navigator



class Browser {
  language() {
    return _.isValid(navigatorGlobal) && navigatorGlobal.language || "zh-TW";
  }

  languages() {
    return _.isValid(navigatorGlobal) && navigatorGlobal.languages ||  ["zh-TW", "zh", "en-US", "en"];
  }

  locale() {
    let language = this.language();
    return this.toLocale(language);
  }
  toLocale(language) {
    let tokens = language.split('-');

    return {
      language: tokens[0],
      country: tokens[1]
    };
  }
}

let browser = new Browser();

export default browser;