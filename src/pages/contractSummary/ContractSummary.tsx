import {useNavigation} from '@react-navigation/native';
import {View, Text, ImageSourcePropType} from 'react-native';
import styled from 'styled-components/native';
import {TextMain, Container, Col, Row} from '../../shared/ui/styledComponents';
import {colors} from '../../shared/colors';
import ContractBtn from './ui/ContractBtn';
import {icons} from '../../shared/iconSource';

const ContractSummary = () => {
  const {navigate} = useNavigation();
  const SUMMARY_ITEMS: {
    id: number;
    name: string;
    status: string;
    value: string;
    btnStyle: 'blue' | 'border' | 'grey';
    iconSource: ImageSourcePropType;
  }[] = [
    {
      id: 1,
      name: '신청서',
      status: 'applicated',
      value: '3',
      btnStyle: 'blue',
      iconSource: icons.docs_24,
    },
    {
      id: 2,
      name: '결제 대기중 계약',
      status: 'wating',
      value: '2',
      btnStyle: 'border',
      iconSource: icons.clock_24,
    },
    {
      id: 3,
      name: '진행 중 계약',
      status: 'onGoing',
      value: '5',
      btnStyle: 'border',
      iconSource: icons.list_24,
    },
    {
      id: 4,
      name: '완료된 계약',
      status: 'completed',
      value: '120',
      btnStyle: 'grey',
      iconSource: icons.complete_24,
    },
    {
      id: 5,
      name: '취소/환불',
      status: 'canceled',
      value: '7',
      btnStyle: 'grey',
      iconSource: icons.cancel_24,
    },
  ];
  return (
    <Container>
      <Box>
        {SUMMARY_ITEMS.map(item => (
          <ContractBtn
            iconSource={item.iconSource}
            btnStyle={item.btnStyle}
            label={item.name}
            number={item.value}
            key={item.id}
            onPress={() => navigate('ContractList', {status: item.status})}
          />
        ))}
      </Box>
    </Container>
  );
};

export default ContractSummary;

const Box = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  padding: 40px 24px;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 16px;
`;
