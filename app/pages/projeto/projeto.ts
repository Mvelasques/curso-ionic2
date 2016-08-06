import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/projeto/projeto.html',
})
export class ProjetoPage {

  user: string = 'Bem vindo';

  constructor(private nav: NavController) {}

  showAlert () {
    let alert = Alert.create ({
      title: 'alert test',
      message: 'Mensagem de alerta',
      inputs: [
        {
          name: "nome",
          placeholder: "Digite seu nome"
        }
      ],
      buttons: [
        {
          text: "Cancelar"
        },
        {
          text: "Ok",
          handler: data => {
            this.user = `Olá, ${data.nome}`;
          }
        }
      ]
    });

    this.nav.present(alert)
  }

}
