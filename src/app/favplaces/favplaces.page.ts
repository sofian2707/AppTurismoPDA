import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-favplaces',
  templateUrl: './favplaces.page.html',
  styleUrls: ['./favplaces.page.scss'],
})
export class FavplacesPage implements OnInit {

  constructor(private router: Router, public toastController: ToastController) { 
  }



  active: boolean;
  data: any=[];
  

  ngOnInit() {
  this.active= false;
  this.data = JSON.parse(localStorage.getItem('user'));
  console.log('Lugares favoritos del usuario',this.data)
  console.log(localStorage.getItem('user').length) 



  }

  mostrartemplate(){
    this.active= true;

  }



  slideClick(id: number){
    this.router.navigate(['seeplace', id ]);
  }


  deleteplace(){
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Lugar eliminado de favoritos',
      duration: 2000,
      color: 'tertiary',

    });
    toast.present();
  }

}
