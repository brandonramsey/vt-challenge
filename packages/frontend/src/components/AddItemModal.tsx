import React, { useCallback, useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { Dialog, TextField, Select, SelectChangeEvent, MenuItem, Button } from "@mui/material";
import { State } from "../types";
import AppBar from "./AppBar";
import { Content } from "../style";
import styled from 'styled-components';
import { actions } from "../store";

interface Props {
}

const DialogWrapper = styled(Content)`
  display: flex;
  flex-direction: column;
  height: auto;
  overflow: hidden;
`;

const DialogContent = styled(Content)`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 560px;
  justify-content: start;

  h3 {
    color: #2A323C;
    font-family: Nunito;
    font-weight: 400;
    line-height: 24px;
    font-size: 18px;
    margin: 0;
  }

  h4 {
    color: #5C6269;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22px;
    margin: 0;
    margin-bottom: 13px;
    font-size: 16px;
  }
`;

const Spacer = styled.div`
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 18px;
`;

const FlexSpacer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0;
`;

const DialogButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-self: end;

  button:not(:first-child) {
    margin-left: 32px;
  }
`;

export default function AddItemModal(props: Props): JSX.Element {
  const open = useSelector((state: State) => state.addItemModalOpen)
  const dispatch = useDispatch();
  const [ itemName, setItemName ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ itemCount, setItemCount ] = useState<number>();

  const closeModal = useCallback(
    () => dispatch({type: actions.CLOSE_ADD_ITEM_MODAL }),
    [dispatch],
  );

  const addItem = useCallback(
    (payload) => dispatch({
      type: actions.ADD_ITEM,
      payload,
    }),
    [dispatch],
  )

  const handleSetItemName = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(evt.target.value)
  };
  const handleSetDescription = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(evt.target.value);
  };
  const handleSetItemCount = (evt: SelectChangeEvent) => {
    setItemCount(parseInt(evt.target.value));
  };

  const handleCancel = (evt: React.MouseEvent) => {    
    closeModal();
  };

  const handleAddTask = (evt: React.MouseEvent) => {
    addItem({
      name: itemName,
      description,
      count: itemCount,
    });
    closeModal();
  };

  return (
    <Dialog open={open}>
      <DialogWrapper>
        <AppBar title="shopping list" bg="#eee" fg="#5C6269"/>
        <DialogContent>
          <h3>Add an item</h3>
          <h4>Add your new item below</h4>
          <TextField autoFocus id="name" placeholder="Item Name" fullWidth value={itemName} onChange={handleSetItemName}/>
          <Spacer />
          <TextField id="description" placeholder="Description" fullWidth multiline rows={3} value={description} onChange={handleSetDescription}/>
          <Spacer />
          <Select value={itemCount?.toString() || ""} onChange={handleSetItemCount} displayEmpty renderValue={v => !!v ? v : "How many?"}>
            <MenuItem value={"1"}>1</MenuItem>
            <MenuItem value={"2"}>2</MenuItem>
            <MenuItem value={"3"}>3</MenuItem>
          </Select>
          <FlexSpacer />
          <DialogButtons>
            <Button onClick={handleCancel} variant="outlined">Cancel</Button>
            <Button onClick={handleAddTask} variant="contained">Add Task</Button>
          </DialogButtons>
        </DialogContent>
      </DialogWrapper>
    </Dialog>
  );
}
