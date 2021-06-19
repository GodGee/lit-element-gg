import { LitElement, html } from 'lit-element'

class MyElement4 extends LitElement {
  render() {
    return html`
      <div>
        <slot name="one"></slot>
        <slot name="two"></slot>
      </div>
    `
  }
}
customElements.define('my-element4', MyElement4)
