import { Component, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  @Input() isFormOpen: boolean = false;
  @Output() closeFormEvent = new EventEmitter<void>();
  username: string = '';
  password: string = '';

  constructor(private elementRef: ElementRef) {}

  onDocumentClick(event: MouseEvent) {
    // Check if the click occurred outside the form container and form inputs.
    const formContainer = this.elementRef.nativeElement;
    if (formContainer && !formContainer.contains(event.target)) {
      this.closeForm();
    }
  }

  onFormClick(event: MouseEvent) {
    // Prevent the click event from propagating further when users interact with the form inputs.
    event.stopPropagation();
  }

  closeForm() {
    this.closeFormEvent.emit();
  }

  loginSubmit(event: MouseEvent) {
    event.preventDefault();
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
