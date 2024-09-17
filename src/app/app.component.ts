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
  city = 'San Francisco';

  isServerRunning:boolean = true;

  operetingSystems :{id:string, name:string}[] = [
    {id: 'win', name: 'Windows'}, 
    {id: 'osx', name: 'MacOS'}, 
    {id: 'linux', name: 'Linux'}];

    users:{id:number,name:string}[]=[
      {id: 0, name: 'Sarah'}, 
      {id: 1, name: 'Amy'}, 
      {id: 2, name: 'Rachel'}, 
      {id: 3, name: 'Jessica'}, 
      {id: 4, name: 'Poornima'}];
}
