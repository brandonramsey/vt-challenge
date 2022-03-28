import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import AppBar from "../components/AppBar";
import { Content } from "../style";
import { State } from "../types";
import Button from "@mui/material/Button";
import AddItemModal from "../components/AddItemModal";
import { actions } from "../store";

const EmptyContentWrapper = styled.div`
  align-items: center;
  align-self: center;
  border-radius: 5px;
  border: 1px solid #C6C6C6;
  display: flex;
  flex-direction: column;
  height: 30vh;
  justify-content: center;
  width: 50vw;
`;

const EmptyContentText = styled.div`
  color: #87898C;
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
`;

function AddFirstItemButton() {
  const dispatch = useDispatch();
  const handleClick = useCallback(
    () => dispatch({type: actions.OPEN_ADD_ITEM_MODAL }),
    [dispatch],
  );
  return <Button variant="contained" onClick={handleClick}>Add your first item</Button>
}


function EmptyContent() {
  return (
    <EmptyContentWrapper>
      <EmptyContentText>Your Shopping List is Empty</EmptyContentText>
      <AddFirstItemButton />
    </EmptyContentWrapper>
  );
}

export default function ShoppingList() {
  const items = useSelector((state: State) => state.items);
  const innerContent = items.length === 0 ? <EmptyContent /> : <p>populated...</p>
  return (
    <div>
      <AppBar title="Shopping List" />
      <Content>
        {innerContent}
      </Content>
      <AddItemModal />
    </div>
    
  );
}