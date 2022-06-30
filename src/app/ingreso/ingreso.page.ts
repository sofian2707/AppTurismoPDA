import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiplacesService } from '../services/apiplaces.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  
  constructor(private router: Router, private service: ApiplacesService) { }


  
    ngOnInit() {
      this.verTodo();

    }

//Arreglos
todos:any = [];
searchedPlace: any;



  //VARIABLE FILTER VACIA
  filter: string = "";

  
  
    option={
      slidesPerView: 2,
      spaceBetween: 10,
    }
    
    slideClick(id: number){
      this.router.navigate(['seeplace', id ]);
    }
    
  
  
  //FUNCIONES CAMBIAN VALOR DE FILTER 
  verTodo() {
    this.filter = "todos";
    this.service.getTodos().subscribe(res=>{
      this.todos= res;
      this.searchedPlace = this.todos;
    })
  }

  verLagos() {
    this.filter = "lagos"
    this.service.getTodos().subscribe(res=>{
      this.todos= res.filter((x: { type: string; })=>x.type==this.filter);
    })
    
  }

  verRios() {
    this.filter = "rios";
   
  }

  verBares() {
    this.filter = "bares";
   
  }
  verHoteles() {
    this.filter = "hoteles";
   
  }

  verCamping() {
    this.filter = "camping";
   
  }

  verRestaurant() {
    this.filter = "restaurant";
    
    
  }
  verMiradores() {
    this.filter = "miradores";
   
  }


  searchplace(event: any){
    const text = event.target.value;
    this.searchedPlace = this.todos;

    if(this.filter="todos"){
    if(text && text.trim() != ''){
      this.searchedPlace = this.searchedPlace.filter((todos: any)=>{
        return(todos.nombre.toLowerCase().indexOf(text.toLowerCase()) > 1)
      })}

    }
    
   

  }
  
  
}