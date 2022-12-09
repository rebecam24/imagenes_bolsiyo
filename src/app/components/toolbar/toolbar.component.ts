import { Component, Input } from '@angular/core';

@Component({
  selector: 'toolbar-images',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  @Input () title: string;

  constructor() {
    this.title = '';
  }
}
