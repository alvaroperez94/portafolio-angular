import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
    providedIn: 'root'
})
export class InfoPaginaService {

    info: InfoPagina = {};
    cargada = false;

    equipo: any[] = [];

    constructor(private http: HttpClient) {
        // console.log("info pagina")

        this.cargarInfo();
        this.cargarEquipo();
    }

    private cargarInfo() {
        // Leer el archivo JSON
        this.http.get('assets/data/data-pagina.json')
            .subscribe((resp: InfoPagina) => {
                this.cargada = true;
                this.info = resp;
                // console.log(resp);
            });
    }

    private cargarEquipo() {
        // Cargando datos desde Firebase
        this.http.get('https://angular-html-1da78-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')
            .subscribe((resp: any) => {
                this.equipo = resp;
                // console.log(this.equipo);
            });
    }
}
