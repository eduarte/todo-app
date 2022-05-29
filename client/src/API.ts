import axios, { AxiosResponse } from 'axios'

const baseUrl: string = 'http://localhost:4000'

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  const todos: AxiosResponse<ApiDataType> = await axios.get(
    baseUrl + '/todos'
  )
  return todos
}

export const addTodo = async (
  formData: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  const todo: Omit<ITodo, '_id'> = {
    name: formData.name,
    description: formData.description,
    status: false,
  }
  const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
    baseUrl + '/add-todo',
    todo
  )
  return saveTodo
}

export const updateTodo = async (
  todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  const todoUpdate: Pick<ITodo, 'status'> = {
    status: true,
  }
  const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
    `${baseUrl}/edit-todo/${todo._id}`,
    todoUpdate
  )
  return updatedTodo
}

export const deleteTodo = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
    `${baseUrl}/delete-todo/${_id}`
  )
  return deletedTodo
}