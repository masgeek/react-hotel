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
    DisabledInput,
    required,
    number,
    minValue,
    email
} from 'react-admin';

export const HotelBookingList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {/*<TextField source="id"/>*/}
            <ReferenceField source="hotelId" reference="hotels">
                <TextField source="name"/>
            </ReferenceField>
            <ReferenceField source="room_id" reference="hotel-rooms">
                <TextField source="room_name"/>
            </ReferenceField>
            <DateField source="start_date"/>
            <DateField source="end_date"/>
            <TextField source="customer_names"/>
            <EmailField source="customer_email"/>
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
            <NumberInput source="total_cost" onChange={value => console.log(value)}/>

            <ReferenceInput source="hotelId" reference="hotels" validate={required("Please select a hotel")}
                            onChange={value => console.log(value)}>
                <SelectInput optionText="name"/>
            </ReferenceInput>

            <ReferenceInput source="room_id" reference="hotel-rooms">
                <SelectInput optionText="room_name"/>
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);


export const HotelBookingCreate = props => (
    <Create {...props}>
        <SimpleForm>

            <DateInput source="start_date" validate={required()}/>
            <DateInput source="end_date" validate={required()}/>
            <TextInput source="customer_names" validate={required()}/>
            <TextInput source="customer_email" validate={[required(), email("Enter a valid email address")]}/>
            <NumberInput source="total_nights" validate={[required(), number(), minValue(1, "Minimum nights is 1")]}/>
            <DisabledInput source="total_cost"/>
            <ReferenceInput source="hotelId" reference="hotels" validate={required("Please select a hotel")}>
                <SelectInput optionText="name" optionValue="name"/>
            </ReferenceInput>

            <ReferenceInput source="room_id" reference="hotel-rooms"
                            validate={required("Please select a hotel room")}>
                <SelectInput optionText="room_name"/>
            </ReferenceInput>


        </SimpleForm>
    </Create>
);