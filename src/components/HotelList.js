import React from 'react';

import {List, Datagrid, TextField, DateField, EmailField, ImageField, EditButton} from 'react-admin';

export const HotelList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="name"/>
            <TextField source="address"/>
            <TextField source="city"/>
            <TextField source="state"/>
            <TextField source="country"/>
            <DateField source="zip_code"/>
            <TextField source="phone_number"/>
            <EmailField source="email"/>
            <ImageField source="image"/>
            <EditButton/>
        </Datagrid>
    </List>
);