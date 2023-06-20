import axios from 'axios'
import Swal from 'sweetalert2';

export function show_alerta (mensaje, icono, foco=''){
    if(foco !== ''){
        document.getElementById(foco).focus();
    }
    Swal.fire({
        title: mensaje,
        icon: icono,
        customClass: {confirmButton: 'btn btn-primary', popup:'animated zoomIn'},
        buttonsStyling:false
    });
}

export function confirmar(id, nombre){
    var url = 'http://localhost:3001/usuarios/'+id;
    const SwalWithBootstrapButton = Swal.mixin({
        customClass: {confirmButton: 'btn btn-success me-3', cancelButton: 'btn btn-danger'},
        buttonsStyling: false
    });

    SwalWithBootstrapButton.fire({
        title: 'Seguro que desaeas eliminar este usuario: '+nombre,
        text: 'se perdera el dato',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '<i class="fa fa-check"> Si, Eliminar</i>',
        cancelButtonText: '<i class="fa fa-ban"> Cancelar</i>'}).then((result)=>{
            if(result.isConfirmed){
                enviarSolicitud('DELETE', {id:id}, url, 'Usuario Eliminado')
                console.log("se elimino usuario");
            }
            else{
                show_alerta('operacion cancelada', 'info')
            }
        })
}

export function enviarSolicitud(metodo, parametros, url, mensaje) {
    axios({ method: metodo, url: url, data: parametros })
        .then(function(respuesta) {
            var status = respuesta.data[0]['status'];
            if (status === 'success') {
                show_alerta(mensaje, status);
                window.setTimeout(function(){
                    window.location.href='/';
                }, 1000);
                console.log("Usuario eliminado");
            }
            else{
                var listado = '';
                var errores = respuesta.data[1]['errors'];
                Object.keys(errores).forEach(
                    key => listado += errores[key][0]+'.'
                )
                show_alerta(listado, 'errores')
            }
        }).catch(function(error){
            show_alerta('error en la solicitud'+ error)
        })
}
