import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseCalculatorComponent } from './components/base-calculator/base-calculator.component';
import { CalculatorRoutingModule } from './calculator-routing.module';



@NgModule({
  declarations: [BaseCalculatorComponent],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CalculatorModule { }
