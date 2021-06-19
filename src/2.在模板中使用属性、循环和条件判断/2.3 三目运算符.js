html`
  ${this.myBool
    ? html`
        <p>Render some HTML if myBool is true</p>
      `
    : html`
        <p>Render some other HTML if myBool is false</p>
      `}
`
