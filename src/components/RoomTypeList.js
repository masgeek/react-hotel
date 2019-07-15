import React from 'react';
import {List, Datagrid, TextField, DateField} from 'react-admin';

export const RoomTypeList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="room_type_name"/>
            <DateField source="created_at"/>
            <DateField source="updated_at"/>
        </Datagrid>
    </List>
);