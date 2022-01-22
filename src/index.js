import './styles/main.scss'; // Don't delete :)
//import smile from './scripts/smile.js'; // Feel free to delete :)

// All of your javascript should go here :)
//smile() // Feel free to delete :)

import moment from "moment";

moment().format('MMMM Do YYYY, h:mm:ss a');

import axios from "axios";
const dataList = axios.get('https://jsonplaceholder.typicode.com/users/');
dataList.then(res => {
    //console.log(res.data.filter(item => item.name.length > 16));
    console.log(res.data[0]);
});

const emailData = document.querySelector(".email")
const nameList = document.querySelector(".nameList")


dataList.then(email => {
    console.log(emailData.innerHTML = email.data.map(item => item.email).join(" & \n"));
})

dataList.then(name => {
    console.log(nameList.innerHTML = name.data.map(item => item.name).join(" & \n"))
})


dataList.then(latitude => {
    console.log(latitude.data.filter(item => item.address.geo.lat >= 0))
})


dataList.then(email => {
    console.log(Math.max(...email.data.map(item => item.address.geo.lat)))
})