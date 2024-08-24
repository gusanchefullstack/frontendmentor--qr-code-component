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
