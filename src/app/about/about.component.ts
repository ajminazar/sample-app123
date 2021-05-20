import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';   
import { Router } from '@angular/router';
import {Manager} from '../manager';
import { MANG } from '../mock-manager';     

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  mang=MANG;
  public mgrname: string | null="";

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit(): void {
    let NAME=this.route.snapshot.paramMap.get('name');
    this.mgrname=NAME;
    this.mang=this.mang.filter(res => {
      return (res.name.toLocaleLowerCase().match(this.mgrname!.toLocaleLowerCase()));
    })
  }
  sendMeHome() {
    this.router.navigate(['']);
  }
}
