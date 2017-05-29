import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements AfterViewInit {

  @ViewChild(Slides) slides: Slides;

  clave: string = "fher-1";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngAfterViewInit() {
    this.slides.lockSwipes(true);
    this.slides.freeMode = false;
    this.slides.paginationType = "progress";
  }

  continuar() {
    // Verificar si la clave es valida
  }

  ingresar() {
    // Tenemos la clave y vamos al Home
  }


}
