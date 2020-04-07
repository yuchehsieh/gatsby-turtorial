import _ from './helper';
import browser from './browser';
import environment from './enviroment';

import ZHTW_APP from '../nls/zh-TW/app';
import ZHTW_TERM from '../nls/zh-TW/term';
import ZHTW_MESSAGE from '../nls/zh-TW/message';

import ZH_APP from '../nls/zh/app';
import ZH_TERM from '../nls/zh/term';
import ZH_MESSAGE from '../nls/zh/message';

class I18n {
  dictionaries = new Map();
  DEFAULTPATTERN = {
    'date': 'yyyy-MM-dd',
    'datetime': 'yyyy-MM-dd HH:mm',
    'month': 'yyyy-MM',
    'time': 'HH:mm',
    'number': '##,##0.###',
    'currency': '$##,##0.###'
  };

  language() {
    return this.state.language || browser.language();
  }

  setLanguage(language) {
    this.state.language = language;
    this.fetchDictionary(language).catch();
  }

  languages() {
    return this.state.languages || browser.languages();
  }

  constructor() {
    this.state = {
      language: undefined,
      languages: undefined
    };
  }

  async initialize(languages) {
    languages || (languages = []);
    _.isArray(languages) || (languages = [languages]);
    this.state.languages = languages;
    let values = languages.map(language => {
      return this.fetchDictionary(language);
    });
    return Promise.all(values);
  }

  async fetchDictionary(language) {
    let locale = this.toLocale(language);
    return Promise.all([
      this.fetchBook('app', language),
      this.fetchBook('term', language),
      this.fetchBook('message', language),
      this.fetchBook('app', locale.language),
      this.fetchBook('term', locale.language),
      this.fetchBook('message', locale.language)
    ]);
  }

  async fetchBook(namespace, language) {
    let url = `../nls/${language}/${namespace}.json`;
    let data;
    let response = await fetch(url,{mode: 'no-cors'});
    try {
      data = await response.json();
    } catch(err) {
      console.log(err);
      data = {};
    }

    // const url = namespace + '/' + language;
    // let data;
    //
    // switch(url) {
    //   case 'app/zh-TW': data = ZHTW_APP; break;
    //   case 'term/zh-TW': data = ZHTW_TERM; break;
    //   case 'message/zh-TW': data = ZHTW_MESSAGE; break;
    //   case 'app/zh': data = ZH_APP; break;
    //   case 'term/zh': data = ZH_TERM; break;
    //   case 'message/zh': data = ZH_MESSAGE; break;
    //   default: data = {};
    // }

    let book = new Map();
    for(let key in data) {
      book.set(key.toLowerCase(), data[key]);
    }

    let dictionary = this.dictionaries.get(language);

    if(!dictionary) {
      dictionary = new Map();
      this.dictionaries.set(language, dictionary);
    }
    dictionary.set(namespace, book);
  }

  translate(text, options) {
    if(!text||text==='') return text;
    let key = text.trim();
    let opts = _.defaults(options, {
      namespace: ['term', 'message'],
      language: this.language()
    });

    let namespaces = Array.isArray(opts.namespace) ? opts.namespace : [opts.namespace];
    let locale = this.toLocale(opts.language);
    let translation;

    for(let i=0; i<namespaces.length; i++) {
      let namespace = namespaces[i];
      translation = this.get(key, namespace, opts.language);
      if(translation) break;
      translation = this.get(key, namespace, locale.language);
      if(translation) break;
    }

    if(_.isNotValid(translation) && _.isNotEmpty(environment.locale())) {
      // use default locale
      locale = environment.locale();
      for(let i=0; i<namespaces.length; i++) {
        let namespace = namespaces[i];
        translation = this.get(key, namespace, opts.language);
        if(translation) break;
        translation = this.get(key, namespace, locale.language);
        if(translation) break;
      }
    }

    return translation || text;
  }
  dictionary(language) {
    return this.dictionaries.get(language);
  }
  book(namespace, language) {
    let book;
    let dictionary = this.dictionary(language);
    book = (dictionary) ? dictionary.get(namespace) : null;
    return book;
  }
  async interpret(text, options) {
    if(!text||text==='') return;

    let opts = _.defaults(options, {
      namespace: ['term', 'message'],
      language: this.language()
    });

    let namespaces = Array.isArray(opts.namespace) ? opts.namespace : [opts.namespace];
    let locale = this.toLocale(opts.language);

    for(let i=0; i<namespaces.length; i++) {
      let namespace = namespaces[i];
      if(!this.book(namespace, opts.language)) {
        await this.fetchBook(namespace, opts.language);
      }
      if(!this.book(namespace, locale.language)) {
        await this.fetchBook(namespace, opts.language);
      }
    }
    return this.translate(text, options);
  }
  get(text, namespace, language) {
    let book = this.book(namespace, language);

    if(!book) {
      this.fetchBook(namespace, language).catch();
      return null;
    }

    let translation = (typeof(text)==='string') ? book.get(text.toLowerCase()) : null;

    return translation;
  }

  message(text, options) {
    let opts = _.defaults(options, {
      namespace: 'message'
    });
    return this.translate(text, opts);
  }
  term(text, options) {
    let opts = _.defaults(options, {
      namespace: 'term'
    });
    return this.translate(text, opts);
  }
  datePattern() {
    let pattern = this.get('datePattern', 'app');
    return pattern || this.DEFAULTPATTERN.date;
  }
  datetimePattern() {
    let pattern = this.get('dateTimePattern', 'app');
    return pattern || this.DEFAULTPATTERN.datetime;
  }
  timePattern() {
    let pattern = this.get('timePattern', 'app');
    return pattern || this.DEFAULTPATTERN.time;
  }
  monthPattern() {

  }
  currencyPattern() {

  }
  numberPattern() {
  }
  decimalSeparator() {

  }
  groupingSeparator() {

  }
  currencySign() {

  }
  toLocale(language) {
    if(typeof language !== "string") return;
    let tokens = language.split('-');

    return {
      language: tokens[0],
      country: tokens[1]
    };
  }
}

let i18n = new I18n();

export default i18n;