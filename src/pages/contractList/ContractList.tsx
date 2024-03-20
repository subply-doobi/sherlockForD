import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import {
  Col,
  Container,
  HorizontalLine,
  Row,
  TextMain,
} from '../../app/styles/styledComponents';
import {colors} from '../../app/styles/colors';
import {styled} from 'styled-components/native';
import {ScrollView} from 'react-native';

const statusToTitle: {[key: string]: string} = {
  applicated: '신청서',
  wating: '결제 대기중 계약',
  onGoing: '진행 중 계약',
  completed: '완료된 계약',
  canceled: '취소/환불',
};

const COLUMN_NAMES = ['의뢰인', '신청일', '분야', '상세내역'];
const EXAMPLE_DATA = [
  {id: 1, applicant: '김철수', date: '2021-10-10', field: '개발'},
  {id: 2, applicant: '김영희', date: '2021-10-11', field: '디자인'},
  {id: 3, applicant: '박철수', date: '2021-10-12', field: '기획'},
  {id: 4, applicant: '박영희', date: '2021-10-13', field: '개발'},
  {id: 5, applicant: '홍길동', date: '2021-10-14', field: '디자인'},
  {id: 6, applicant: '홍길순', date: '2021-10-15', field: '기획'},
  {id: 7, applicant: '김철수', date: '2021-10-16', field: '개발'},
  {id: 8, applicant: '김영희', date: '2021-10-17', field: '디자인'},
  {id: 9, applicant: '박철수', date: '2021-10-18', field: '기획'},
  {id: 10, applicant: '박영희', date: '2021-10-19', field: '개발'},
  {id: 11, applicant: '김철수', date: '2021-10-10', field: '개발'},
  {id: 12, applicant: '김영희', date: '2021-10-11', field: '디자인'},
  {id: 13, applicant: '박철수', date: '2021-10-12', field: '기획'},
  {id: 14, applicant: '박영희', date: '2021-10-13', field: '개발'},
  {id: 15, applicant: '홍길동', date: '2021-10-14', field: '디자인'},
  {id: 16, applicant: '홍길순', date: '2021-10-15', field: '기획'},
  {id: 17, applicant: '김철수', date: '2021-10-16', field: '개발'},
  {id: 18, applicant: '김영희', date: '2021-10-17', field: '디자인'},
  {id: 19, applicant: '박철수', date: '2021-10-18', field: '기획'},
  {id: 20, applicant: '박영희', date: '2021-10-19', field: '개발'},
];

const ContractList = () => {
  // react-navigation
  const {
    params: {status},
  } = useRoute();
  const {setOptions} = useNavigation();

  // useEffect
  useEffect(() => {
    console.log(status);
    setOptions({title: statusToTitle[status]});
  }, []);
  return (
    <Container>
      <Row
        style={{
          width: '100%',
          height: 40,
        }}>
        {COLUMN_NAMES.map((name, index) => (
          <ColumnName key={index}>{name}</ColumnName>
        ))}
      </Row>
      <HorizontalLine
        thickness={3}
        style={{
          marginTop: 10,
          shadowColor: colors.black,
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 5,
        }}
        color={colors.white}
      />
      <ScrollView>
        <Col style={{rowGap: 48, paddingVertical: 20}}>
          {EXAMPLE_DATA.map((data, index) => (
            <Row
              key={data.id}
              style={{
                justifyContent: 'space-between',
              }}>
              <ColumnValue>{data.applicant}</ColumnValue>
              <ColumnValue>{data.date}</ColumnValue>
              <ColumnValue>{data.field}</ColumnValue>
              <DetailBtn>
                <ColumnValue>내용보기</ColumnValue>
              </DetailBtn>
            </Row>
          ))}
        </Col>
      </ScrollView>
    </Container>
  );
};

export default ContractList;

const ColumnName = styled(TextMain)`
  flex: 1;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

const DetailBtn = styled.TouchableOpacity`
  flex: 1;
`;
const ColumnValue = styled(TextMain)`
  flex: 1;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
`;
