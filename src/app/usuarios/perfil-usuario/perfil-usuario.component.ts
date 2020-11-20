import { Component, OnInit } from '@angular/core';
import { ServiceListUsersService} from './../lista-usuario/service-list-users.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  informacion :any

  constructor( private service : ServiceListUsersService, private route: ActivatedRoute, ) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    let dni=this.route.snapshot.params['dni'];
    this.service.getUser(dni).subscribe(
      (data) =>{
        this.informacion = data['user']
        console.log(this.informacion)
      },
      (error) =>{
        console.log(error)
      }
    )
  }

}
