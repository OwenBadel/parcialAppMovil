import { Component, OnInit,  } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Storage } from 'src/app/providers/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
    standalone: false

})
export class LoginPage implements OnInit {
  
  emailControl: FormControl = new FormControl ('', [Validators.required, Validators.email]);
  passwordControl: FormControl = new FormControl ('', [Validators.required, Validators.minLength(4)]);

  constructor(private storageProvider:Storage) { }

  ngOnInit() {
  }

  onSubmit() {
  const userData = {

    email: this.emailControl.value,

    password: this.passwordControl.value
  };
  if (this.emailControl.invalid) {
    alert ('El correo electrónico no es válido');
    return;
  }
  if (this.passwordControl.invalid) {
    alert ('La contraseña debe tener al menos 4 caracteres');
    return;
  }


  this.storageProvider.set('userData', JSON.stringify(userData)); 
  alert ('Datos guardados en el almacenamiento local');
  

  }
}