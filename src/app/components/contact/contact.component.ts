import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { MailService } from 'src/app/service/mail.service';
import { Mail } from '../modells/mail';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  formContactMe!: FormGroup;

  constructor(private mailService: MailService, private fb: FormBuilder, private message: MessageService){}

  ngOnInit(): void {
      this.initFormMail();
  }

  initFormMail() {
    this.formContactMe = this.fb.group({
      tema: new FormControl('', [Validators.required]),
      mensaje: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl(''),
      contacto: new FormControl(),
    });
  }

  sendMail(){
      if(this.formContactMe.valid){
        let mail = new Mail()
        mail.from = ''
        mail.to = ''
        mail.subject = this.formContactMe.get('tema')?.value 
        mail.body = this.formContactMe.get('mensaje')?.value + '\nSoy ' + this.formContactMe.get('nombre')?.value + ' ' + this.formContactMe.get('apellido')?.value + '\nMi contacto es: ' + this.formContactMe.get('contacto')?.value
        this.mailService.sendMail(mail).subscribe({ next: (res: any) =>{
          this.message.add({ severity: 'success', summary: '¡Correcto!', detail: 'Se ha enviado el mensaje' });
          this.formContactMe.reset()
        },
        error: (err: any) =>{
          this.message.add({ severity: 'warn', summary: '¡Alerta!', detail: err.error.message });
        }})
        
      }else{
        this.formContactMe.markAllAsTouched();
        this.message.add({ severity: 'warn', summary: 'Datos invalidos', detail: 'Por favor digite ingrese al menos los datos que estas referenciados con *' });
      }
    }
}
