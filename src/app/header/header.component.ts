import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()USDbuy:number
  @Input()USDsale:number
  @Input()EURbuy:number
  @Input()EURsale:number



}
