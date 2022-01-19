import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  registerUserData: any ={};
  profile:any[];
  repos: any[];
  username:string;
  company: string;
  // location: any[];

  // interface ErrorContainer {
  //   [prop: string]: string;
  // }

  constructor(
    private profileService: ProfileService) { 

  }

  findProfile(){
  	this.profileService.updateProfile(this.username);
  	this.profileService.getProfileInfo().subscribe((profile:any) => {
  		console.log(profile);
  		this.profile = profile;
  	});
  
  	this.profileService.getProfileRepos().subscribe((repos:any) => {
  		console.log(repos);
  		this.repos = repos;
  	})  	
  }

  ngOnInit() {
  }

}
