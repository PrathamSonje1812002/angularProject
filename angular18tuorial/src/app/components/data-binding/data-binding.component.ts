import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  // string, number, boolean, date
  courseName: string = 'Angular 18';
  inputValue = 'Checkbox';
  rollNo: number = 123;
  isIndian: boolean = true;
  currentDate: Date = new Date();
  inputType: string = 'radio';
  firstName = signal('Pratham Sonje');
  constructor() {}

  changeSignalName() {
    // this.firstName.set('Swami Sonje');

    this.firstName() === 'Pratham Sonje'
      ? this.firstName.set('Swami Sonje')
      : this.firstName.set('Pratham Sonje');
  }
}
