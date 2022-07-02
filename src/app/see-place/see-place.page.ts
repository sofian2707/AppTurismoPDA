import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiplacesService } from '../services/apiplaces.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { coment } from '../../environments/coments';
import { Location } from '@angular/common';


@Component({
  selector: 'app-see-place',
  templateUrl: './see-place.page.html',
  styleUrls: ['./see-place.page.scss'],
})
export class SeePlacePage implements OnInit {


  formCreate: FormGroup;

  
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
  maps:string;
  comentariosAct: coment[] =[];
  comentarios: any= [];
  likenolike:boolean;


  constructor(
    private activatedRoute: ActivatedRoute, 
    public http: HttpClient, 
    public service: ApiplacesService,
    private formbuilder: FormBuilder,
    public toastController: ToastController,
    private router: Router,
    public _location: Location
    ) {
    
    this.formCreate = formbuilder.group({
      "nombrecoment": new FormControl('',[
        Validators.required
      ]),
      "comentario": new FormControl('',[
        Validators.required
      ]),
      });
   }

  ngOnInit() {

    this.getComent();
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
      this.maps= this.todos[this.finalId].maps;
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
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Lugar guardado en tus favoritos',
      duration: 2000,
      color: 'secondary',

    });
    toast.present();
  }

  
  megusta(){
  this.good++;
   
    
  }
  
  nomegusta(){
  
  this.bad++;

  }

  formcoment(){
    let formData = this.formCreate.value;
    this.comentariosAct.push(formData);
    this.service.createComentario(formData).subscribe(data =>{
      console.log(data);
      this.refresh();

    })
  }

  getComent() {
    this.service.getComentarios().subscribe((response) => {
      this.comentarios = response
 })}

 refresh(): void { window.location.reload(); }

 
 
 async presentToastDelete() {
  const toast = await this.toastController.create({
    message: 'Comentario eliminado',
    duration: 1000,
    color: 'secondary',
    position: "top" ,

  });
  toast.present();
}
  
 deletecoment(id: string){
  this.service.deleteComent(id).subscribe(
    data => {
    this.presentToastDelete();
    this.service.getComentarios().subscribe(data =>{
      console.log(data)
      this.comentarios=data;
    })
    },
    error => {
    console.log("Error", error);
    }
    );

}


}