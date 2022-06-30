import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data:string;

  constructor() {

   
  }
  
  ngOnInit() {
  
    
    

  }


  //se inicia usuario en localStorage

  cargarusuario(){
    let key = 'user';
    localStorage.setItem(key, 'Value');
    console.log('Recuperando datos en local storage de usuario')
    let myObj = [];
    localStorage.setItem(key, JSON.stringify(myObj));
    this.data= JSON.parse(localStorage.getItem(key));
    console.log('Datos usuario',this.data);
  }
  
}


