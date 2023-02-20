import { BaseComponent } from "./../../component.js";
export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(`<section class="note">
    <h2 class="note_title"></h2>
    <p class="note_body"></p>
    </section>`);
    const titleElement = this.element.querySelector(
      ".note_title"
    )! as HTMLHeadElement;
    titleElement.textContent = title;

    const bodyElement = this.element.querySelector(
      ".note_body"
    )! as HTMLParagraphElement;
    bodyElement.textContent = body;
  }
}
