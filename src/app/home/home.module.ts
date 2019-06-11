import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HomePage } from './home.page';

import { Observable } from 'rxjs';

@Component({
  selector: 'HomePage',
  templateUrl: 'home.page.html',
  styleUrls: ['./home.page.scss'],
})

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})

@Injectable()
export class HomePageModule {
  private API_URL = 'http://localhost:8082/maquina-de-busca/'
  results: Observable<any>;

  constructor(public http: Http) { }
  
  links: any[];

  pegarLinks() {

      let url = this.API_URL + 'link/link';

      this.http.get(url)
        .subscribe((result: any) => {
          this.links = result;
        })
  }
}
