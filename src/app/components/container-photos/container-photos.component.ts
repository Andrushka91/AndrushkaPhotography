import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-photos',
  templateUrl: './container-photos.component.html',
  styleUrls: ['./container-photos.component.css']
})
export class ContainerPhotosComponent implements OnInit {

  
  photos: any[] = [
    {url: "assets/img/1.jpg"}, 
    {url: "assets/img/2.jpg"}, 
    {url: "assets/img/3.jpg"}, 
    {url: "assets/img/4.jpg"}, 
    {url: "assets/img/5.jpg"}, 
    {url: "assets/img/6.jpg"}, 
    {url: "assets/img/7.jpg"}, 
    {url: "assets/img/8.jpg"},
    {url: "assets/img/10.jpg"},
    {url: "assets/img/11.jpg"},
    {url: "assets/img/12.jpg"},
    {url: "assets/img/13.jpg"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
