import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { SeeInformationComponent } from '../see-information/see-information.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {

  constructor(private dialogService: DialogService){}

  cards = [
    {
      title: 'StreamTech',
      subtitle: 'SpringBoot - Node js - Angular 12',
      imageSrc: 'info-streamtech.png',
      description:
        'Gestión de ventas de plataformas de streaming, enlazada con whatsapp, para el envío masivo de mensajes. Seguridad JWT.',
      succesButtonText: 'Ver más...',
      url: 'https://github.com/YeisonMolanoL/streamTech',
    },
    {
      title: 'Rutas',
      subtitle: 'SpringBoot - Angular 17',
      imageSrc: 'info-rutas.png',
      description:
        'Gestión de autobuses urbanos, registro de personas, monitoreo de rutas y horarios. Integración con GoogleMaps y seguridad JWT.',
      succesButtonText: 'Ver más...',
      url: 'https://github.com/YeisonMolanoL/rutas',
    },
  ];
  integrations = [
    {
      title: 'WhatsApp',
      subtitle: 'Potencia tu comunicación con WhatsApp.',
      imageSrc: 'whatsapp-integration.png',
      description:
        'Ofrezco integraciones avanzadas con WhatsApp para potenciar tu comunicación. Envío mensajes personalizados o masivos, automatizo respuestas y optimizo la interacción con tus clientes. Maximiza tu alcance y eficiencia con soluciones a medida. ¡Conecta mejor con tu audiencia y haz crecer tu negocio!',
      succesButtonText: 'Ver más...',
      url: 'https://github.com/YeisonMolanoL/streamTech',
    },
    {
      title: 'Google Maps',
      subtitle: 'Conquista el mundo con Maps.',
      imageSrc: 'google-maps-integration.png',
      description:
        'Ofrezco integraciones con Google Maps para optimizar tu presencia en línea. Configuro ubicaciones, muestro rutas personalizadas, integro mapas interactivos en tu sitio web y mejoro la visibilidad de tu negocio. Atrae más clientes y facilita que te encuentren. ¡Potencia tu geolocalización y destaca en el mapa!',
      succesButtonText: 'Ver más...',
      url: 'https://github.com/YeisonMolanoL/rutas',
    },
    {
      title: 'Google Calendar',
      subtitle: 'Organiza tu tiempo con Calendar.',
      imageSrc: 'google-calendar-integration.png',
      description:
        'Ofrezco integraciones con Google Calendar para optimizar tu gestión de tiempo y organización. Automatizo agendas, sincronizo eventos, programo recordatorios y facilito la coordinación de citas o reuniones. Simplifica tu rutina y mejora la productividad de tu negocio. ¡Mantén todo bajo control y aprovecha al máximo tu tiempo!',
      succesButtonText: 'Ver más...',
      url: 'https://github.com/YeisonMolanoL/rutas',
    },
  ];

  openDialog(title: string) {
    const ref = this.dialogService.open(SeeInformationComponent, {
      header: title,
      data: {
        title,
        message: 'Hola, esto es un mensaje desde el componente padre'
      }
    });
  }
}
