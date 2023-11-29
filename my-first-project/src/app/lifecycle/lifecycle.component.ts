import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, DoCheck, OnDestroy{
count: number = 0;
//count: number = Math.floor(Math.random() *100);



ngOnInit() {
 console.log("First render"); // створення

 setTimeout(() => {
  this.increment();
 }, 5000)

 setInterval(() => {
  this.increment()
 }, 1000)
 
}

ngDoCheck() {
  console.log("Changes performed (re-render)")

 if (this.count >= 10) {
  this.count = 0;
 }
}

ngOnDestroy() {
  console.log("Component destroyed") // last render
}

increment() {
  this.count = this.count + 1; //potential re-render
}

}
