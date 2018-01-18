import axios from 'axios'

const ajax = {
    post(){
        return axios.post.apply(axios, arguments)
    },
    get(){
        return axios.get.apply(axios, arguments)
    },
    put(){
        return axios.put.apply(axios, arguments)
    },
    delete(){
        return axios.delete.apply(axios, arguments)
    },
    patch(){
        return axios.patch.apply(axios, arguments)
    },
    head(){
        return axios.head.apply(axios, arguments)
    },
    request () {
      return axios.request.apply(axios, arguments)
    }
}

export default ajax