import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value,arg): any {
    if(arg === '' || arg.length<1) return value;
    const resultado = []
    for (let user of value){
      if(user.nombres.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultado.push(user)
      }
      if(user.apellidos.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultado.push(user)
      }
      if(user.dni.indexOf(arg) > -1){
        resultado.push(user)
      }

      if(user.codigo.indexOf(arg) > -1){
        resultado.push(user)
      }
    }
    return resultado
  }

}
