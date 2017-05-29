import { Injectable } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { UsuarioProvider } from './../usuario/usuario';

@Injectable()
export class UbicacionProvider {

  usuario: FirebaseObjectObservable<any[]>;

  constructor(
    private geolocation: Geolocation,
    private afDB: AngularFireDatabase,
    private usuarioProvider: UsuarioProvider) {
    this.usuario = this.afDB.object("/usuarios/" + this.usuarioProvider.clave);
  }

  iniciar_localizacion() {
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      this.usuario.update({ lat: data.coords.latitude, lng: data.coords.longitude })
    });
  }

}
