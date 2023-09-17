import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  scrolled = false;
  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.scrolled = window.scrollY > 100;
    });
  }
}
