import styled from "styled-components";
import { theme } from '../theme';

export const Container = styled.div`
  float: left;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  color: ${theme.color.primary};
`;