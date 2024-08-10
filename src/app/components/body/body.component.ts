import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  tratamentos = [
    {tratamento: 'limpeza', icone: '/assets/tratamentos/limpeza.png'},
    {tratamento: 'siso', icone: '/assets/tratamentos/dente-de-siso.png'},
    {tratamento: 'implante-unitario', icone: '/assets/tratamentos/implante-unitario.png'},
    {tratamento: 'clareamento', icone: '/assets/tratamentos/clareamento-dental.png'},
    {tratamento: 'protocolo', icone: '/assets/tratamentos/protocolo.png'},
    {tratamento: 'botox', icone: '/assets/tratamentos/botox-preenchimento.png'},
    {tratamento: 'clinica', icone: '/assets/tratamentos/clinica.png'},
    {tratamento: 'pediatria', icone: '/assets/tratamentos/pediatria.png'}
  ];

  ngOnInit() {
    Aos.init({
      duration: 450, 
      easing: 'ease-in-out',
    });
  }

  redirectToWhatsApp(tratamento: any) {
    const phoneNumber = '5519996950437'; // NUMERO PARA REDIRECIONAR MENSAGEM
    const message = `Olá! Gostaria de saber mais sobre o tratamento de ${tratamento.tratamento}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
