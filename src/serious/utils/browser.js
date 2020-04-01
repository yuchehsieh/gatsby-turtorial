class Browser {
  language() {
    return navigator.language;
  }

  languages() {
    return navigator.languages;
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