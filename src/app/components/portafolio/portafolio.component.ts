import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

  listaProyectos: any[] = [];
  listaDesarrollo: any[] = [];
  listaHabilidades: any[] = [];
  listaExperiencia: any[] = [];
  listaTitulos: any[] = [];
  listaCursos: any[] = [];
  lista: any[] = [];

  constructor(private translate: TranslateService) {
    this.translate.get('proyectos').subscribe((data) => {
      this.listaProyectos = data;
    });
    this.translate.get('herramientas').subscribe((data) => {
      this.listaDesarrollo = data.desarrollo;
      this.listaHabilidades = data.habilidades;
      console.log(this.listaDesarrollo)
    });
    this.translate.get('experiencia').subscribe((data) => {
      this.listaExperiencia = data;
    });
    this.translate.get('educacion').subscribe((data) => {
      this.listaTitulos = data.escuela;
      this.listaCursos = data.certificaciones;
    });
  }


  detalleProyecto(proyecto: any){

  }

}
