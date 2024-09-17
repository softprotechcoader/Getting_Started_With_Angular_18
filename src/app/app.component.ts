import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  UserName :{{ username }}`,
  standalone: true,

})
export class UserComponent{
  username = ' YoungTech ';
}



@Component({
  selector: 'app-root',
  template: `
    Hello {{city}} , {{1+1}}
    <section>
    <app-user />
    </section>
  `,
  styles: `
    :host {
      color: #a144eb;
    }
  `,
  standalone: true,
  imports: [UserComponent]
})
export class AppComponent {
  city = 'San Francisco'
}
