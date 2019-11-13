import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username, password) {

  }

  logout() {
    
  }

  getJson() {
    var file = "../users.json";
    var myObj;
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            myObj = JSON.parse(this.responseText);
        }
    };
    xmlhttp.open("GET", file, true);
    xmlhttp.send();
    return myObj
  }
}
