import React from 'react';

import {List, Datagrid, TextField, DateField, EmailField, NumberField} from 'react-admin';

export const HotelBookingList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {/*<TextField source="id"/>*/}
            <TextField source="roomType"/>
            <DateField source="start_date"/>
            <DateField source="end_date"/>
            <TextField source="customer_names"/>
            <TextField source="customer_email"/>
            <NumberField source="total_nights"/>
            <NumberField source="total_cost"/>
            <NumberField source="room.id"/>
        </Datagrid>
    </List>
);