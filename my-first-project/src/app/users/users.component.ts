import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/types';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  //users: {name: string, age: number, obj:{a:number}}[] = [{name: "Igor", age: 23}];
//users: Array<UserInterface> = [];
  searchValue: string = "";
  isSorted: boolean = false;
  //searchResult: Array<UserInterface> = [];

constructor(public usersService: UsersService) {}


  ngOnInit() {
this.usersService.getUsers();

  //   fetch('https://jsonplaceholder.typicode.com/users')
  //  .then(response => response.json())
  // .then(json => this.users = json)

  }
  

 onSortClick(){
  this.isSorted = !this.isSorted
  this.usersService.sortUsers(this.isSorted)
 }

  //users: Array<UserInterface> = []

  //   {

  //     name: 'Igor',

  //     age: 23,

  //     locations: [{ lat: 127271271, lon: 1212121, title: 'Kyiv' },
  //     { lat: 127271271, lon: 1212121, title: 'Kyiv' }],

  //   },

  //   {

  //     name: 'Oleg',

  //     age: 63,

  //     locations: [{ lat: 127271271, lon: 1212121, title: 'Lviv' }],

  //   },

  //   {

  //     name: 'Nastya',

  //     age: 63,

  //     locations: [{ lat: 127271271, lon: 1212121, title: 'Lviv' }],

  //   },

  // ];


  onInput(event: any) {

    console.log('Input', event.target.value);

this.searchValue = event.target.value
this.usersService.searchUsers(this.searchValue, ["name", "email", "phone"]);

    // this.searchResult = this.usersService.users.filter((user) =>

    //   user.name.includes(event.target.value)

    //);

  }


}
