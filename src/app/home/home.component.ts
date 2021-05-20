import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import {Manager} from '../manager';
import { MANG } from '../mock-manager';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {

  heroes=HEROES;
  selectedHero?: Hero;
  ID : string="";
  edited=false;
  
/*
  itemCount : number=4;
  btnText: string="Add an item";
  goalText: string ='My first life goal';
  goals:string[] = ['My first life goal', 'I want to climb a mountain', 'Go ice skiing'];
  */
  constructor() { }

  ngOnInit(): void {
   /* this.itemCount=this.goals.length;*/
  }
  /*
  addItem(){
    this.goals.push(this.goalText);
    this.goalText="";
    this.itemCount=this.goals.length;
  }
  removeItem(i: number) {
    this.goals.splice(i, 1);
  }*/
  onSelect(hero:Hero): void{
    this.selectedHero=hero;
  }
  Search(){
    this.ID=((document.getElementById("getdata")as HTMLInputElement).value);

   if(this.ID != ""){
    this.edited=true;
      this.heroes=this.heroes.filter(res => {
        return (res.id.toLocaleLowerCase().match(this.ID.toLocaleLowerCase()));
      })
    }

    else if(this.ID == ""){
      this.ngOnInit();
    }
   
  }
 
  
}
