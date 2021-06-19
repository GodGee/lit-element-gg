import { LitElement, html } from 'lit-element'

class UpdateProperties extends LitElement {
  static get properties() {
    return {
      message: String,
    }
  }

  constructor() {
    super()
    this.message = 'loading……'
    this.addEventListener('stuff-loaded', (e) => {
      this.message = e.detail
    })
    this.loadStuff()
  }

  render() {
    return html`
      <p>${this.message}</p>
    `
  }

  loadStuff() {
    setInterval(() => {
      let loaded = new CustomEvent('stuff-loaded', {
        detail: 'loading complete',
      })
      this.dispatchEvent(loaded)
    }, 3000)
  }
}

customElements.define('update-properties', UpdateProperties)

// 我们可以通过捕获加载消息作为属性，并根据事件设置属性来改变模板：update-properties.js
// 该例子中为模板元素绑定了一个加载事件，事件函数模拟3秒后改变元素属性值，从而动态改变模板。这是动态改变模板的方法。

// 注意：每一个模板类都必须引用  import { html, LitElement } from 'lit-element'; 就算套用了其他模板也是一样
