import styled from 'styled-components';import { AppBar as MaterialAppBar } from '@mui/material';

interface WrapperProps {
  bg: string;
  fg: string;
}

const Wrapper = styled.div`
  color: ${(props: WrapperProps) => props.fg};
  background-color: ${(props: WrapperProps) => props.bg};
  height: 64px;
  width: 100%;
  font-family: 'Dosis';
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding: 0 30px;
`;

const Title = styled.div`
  font-family: Dosis;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.25px;
  line-height: 23px;
  text-transform: uppercase;
`;

interface Props {
  title?: string;
  bg?: string;
  fg?: string;
}
export default function AppBar(props: Props): JSX.Element {
  const { title="", bg="#4D81B7", fg="white" } = props;
  return (
    <Wrapper bg={bg} fg={fg}>
      <Title>{title}</Title>
    </Wrapper>
  );
}