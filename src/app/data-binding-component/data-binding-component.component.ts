import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-binding-component',
  templateUrl: './data-binding-component.component.html',
  styleUrls: ['./data-binding-component.component.css']
})
export class DataBindingComponentComponent {
  name: String = '';
  email: String = '';
 
  imageUrl = 'https://www.mobilelive.ca/wp-content/uploads/2022/08/Angular_Banner.jpg';
  hideImage: any;
  
  isSpecial: boolean = true; //true or false is set based on the condition that I choose.
    toggleSpecial() {  
    this.isSpecial = !this.isSpecial;
  }

  

  logInput() {
    console.log('Name:', this.name);
    console.log('Email:', this.email);
  }
}
