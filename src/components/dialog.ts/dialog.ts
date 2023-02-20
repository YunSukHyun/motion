import { BaseComponent, Component } from "../component.js";
import { Composable } from "../page/page.js";

type OnCloseListener = () => void;
type OnSubmitListener = () => void;
export class InputDialog
  extends BaseComponent<HTMLElement>
  implements Composable
{
  closeListener?: OnCloseListener;
  submitListener?: OnSubmitListener;
  constructor() {
    super(`<section class="dialog">
    <div class="dialog_container">
      <button class="close">&times;</button>
      <div id="dialog_body"></div>
      <button class="dialog_submit">ADD</button>
    </div>
    </section>`);
    const closeBtn = this.element.querySelector(".close")! as HTMLElement;
    const submitBtn = this.element.querySelector(
      ".dialog_submit"
    )! as HTMLElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
    submitBtn.onclick = () => {
      this.submitListener && this.submitListener();
    };
  }
  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
  setOnSubmitListener(listener: OnSubmitListener) {
    this.submitListener = listener;
  }
  addChild(child: Component): void {
    const body = this.element.querySelector("#dialog_body")! as HTMLElement;
    child.attachTo(body);
  }
}
