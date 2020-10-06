# Navigation >> Tabs >> Examples ||30

```js script
import { LitElement } from 'lit-element';
import { html } from 'lit-html';
import './src/lea-tabs.js';
import './src/lea-tab.js';
import './src/lea-tab-panel.js';
```

## Lea Tabs

```js preview-story
export const main = () => html`
  <lea-tabs>
    <lea-tab slot="tab">Info</lea-tab>
    <lea-tab-panel slot="panel"> Info page with lots of information about us. </lea-tab-panel>
    <lea-tab slot="tab">Work</lea-tab>
    <lea-tab-panel slot="panel"> Work page that showcases our work. </lea-tab-panel>
  </lea-tabs>
`;
```
