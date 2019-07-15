import React from 'react';
import {
    Create,
    Edit,
    SimpleForm,
    TextInput,
    DisabledInput,
    NumberInput,
    List,
    Datagrid,
    TextField,
    NumberField,
    DateField,
    EditButton,
    DeleteButton,
    ReferenceField,
    ReferenceInput,
    SelectInput,
    required,
} from 'react-admin';

const RoomTitle = ({record}) => {
    return <span>Room Type {record ? `"${record.room_type_name}"` : ''}</span>;
};

export const RoomTypePriceList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <ReferenceField source="room_type_id" reference="room-types">
                <TextField source="room_type_name"/>
            </ReferenceField>
            <NumberField source="room_price"/>
            <TextField source="currency"/>
            <TextField source="created_at"/>
            <TextField source="updated_at"/>
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);

export const RoomTypePriceEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id"/>
            <ReferenceInput source="room_type_id" reference="room-types"><SelectInput
                optionText="room_type_name"/>
            </ReferenceInput>
            <TextInput source="currency"/>
            <NumberInput source="room_price"/>
        </SimpleForm>
    </Edit>
);

export const RoomTypePriceCreate = props => (
    <Create {...props} title={<RoomTitle/>}>
        <SimpleForm>
            <TextInput source="room_type_name"/>
        </SimpleForm>
    </Create>
);