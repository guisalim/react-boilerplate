import axios from 'axios'

axios.defaults.baseURL = 'https://rest.api.com'
const app_id = 'default_string'


export function api_name(request) {
    return axios.get(`/${request}?app_id=${app_id}`)
}
