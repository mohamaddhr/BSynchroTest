import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  user: any = { Name: '', Surname: '' , Amount:'' , customerId:'' };


  constructor(private userService: ApiService) {}

  searchUser() {

    const customerIdNumber = +this.user.customerId;
  if (!isNaN(customerIdNumber)) {
    this.userService.getUserByCustomerId(customerIdNumber).subscribe((user) => {
      this.user = user;
    });
  }
  }
  deleteUser(){
    const customerIdNumber = +this.user.customerId;
    if (!isNaN(customerIdNumber)) {
      this.userService.deleteUserByCustomerId(customerIdNumber).subscribe(() => {
        this.user = { Name: '', Surname: '', Amount: '', customerId: '' };
      });
    }
  }
  updateUser() {

  }

}
