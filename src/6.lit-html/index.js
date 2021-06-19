lit-html作为LitElement的核心，可以使用很多它的其他功能

npm i lit-element@^2.0.0
npm i lit-html@^1.0.0


例如：

import { LitElement, html } from 'lit-element';
import { until } from 'lit-html/directives/until.js';

const content = fetch('./content.txt').then(r => r.text());

html`${until(content, html`<span>Loading...</span>`)}`
读取一个文件内容作为渲染内容