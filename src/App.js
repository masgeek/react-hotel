// in src/App.js
import React from 'react';
import {Admin, Resource, ListGuesser, EditGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import {Hotel} from "./components/Hotel";

import {HotelBookingList, HotelBookingEdit, HotelBookingCreate} from "./components/HotelBooking";

import {HotelRoomList, HotelRoomEdit, HotelRoomCreate} from "./components/HotelRoom";

import {RoomTypeList, RoomTypeEdit, RoomTypeCreate} from "./components/RoomType";

import {RoomTypePriceList, RoomTypePriceEdit, RoomTypePriceCreate} from "./components/RoomTypePrice";

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import Dashboard from './components/Dashboard'

const dataProvider = jsonServerProvider('http://127.0.0.1:8000/api');

const App = () =>
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="hotels" icon={PostIcon} list={Hotel}/>

        <Resource name="hotel-bookings" icon={PostIcon} list={HotelBookingList} edit={HotelBookingEdit}
                  create={HotelBookingCreate}/>

        <Resource name="hotel-rooms" list={HotelRoomList} edit={HotelRoomEdit} create={HotelRoomCreate}/>

        <Resource name="room-types" icon={PostIcon} list={RoomTypeList} edit={RoomTypeEdit} create={RoomTypeCreate}/>

        <Resource name="room-type-prices" icon={PostIcon} list={RoomTypePriceList} edit={RoomTypePriceEdit} create={RoomTypePriceCreate}/>
    </Admin>


export default App;