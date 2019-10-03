import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adminPortal';

  readonly GET_USER_URL = 'https://jogrtcz86g.execute-api.us-east-2.amazonaws.com/dev/getUsers';

  users : any;

  constructor(private http: HttpClient){}
    
    getUsers(){
      this.users = this.http.get(this.GET_USER_URL)
      console.log(this.users);
    
  }
}
