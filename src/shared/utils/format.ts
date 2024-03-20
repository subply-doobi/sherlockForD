// 핸드폰 형식으로 변환
export const formatPhone = (phone: string) =>
  phone
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
    .replace(/(\-{1,2})$/g, '');

export const commaToNum = (num: number | string | undefined) => {
  if (!num) return '';
  const n = typeof num === 'number' ? num.toString() : num;
  const nWithoutCommas = n.replace(/,/g, '');
  return nWithoutCommas.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};
