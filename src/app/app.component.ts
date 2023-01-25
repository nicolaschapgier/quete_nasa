import { Component } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nasa';
  public imgOfTheDay:string = "";

  constructor(public nasaService: NasaService){}

  ngOnInit():void{
    this.nasaService.getImageOfTheDay().subscribe((picture)=>{
      this.imgOfTheDay = picture.url
    })
  }
}
