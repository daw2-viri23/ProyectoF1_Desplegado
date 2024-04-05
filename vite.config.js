import path from 'path' // Para gestionar directorios

export default {
  // Definimos la carpeta donde buscar cuando se carga la aplicación (donde estará el main.js)
  root: path.resolve(__dirname, 'src'), 
  
  build: {
    rollupOptions: {
        /*
            Opciones de configuración de Rollup externas, serán mergeadas con la configuracion
            interna de Rollup de Vite.
        */
        input: {
            main: path.resolve(__dirname, 'src/index.html'), // Indicamos las páginas que debe analizar
        },
        output: {
            dir: path.resolve(__dirname, 'dist'), //Donde se va a crear el build de nuestra aplicacion
            format: 'es', //Formato de ES modules
        },
    },
    outDir: path.resolve(__dirname, 'dist'),
    minify: false, //( Si no se quiere minificar el build) https://vitejs.dev/config/#build-minify (aplica solo a los JS no CSS)
},
  server: {
    /*port: 8080, */ // Podemos definir el puerto de salida
    hot: true
  }
}