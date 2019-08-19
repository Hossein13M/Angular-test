import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // TODO: this is the string interpolation
  dataBindingStringInterpolation = 'String Interpolation Hossein';
  getStringInterpolationName() {
    return 'this is a method';
  }
  // this is property binding
  allowToClick = false;
  constructor(){
    setTimeout(() => {
      this.allowToClick = true;
    }, 2000);
  }
  // this is the event binding
  haveBeenClicked = 'it have not been clicked yet!';
  onClickEvent(){
    this.haveBeenClicked = 'yes now you have clicked the button!';
  }
  // this is the fourth step
  typedText = '';
  onUpdateInputName(event: any){
    this.typedText = event.target.value;
  }
  // two way data binding
  twoWayBinding: string = "";
  // onUpdateInputTwoWayBinding(event: any){
  //   this.twoWayBinding = event.target.value;
  // }
}
