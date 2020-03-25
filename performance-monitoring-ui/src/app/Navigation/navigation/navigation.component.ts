import { Component, OnInit } from '@angular/core';
import {
  Directive,
  HostBinding,
  HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
  private expanded = false;

// @HostListener('document:click') onClickWindow() {
//   const checkboxes = document.getElementById('checkboxes');
//   if (this.expanded) {
//     checkboxes.style.display = 'none';
//     this.expanded = false;
//   }
// }


showCheckboxes() {
  const checkboxes = document.getElementById('checkboxes');
  if (!this.expanded) {
      checkboxes.style.display = 'block';
      this.expanded = true;
    } else {
      checkboxes.style.display = 'none';
      this.expanded = false;
    }
}

constructor() { }

ngOnInit() {
  }
}
