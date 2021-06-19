import { LitElement, html, css } from 'lit-element'

class MyElementHost extends LitElement {
  static get styles() {
    return css`
      /* Selects the host */
      :host {
        display: block;
      }

      /* Selects the host element if it is hidden */
      :host([hidden]) {
        display: none;
      }

      /* Selects the host element if it has class "blue" */
      :host(.blue) {
        background-color: aliceblue;
        color: blue;
      }
    `
  }
  render() {
    return html`
      <p>Hello World</p>
    `
  }
}

customElements.define('my-element-host', MyElementHost)

{
  /* <html>
  <head>
    <title>lit-element code sample</title>
    <script type="module" src="./my-element.js"></script>
  </head>
  <body>
    <my-element></my-element>
    <my-element hidden></my-element>
    <my-element class="blue"></my-element>
  </body>
</html>
结果是第一个my-element正常显示，第二个隐藏，第三个以指定颜色显示
请注意，host 元素也可能会受到阴影树外部的样式的影响，因此，您应将在 :host 和 :host() 规则中设置的样式视为可以被用户覆盖的默认样式。例如：

my-element {
  display: inline-block;
} */
}
