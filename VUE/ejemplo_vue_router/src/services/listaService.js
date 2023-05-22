import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'https://646be9b97b42c06c3b2a916c.mockapi.io/api/v1',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {

    async cargarLista() {
        try {
            const response = await apiClient.get('/usuarios')
            return response.data
        } catch (e) {
            throw 'error de conexión'
        }
    },

    async agregar(elemento) {
        try {
            await apiClient.post('/usuarios', elemento)
        } catch (e) {
            throw "error de conexión";
        }
    },

    async eliminar(id) {
        try {
            await apiClient.delete('/usuarios/' + id)
        } catch (e) {
            throw 'error de conexión'
        }
    },

    async modificar(id, elemento) {
        try {
            await apiClient.put('/lista/' + id, elemento)
        } catch (e) {
            throw 'error de conexión'
        }
    }
}