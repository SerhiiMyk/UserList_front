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
const putUser = (choseUser, user) => {
    return fetch(url + '/' + choseUser.id, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

export {getUsers,postUser,putUser}