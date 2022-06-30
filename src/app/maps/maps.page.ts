import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  
  comentarios: any =[];
  formCreate: FormGroup;
  comentariosactuales: any =[];


  constructor(private formbuilder: FormBuilder) { 
    

    this.formCreate = formbuilder.group({
      "nombre": new FormControl(),
      "comentario": new FormControl(),
      });
  }

  
  ngOnInit() {
    localStorage.setItem("comentarios", JSON.stringify(this.comentarios));
    this.obtenerLocalStorage();
  }

  formcoment(){
    const formData = this.formCreate.value;
    this.comentarios.push(formData);
    for(let i=0; i<this.comentarios.length; i++)[
    ]
    localStorage.setItem("comentarios", JSON.stringify(this.comentarios));
    
  }

  obtenerLocalStorage(){
    let userInformation = JSON.parse(localStorage.getItem("comentarios"));
    this.comentarios= userInformation;
    
  }


}
