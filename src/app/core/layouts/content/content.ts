import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from "../footer/footer";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class ContentComponent {

}