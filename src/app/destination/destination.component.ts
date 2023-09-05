import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent {
  constructor(private router: Router) {} // Inject the Router service

  checkboxes = [
    { value: 50, checked: false , phrase : "special charges (50)"},
    { value: 25, checked: false , phrase : "3 mm (25)" },
    { value: 96, checked: false, phrase : "Hollow charges (25)" },
  ];

  textboxValue = 198;


  goToDestination(): void {
    this.router.navigate(['/']);
  }

   updateTextboxValue(checkbox: { value: number; checked: boolean }): void {
    if (checkbox.checked) {
      this.textboxValue += checkbox.value;
    } else {
      this.textboxValue -= checkbox.value;
    }
  }
}
