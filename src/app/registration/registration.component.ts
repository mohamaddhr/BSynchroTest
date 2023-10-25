import { Component } from '@angular/core';
import {User} from 'src/app/models/UserModel'
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  user:User = {
    Name:"",
    Surname:"",
    CustomerId:0,
    Amount:1,
  };

  constructor(private userService:ApiService, private http: HttpClient,private router:Router
    ) { }

  onSubmit() {
    if(this.user){
      console.log(this.user)
           this.userService.createUser(this.user)
             .subscribe(response => {
      console.log('it is okk', response)
             });
       }   
       else{console.log('onSubmit error')} 
    this.user = {
      Name: '',
      Surname: '',
      Amount: 1,
      CustomerId:0,
    };
  }
}
