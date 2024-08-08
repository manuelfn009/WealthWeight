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
  color = 'white';
  bg_color = 'white';
  
  calcularIMC() {
    //prevent default
    addEventListener('click', (event) => event.preventDefault());

    if (this.altura.value && this.peso.value) {
      this.imc = +this.peso.value / (+this.altura.value * +this.altura.value);
      this.imc = +this.imc.toFixed(2);
      console.log(this.imc.toFixed(2));
      if (this.imc < 18.5) {
        this.error = 'Bajo Peso';
        this.color = '#0390fc';
        this.bg_color = '#88cafc';
      } else if (this.imc >= 18.5 && this.imc <= 24.9) {
        this.error = 'Normal';
        this.color = '#02b82f';
        this.bg_color = '#a8fca8';
      } else if (this.imc >= 25 && this.imc <= 29.9) {
        this.error = 'Sobrepeso';
        this.color = '#fcba03';
        this.bg_color = '#fcd8a8';
      } else if (this.imc >= 30 && this.imc <= 34.9) {
        this.error = 'Obesidad I';
        this.color = '#b80202';
        this.bg_color = '#fca8a8';
      } else if (this.imc >= 35 && this.imc <= 39.9) {
        this.error = 'Obesidad II (Severa)';
        this.color = '#b80202';
        this.bg_color = '#fca8a8';
      } else if (this.imc >= 40) {
        this.error = 'Obesidad III (Mórbida)';
        this.color = '#b80202';
        this.bg_color = '#fca8a8';
      }
    }else{
      this.error = 'Debes de rellenar todos los campos';
      console.log('Error');
    }
  }
}
