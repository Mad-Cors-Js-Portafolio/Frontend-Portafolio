import { Component, Input, OnInit } from '@angular/core';
import { Carousel } from 'src/app/models/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements  OnInit {


 images: Carousel[] = [
  {
    imageSrc:
      'https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    imageAlt: 'nature1',
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    imageAlt: 'nature2',
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1640844444545-66e19eb6f549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    imageAlt: 'person1',
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    imageAlt: 'person2',
  },
];


  selectedIndex = 0;
  autoSlide= true;
  slideInterval= 4000;


  //inicializa
  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }
  //automatizar carrusel
  autoSlideImages(): void{
    setInterval(()=>{
      this.onNextClick();
    },this.slideInterval);
  }
  //boton hacia atras
  onPrevClick(): void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length - 1;
    }else{
      this.selectedIndex--;
    }

    }
  //boton hacia adelante
  onNextClick(): void{
    if(this.selectedIndex === this.images.length - 1){
      this.selectedIndex = 0;
    }else{
      this.selectedIndex++;
    }

    }
  }


