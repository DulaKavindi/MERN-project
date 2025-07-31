const users = [
    {
        id: 1,
        name: 'Dulari',
    },
    {
        id:2,
        name: 'Kavindi',
    }
];

const getUsers = (cb) => {
    cb(users);
}

const getUsersById = (id, cb)=> {
    const user = users.find(user => user.id == id);

    cb(user);
}

exports.getUsers = getUsers;
exports.getUsersById = getUsersById;