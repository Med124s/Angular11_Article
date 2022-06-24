import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorage } from 'src/app/LocalStorage/token.storage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _tokenService:TokenStorage,private _router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    // this._tokenService.signOut();
    // // window.location.reload();
    // this._router.navigateByUrl("/auth/login");

  }

}
