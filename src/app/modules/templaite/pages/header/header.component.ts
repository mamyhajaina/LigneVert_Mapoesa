import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hideMenus: boolean | undefined =false;
  
  constructor(
    private element: ElementRef,
  ) { }

  ngOnInit() {
  }
  
  hideMenu(){
    this.hideMenus=!this.hideMenus;
    var $toggle = document.getElementsByTagName('body')[0];
    if(this.hideMenus){
      $toggle.classList.add('toggle-sidebar');
    }else{
      $toggle.classList.remove('toggle-sidebar');
    }
  }

}
