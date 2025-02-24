import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ToastModule,
    TableModule,
    DialogModule,
    ToggleButtonModule,
    InputTextareaModule,
    InputTextModule
  ],
  exports: [
    CardModule,
    ButtonModule,
    ToastModule,
    TableModule,
    DialogModule,
    ToggleButtonModule,
    InputTextareaModule,
    InputTextModule
  ]
})
export class PrimengModule { }
