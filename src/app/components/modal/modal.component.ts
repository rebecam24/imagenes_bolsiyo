import { Component, Input } from '@angular/core';

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input () views: number = 0;
  @Input () tags: string[] = [''];
  @Input () likes: number = 0;
  @Input () imageSelected: string = '';

}
