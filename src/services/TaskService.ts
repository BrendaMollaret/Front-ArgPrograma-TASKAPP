import { Task } from '../types/Task';

const BASE_URL = 'https://back-arg-programa-taskapp.vercel.app/tasks';

export const TaskService = {
  
    // Obtener todas las tareas
    getAllTasks: async (): Promise<Task[]> => {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data;
    },

    // Obtener una tarea
    getOneTask: async (id: number): Promise<Task> => {
        const response = await fetch(`${BASE_URL}/${id}`);
        const data = await response.json();
        return data;
    },

    // Obtener tareas en una categoria
    getTasksInCategory: async (category: string): Promise<Task[]> => {
        const response = await fetch(`${BASE_URL}?estado=${category}`);
        const data = await response.json();
        return data;
    },

    // Eliminar una tarea
    deleteTask: async (id: number): Promise<void> => {
        await fetch(`${BASE_URL}/${id}`, {
          method: 'DELETE',
        });
    },

    // Usamos PATCH para actualizar solo un campo
    updateStateTask: async (id: number, newState: string): Promise<Task> => {
        return fetch(`${BASE_URL}/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                estado: newState
            })
        })
        .then(res => res.json())
        .then(json => {
            return json;
        })
        .catch(error => error);
    },

    // Usamos POST para agregar una nueva tarea
  addTask: async (task: Task): Promise<{ data?: Task; error?: string }> => {
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });

      if (response.ok) {
        const data = await response.json();
        return { data }; // Devuelve los datos de la nueva tarea
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al agregar la tarea');
      }
    } catch (error: any) {
      return { error: error.message || 'Error desconocido' };
    }
  },

  createTask: async (task : Task):Promise<Task> => {

    const response = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });

    const data = await response.json();
    return data;
    
},

};
