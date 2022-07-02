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
 this.mostrardata();


  }

  mostrardata(){
    this.data = JSON.parse(localStorage.getItem('user'));
    console.log('Lugares favoritos del usuario',this.data)
  }


  slideClick(id: number){
    this.router.navigate(['seeplace', id ]);
  }



  deleteplace(id:string){
    this.data = JSON.parse(localStorage.getItem('user'));
    console.log('eliminado')
    let users=this.data.filter((x: { id: string; })=>x.id!=id);
    localStorage.setItem('user',JSON.stringify(users))
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
