html`
  <ul>
    ${this.myArray.map(
      (i) =>
        html`
          <li>${i}</li>
        `
    )}
  </ul>
`
// ES6数组的map方法，为每一个数组元素执行括号中的操作
