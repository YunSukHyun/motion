import { BaseComponent } from "../../component.js";

export class TextSectionInput extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<div>
    <div class="form_container">
      <label for="title">TItle</label>
      <input type="text" id="title"/>
    </div>
    <div class="form_container">
      <label for="body">Body</label>
      <textarea type="text" id="body" rows="4"></textarea>
    </div>
    </div>`);
  }
  get title(): string {
    const element = this.element.querySelector("#title")! as HTMLInputElement;
    return element.value;
  }
  get body(): string {
    const element = this.element.querySelector("#body")! as HTMLInputElement;
    return element.value;
  }
}
