import { LitElement, html } from 'lit-element'

class MyElement extends LitElement {
  // Implement `render` to define a template for your element.
  // 要用LitElement 组件定义一个模板，必须为你的模板类写一个render方法：
  render() {
    /**
     * Return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function.
     */

    // 这里 html`...` 中 html 是引用的父类函数，用模板字符串包裹原始的HTML标签
    // 组件的 render 方法可以返回 lit-html 可以渲染的任何内容。
    // 通常，它返回单个 TemplateResult 对象（与 html 标记函数返回的类型相同）
    return html`
      <div>
        <p>A paragraph</p>
      </div>
    `
  }
}
customElements.define('my-element', MyElement)
