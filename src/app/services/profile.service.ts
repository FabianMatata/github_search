import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http'
import 'add/operator/map';
import { map } from 'rxjs/operators'

@Injectable()
export class ProfileService {

  private username:string;
  private clientid = '';
  private clientsecret = '';

  constructor(private http:HttpClient) { 
  	console.log("service is now ready!");
  	this.username = 'FabianMatata';
  }

  getProfileInfo(){
  	return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
      .pipe(
  	map(res=> res.json());
  }

  getProfileRepos(){
  	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
      .pipe(
  	map(res => res.json());
      }
      

  updateProfile(username:string){
  	this.username = username;
  }

}
