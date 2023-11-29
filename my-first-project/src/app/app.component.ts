import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'my-first-project';

  obj = {city: "Kiev", lat: 123, lon: 4566}
  numbers: number[] = [1,2,3,4,5,6,7,8,9];
  user = { name: "igor", age: 23}
  users: {name: string, age: number}[] = [{ name: "igor", age: 23}, { name: "Oleg", age: 23}, { name: "igor", age: 23}]

// main1(a: number, b: number) {
//   return a + b;

// }

// main2(nums: number[]) {
//   return nums.reduce((acc, n) => acc +=n , 0)

// }

// main3(nums: Array<number>) {
//   return nums.reduce((acc, n) => acc +=n , 0)

// }

// main4(nums: Array<number | string>) {
//   return nums.reduce((acc, n) => acc += (typeof n === "string" ? + n : n , 0)

// }
counter: number = 0;

// mutable
increment() {
this.counter= this.counter + 1;
}

decrement() {
  this.counter= this.counter - 1;

}



}


