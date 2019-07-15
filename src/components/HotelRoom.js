import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    ImageField,
    EditButton,
    DeleteButton,
    Create,
    Edit,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput
} from 'react-admin';

const HotelRoomTitle = ({record}) => {
    return <span>Room Type {record ? `"${record.name}"` : ''}</span>;
};


export const HotelRoomList = props => (
    <List {...props} title={"Hotel Rooms"}>
        <Datagrid>
            <TextField source="id"/>

            <ReferenceField source="hotel_id" reference="hotels">
                <TextField source="name"/>
            </ReferenceField>

            <ReferenceField source="room_type_id" reference="room-types">
                <TextField source="room_type_name"/>
            </ReferenceField>

            <TextField source="room_name"/>
            <ImageField source="image"/>
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);

export const HotelRoomEdit = props => (
    <Edit {...props} title={<HotelRoomTitle/>}>
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

export const HotelRoomCreate = props => (
    <Create {...props} title={<HotelRoomTitle/>}>
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
    </Create>
);