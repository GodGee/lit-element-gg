静态样式每个类评估一次。使用CSS变量和自定义属性来制作可以在运行时配置的样式：

static get styles() {
  return css`
    :host { color: var(--themeColor); }
  `;
} 
<style>
  html { 
    --themeColor: #123456;
  }
</style>
<my-element></my-element>
