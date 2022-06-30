import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiplacesService } from '../services/apiplaces.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-see-place',
  templateUrl: './see-place.page.html',
  styleUrls: ['./see-place.page.scss'],
})
export class SeePlacePage implements OnInit {

  comentarios: any =[];
  formCreate: FormGroup;
  comentariosactuales: any =[];
  
  id: any;
  todos: any = [];
  finalId:number;
  nombre:string;
  img:string;
  descripcion:string;
  data: any= [];
  array: any =[];
  good: number;
  bad: number;


  constructor(private activatedRoute: ActivatedRoute, public http: HttpClient, public service: ApiplacesService,private formbuilder: FormBuilder) {
    
    this.formCreate = formbuilder.group({
      "nombrecoment": new FormControl(),
      "comentario": new FormControl(),
      });
   }

  ngOnInit() {
    localStorage.setItem("comentarios", JSON.stringify(this.comentarios));
    this.obtenerLocalStorage();
    
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    

    this.service.getTodos().subscribe(res=>{
      this.todos= res;
      this.finalId = this.id - 1;
      this.nombre= this.todos[this.finalId].nombre;
      this.id=this.todos[this.finalId].id;
      this.img= this.todos[this.finalId].img;
      this.descripcion= this.todos[this.finalId].descripcion;
      this.good= this.todos[this.finalId].good;
      this.bad= this.todos[this.finalId].bad;
      this.comentarios= this.todos[this.finalId].comentarios;
      this.data= this.todos[this.finalId];
      console.log("Elemento recuperado:",this.data)
    })



  }

  addFav(){
    let array = JSON.parse(localStorage.getItem('user'));
    console.log('Lugares favoritos del usuario',array);
    array.push(this.data);
    localStorage.setItem('user',JSON.stringify(array))
    console.log(array);
  }

  megusta(){
    this.good++
  }
  nomegusta(){
    this.bad++
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
