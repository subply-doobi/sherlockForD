import styled from 'styled-components/native';
import {TextMain} from '../../shared/ui/styledComponents';
import {colors} from '../../shared/colors';
import React from 'react';

interface IHeader {
  title: string;
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
}
const Header = ({title, headerLeft, headerRight}: IHeader) => {
  return (
    <Box>
      {headerLeft && headerLeft}
      <HeaderTitle>{title}</HeaderTitle>
      {headerRight && headerRight}
    </Box>
  );
};

export default Header;

const Box = styled.View`
  width: 100%;
  height: 70px;
  background-color: ${colors.white};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitle = styled(TextMain)`
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
`;
