import styled from "styled-components";
import { theme } from '../theme';

export const Container = styled.div`
  float: left;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BodyText = styled.p`
  font-size: 60px;
  color: ${theme.color.primary};
  margin-bottom: 30px;
  margin-top: 40px;
`;
export const ItemList = styled.div`
  margin: 30px auto 0px;
  width: 1100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px 20px;
`;
export const ItemChildList = styled.div`
  width: 100%;
`;