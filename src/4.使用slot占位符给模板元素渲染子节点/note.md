4.1 slot 标签
要实现如下形式的渲染，必须通过 slot 占位符标签实现

<my-element>
  <p>A child</p>
</my-element>
默认情况下，如果元素具有阴影树，则其子元素根本不会渲染。

要渲染子节点，您的模板需要包含一个或多个<slot>元素，这些元素充当子节点的占位符。

例如定义如下形式的模板

render(){
return html`<div> <slot></slot> </div>`;
}
就可以在 <slot> 标签的位置渲染子节点

<my-element>
  <p>Render me</p>
</my-element>
这些子项不会在DOM树中移动，但会像它们是<slot>的子项一样呈现。

任意多个子节点可以填充到一个 slot：

<my-element>
  <p>Render me</p>
  <p>Me too</p>
  <p>Me three</p>
</my-element>
4.2 使用命名的slot
要将子节点分配给特定的 slot ，请确保该子节点的 slot 属性与该 slot 的 name 属性匹配：

render(){
return html`<div> <slot name="one"></slot> </div>`;
}
<my-element>

  <p slot="one">Include me in slot "one".</p>
</my-element>
命名 slot 仅接受具有匹配 slot 属性的子节点。
