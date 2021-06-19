可以从父类继承样式斌不过添加当自己的样式属性

父类：super-element.js

import { LitElement, html, css } from 'lit-element';

export class SuperElement extends LitElement {
  static get styles() {
    return css`
      button { width: 200px; }
    `;
  } 

  render() {
    return html`
      <button>click</button>
    `;
  }
}

customElements.define('super-element', SuperElement);
子类：my-element.js

import { css } from 'lit-element';
import { SuperElement } from './super-element.js';

class MyElement extends SuperElement {
  static get styles() {
    return [
      super.styles,
      css`button { color: red; }`
    ];
  } 
}

customElements.define('my-element', MyElement);