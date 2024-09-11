import { Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    {path: "calculadora", component: CalculadoraComponent},
    {path: "", component: InicioComponent},
    {path: "inicio", component: InicioComponent}
];
