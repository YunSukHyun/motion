import { BaseComponent, Component } from "./../component.js";
export interface Composable {
  addChild(child: Component): void;
}
type OnCloseListener = () => void;
export class PageItemComponet
  extends BaseComponent<HTMLElement>
  implements Composable
{
  private closeListener?: OnCloseListener;
  constructor() {
    super(`<li class="page-item">
    <section class="page-item_body"></section>
    <div class="page-item_controls">
      <button class="close">&times;</button>
    </div>
    </li>`);
    const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
  }
  addChild(child: Component) {
    const container = this.element.querySelector(
      ".page-item_body"
    )! as HTMLElement;
    child.attachTo(container);
  }
  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}
export class PageComponents
  extends BaseComponent<HTMLUListElement>
  implements Composable
{
  constructor() {
    super('<ul class="page"></ul>');
  }
  addChild(section: Component) {
    const item = new PageItemComponet();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
