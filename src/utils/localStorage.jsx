


const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];


export const setLocalStorage = (data)=>{
    localStorage.setItem('employees',JSON.stringify(data)) //localStorage.setItem=>isse data set kiye
    //employee nam se data set kara
    //kya set kara? JSON.stringify, data ko string me convert kr k set kra
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))


    return{employees,admin}
}