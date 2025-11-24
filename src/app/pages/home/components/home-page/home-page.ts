import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero';
import { Contact } from "../contact/contact";
import { Offerings } from "../offerings/offerings";
import { Carousel } from "../carousel/carousel";
import { Announcements } from "../announcements/announcements";
import { Commitment } from "../commitment/commitment";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HeroComponent, Offerings, Carousel, Announcements, Commitment],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}