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
    var url = 'https://jsonplaceholder.typicode.com/users/'+id;
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