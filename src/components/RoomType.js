import React from 'react';
import {
    Create,
    Edit,
    SimpleForm,
    TextInput,
    List,
    Datagrid,
    TextField,
    NumberField,
    EditButton,
    DeleteButton
} from 'react-admin';

const RoomTitle = ({record}) => {
    // return <span>Room Type {record ? `"${record.room_type_name}"` : ''}</span>;
    return <span>Room Type Price</span>;
};

export const RoomTypeList = props => (
    <List {...props} title={"Room Type"}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="room_type_name"/>
            <TextField source="currency"/>
            <NumberField source="room_price" label={"Room/Night"}/>
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
    <Create {...props} title={"Add room type"}>
        <SimpleForm>
            <TextInput source="room_type_name"/>
        </SimpleForm>
    </Create>
);