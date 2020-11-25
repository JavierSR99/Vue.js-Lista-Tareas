<template>
  <div class="inicio">
    <h1 class="text-center">Lista de tareas</h1>
    <router-link :to="{name : 'agregar'}">
      <button class="btn btn-success btn-block">Agregar</button>
    </router-link>
    <ul class="list-group mt-5">
      <li class="list-group-item" v-for="item of tareas" :key="item.id">
        {{item.nombre}}
        <div class="float-right">
          <router-link :to="{name: 'editar', params: {id : item.id}}">
            <button class="btn btn-warning btn-sm">Editar</button>
          </router-link>
          <button class="btn btn-danger btn-sm mx-2" @click="eliminarTarea(item.id)">Eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Inicio",
  methods: {
    ...mapActions(["getTareas", "eliminarTarea"])
  },
  computed: {
    ...mapState(["tareas"])
  },
  created() {
    this.getTareas();
  }
};
</script>