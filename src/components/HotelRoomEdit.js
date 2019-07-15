import React from 'react';
import {Edit, SimpleForm, TextInput, ReferenceInput, SelectInput} from 'react-admin';

export const HotelRoomEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="hotel_id" reference="hotels">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <ReferenceInput source="room_type_id" reference="room-types">
                <SelectInput optionText="room_type_name"/>
            </ReferenceInput>

            <TextInput source="room_name"/>
            <TextInput source="image"/>
        </SimpleForm>
    </Edit>
);