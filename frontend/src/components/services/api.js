import axios from 'axios'

const BASE_URL = 'http://localhost:8080'

export function getList() {
    const request = axios.get(`${BASE_URL}/users`)
    return {
        type: 'USERS_LIST',
        payload: request
    }
}

export function newUser(name, email, passowrd, cpf, birthdate) {
    axios.post((`${BASE_URL}/users/new`) , {
        "name": name,
        "email": email,
        "passowrd": passowrd,
        "cpf": cpf,
        "birthdate": birthdate
    }).then(resp => {
        console.log(resp)
    })
}


export function updateUser(name, email, passowrd, cpf, birthdate, id) {
    axios.put((`${BASE_URL}/users/edit/${id}`) , {
        "name": name,
        "email": email,
        "passowrd": passowrd,
        "cpf": cpf,
        "birthdate": birthdate
    }).then(resp => {
        console.log(resp)
    })
}

export function deleteUser(id) {
    axios.delete((`${BASE_URL}/users/delete/${id}`) , {
    }).then(resp => {
        console.log(resp)
    })
}