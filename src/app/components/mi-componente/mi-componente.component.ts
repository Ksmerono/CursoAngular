import { Component, OnInit  } from "@angular/core";

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.html',
    styleUrls: ['./mi-componente.scss']

})

export class MiComponente implements OnInit {

    public titulo: string="";
    public comentario: string="";
    public year: number= 0;
    public edad:number= 18;
    public nombres:Array<string>;




    constructor(){
        this.titulo = "Mi componente rechulon"
        this.comentario="Este es mi primer componente"
        this.year= 2022;
        this.nombres=['Kevin',' Jorge', 'Jordi', 'Gemma'];

        console.log("Componente Cargado")
    }

    aumentarEdad(){
      this.edad++;
    }
    disminuirEdad(){

      if (this.edad > 0){
        this.edad--;
      }

    }



    ngOnInit(): void {}
}
