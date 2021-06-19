import { LitElement, css, html } from 'lit-element'

class MyElement extends LitElement {
  static get styles() {
    return css`
      div {
        color: red;
      }
    `
  }
  render() {
    return html`
      <div>I'm styled!</div>
    `
  }
}

// 如同 static get properties()属性一样，这是另一个静态属性 static get styles()，专门用来定义组件的样式属性，css是如同html一样的另一个父类函数
// 您添加到组件中的样式使用阴影DOM限定范围，不会被用于其他节点。


1.1 单个样式
直接返回模板字符串

static get styles() {
  return css`...`;
} 
1.2 多个样式
返回一个数组

static get styles() {
  return [ css`...`, css`...`];
}
