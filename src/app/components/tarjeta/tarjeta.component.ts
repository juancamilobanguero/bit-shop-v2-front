import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
   @Input() titulo:string = ""
   @Input() descripcion:string= ""
   @Input() btn:string=""
   @Input() img:string=""

   buyItem(): void{
    alert("elemento comprado")
    return
   }
}
