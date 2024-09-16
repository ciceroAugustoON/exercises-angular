import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Consultor } from './consultor';

@Component({
  selector: 'app-apolice',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './apolice.component.html',
  styleUrl: './apolice.component.css'
})
export class ApoliceComponent {
  consultor: any;
  onSubmit(form : NgForm) {
    this.consultor = new Consultor(form.value.name, form.value.sex, form.value.age, form.value.value)
  }
}
