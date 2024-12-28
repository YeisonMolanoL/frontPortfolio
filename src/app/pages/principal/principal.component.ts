import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  cards = [{title: 'TituloUno', subtitle: 'SubtituloUno', imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbPvDW8gBfklrVaTSSY2hp6mRtTOqMrKKYWg&s', description: 'Esta solamente es una descripción', succesButtonText: 'Aca si'}, {title: 'TituloDos', subtitle: 'SubtituloDos', imageSrc: 'https://media.es.wired.com/photos/6501e7429fa9000811a95fe8/16:9/w_2560%2Cc_limit/Adobe%2520Firefly.jpeg', description: 'Esta solamente es una descripción', succesButtonText: 'Aca si'}, {title: 'TituloTres', subtitle: 'SubtituloTres', imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiAaWu41PnuFia-KLhE7V9INkVgtLl43vJHw&s', description: 'Esta solamente es una descripción', succesButtonText: 'Aca si'}, {title: 'TituloCuatro', subtitle: 'SubtituloCuatro', imageSrc: 'https://plus.unsplash.com/premium_photo-1695020025960-70febce9ae16?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW5vJTIwcG9yJTIwbGElMjBub2NoZXxlbnwwfHwwfHx8MA%3D%3D', description: 'Esta solamente es una descripción', succesButtonText: 'Aca si'}, {title: 'TituloCinco', subtitle: 'SubtituloCinco', imageSrc: 'https://marketing4ecommerce.net/wp-content/uploads/2024/02/imagen-generada-con-nightcafe-e1708680739301.jpg', description: 'Esta solamente es una descripción', succesButtonText: 'Aca si'}]
  constructor() {}

  ngOnInit() {}
}
