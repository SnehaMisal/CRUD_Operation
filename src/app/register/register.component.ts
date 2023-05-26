import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit{
  ngOnInit(): void { 
  }
  constructor(private route:Router){}
  redirectToLogin(){
     this.route.navigate(['login'])
  }
  reactiveform= new FormGroup({
    userName:new FormControl('', Validators.required),
    email:new FormControl('', Validators.compose([Validators.required, Validators.email])),
    mobile:new FormControl('', Validators.required),
    password:new FormControl('', Validators.required),
  })
  
  SaveUser(){

  }
}

