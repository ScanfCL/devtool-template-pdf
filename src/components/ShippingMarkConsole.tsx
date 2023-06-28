import html from '../template/shipping-mark-console.html?raw';
import * as Handlebars from 'handlebars';

export const ShippingMarkConsole = () => {
  const data = {
    packages: [
      {
        imageServiceTransport: 'images/airplane.png',
        imageLogo: 'images/logo-cpl-black.png',
        qrCode: 'images/qr-code.png',
        freightNo: '22020202023',
        serviceTransport: 'AIR COURIER : ECONOMY (NON-DOCUMENT) (AE)',
        symbolTypeShippingMark: 'EAE - THA - SGP',
        descriptionShippingMark:
          'EXPORT AIR COURIER : ECONOMY (NON-DOCUMENT) (AE) FROM THAILAND TO SINGAPORE',
        totalPackages: 1,

        itemNo: 1,
        weight: 1,
        width: 1,
        length: 1,
        height: 1,
      },
    ],
  };

  const template = Handlebars.compile(html);
  const htmlString = template(data);

  console.log('htmlString', htmlString);

  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};
