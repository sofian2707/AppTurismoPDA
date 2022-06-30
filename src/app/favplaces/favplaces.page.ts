import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favplaces',
  templateUrl: './favplaces.page.html',
  styleUrls: ['./favplaces.page.scss'],
})
export class FavplacesPage implements OnInit {

  constructor() { 
  }



  active: boolean;
  data: any=[];
  

  ngOnInit() {
    this.active= false;
    this.data = JSON.parse(localStorage.getItem('user'));
   console.log('Lugares favoritos del usuario',this.data)
   
    

  }

}
