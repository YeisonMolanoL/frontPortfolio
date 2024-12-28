import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent {
  @Input() title: string = 'Titulo';
  @Input() subtitle: string = 'Subtitulo';
  @Input() imageSrc: string = 'https://primefaces.org/cdn/primeng/images/card-ng.jpg';
  @Input() description: string = 'Aca va la descripción de que lo que usted quiere que diga su card';
  @Input() succesButtonText: string = 'Ver mas...';
  @Input() cancelButtonText: string = 'Cancelar';
}
