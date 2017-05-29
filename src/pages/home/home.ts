import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { UbicacionProvider } from './../../providers/ubicacion/ubicacion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario: any = {};

  constructor(
    public navCtrl: NavController,
    private ubicacionProvider: UbicacionProvider) {

    this.ubicacionProvider.iniciar_localizacion();
    this.ubicacionProvider.usuario.subscribe((data) => {
      console.log(data);
      this.usuario = data;
    })
  }

}
