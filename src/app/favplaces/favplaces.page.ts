import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favplaces',
  templateUrl: './favplaces.page.html',
  styleUrls: ['./favplaces.page.scss'],
})
export class FavplacesPage implements OnInit {

  constructor(private router: Router) { 
  }



  active: boolean;
  data: any=[];
  

  ngOnInit() {
    this.active= false;
    this.data = JSON.parse(localStorage.getItem('user'));
   console.log('Lugares favoritos del usuario',this.data)
   

  }

  slideClick(id: number){
    this.router.navigate(['seeplace', id ]);
  }

}
