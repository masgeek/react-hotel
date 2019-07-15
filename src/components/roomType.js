import React from 'react';
import {
    Create,
    Edit,
    SimpleForm,
    TextInput,
    DisabledInput,
    List,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    DeleteButton
} from 'react-admin';

const RoomTitle = ({record}) => {
    return <span>Room Type {record ? `"${record.room_type_name}"` : ''}</span>;
};

export const RoomTypeList = props => (
    <List {...props} title={"Room Type"}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="room_type_name"/>
            <DateField source="created_at"/>
            <DateField source="updated_at"/>
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);

export const RoomTypeEdit = props => (
    <Edit title={<RoomTitle/>} {...props}>
        <SimpleForm>
            <TextInput source="room_type_name"/>
        </SimpleForm>
    </Edit>
);

export const RoomTypeCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="room_type_name"/>
        </SimpleForm>
    </Create>
);