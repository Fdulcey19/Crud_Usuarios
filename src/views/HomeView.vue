<script>

import axios from "axios";
import {confirmar} from '../funciones.js'

export default {
  data() {
    return { usuarios: null };
  },
  mounted(){
    this.getUsuarios();
  },
  methods: {
    getUsuarios(){
      axios.get("https://jsonplaceholder.typicode.com/users").then(
        response =>(
          this.usuarios = response.data
        )
      )
    },
    eliminar(id,nombre){
      confirmar(id,nombre)
    }
  },
};

</script>

<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Telefono</th>
              <th>Ciudad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-for="usu, i in usuarios" :key="usu.id">
              <td>{{i+1}}</td>
              <td>{{usu.name}}</td>
              <td>{{ usu.email }}</td>
              <td>{{ usu.phone }}</td>
              <td>{{ usu.address.city }}</td>
              <td> <router-link :to="{path:'/edit/' + usu.id}" class="btn btn-warning"> 
                <i class="fa fa-edit"></i> 
              </router-link> 
              &nbsp;
              <button class="btn btn-danger" v-on:click="eliminar(usu.id, usu.name)">
                <i class="fa fa-trash"></i>
              </button>
            </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


