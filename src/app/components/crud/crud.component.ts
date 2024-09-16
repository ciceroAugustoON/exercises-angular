import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Cliente } from './Cliente';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  clientes: Cliente[] = [];

  onSubmit(form: NgForm) {
    let cliente = new Cliente(form.value.id, form.value.nome, form.value.mail, form.value.idade);
    console.log(cliente)
    this.clientes.push(cliente);
  }
}
