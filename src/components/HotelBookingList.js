import React from 'react';

import {List, Datagrid, TextField, DateField, EmailField, NumberField, ReferenceField} from 'react-admin';

export const HotelBookingList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {/*<TextField source="id"/>*/}
            <ReferenceField source="hotelRoomId" reference="hotel-rooms">
                <TextField source="room_name"/>
            </ReferenceField>
            <DateField source="start_date"/>
            <DateField source="end_date"/>
            <TextField source="customer_names"/>
            <TextField source="customer_email"/>
            <NumberField source="total_nights"/>
            <NumberField source="total_cost"/>
        </Datagrid>
    </List>
);