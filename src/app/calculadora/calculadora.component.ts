import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  standalone: false,
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  num1: number | null = null;
  num2: number | null = null;
  result: number | null = null;
  operation: string = 'sum';

  calculate() {
    if (this.num1 === null) return;

    switch (this.operation) {
      case 'sum':
        if (this.num2 !== null) this.result = this.num1 + this.num2;
        break;
      case 'subtract':
        if (this.num2 !== null) this.result = this.num1 - this.num2;
        break;
      case 'multiply':
        if (this.num2 !== null) this.result = this.num1 * this.num2;
        break;
      case 'divide':
        if (this.num2 !== null) {
          if (this.num2 === 0) {
            alert('Error: División por cero');
            this.result = null;
          } else {
            this.result = this.num1 / this.num2;
          }
        }
        break;
      case 'power':
        if (this.num2 !== null) this.result = Math.pow(this.num1, this.num2);
        break;
      case 'sqrt':
        if (this.num1 < 0) {
          alert('No se puede calcular la raíz cuadrada de un número negativo.');
          this.result = null;
        } else {
          this.result = Math.sqrt(this.num1);
        }
        break;
      default:
        this.result = null;
        break;
    }
  }
}
