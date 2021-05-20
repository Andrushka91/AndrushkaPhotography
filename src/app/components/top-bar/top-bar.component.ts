import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(window).on('load', function () {
      $('body').addClass('loaded');
    });
  }
}
