import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
 
  person = {
    name : "julian",
    address : "cll 5 numero 123",
    age : "35"
  }
  property = "date"
  
  onClick(){
    alert("he sido clickeado");
  }
}
