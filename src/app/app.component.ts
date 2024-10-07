import { Component, Input, input } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { CommentsComponent } from './comments/comments.component';

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


<!-- *************Deferrable Views********** -->
<div>
      <h1>How I feel about Angular</h1>
      <article>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted. In fact, I think I'll say these exact same
          things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted. In fact, I think I'll say these exact same
          things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted.
        </p>
      </article>

      @defer (on viewport) {
      <app-comments />
      } @placeholder {
      <p>Future comments</p>
      } @loading (minimum 2s) {
      <p>Loading comments...</p>
      }
    </div>
<!-- ********************************************** -->

   <!-- <app-user name="Aryan" > -->
   <!-- ********Event Emittor @output  -->
    <p>🐢 all the way down {{ items.length }}</p>

    <app-child (addItemEvent)="addItem($event)" />
<!-- *********************************** -->
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
  imports: [UserComponent, ChildComponent,CommentsComponent]
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

