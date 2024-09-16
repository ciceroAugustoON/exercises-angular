import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { Media } from './media';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {
  media: Media = new Media(0,0,0,0)
  messageList: string[] = ['Aprovado!', 'Reprovado!'];
  message: string = ''
  onSubmit(form: NgForm) {
    this.media = new Media(form.value.ac1, form.value.ac2, form.value.ag, form.value.af)
    if (this.media.final < 5) {
      this.message = this.messageList[1];
    } else {
      this.message = this.messageList[0];
    }
    console.log(this.media.media())
  }
}
