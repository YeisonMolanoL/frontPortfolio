import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portafolio';
  darkMode: boolean = false;

  darkModeStyle(status: any){
    if(this.darkMode){
      const nuevaImagenFondo = 'url("./../../assets/imagenes/code2.jpg")';
      document.documentElement.style.backgroundImage = nuevaImagenFondo;
      document.body.style.backgroundImage = nuevaImagenFondo;
    }else{
      const nuevaImagenFondo = 'url("./../../assets/imagenes/code3.jpg")';
      document.documentElement.style.backgroundImage = nuevaImagenFondo;
      document.body.style.backgroundImage = nuevaImagenFondo;
    }
    this.darkMode = !this.darkMode;
  }
}
