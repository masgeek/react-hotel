import React from 'react';
import {List, Datagrid, TextField, ReferenceField, DateField, NumberField, ImageField} from 'react-admin';

export const HotelRoomList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            
            <ReferenceField source="hotel_id" reference="hotels">
                <TextField source="name"/>
            </ReferenceField>

            <ReferenceField source="room_type_id" reference="room-types">
                <TextField source="room_type_name"/>
            </ReferenceField>

            <TextField source="room_name"/>
            <ImageField source="image"/>
        </Datagrid>
    </List>
);