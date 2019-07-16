import React from 'react';

import {
    List,
    Datagrid,
    TextField,
    DateField,
    EmailField,
    ImageField,
    EditButton,
    DateInput,
    TextInput,
    SimpleForm,
    Edit,
    Create,
    ImageInput
} from 'react-admin';

export const HotelList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name"/>
            <TextField source="address"/>
            <TextField source="city"/>
            <TextField source="state"/>
            <TextField source="country"/>
            <TextField source="zip_code"/>
            <TextField source="phone_number"/>
            <EmailField source="email"/>
            <ImageField source="image"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const HotelEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="address"/>
            <TextInput source="city"/>
            <TextInput source="state"/>
            <TextInput source="country"/>
            <TextInput source="zip_code"/>
            <TextInput source="phone_number"/>
            <TextInput source="email"/>
            <ImageInput source="pictures" label="Hotel Picture" accept="image/*" multiple={false}>
                <ImageField source="src" title="title"/>
            </ImageInput>
        </SimpleForm>
    </Edit>
);

export const HotelCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="address"/>
            <TextInput source="city"/>
            <TextInput source="state"/>
            <TextInput source="country"/>
            <TextInput source="zip_code"/>
            <TextInput source="phone_number"/>
            <TextInput source="email"/>
            <ImageInput source="pictures" label="Hotel Picture" accept="image/*" multiple={false}>
                <ImageField source="src" title="title"/>
            </ImageInput>
        </SimpleForm>
    </Create>
);