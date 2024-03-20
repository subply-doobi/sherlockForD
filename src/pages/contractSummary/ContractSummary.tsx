import {useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {
  TextAppleLiGothic,
  TextMain,
  TextJuliusSansOne,
  Container,
  HorizontalLine,
  Col,
  Row,
} from '../../app/styles/styledComponents';
import {colors} from '../../app/styles/colors';

const ContractSummary = () => {
  const {navigate} = useNavigation();
  const SUMMARY_ITEMS = [
    {id: 1, name: '신청서', status: 'applicated', value: '0'},
    {id: 2, name: '결제 대기중 계약', status: 'wating', value: '0'},
    {id: 3, name: '진행 중 계약', status: 'onGoing', value: '0'},
    {id: 4, name: '완료된 계약', status: 'completed', value: '0'},
    {id: 5, name: '취소/환불', status: 'canceled', value: '0'},
  ];
  return (
    <Container>
      {/* <TextJuliusSansOne>ContractSummary</TextJuliusSansOne>
      <TextMain>ContractSummary</TextMain>
      <TextAppleLiGothic>ContractSummary</TextAppleLiGothic> */}
      <HorizontalLine
        thickness={0}
        style={{
          marginTop: 64,
          shadowColor: colors.black,
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 10,
        }}
        color={colors.white}
      />
      <Col
        style={{
          paddingHorizontal: 40,
          paddingVertical: 40,
          rowGap: 78,
        }}>
        {SUMMARY_ITEMS.map(item => (
          <Row
            key={item.id}
            style={{
              width: '100%',
              height: 40,
              justifyContent: 'space-between',
            }}>
            <Label>{item.name}</Label>
            <Button
              onPress={() =>
                navigate({name: 'ContractList', params: {status: item.status}})
              }>
              <Value>{item.value}건</Value>
            </Button>
          </Row>
        ))}
      </Col>
    </Container>
  );
};

export default ContractSummary;

const Button = styled.TouchableOpacity`
  width: 45px;
  height: 40px;
`;
const Label = styled(TextMain)`
  font-size: 12px;
  font-weight: bold;
`;
const Value = styled(TextMain)`
  font-size: 20px;
  font-weight: bold;
`;
