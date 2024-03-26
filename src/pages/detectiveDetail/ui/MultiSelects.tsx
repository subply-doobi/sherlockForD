import styled from 'styled-components/native';
import {Col, Icon, TextMain} from '../../../shared/ui/styledComponents';
import React, {SetStateAction, useState} from 'react';
import {icons} from '../../../shared/iconSource';

type ISelect = {
  id: number;
  label: string;
  selected: boolean;
}[];
const SPECIALIZATION: ISelect = [
  {id: 1, label: '가정', selected: false},
  {id: 2, label: '교통사고', selected: false},
  {id: 3, label: '부동산', selected: false},
  {id: 4, label: '아동경호', selected: false},
  {id: 5, label: '민원대행', selected: false},
  {id: 6, label: '해외조사', selected: false},
  {id: 7, label: '디지털조사', selected: false},
  {id: 8, label: '스토킹', selected: false},
  {id: 9, label: '기업/분쟁', selected: false},
  {id: 10, label: '일반조사', selected: false},
  {id: 11, label: '사기', selected: false},
];

const AREA: ISelect = [
  {id: 1, label: '서울/경기', selected: false},
  {id: 2, label: '인천', selected: false},
  {id: 3, label: '강원', selected: false},
  {id: 4, label: '충청', selected: false},
  {id: 5, label: '경상', selected: false},
  {id: 6, label: '전라', selected: false},
];

const selectOnPress = (
  id: number,
  setValue: React.Dispatch<SetStateAction<ISelect>>,
) => {
  console.log('selectOnPress');
  setValue(v =>
    v.map(item =>
      item.id === id ? {...item, selected: !item.selected} : item,
    ),
  );
};

const MultiSelects = () => {
  // useState
  const [specialization, setSpecialization] = useState<ISelect>(SPECIALIZATION);
  const [area, setArea] = useState<ISelect>(AREA);

  return (
    <Col>
      <Title>전문분야</Title>
      <Box>
        {specialization.map((item, index) => (
          <SelectBox
            key={item.id}
            onPress={() => selectOnPress(item.id, setSpecialization)}>
            <Icon
              size={15}
              source={item.selected ? icons.check_activate_20 : icons.check_20}
            />
            <SelectText>{item.label}</SelectText>
          </SelectBox>
        ))}
      </Box>
      <Title>활동지역</Title>
      <Box>
        {area.map((item, index) => (
          <SelectBox
            key={item.id}
            onPress={() => selectOnPress(item.id, setArea)}>
            <Icon
              size={15}
              source={item.selected ? icons.check_activate_20 : icons.check_20}
            />
            <SelectText>{item.label}</SelectText>
          </SelectBox>
        ))}
      </Box>
    </Col>
  );
};

export default MultiSelects;

const Title = styled(TextMain)`
  font-size: 13px;
  font-weight: bold;
  line-height: 18px;
  margin-top: 64px;
`;

const Box = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
  column-gap: 48px;
  row-gap: 20px;
`;

const SelectBox = styled.TouchableOpacity`
  width: 80px;
  height: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const SelectText = styled(TextMain)`
  font-size: 13px;
  line-height: 16px;
  margin-left: 4px;
`;
