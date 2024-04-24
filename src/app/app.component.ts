import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // property binding is used to pass data from the component class (component.ts) and setting the value of the given element in the user-end (component.html)
  title = 'Propertybinding';

  name = "Ravindhiran";

  //using function


  getMax(a:number,b:number) {
    return Math.max(a,b);
  }

  image = "https://miro.medium.com/v2/resize:fit:1149/1*hY6K0vVIWgAs85HJnhnKIw.png";
}
