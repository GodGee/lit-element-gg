您可以插入 JavaScript 表达式作为 HTML 文本内容，基本属性，布尔属性，元素属性和事件处理器的占位符。

- Text content: <p>${...}</p>
- Attribute: <p id="${...}"></p>
- Boolean attribute: ?disabled="${...}"
- Property: .value="${...}"
- Event handler: @event="${...}"
- 3.1 绑定到正文
  html`<div>${this.prop1}</div>`
- 3.2 绑定到基本属性
  html`<div id="${this.prop2}"></div>`
- 3.3 绑定到布尔类型属性
  html`<input type="text" ?disabled="${this.prop3}">`
- 3.4 绑定到元素属性
  html`<input type="checkbox" .value="${this.prop4}"/>`
- 3.5 绑定到事件处理程序
  html`<button @click="${this.clickHandler}">pie?</button>`
