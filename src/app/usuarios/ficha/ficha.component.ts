import { Component, OnInit } from '@angular/core';
import { ServiceListUsersService} from './../lista-usuario/service-list-users.service'
import { ActivatedRoute, Router} from '@angular/router';
import {LoginService} from './../../login/service/login.service'

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {

  diagnostico = []
  medicamentosAlergicos = []
  idtipoSangre 
  tipoSangre 
  medicamentoHabitual = []
  anio
  existeFicha = false
  constructor(private service : ServiceListUsersService, private route: ActivatedRoute, private router: Router, private login:LoginService ) { }

  ngOnInit(): void {
    this.loadData()
  }


  async loadData(){
    let ficha=this.route.snapshot.params['id'];
    const data = await this.service.getFicha(ficha).toPromise()
    console.log(data)
        this.diagnostico = data['ficha'].diagnostico
        this.medicamentosAlergicos = data['ficha'].medicamentosAlergicos
        this.idtipoSangre = data['ficha'].tipoSangre
        this.medicamentoHabitual = data['ficha'].medicamentoHabitual
        this.anio = data['ficha'].anio

        this.login.tipoSangreEspecifico(this.idtipoSangre).subscribe(
          (data) => {
            console.log(data)
            this.tipoSangre=data['tipo'].representation
            this.existeFicha = true
          }
        )
        
      
/*
    this.service.getFicha(ficha).subscribe(
      (data) =>{
        this.diagnostico = data['ficha'].diagnostico
        this.medicamentosAlergicos = data['ficha'].medicamentosAlergicos
        this.idtipoSangre = data['ficha'].tipoSangre
        this.medicamentoHabitual = data['ficha'].medicamentoHabitual
        this.anio = data['ficha'].anio
        console.log("asdas")
        console.log(data['ficha'])
        console.log(this.medicamentosAlergicos)
        console.log(this.idtipoSangre)
        console.log(this.medicamentoHabitual)
      },
      (error) =>{
        console.log(error)
      }
    )
    setTimeout(()=>{
      this.login.tipoSangreEspecifico(this.idtipoSangre).subscribe(
        (data) => {
          console.log(data)
          this.tipoSangre=data['value']
        }
      ),4000
    })
    
    this.existeFicha = true
  */
 }
  Redirigir(){
    let ficha=this.route.snapshot.params['dni'];
    this.router.navigate(['../perfil-usuario',ficha])
  }
  
}
