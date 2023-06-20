<template lang="">
  <div class="row mt-3">
    <div class="col-md-6 mx-auto">
      <div class="card">
        <div class="card-header bg-dark text-white text-center">
          Crear Usuario
        </div>
        <div class="card-body">
          <form @submit="crearUsuario">
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
import router from '@/router'

export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      city: "",
      user: "",
    };
  },
  methods: {
    crearUsuario(e) {
      e.preventDefault();

      const usuario = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        city: this.city,
        user: this.user,
      };

      axios
        .post("http://localhost:3001/usuarios", usuario)
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Los datos se han guardado exitosamente",
            showConfirmButton: false,
            timer: 1500,
          });
          // Limpiar los campos del formulario
          this.name = "";
          this.email = "";
          this.phone = "";
          this.city = "";
          this.user = "";
          router.push('/')
        })
        .catch((error) => {
          console.error("Error al guardar el usuario:", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Hubo un problema al guardar el usuario",
          });
        });
    },
  },
};
</script>

<style lang=""></style>
