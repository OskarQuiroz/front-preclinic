import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavVerticalComponent } from './nav-vertical/nav-vertical.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/lista-usuario/usuarios.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { FichaMedicaComponent } from './ficha-medica/ficha-medica.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RolesComponent } from './roles/roles.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { PerfilUsuarioComponent } from './usuarios/perfil-usuario/perfil-usuario.component';
import { FichaComponent } from './usuarios/ficha/ficha.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipe } from './pipes/filter.pipe';
import { PermisosComponent } from './permisos/permisos.component';
import { DiscapacidadesComponent } from './discapacidades/discapacidades.component'; // <-- import the module

@NgModule({
  declarations: [
    AppComponent,
    NavVerticalComponent,
    LoginComponent,
    InicioComponent,
    UsuariosComponent,
    EstadisticaComponent,
    FichaMedicaComponent,
    NotFoundComponent,
    RolesComponent,
    CrearUsuarioComponent,
    PerfilUsuarioComponent,
    FichaComponent,
    FilterPipe,
    PermisosComponent,
    DiscapacidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
