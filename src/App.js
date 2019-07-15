// in src/App.js
import React from 'react';
import {Admin, Resource, ListGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import {HotelList} from "./components/HotelList";
import {HotelBookingList} from "./components/HotelBookingList";

import {HotelRoomList} from "./components/HotelRoomList";
import {RoomTypeList} from "./components/RoomTypeList";


const dataProvider = jsonServerProvider('http://127.0.0.1:8000/api');
//const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () =>
    <Admin dataProvider={dataProvider}>
        <Resource name="hotels" list={HotelList}/>
        <Resource name="hotel-bookings" list={HotelBookingList}/>
        <Resource name="hotel-rooms" list={HotelRoomList}/>
        <Resource name="room-types" list={RoomTypeList}/>
    </Admin>


//list hotels

export default App;