import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  altura = new FormControl('', [Validators.required]);
  peso = new FormControl('', [Validators.required]);
  imc = 0;
  error = '';
  
  calcularIMC() {
    //prevent default
    addEventListener('click', (event) => event.preventDefault());

    if (this.altura.value && this.peso.value) {
      this.imc = +this.peso.value / (+this.altura.value * +this.altura.value);
      this.imc = +this.imc.toFixed(2);
      console.log(this.imc.toFixed(2));
    }else{
      this.error = 'Debes de rellenar todos los campos';
      console.log('Error');
    }
  }
}
