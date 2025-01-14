import axios from "axios";

// Instancia de Axios
const api = axios.create({
  baseURL: "https://api.tu-dominio.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Funciones CRUD
const apiService = {
  // Obtener todos los registros
  getAll: async (endpoint) => {
    try {
      const response = await api.get(`/${endpoint}`);
      return response.data;
    } catch (error) {
      console.error("Error en getAll:", error);
      throw error;
    }
  },

  // Obtener un registro por ID
  getById: async (endpoint, id) => {
    try {
      const response = await api.get(`/${endpoint}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error en getById:", error);
      throw error;
    }
  },

  // Crear un nuevo registro
  create: async (endpoint, data) => {
    try {
      const response = await api.post(`/${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error("Error en create:", error);
      throw error;
    }
  },

  // Actualizar un registro por ID
  update: async (endpoint, id, data) => {
    try {
      const response = await api.put(`/${endpoint}/${id}`, data);
      return response.data;
    } catch (error) {
      console.error("Error en update:", error);
      throw error;
    }
  },

  // Eliminar un registro por ID
  remove: async (endpoint, id) => {
    try {
      const response = await api.delete(`/${endpoint}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error en remove:", error);
      throw error;
    }
  },
};

export default apiService;
