import { LitElement, html } from 'lit-element'

class MyArticle extends LitElement {
  render() {
    return html`
      <article>article</article>
    `
  }
}
customElements.define('my-article', MyArticle)
// 您可以从其他LitElement模板组成新的LitElement模板。在以下示例中，我们通过导入其他元素并在模板中使用它们来组成新的<my-page>模板：
