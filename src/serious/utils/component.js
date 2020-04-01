import React from "react"
import i18n from './i18n';

class Component extends React.Component {
  translate(text, options) {
    return i18n.translate(text, options);
  }
}

export default Component