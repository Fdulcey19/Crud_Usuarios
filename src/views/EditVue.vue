<template lang="">
  <div class="row mt-3">
    <div class="col-md-6 mx-auto">
      <div class="card">
        <div class="card-header bg-dark text-white text-center">
          Editar Usuario
        </div>
        <div class="card-body">
          <form @submit="editarUsuario">
            <div class="input-group mb-3">
              <span class="input-group-text rounded-circle"
                ><i class="fa fa-user"></i
              ></span>
              <input
                type="text"
                id="name"
                v-model="name"
                class="form-control rounded-5 ms-2"
                maxlength="50"
                placeholder="Nombre"
                required
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text rounded-circle"
                ><i class="fa fa-envelope"></i
              ></span>
              <input
                type="email"
                id="email"
                v-model="email"
                class="form-control rounded-5 ms-2"
                maxlength="50"
                placeholder="Email"
                required
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text rounded-circle"
                ><i class="fa fa-phone"></i
              ></span>
              <input
                type="text"
                id="phone"
                v-model="phone"
                class="form-control rounded-5 ms-2"
                maxlength="50"
                placeholder="Phone"
                required
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text rounded-circle"
                ><i class="fa fa-city"></i
              ></span>
              <input
                type="text"
                id="city"
                v-model="city"
                class="form-control rounded-5 ms-2"
                maxlength="50"
                placeholder="City"
                required
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text rounded-circle"
                ><i class="fa fa-pen"></i
              ></span>
              <input
                type="text"
                id="user"
                v-model="user"
                class="form-control rounded-5 ms-2"
                maxlength="50"
                placeholder="User"
                required
              />
            </div>
            <div class="d-flex justify-content-center">
              <button type="submit" class="btn btn-success my-2 rounded-4 px-3">
                <i class="fa fa-bookmark me-2"></i> Guardar Datos
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      id: 0,
      name: "",
      email: "",
      phone: "",
      city: "",
      user: "",
      url: 'http://localhost:3001/usuarios/',
    };
  },
  mounted() {
    const route = useRoute();
    this.id = route.params.id;
    this.url = this.url + this.id;
    this.getUsuario(); 
  },
  methods: {
    getUsuario() {
      axios.get(this.url).then(response => {
        const usuario = response.data;
        this.name = usuario.name;
        this.email = usuario.email;
        this.phone = usuario.phone;
        this.city = usuario.city;
        this.user = usuario.user;
      }).catch(error => {
        console.error("Error al obtener el usuario:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al obtener el usuario",
        });
      });
    },
    editarUsuario(e) {
      // Crear el objeto de usuario
      e.preventDefault();
      
      const usuario = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        city: this.city,
        user: this.user,
      };

      // Realizar la solicitud PUT para actualizar el usuario
      axios.put(this.url, usuario)
        .then(() => {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Los datos del usuario se han actualizado",
            showConfirmButton: false,
            timer: 1500,
          });

          // Redirigir a la página de inicio
          this.$router.push("/");
        })
        .catch((error) => {
          console.error("Error al editar el usuario:", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Hubo un problema al editar el usuario",
          });
        });
    },
  },
};
</script>

<style lang="">
    
</style>
