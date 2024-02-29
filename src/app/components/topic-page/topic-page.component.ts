import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic-page.component.html',
  styleUrl: './topic-page.component.scss'
})
export class TopicPageComponent implements OnInit{

  constructor(private router : Router) {

  }

  ngOnInit(): void {
  }

  openHomePage() {
    this.router.navigate(['/'])
  }

  openDetailPage() {
    this.router.navigate(['/topic-detail'])
  }

  


}
