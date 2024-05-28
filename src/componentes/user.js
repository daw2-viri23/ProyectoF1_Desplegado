// Importamos la conexión a la base de datos desde './supabase.js'
import { supabase } from './supabase.js'

// Definición de la clase User
export class User {
  // Constructor que asigna propiedades básicas de un usuario
  constructor(id = null, email = null, password = null) {
    this.id = id
    this.email = email
    this.password = password
  }

  // Método estático para crear un nuevo usuario (registro)
  static async create(userData) {
    // Registra un nuevo usuario con Supabase
    const { data, error } = await supabase.auth.signUp(userData)

    // Manejo de errores
    if (error) {
      throw new Error(error.message)
    }

    // Si el usuario se crea correctamente, devuelve una instancia de User con el ID y el email
    console.log('usuario creado correctamente ', data)
    return new User(data.user.id, data.user.email)
  }

  // Método estático para iniciar sesión (recibe un objeto con email y password)
  static async login(userData) {
    // Inicia sesión con Supabase
    const { data, error } = await supabase.auth.signInWithPassword(userData)

    // Manejo de errores
    if (error) {
      throw new Error(error.message)
    }

    // Devuelve una instancia de User con el ID y el email del usuario logueado
    return new User(data.user.id, data.user.email)
  }

  // Método estático para cerrar sesión
  static async logout() {
    // Cierra sesión con Supabase
    const { error } = await supabase.auth.signOut()

    // Manejo de errores
    if (error) {
      throw new Error(error.message)
    }

    // Retorna true si el cierre de sesión fue exitoso
    return true
  }

  // Método estático para obtener el usuario actualmente logueado
  static async getUser() {
    // Obtiene la información del usuario actualmente logueado con Supabase
    const { data: { user } } = await supabase.auth.getUser()

    // Si hay un usuario logueado, devuelve una instancia de User con su ID y email
    if (user) return new User(user.id, user.email)
  }

  // Método para actualizar datos del usuario (no está claro cómo se utiliza actualmente)
  async update(nuevosDatos) {
    const { data, error } = await supabase.auth.updateUser({
      email: this.email,
      password: this.password
    })

    if (error) {
      throw new Error(error.message)
    }
  }
}