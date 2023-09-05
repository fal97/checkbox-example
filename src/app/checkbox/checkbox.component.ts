import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router service

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent {

  constructor(private router: Router) {} // Inject the Router service

  checkboxes = [
    { value: 50, checked: false , phrase : "special charges (50)"},
    { value: 50, checked: false , phrase: "3D charges (50)" },
    { value: 25, checked: false , phrase : "3 mm (25)" },
    { value: 96, checked: false, phrase : "Double dipping (96)" },
  ];

  textboxValue = 198;


  goToDestination(): void {
    this.router.navigate(['/bath']);
  }

   updateTextboxValue(checkbox: { value: number; checked: boolean }): void {
    if (checkbox.checked) {
      this.textboxValue += checkbox.value;
    } else {
      this.textboxValue -= checkbox.value;
    }
  }
}
