import { faker } from 'https://cdn.skypack.dev/@faker-js/faker/locale/ru';

const getLastVisit = () => {
    let date = faker.date.recent(30)
    let minutes = date.getMinutes();
    if(date.getMinutes() < 10) {
        minutes = `${"0"+minutes}`
    }
    let hours = date.getHours();
    if(date.getHours() < 10) {
        hours = `${"0"+hours}`
    }
    let day = date.getDate();
    if(date.getDate() < 10) {
        day = `${"0"+day}`
    }
    let month = date.getMonth() + 1;
    if(date.getMonth() < 10) {
        month = `${"0"+month}`
    }
    let year = date.getFullYear()
    return date = `${day}.${month}.${year} ${hours}:${minutes}`
};

const getTimeOnSite = () => {
    let time = `${faker.datatype.number({ min: 0, max: 4,})}h ${faker.datatype.number({ min: 1, max: 59,})}min`
    return time
};

class User {
    constructor() {
        this.name = faker.internet.userName();
        this.level = faker.datatype.number({ min: 1, max: 300,});
        this.experience = (this.level * 1000) + faker.datatype.number({ min: 0, max: 999,});
        this.lastVisit = getLastVisit();
        this.timeOnSite = getTimeOnSite();
    }
};
const user = new User();
console.log(user)

async function getUsers() {
    try {
        const response = await axios.get('http://localhost:3000/users')
        const users = response.data;
        console.log(users)
    } catch (e) {
        alert('Ошибка')
    }
};
getUsers()

const generateUser = () => {
    for(let i = 0; i < 300; i++) {
        const user = new User();
        axios.post('http://localhost:3000/users', user)
    }
};
// generateUser() раскомментировать для отправки сгенерированных данных

