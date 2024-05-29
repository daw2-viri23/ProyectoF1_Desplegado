import { supabase } from './supabase.js';

export class Perfil {
  constructor({
    id = null,
    created_at = null,
    user_id = null,
    nombre = null,
    apellidos = null,
    email = null,
    password = null,
    avatar = 'default_avatar.png',
    estado = 'activo',
    rol = 'registrado',
  }) {
    this.id = id;
    this.created_at = created_at;
    this.user_id = user_id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.estado = estado;
    this.rol = rol;
  }

  static async getAll() {
    const { data: perfiles, error } = await supabase
      .from('perfiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    return perfiles.map((perfil) => new Perfil(perfil));
  }

  static async getById(id) {
    const { data: perfil, error } = await supabase
      .from('perfiles')
      .select('*')
      .eq('id', id);

    if (error) {
      throw new Error(error.message);
    }

    return new Perfil(perfil[0]);
  }

  static async getByUserId(userId) {
    const { data: perfil, error } = await supabase
      .from('perfiles')
      .select('*')
      .eq('user_id', userId);

    if (error) {
      throw new Error(error.message);
    }

    return new Perfil(perfil[0]);
  }

  static async create(perfilData) {
    const { data, error } = await supabase
      .from('perfiles')
      .insert(perfilData)
      .select();

    if (error) {
      throw new Error(`Error creando perfil: ${error.message}`);
    }

    return data ? new Perfil(data[0]) : null;
  }

  static async update(id, newData) {
    const { error } = await supabase
      .from('perfiles')
      .update(newData)
      .eq('id', id);

    if (error) {
      throw new Error(`Error actualizando perfil: ${error.message}`);
    }

    return true;
  }

  static async remove(id) {
    const { error } = await supabase
      .from('perfiles')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(`Error eliminando perfil: ${error.message}`);
    }

    return true;
  }
}
