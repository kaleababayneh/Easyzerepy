import axios from "axios"

const API_URL = "http://localhost:8000"

export const getTries = async () => {
  const token = localStorage.getItem("token")
  const response = await axios.get(`${API_URL}/tries`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}

export const getTry = async (tryId) => {
  const token = localStorage.getItem("token")
  const response = await axios.get(`${API_URL}/tries/${tryId}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}

export const createTry = async (tryData) => {
  const token = localStorage.getItem("token")
  const response = await axios.post(`${API_URL}/tries`, tryData, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}

export const deleteTry = async (tryId) => {
  const token = localStorage.getItem("token")
  const response = await axios.delete(`${API_URL}/tries/${tryId}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}

