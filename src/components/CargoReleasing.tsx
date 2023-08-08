import html from '../template/cargo-released.html?raw';
import * as Handlebars from 'handlebars';

export const CargoReleasing = () => {
  // const data = {
  //   imageLogo: 'images/cpl.png',
  // };

  const data = JSON.parse(
    '{"imageLogo":"data:image/png;base64,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","billNo":"CRL23070019","createdDate":"13/07/2023","salesName":"KANCHANA PAKHUNTHOD","creatorTel":"02-519-4426","senderDetail":{"date":"11/07/2023","time":"00:00","contact":"Sender","address":"1231, 294/1222, Bangkok, Bangna, 10260, THAILAND","tel":"+66 986688018","remark":""},"receiverDetail":{"date":"12/07/2023","time":"00:00","contact":"","address":"BANGKOK, SUVARNABHUMI INTERNATIONAL","tel":"","remark":""},"driverDetail":{"name":"FedEx","tel":"02-491-2021, 082-4404224","truckNo":""},"packageDetails":[{"refNo":"2307000160 EAG-THA-THA","sales":"KANCHANA","packageQty":"1","weight":"10","cbm":"1000","remark":""}]}'
  );

  const template = Handlebars.compile(html);
  const htmlString = template(data);

  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};
