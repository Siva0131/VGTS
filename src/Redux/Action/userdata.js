export function adduserdata(userdata) {
    return {
        type: "ADD_USER_DATA",
        value: userdata
    }
}

export function daleteuserdata() {
    return {
        type: "DELETE_USER_DATA",
        value: {}
    }
}