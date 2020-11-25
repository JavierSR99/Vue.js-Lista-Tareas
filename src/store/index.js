import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/firebase'
import router from '@/router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: [],
    tarea : {nombre: '', id : ''}
  },
  mutations: {
    setTareas(state, tareas) {
      state.tareas = tareas;
    },
    setTarea(state,tarea) {
      state.tarea = tarea;
    },
    eliminarT (state, id) {
      state.tareas = state.tareas.filter( doc => {
        return doc.id != id
      })
    }
  },
  actions: {
    // función que devuelve todos los objetos tareas de la bbdd
    getTareas({ commit }) {
      const tareas = [];
      db.collection('tareas').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let tarea = doc.data();
            tarea.id = doc.id;
            tareas.push(tarea);
          })
        })
      commit('setTareas', tareas);
    },
    //función que devuelve un objeto tarea de la bbdd según un id pasado
    getTarea({ commit }, id) {
      db.collection('tareas').doc(id).get()
      .then(doc => {
        let tarea = doc.data();
        tarea.id = doc.id;
        commit('setTarea', tarea);
      })
    },
    //función editar tarea
    editarTarea ({commit}, tarea) {
      db.collection('tareas').doc(tarea.id).update({
        nombre: tarea.nombre
      })
      .then( () => {
        //alert('Tarea editada correctamente');
        router.push({name: 'inicio'})
      })
    },
    //función agregar tarea
    agregarTarea({ commit },nombre) {
      db.collection('tareas').add({
        nombre: nombre
      })
      .then ( () => {
        router.push({name: 'inicio'})
      })
    },
    //función que elimina una tarea de la bbdd
    eliminarTarea ({commit, dispatch}, id) {
      db.collection('tareas').doc(id).delete()
      .then( () => {
        //alert('Tarea de ID: '+id+' fue eliminada');
        //dispatch('getTareas');
        commit('eliminarT',id);
      })
    }
  },
  modules: {
  }
})
