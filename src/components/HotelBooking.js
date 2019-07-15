import React from 'react';

import {
    SimpleForm,
    List,
    Edit,
    Create,
    Datagrid,
    TextField,
    DateField,
    EmailField,
    NumberField,
    ReferenceField,
    EditButton,
    TextInput,
    NumberInput,
    ReferenceInput,
    DateInput,
    SelectInput,
    DisabledInput
} from 'react-admin';

export const HotelBookingList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {/*<TextField source="id"/>*/}
            <ReferenceField source="hotelId" reference="hotels">
                <TextField source="name"/>
            </ReferenceField>
            <ReferenceField source="hotelRoomId" reference="hotel-rooms">
                <TextField source="room_name"/>
            </ReferenceField>
            <DateField source="start_date"/>
            <DateField source="end_date"/>
            <TextField source="customer_names"/>
            <TextField source="customer_email"/>
            <NumberField source="total_nights"/>
            <NumberField source="total_cost"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const HotelBookingEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id"/>
            <DateInput source="start_date"/>
            <DateInput source="end_date"/>
            <TextInput source="customer_names"/>
            <TextInput source="customer_email"/>
            <NumberInput source="total_nights"/>
            <NumberInput source="total_cost"/>
            <ReferenceInput source="hotelRoomId" reference="hotel-rooms">
                <SelectInput optionText="room_name"/>
            </ReferenceInput>
            <ReferenceInput source="hotelId" reference="hotels">
                <SelectInput optionText="name"/>
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);


export const HotelBookingCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <DateInput source="start_date"/>
            <DateInput source="end_date"/>
            <TextInput source="customer_names"/>
            <TextInput source="customer_email"/>
            <NumberInput source="total_nights"/>
            <DisabledInput source="total_cost"/>
            <ReferenceInput source="hotelId" reference="hotels">
                <SelectInput optionText="name"/>
            </ReferenceInput>

            <ReferenceInput source="hotelRoomId" reference="hotel-rooms">
                <SelectInput optionText="room_name"/>
            </ReferenceInput>

        </SimpleForm>
    </Create>
);