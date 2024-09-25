import { Component, Input, input } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-user',
  template: `
  UserName :{{ username }}
  <p>This user Name is: {{ name }}</p>
  `,
  standalone: true,

})
export class UserComponent {
  username = ' YoungTech ';
  @Input() name = '';
}



@Component({
  selector: 'app-root',
  template: `

   <!-- <app-user name="Aryan" > -->
   <app-child (addItemEvent)="addItem($event)" />
    <p>🐢 all the way down {{ items.length }}</p>

    Hello {{city}} , {{1+1}}
    <section>
    <app-user name="Aryan" />
    </section>
    @if(isServerRunning){
      <div>Yes, the server is running</div>
    }
    @else{
      <div>No, the server is not running</div>
    }
    @for (OS of operetingSystems; track OS.id){
      <p>{{OS.name}}</p>
    }
    @for (user of users; track user.id){
      <p>{{user.name}}</p>
    }
    <!-- contentEditable enables to edit the content of div -->

    <div [contentEditable] = "isEditable">This is a Div</div>
    <button class="btn" (click)="greet()" >click here</button>
    <section (mouseover)="onMouseOver()">There's a secret message for you, hover to reveal:
      {{ message }}
    </section>
    

  `,
  styles: `
    :host {
      color: #a144eb;
    }
    .btn{
      background-color: black;
    color: navajowhite;
    font-size: larger;
    padding: 4px;
    size: auto;
    margin: 22px 100px;
    }
  `,
  standalone: true,
  imports: [UserComponent, ChildComponent]
})
export class AppComponent {
  // ********Component Communication with @Output***********************

  items = new Array();

  addItem(item:string){
    this.items.push(item);
  }
// ********************************************************

  
    message: string = '';
  onMouseOver(){
    this.message = "Way to Go 🚀";
  }

  greet() {
    alert("Welcome to Angular 18 👋");
  }

  city = 'San Francisco';

  isServerRunning: boolean = true;

  isEditable: boolean = true;

  operetingSystems: { id: string, name: string }[] = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'MacOS' },
    { id: 'linux', name: 'Linux' }];

  users: { id: number, name: string }[] = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' }];

}

