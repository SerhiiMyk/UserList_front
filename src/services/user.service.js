let url = 'http://localhost:8000/users'

const getUsers = () => {
    return fetch(url)
        .then((response) => response.json())
}
const postUser = (user) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())

}
const putUser = (user) => {
    return fetch(url + '/' + user.id, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}

const delUser = (id) => {
    return fetch(url + '/' + id, {
        method: 'DELETE'
    })
}

export {getUsers, postUser, putUser, delUser}