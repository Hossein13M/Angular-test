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
    return 'a method';
  }
}
