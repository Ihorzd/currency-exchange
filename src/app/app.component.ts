import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Card {
  title:string
  text:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private  http: HttpClient){

  }
  USDbuy:number
  USDsale:number
  EURbuy:number
  EURsale:number
  data:any

  
  initCurency(){
    this.http.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .subscribe(response => {
      this.data = response
      this.USDbuy=this.data[0].buy
      this.USDsale=this.data[0].sale
      this.EURbuy=this.data[1].buy
      this.EURsale=this.data[1].sale
      console.log(response)
    })
}
ngOnInit(): void {
    this.initCurency()
}

}
