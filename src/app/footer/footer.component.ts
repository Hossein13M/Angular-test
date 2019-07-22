import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  myName: string;
  myAge: number;
  saveStatus: boolean = false;
  saveMessage: string = "yes it have been saved";
  message:string;
  name:string='';




  constructor() { 
    setTimeout(() => {
      this.saveStatus = true;
    },2000)
  }
  buttonFunctionality(){
    this.message = 'you have clicked on the button';
  }

  ngOnInit() {
  }


  showName(event: Event){
    this.name = (<HTMLInputElement> event.target).value;
  }

}
