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
    this.service.getTodos().subscribe(res=>{
      this.todos= res.filter((x: { type: string; })=>x.type==this.filter);
    })
   
  }

  verBares() {
    this.filter = "bares";
    this.service.getTodos().subscribe(res=>{
      this.todos= res.filter((x: { type: string; })=>x.type==this.filter);
    })
   
  }
  verHoteles() {
    this.filter = "hoteles";
    this.service.getTodos().subscribe(res=>{
      this.todos= res.filter((x: { type: string; })=>x.type==this.filter);
    })
   
  }

  verCamping() {
    this.filter = "camping";
    this.service.getTodos().subscribe(res=>{
      this.todos= res.filter((x: { type: string; })=>x.type==this.filter);
    })
   
  }

  verRestaurant() {
    this.filter = "restaurant";
    this.service.getTodos().subscribe(res=>{
      this.todos= res.filter((x: { type: string; })=>x.type==this.filter);
    })
    
    
  }
  verMiradores() {
    this.filter = "miradores";
    this.service.getTodos().subscribe(res=>{
      this.todos= res.filter((x: { type: string; })=>x.type==this.filter);
    })
   
  }


  searchplace(event: any){
    const text = event.target.value;
    this.searchedPlace = this.todos;

  
    if(text && text.trim() != ''){
      this.todos = this.todos.filter((todos: any)=>{
        return(todos.nombre.toLowerCase().indexOf(text.toLowerCase()) > 1)
      })}else{
        if(this.filter=='todos'){
          this.verTodo();
        }
        else if(this.filter=='lagos'){
          this.verLagos();
        }else if(this.filter=='rios'){
          this.verRios();
        } else if(this.filter=='bares'){
          this.verBares();
        } else if(this.filter=='hoteles'){
          this.verHoteles();
        } else if(this.filter=='camping'){
          this.verCamping();
        } else if(this.filter=='restaurant'){
          this.verRestaurant();
        } else if(this.filter=='miradores'){
          this.verMiradores();
        }
      }

    


  }
  
  
}