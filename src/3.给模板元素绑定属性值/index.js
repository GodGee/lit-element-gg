import { LitElement, html } from 'lit-element'

class MyElement3 extends LitElement {
  static get properties() {
    return {
      prop1: String,
      prop2: String,
      prop3: String,
      prop4: String,
    }
  }
  constructor() {
    super()
    this.prop1 = 'text binding'
    this.prop2 = 'mydiv'
    this.prop3 = true
    this.prop4 = 'pie'
  }

  render() {
    return html`
      <!-- text binding -->
      <div>${this.prop1}</div>

      <!-- attribute binding -->
      <div id="${this.prop2}">attribute binding</div>

      <!-- boolean attribute binding -->
      <div>
        boolean attribute binding
        <input type="text" ?disabled="${this.prop3}" />
      </div>

      <!-- property binding -->
      <div>
        property binding
        <input type="text" .value="${this.prop4}" />
      </div>

      <!-- event handler binding -->
      <div>
        event handler binding
        <button @click="${this.clickHandler}">click</button>
      </div>
    `
  }
  clickHandler(e) {
    console.log(e.target)
  }
}

customElements.define('my-element3', MyElement3)
