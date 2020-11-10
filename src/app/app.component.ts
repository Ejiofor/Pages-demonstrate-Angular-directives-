import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 1;
  images = [
    {
      title: 'by the beach side',
      url: 'https://unsplash.com/photos/5brvJbR1Pn8'
    },
    {
      title: 'by the beach side',
      url: 'https://unsplash.com/photos/5brvJbR1Pn8'
    },
    {
      title: 'by the beach side',
      url: 'https://unsplash.com/photos/5brvJbR1Pn8'
    },
    {
      title: 'by the beach side',
      url: 'https://unsplash.com/photos/5brvJbR1Pn8'
    },
    {
      title: 'by the beach side',
      url: 'https://unsplash.com/photos/5brvJbR1Pn8'
    },
    {
      title: 'by the beach side',
      url: 'https://unsplash.com/photos/5brvJbR1Pn8'
    },
    {
      title: 'by the beach side',
      url: 'https://unsplash.com/photos/5brvJbR1Pn8'
    },
    {
      title: 'by the beach side',
      url: 'https://unsplash.com/photos/5brvJbR1Pn8'
    },
    {
      title: 'by the beach side',
      url: 'https://unsplash.com/photos/5brvJbR1Pn8'
    },
    {
      title: 'by the restaurant side',
      url: 'https://unsplash.com/photos/nmpW_WwwVSc'
    },
    {
      title: 'by the garden side',
      url: 'https://unsplash.com/photos/bYaqZ8WdoVA'
    }
  ];

  checkWindowIndex(index: number){
    return Math.abs(this.currentPage - index) < 5;
  }
}
