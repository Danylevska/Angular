import { Component, Input, OnInit } from '@angular/core';
import { CompanyIntreface, GeoInterface, AdressInterface, UserInterface} from 'src/types';
import { UsersService } from '../users.service';
import { execlude, set } from 'src/utils/object';

//type UserWithoutFieldsInterface = Omit<UserInterface, "address" | "geo" | "company">

type UnionUserType =

  | keyof Omit<UserInterface, 'address' | 'company'>

  | keyof Omit<AdressInterface, 'geo'>

  | keyof GeoInterface

  | keyof CompanyIntreface;

type MergedUserType = Omit<UserInterface, 'address' | 'company'> &

  Omit<AdressInterface, "geo"> &

  GeoInterface &

  CompanyIntreface;

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.css']
})
export class UserEditFormComponent implements OnInit{
@Input() user: UserInterface | null = null;
//@Input() editFields: (keyof UserInterface)[] = [];
//@Input() editFields:Array<keyof UserWithoutFieldsInterface> = [];
@Input() editFields: Array<UnionUserType> = [];

mergedUser: MergedUserType | null = null;

constructor(public usersService: UsersService){

}

ngOnInit() {
  this.editFields = this.editFields.map((key) =>
   this.getDataFromUserFields(key)).flat() as any;

   this.mergedUser = {
    ...execlude(this.user, ['address', 'company']),
    ...execlude(this.user!.address, ['geo']),
    ...this.user!.address.geo,
    ...this.user!.company
  
  };
  
  //console.log(this.mergedUser, "MergedUser")
}

onInput(event: Event) {
const input = event.target! as HTMLInputElement;
const inputName = input.name as keyof UserInterface;
//const inputValue = input.value!;

//this.user![inputName] = input.value as never;
set(this.user, inputName, input.value);
console.log(this.user, "User");
console.log(this.usersService.users, "USERS");

}

getDataFromUserFields(key: UnionUserType) {
  const value = this.user![key as keyof UserInterface];

  if(value && typeof value === "object") {
    return Object.keys(value);
  }
  return key;
}

// getFieldUserData(key:string) {
// return this.user![key as keyof UserInterface] ||
// this.user!.address[key as keyof AdressInterface] ||
// this.user!.address.geo[key as keyof GeoInterface] ||
// this.user!.company[key as keyof CompanyIntreface]
// }

getFieldUserData(key: string) {
//const obj = execlude(this.user, ["address", "company"])


  return (
    this.user![key as keyof UserInterface] ||
    (typeof this.user!.address[key as keyof AdressInterface] !== 'object'
      ? this.user!.address[key as keyof AdressInterface]
      : this.user!.address.geo[key as keyof GeoInterface]) ||
    // this.user!.address.geo[key as keyof GeoInterface] ||
    this.user!.company[key as keyof CompanyIntreface]
  );
}

}
