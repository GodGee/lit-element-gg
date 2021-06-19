5、Shadow DOM 样式概述
本节简要概述了影子 DOM 样式。

添加到组件的样式可能会影响：

阴影树（您组件的渲染模板）。
组件本身。
组件的子元素。
5.1 设置阴影树的样式
LitElement 模板默认情况下渲染到阴影树中。范围限于元素的阴影树的样式不会影响主 document 或其他阴影树。同样，除了继承的 CSS 属性外，document 级样式不会影响阴影树的内容。

当您使用标准 CSS 选择器时，它们仅与组件的阴影树中的元素匹配，这就是组件的封装思想之一。
5.2 ::host 设置组件本身的样式
您可以使用特殊的 :host 选择器来设置组件本身的样式。（拥有或“ :hosts ”一个阴影树的元素称为宿主元素。）

要为 host 元素创建默认样式，请使用 :host CSS 伪类和 :host（）CSS 伪类函数。

:host 选择宿主元素。
:host(selector) 选择宿主元素，但前提是宿主元素与选择器匹配。

5.3 ::slotted设置组件子节点的样式
您的组件可以接受子节点（例如<ul>元素可以具有<li>个子节点）。要渲染子节点，模板需要包括一个或多个<slot>元素，如使用slot元素渲染子节点中所述。

使用 ::slotted() CSS伪元素通过<slot> s选择包含在模板中的子节点

::slotted(*) 匹配所有slotted 的元素。
::slotted(p)匹配slotted <p>标签。
p ::slotted(*)匹配slotted 元素，其中<slot>是<p>元素的子元素。

第一个匹配所有子元素，第二个匹配  <p>Slotted paragraph</p> 它应该是蓝色，第三个匹配父元素为 div， name= "hi" 的标签，也就是 <span slot="hi">Slotted span inside a div</span>，应该是红色

请注意，只能使用 ::slotted() 设置直接匹配的子元素的样式。

<my-element>
  <div>Stylable with ::slotted()</div>
</my-element>

<my-element>
  <div><p>Not stylable with ::slotted()</p></div>
</my-element>
另外，可以从阴影树之外设置子样式，因此，应将 ::slotted() 样式视为可以覆盖的默认样式。

my-element div {
  // Outside style targetting a slotted child can override ::slotted() styles
}
