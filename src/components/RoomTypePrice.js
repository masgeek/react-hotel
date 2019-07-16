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
    number,
    minValue,
    maxValue
} from 'react-admin';

const RoomPriceTitle = ({record}) => {
    return <span>Room Type {record ? `"${record.room_type.room_type_name}"` : ''} Price</span>;
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
    <Edit title={<RoomPriceTitle/>} {...props}>
        <SimpleForm>
            <ReferenceInput source="room_type_id" reference="room-types">
                <SelectInput optionText="room_type_name"/>
            </ReferenceInput>
            <NumberInput source="room_price"/>
            <DisabledInput source="currency"/>
        </SimpleForm>
    </Edit>
);

export const RoomTypePriceCreate = props => (
    <Create {...props} title={"Add new room"}>
        <SimpleForm>
            <ReferenceInput source="room_type_id" reference="room-types" validate={required()}>
                <SelectInput optionText="room_type_name"/>
            </ReferenceInput>
            <NumberInput source="room_price" validate={[required(), number(), minValue(1)]}/>
            <DisabledInput source="currency" defaultValue={"USD"}/>
        </SimpleForm>
    </Create>
);