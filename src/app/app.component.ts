import { Component,OnInit} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    $(window).on('load', function () {
      $('body').addClass('loaded');
      $(this).attr('data-image-src','assets/img/hero.jpg');
    });
  }
  title = 'photography';
}

 
