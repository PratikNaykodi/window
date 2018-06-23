import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public title="Ass3";
  public name = "Marvellous Infosytems";

  public fun()
  {
    this.name="Button Clicked";
  }
}
