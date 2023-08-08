import html from '../template/warehouse-mark.html?raw';
import * as Handlebars from 'handlebars';

export const WarehouseMark = () => {
  const data = {
    imageLogo: 'images/logo-cpl-black.png',
    fontInter: 'fonts/Inter-Regular.ttf',
    fontInterBold: 'fonts/Inter-Bold.ttf',
    fontInterSemiBold: 'fonts/Inter-SemiBold.ttf',
    fontInterMedium: 'fonts/Inter-Medium.ttf',
    fontInterItalic: 'fonts/Inter-Italic.ttf',

    documentNo: 'ORR',
    jobType: 'E',
    jobNo: '0000000001',
    jobNoQRCode: '',
    originalCountry: 'THA',
    destinationCountry: 'ITA',
    serviceTransport: 'AX',

    orderNo: '001',
    saleName: 'AREERAT KUMSRI',
    customerName: 'HUMUH ORERO HUMUH ORERO HUMUH ORERO HUMUH ORERO',
    receivedDate: '01 JUN 2023',
    totalPackages: '2',

    packages: [
      {
        itemNo: '1',
        weight: '10', // gross weight
        width: '10',
        length: '10',
        height: '10',
        shelfLocation: 'A1',
      },
      {
        itemNo: '1',
        weight: '10', // gross weight
        width: '10',
        length: '10',
        height: '10',
        shelfLocation: 'A1',
      },
      {
        itemNo: '1',
        weight: '10', // gross weight
        width: '10',
        length: '10',
        height: '10',
        shelfLocation: 'A1',
      },
      {
        itemNo: '1',
        weight: '10', // gross weight
        width: '10',
        length: '10',
        height: '10',
        shelfLocation: 'A1',
      },
    ],
  };

  const template = Handlebars.compile(html);
  const htmlString = template(data);

  console.log('htmlString', htmlString);

  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};
