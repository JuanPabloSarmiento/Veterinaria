import { defineStore } from 'pinia'

interface Usuario {
  nombre:string,
  correo: string,
  contrasena: string
  
}

export const sesion = defineStore('dato', {
  state: () => ({
    elemento: [] as Usuario[],
  }),
  actions: {
    iniciar({ nombre,correo,contrasena }: Usuario) {
      this.elemento[0] = { nombre,correo,contrasena }
      localStorage.setItem("usuario", JSON.stringify(this.elemento[0]))
    },
    cerrar(){
      localStorage.removeItem('usuario')
    },
    cargar(){
      const data = localStorage.getItem("usuario");
      if (data) {
        this.elemento[0] = JSON.parse(data)
      }
    }
  },
});
