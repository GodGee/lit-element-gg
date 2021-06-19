import { html, LitElement } from 'lit-element'

class MyHeader extends LitElement {
  render() {
    return html`
      ${this.headerTemplate}
    `
  }
  get headerTemplate() {
    return html`
      <header>header</header>
    `
  }
}
customElements.define('my-header', MyHeader)
