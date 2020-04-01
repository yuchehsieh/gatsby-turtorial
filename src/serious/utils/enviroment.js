import JsonParser from './JsonParser';
import _ from './helper';

class Environment {
  constructor() {
    this.state = {
      props: {}
    };
  }

  async ready() {
    let props = this.props();

    if(!_.isEmpty(props)) {
      return;
    }

    this.state.props = await this.fetch();

    return;
  }

  async fetch() {
    let response = await fetch('../public/data/app.json');
    let parser = new JsonParser();
    let props = await parser.read(await response.text());

    return props;
  }

  props() {
    return this.state.props;
  }

  prop(name) {
    return this.state.props[name];
  }

  locale() {
    return this.prop('locale');
  }

  language() {
    let locale = this.locale();
    return `${locale.language}-${locale.country}`;
  }

  server() {
    return this.prop('server');
  }
}

let environment = new Environment();

export default environment;