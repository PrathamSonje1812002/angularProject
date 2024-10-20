import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structure-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structure-directives.component.html',
  styleUrl: './structure-directives.component.css',
})
export class StructureDirectivesComponent {
  isDivVisible: boolean = true;
  isDivToggle: boolean = true;
  num1: string = '';
  num2: string = '';
  isActiveCheckbox: boolean = false;
  selectedCountry: string = '';

  cityArray: string[] = ['Pune', 'Mumbai', 'Nashik', 'Nagpur'];
  showDiv() {
    this.isDivVisible = true;
  }
  hideDiv() {
    this.isDivVisible = false;
  }
  divToggle() {
    this.isDivToggle = !this.isDivToggle;
  }
  checkBox() {
    this.isActiveCheckbox = !this.isActiveCheckbox;
  }
}
