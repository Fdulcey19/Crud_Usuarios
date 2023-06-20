<script>
import axios from "axios";
import { confirmar } from "../funciones.js";
import Swal from "sweetalert2";
import CreateVue from './CreateVue.vue';

export default {
  components: { CreateVue },
  data() {
    return { usuarios: null };
  },
  mounted() {
    this.getUsuarios();
  },
  methods: {
    getUsuarios() {
      axios
        .get("http://localhost:3001/usuarios")
        .then((response) => (this.usuarios = response.data));
    },
    eliminar(id, name) {
      Swal.fire({
        title: "Estas seguro?",
        text: "Deseas eliminar a "+ name,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar usuario",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete("http://localhost:3001/usuarios/" + id);
          location.reload();
        }
      });
      console.log("Eliminar usuario ID:" + name);
    },
  },
};
</script>

<template>
  <div class="d-flex justify-content-center mb-4">
    <router-link to="/create" class="btn btn-success">New User</router-link >
  </div>
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
            <tr v-for="(usu, i) in usuarios" :key="usu._id">
              <td>{{ i + 1 }}</td>
              <td>{{ usu.name }}</td>
              <td>{{ usu.email }}</td>
              <td>{{ usu.phone }}</td>
              <td>{{ usu.city }}</td>
              <td>
                <router-link
                  :to="{ path: '/edit/' + usu._id }"
                  class="btn btn-warning"
                >
                  <i class="fa fa-edit"></i>
                </router-link>
                &nbsp;
                <button
                  class="btn btn-danger"
                  v-on:click="eliminar(usu._id, usu.name)"
                >
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
