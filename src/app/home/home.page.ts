import { Component, OnInit } from '@angular/core';
import { Database, ref, object, set } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  espacios: { [key: string]: boolean } = {
    'banio': false,
    'cocina': false,
    'comedor': false,
    'dormitorio1': false,
    'dormitorio2': false,
    'sala': false
  };

  constructor(private database: Database) {}

  ngOnInit() {
    const route = ref(this.database, '/casa/');
    object(route).subscribe(attributes => {
      const valores_db = attributes.snapshot.val();
      console.log(valores_db);

      if (valores_db) {
        Object.keys(this.espacios).forEach(key => {
          this.espacios[key] = (valores_db[key] !== undefined) ? valores_db[key] : false;
        });
      } else {
        console.log("No data available");
      }
    });
  }

  toggleLuces(espacio: string) {
    const nuevoEstado = !this.espacios[espacio];
    const route = ref(this.database, `/casa/${espacio}`);
    
    // Actualizar el estado en Firebase
    set(route, nuevoEstado).then(() => {
      // Una vez que se actualice en Firebase, actualizamos el estado local
      this.espacios[espacio] = nuevoEstado;
    }).catch(error => {
      console.error("Error updating data:", error);
    });
  }
}
