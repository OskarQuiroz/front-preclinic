import { Component, OnInit } from '@angular/core';
import { ServiceListUsersService} from './../lista-usuario/service-list-users.service'
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {

  diagnostico = []
  medicamentosAlergicos = []
  //tipoSangre 
  medicamentoHabitual = []
  anio
  existeFicha = false
  constructor(private service : ServiceListUsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loadData()
  }


  loadData(){
    let ficha=this.route.snapshot.params['id'];

    this.service.getFicha(ficha).subscribe(
      (data) =>{
        this.diagnostico = data['ficha'].diagnostico
        this.medicamentosAlergicos = data['ficha'].medicamentosAlergicos
        //this.tipoSangre = data['ficha'].tipoSangre
        this.medicamentoHabitual = data['ficha'].medicamentoHabitual
        this.anio = data['ficha'].anio
        console.log(this.diagnostico)
        console.log(this.medicamentosAlergicos)
        //console.log(this.tipoSangre)
        console.log(this.medicamentoHabitual)
      },
      (error) =>{
        console.log(error)
      }
    )
    this.existeFicha = true
  }
  Redirigir(){
    let ficha=this.route.snapshot.params['dni'];
    this.router.navigate(['../perfil-usuario',ficha])
  }
}
