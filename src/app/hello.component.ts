import { Component, Input } from '@angular/core';

@Component({
    selector:'hello',
    template:`<h1> hello {{id}}!</h1>`,
    styles:[`h1{font-family :Lato;}`]
})

export class HelloComponent{
    @Input() id:number | undefined;
}