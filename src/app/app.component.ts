import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router , NavigationEnd, RouterModule} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    HeaderComponent, 
    RouterModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  currentUrl:string = '';
  isVisibleBanner:boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event:any) => {
      if(event instanceof NavigationEnd) {
        this.currentUrl = event.url
        console.log('Current Url: ', this.currentUrl)

        this.isVisibleBanner = this.currentUrl === '/topic';
        
      }
    })
  }


  ngOnInit() {
  
  }



}