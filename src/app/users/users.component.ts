import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  // public user = {      // one object
  //   name: 'Armen',
  //   lastname : 'Gabrielyan'
  // };
  public users = [
    {
        name: 'Armen',
        lastname : 'Gabrielyan'
    },
    {
      name: 'Artur',
      lastname : 'Khachents'
    },
    {
      name: 'Tigran',
      lastname : 'Abgaryan'
    }
  ];
  public myClass;
  public fs: Number;
  public event: string;
  public us: object;
  public firstName: string;
  public lastName: string;
  public age: number;
  public res;
  public response;
  public myImage: number;
  public  url = 'https://admin.factorfan.com/api/favorites';

  constructor(private http: HttpClient) {
    http.get(this.url).subscribe(result => {
      this.res = result;
      this.response  = this.res.data.games;
      console.log(this.response);
    }, error => console.error(error));
  }

  Cilck() {
  }
  ngOnInit() {
  }

  ChangeColor(color) {
    // console.log(this.users);
    this.fs = 30;
    this.myClass = color;
     setTimeout(() => {
       this.myClass = 'green';
     }, 2000 );
  }
  getValue() {
    this.us = {
      firstName : this.firstName,
      lastName : this.lastName,
      age : this.age
    }
    setTimeout(() => {
      console.log(this.us);
    }, 2000 );
  }

}
