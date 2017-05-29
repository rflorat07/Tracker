import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, Slides, LoadingController, AlertController } from 'ionic-angular';

import { UsuarioProvider } from './../../providers/usuario/usuario';

import { HomePage } from './../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements AfterViewInit {

  @ViewChild(Slides) slides: Slides;

  clave: string = "fher-1";

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private usuarioProvider: UsuarioProvider) {
  }

  ngAfterViewInit() {
    this.slides.lockSwipes(true);
    this.slides.freeMode = false;
    this.slides.paginationType = "progress";
  }

  continuar() {

    let loading = this.loadingCtrl.create({
      content: "Espere por favor..."
    });
    loading.present();

    // Verificar si la clave es valida
    this.usuarioProvider.verifica_usuario(this.clave).then((valido) => {
      loading.dismiss();

      if (valido) {
        // continuar a la siguiente pantalla
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);

      } else {
        this.alertCtrl.create({
          title: "La Clave no es correcta",
          subTitle: "Por favor verifique su clave, o hable con el administrador",
          buttons: ["OK"]
        }).present();
      }

    }).catch(error => {
      loading.dismiss();
      console.error("Error en verifica_usuario: " + JSON.stringify(error));
    });

  }

  ingresar() {
    // Tenemos la clave y vamos al Home
    this.navCtrl.setRoot(HomePage);
  }


}
