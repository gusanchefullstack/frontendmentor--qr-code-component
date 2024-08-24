# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### Screenshot

![](/myscreenshots/QRComponent-desktop.png)


### Links

- Solution URL: [QR Code Component](https://www.frontendmentor.io/solutions/qr-code-component-39Venk_KMN)
- Live Site URL: [QR Code Component @Vercel](https://frontendmentor-qr-code-component-rosy.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) - For reusable web building blocks

### What I learned

Adding google fonts and script for loading web component:
```html
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
      rel="stylesheet"
    />
    <script src="app.js" type="module"></script>

```
Using html templates and adding web component:
```html
<body>
    <main>
      <qr-code-component></qr-code-component>
    </main>

    <template id="qr-code-component-template">
      <article>
        <img src="/images/image-qr-code.png" alt="QR Code">
        <section>
          <h1>Improve ...</h1>
          <p>Scan the QR code...</p>
        </section>
      </article>
    </template>
  </body>
```
Using variables in CSS:
```css
:root {
  --color-white: hsl(0, 0%, 100%);
  --color-slate-300: hsl(212, 45%, 89%);
  --color-slate-500: hsl(216, 15%, 48%);
  --color-slate-900: hsl(218, 44%, 22%);
}
```
Creating web component with HTML Custom Element and Shadow DOM:
```js
export class QRCodeComponent extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });
    const template = document.getElementById("qr-code-component-template");
    const content = template.content.cloneNode(true);
    const styles = document.createElement("style");

    this.root.appendChild(content);
    this.root.appendChild(styles);

    async function loadCss() {
      const request = await fetch("/components/QRCodeComponent.css");
      const css = await request.text();
      styles.textContent = css;
    }
    loadCss()
  }
}

customElements.define("qr-code-component", QRCodeComponent);

```

### Continued development

I will continue using web components for upocoming challenges.

### Useful resources

- [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) 

## Author

- Website - [Gustavo Sanchez](https://www.your-site.com)
- Frontend Mentor - [@gusanchefullstack](https://www.frontendmentor.io/profile/gusanchefullstack)
- Twitter - [@gusanchedev](https://twitter.com/gusanchedev)

