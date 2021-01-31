const person = {name: 'mahfuj', age: 23, phone: 01818485069, fName: 'hasanat', job: 'n/a', address: '58/2-choh'};
// const fName = person.fName;
// const phone = person.phone;
const {fName, phone} = person;
console.log(fName, phone);

const friends = ['abu', 'raju', 'kaju', 'balu', 'kalu', 'dulu'];
const [friend1, friend2, ...remainingFriends] = friends;
console.log(friend1, friend2,);
console.log(remainingFriends);

const complexObject = {
    myName: 'munna';
    info: {
        myAddress: 'tejgaon';
        myPhone: 5069;
    }
}
const {myPhone} = complexObject.info;
console.log(myPhone);