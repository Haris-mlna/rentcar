import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent {
  isMobileScreen = false;
  isFormOpen = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobileScreen = window.innerWidth <= 768;
  }

  openForm() {
    this.isFormOpen = !this.isFormOpen;
  }

  closeForm() {
    this.isFormOpen = false;
  }
}
