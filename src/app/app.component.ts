import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
listEstudiantes: any[]=[
{nombre:'Ricky Iza',estado:'Promocionad'},
{nombre:'Ad Iza',estado:'Promocionad'},
{nombre:'Ridddcky Iza',estado:'Promocionado'},
{nombre:'Alex Iza',estado:'Libre'},
]
mostrar=true;
toogle():void{
this.mostrar= !this.mostrar
}
}

