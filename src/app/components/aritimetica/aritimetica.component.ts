import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-aritimetica',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './aritimetica.component.html',
  styleUrl: './aritimetica.component.css'
})
export class AritimeticaComponent {
  primeiro: number = 0;
  segundo: number = 0;
  resultado: number = 0;
  onSubmit(form : NgForm) {
    switch (form.value.operacao) {
      case "+":
        this.resultado = this.primeiro + this.segundo;
        break;
      case "-":
        this.resultado = this.primeiro - this.segundo;
        break;
      case "*":
        this.resultado = this.primeiro * this.segundo;
        break;
      case "/":
        this.resultado = this.primeiro / this.segundo;
        break;
    }
  }
}
