import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-information-complete',
  templateUrl: './information-complete.component.html',
  styleUrls: ['./information-complete.component.css']
})
export class InformationCompleteComponent {
  @Input() title: string = 'Titulo';
  @Input() description: string = 'Esta es una breve descripción'
  @Input() icon: any;
}
