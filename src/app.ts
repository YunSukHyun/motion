import { VideoComponent } from './components/page/item/video.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { PageComponents } from './components/page/page.js';
class App {
  private readonly page: PageComponents;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponents();
    this.page.attachTo(appRoot);
    
    const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
    image.attachTo(appRoot, 'beforeend');

    const video = new VideoComponent('','https://youtu.be/K3-jG52XwuQ');
    video.attachTo(appRoot, 'beforeend');

    const note = new NoteComponent('Note Title', 'Note body');
    note.attachTo(appRoot, 'beforeend');

    const todo = new TodoComponent('Todo Title', 'Todo Item');
    todo.attachTo(appRoot, 'beforeend');


  }
}

new App(document.querySelector('.document')! as HTMLElement)