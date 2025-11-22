import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  participantes = [
    {
      nombre: 'Miguel Bazaldúa',
      rol: '',
      ruta: '/miguel-bazaldua',
      foto: 'https://scontent.fntr1-2.fna.fbcdn.net/v/t39.30808-1/499606829_2145734109229075_1365259080618908167_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEA5_b5BOCkqFtczWE7cJtYM2TohtKJXXszZOiG0olde1obbFfR6KMHWEzR0vCL7qSEyB5SO1TlXTyWDuvkqoNU&_nc_ohc=qCn_-yW4gWEQ7kNvwGgiPQI&_nc_oc=AdkhocIIA8aiZz0E98bFoXkuBO4WDU1FNs93kqLGYtAW60NpGKcY0hY6GTKxfbsH06S5jcc9bpBfmnEnYCBiq2ge&_nc_zt=24&_nc_ht=scontent.fntr1-2.fna&_nc_gid=DR_WkeZyawpAUfiu-YSLqw&oh=00_AfjhRrX2efccga7XMtUJ3NesonGWvxF7J6CKdSdPgl44Nw&oe=691324A8'
    },
    {
      nombre: 'Marco Sánchez',
      rol: '',
      ruta: '/marco-sanchez',
      foto: ''
    },
    {
      nombre: 'Persona 3',
      rol: 'Persona 3',
      ruta: '',
      foto: 'https://i.imgur.com/E2M6Z5Q.png'
    },
    {
      nombre: 'Persona 4',
      rol: 'Persona 4',
      ruta: '',
      foto: 'https://i.imgur.com/lk6iBzG.png'
    },
    {
      nombre: 'Persona 5',
      rol: 'Persona 5',
      ruta: '',
      foto: 'https://i.imgur.com/Kj0hM7b.png'
    },
    {
      nombre: 'Persona 6',
      rol: 'Persona 6',
      ruta: '',
      foto: 'https://i.imgur.com/9M1yPz2.png'
    }
  ];
}
