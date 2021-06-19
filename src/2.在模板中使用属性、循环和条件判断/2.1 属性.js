static get properties() {
  return { myProp: String };
}
 
constructor() {
  super()
  this.myProp = 'myProp'
 
}


render() {
  return html`<p>${this.myProp}</p>`;
}


// 通过静态的 get properties() 函数指定属性的类型，构造函数 constructor() 初始化属性的初始值