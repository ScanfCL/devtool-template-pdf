import html from '../template/proforma-invoice.html?raw';
import test from '../template/test.html?raw';
import * as Handlebars from 'handlebars';

export enum ItemColumn {
  DescriptionTH = 'DescriptionTH',
  DescriptionEN = 'DescriptionEN',
  Photo = 'Photo',
  MadeFrom = 'MadeFrom',
  HSCode = 'HSCode',
  Qty = 'Qty',
  Unit = 'Unit',
  UnitPrice = 'UnitPrice',
  TotalPrice = 'TotalPrice',
  Gw = 'Gw',
  Nw = 'Nw',
  Note = 'Note',
  Additional1 = 'Additional1',
  Additional2 = 'Additional2',
}

export const mapperHeaderName = {
  [ItemColumn.DescriptionEN]: 'PRODUCT NAME (ENG)',
  [ItemColumn.DescriptionTH]: 'PRODUCT NAME (THAI)',
  [ItemColumn.MadeFrom]: 'MADE FROM',
  [ItemColumn.HSCode]: 'HS CODE',
  [ItemColumn.Qty]: 'QTY',
  [ItemColumn.Unit]: 'UNIT',
  [ItemColumn.UnitPrice]: 'UNIT PRICE (THB)',
  [ItemColumn.TotalPrice]: 'TOTAL PRICE (THB)',
  [ItemColumn.Gw]: 'GW',
  [ItemColumn.Nw]: 'NW',
  [ItemColumn.Note]: 'NOTE',
  [ItemColumn.Additional1]: 'ADDITIONAL 1',
  [ItemColumn.Additional2]: 'ADDITIONAL 2',
  [ItemColumn.Photo]: 'PHOTO',
};

interface ProformaItemInputType {
  descriptionTH: string;
  descriptionEN: string;
  madeFrom: string;
  hsCode: string;
  qty: number;
  unitTypeId: string;
  unitPrice: number;
  currencyId: string;
  exRate: number;
  nw: number;
  gw: number;
  additional1: string;
  additional2: string;
  note: string;
  photoId: string;
}

type test = ProformaItemInputType & { totalPrice: number };

export const columnMapItemKeys: {
  [key: string]: keyof test;
} = {
  [ItemColumn.DescriptionTH]: 'descriptionTH',
  [ItemColumn.DescriptionEN]: 'descriptionEN',
  [ItemColumn.Photo]: 'photoId',
  [ItemColumn.MadeFrom]: 'madeFrom',
  [ItemColumn.HSCode]: 'hsCode',
  [ItemColumn.Qty]: 'qty',
  [ItemColumn.Unit]: 'unitTypeId',
  [ItemColumn.UnitPrice]: 'unitPrice',
  [ItemColumn.Gw]: 'gw',
  [ItemColumn.Nw]: 'nw',
  [ItemColumn.Note]: 'note',
  [ItemColumn.Additional1]: 'additional1',
  [ItemColumn.Additional2]: 'additional2',
  [ItemColumn.TotalPrice]: 'totalPrice',
};

const allColumns = [
  'DescriptionEN',
  'DescriptionTH',
  'Photo',
  'MadeFrom',
  'HSCode',
  'Qty',
  'Unit',
  'UnitPrice',
  'TotalPrice',
  'Gw',
  'Nw',
  'Note',
  'Additional1',
  'Additional2',
] as ItemColumn[];

const columnsTextAlign = {
  'descriptionEN': 'left',
  'descriptionTH': 'left',
  'photoId': 'center',
  'madeForm': 'left',
  'hsCode': 'center',
  'qty': 'center',
  'unitType': 'center',
  'unitPrice': 'right',
  'totalPrice': 'right',
  'gw': 'right',
  'nw': 'right',
  'note': 'left',
  'additional1': 'left',
  'additional2': 'left',
}


export const ProformaInvoice = () => {
  let data = JSON.parse(
    '{"invoiceNo":"PI2306000147IMP","date":"27/06/2023","jobNo":"2306000147","proformaInvoiceType":"PROFORMA INVOICES","shipperAddress":{"id":"6476c0ef5e0f6fee796f5407","name":"BugToffy1","taxNo":"BugToffy1","addressNo":"BugToffy1","state":"BugToffy1","city":"BugToffy1","countryId":"637b11100edef821a8802947","zipCode":"BugToffy1","dialCodeId":"637b11100edef821a8802948","tel":"0877777","email":"","faxNo":"","userId":"63bb9f01ddf136b0eba536b1","agentId":null,"createdAt":"2023-05-31T03:37:19.499Z","updatedAt":"2023-05-31T03:37:19.499Z","createdById":"637b112b0edef821a88029f6","updatedById":"637b112b0edef821a88029f6","country":{"id":"637b11100edef821a8802947","name":"SUDAN","iso2":"SD","iso3":"SDN","createdAt":"2022-11-21T05:48:00.237Z","updatedAt":"2022-11-21T05:48:00.237Z","createdById":null,"updatedById":null},"user":{"id":"63bb9f01ddf136b0eba536b1","username":"63bb9f01ba459015d2a2d884","password":null,"email":"agent@catcomp.co.th","firstName":"","lastName":"","role":"Customer","branchIds":[],"chatRoomIds":[],"type":"Company","customerNo":"000094","customerPaymentType":"Cash","creditDays":0,"creditLimit":0,"creditBalance":0,"balance":84000,"expressNo":"","companyName":"CATCOMP","dialCodeId":"637b11130edef821a880295c","tel":"987654365","branch":"BKK","line":"CATCOMP OFFICIAL","facebook":"CATCOMP OFFICIAL","no":null,"warehouseId":null,"serviceTransportId":null,"freightTermId":null,"isActive":true,"lastLoginAt":null,"createdAt":"2023-01-09T04:58:41.306Z","updatedAt":"2023-06-13T04:26:51.719Z","createdById":"637b112c0edef821a88029f8","updatedById":"637b112c0edef821a88029f8"},"dialCode":{"id":"637b11100edef821a8802948","code":"249","countryId":"637b11100edef821a8802947","createdAt":"2022-11-21T05:48:00.345Z","updatedAt":"2022-11-21T05:48:00.345Z","createdById":null,"updatedById":null}},"shipperTel":"+249 877777","consigneeAddress":{"id":"6476123c5e0f6fee796f53e9","name":"BugPeem1","taxNo":"BugPeem1","addressNo":"BugPeem1","state":"BugPeem1","city":"BugPeem1","countryId":"637b11120edef821a880295b","zipCode":"BugPeem1","dialCodeId":"637b11130edef821a880295c","tel":"111111","email":"","faxNo":"","userId":"63bb9f01ddf136b0eba536b1","agentId":null,"createdAt":"2023-05-30T15:11:56.582Z","updatedAt":"2023-05-30T15:11:56.582Z","createdById":"637b112b0edef821a88029f6","updatedById":"637b112b0edef821a88029f6","country":{"id":"637b11120edef821a880295b","name":"THAILAND","iso2":"TH","iso3":"THA","createdAt":"2022-11-21T05:48:02.954Z","updatedAt":"2022-11-21T05:48:02.954Z","createdById":null,"updatedById":null},"user":{"id":"63bb9f01ddf136b0eba536b1","username":"63bb9f01ba459015d2a2d884","password":null,"email":"agent@catcomp.co.th","firstName":"","lastName":"","role":"Customer","branchIds":[],"chatRoomIds":[],"type":"Company","customerNo":"000094","customerPaymentType":"Cash","creditDays":0,"creditLimit":0,"creditBalance":0,"balance":84000,"expressNo":"","companyName":"CATCOMP","dialCodeId":"637b11130edef821a880295c","tel":"987654365","branch":"BKK","line":"CATCOMP OFFICIAL","facebook":"CATCOMP OFFICIAL","no":null,"warehouseId":null,"serviceTransportId":null,"freightTermId":null,"isActive":true,"lastLoginAt":null,"createdAt":"2023-01-09T04:58:41.306Z","updatedAt":"2023-06-13T04:26:51.719Z","createdById":"637b112c0edef821a88029f8","updatedById":"637b112c0edef821a88029f8"},"dialCode":{"id":"637b11130edef821a880295c","code":"66","countryId":"637b11120edef821a880295b","createdAt":"2022-11-21T05:48:03.065Z","updatedAt":"2022-11-21T05:48:03.065Z","createdById":null,"updatedById":null}},"consigneeTel":"+66 111111","freightTermType":"Import","freightTermName":"FOB","freightOriginal":"ARUBA","freightDestination":"THAILAND","shownColumns":["DescriptionEN","Qty","Unit","UnitPrice","TotalPrice"],"columns":[{"title":"PRODUCT NAME (ENG)","key":"descriptionEN","col":"DescriptionEN"},{"title":"QTY","key":"qty","col":"Qty"},{"title":"UNIT","key":"unitTypeId","col":"Unit"},{"title":"UNIT PRICE (THB)","key":"unitPrice","col":"UnitPrice"},{"title":"TOTAL PRICE (THB)","key":"totalPrice","col":"TotalPrice"}],"items":[{"additional1":"","additional2":"","currencyId":"62e502700246f13939983ed8","descriptionEN":"Rabbit","descriptionTH":"กระต่าย","exRate":"1","gw":30,"hsCode":"","madeFrom":"Plastic","note":"","nw":30,"photoId":null,"qty":"50","unitPrice":"40.00","unitTypeId":"61fc05c69e0eecb23d93cfb1","no":1,"totalPrice":"2,000.00","unitType":"Pack"},{"additional1":"","additional2":"","currencyId":"62e502700246f13939983ed8","descriptionEN":"Fish","descriptionTH":"ปลา","exRate":"1","gw":30,"hsCode":"","madeFrom":"Plastic","note":"","nw":30,"photoId":null,"qty":"40","unitPrice":"50.00","unitTypeId":"61fc05c69e0eecb23d93cfaf","no":2,"totalPrice":"2,000.00","unitType":"Unit"},{"additional1":"","additional2":"","currencyId":"62e502700246f13939983ed8","descriptionEN":"Rabbit","descriptionTH":"กระต่าย","exRate":"1","gw":30,"hsCode":"","madeFrom":"Plastic","note":"","nw":30,"photoId":null,"qty":"50","unitPrice":"40.00","unitTypeId":"61fc05c69e0eecb23d93cfb1","no":3,"totalPrice":"2,000.00","unitType":"Pack"},{"additional1":"","additional2":"","currencyId":"62e502700246f13939983ed8","descriptionEN":"Fish","descriptionTH":"ปลา","exRate":"1","gw":30,"hsCode":"","madeFrom":"Plastic","note":"","nw":30,"photoId":null,"qty":"40","unitPrice":"50.00","unitTypeId":"61fc05c69e0eecb23d93cfaf","no":4,"totalPrice":"2,000.00","unitType":"Unit"},{"additional1":"","additional2":"","currencyId":"62e502700246f13939983ed8","descriptionEN":"Rabbit","descriptionTH":"กระต่าย","exRate":"1","gw":30,"hsCode":"","madeFrom":"Plastic","note":"","nw":30,"photoId":null,"qty":"50","unitPrice":"40.00","unitTypeId":"61fc05c69e0eecb23d93cfb1","no":5,"totalPrice":"2,000.00","unitType":"Pack"},{"additional1":"","additional2":"","currencyId":"62e502700246f13939983ed8","descriptionEN":"Fish","descriptionTH":"ปลา","exRate":"1","gw":30,"hsCode":"","madeFrom":"Plastic","note":"","nw":30,"photoId":null,"qty":"40","unitPrice":"50.00","unitTypeId":"61fc05c69e0eecb23d93cfaf","no":6,"totalPrice":"2,000.00","unitType":"Unit"},{"additional1":"","additional2":"","currencyId":"62e502700246f13939983ed8","descriptionEN":"Rabbit","descriptionTH":"กระต่าย","exRate":"1","gw":30,"hsCode":"","madeFrom":"Plastic","note":"","nw":30,"photoId":null,"qty":"50","unitPrice":"40.00","unitTypeId":"61fc05c69e0eecb23d93cfb1","no":7,"totalPrice":"2,000.00","unitType":"Pack"},{"additional1":"","additional2":"","currencyId":"62e502700246f13939983ed8","descriptionEN":"Fish","descriptionTH":"ปลา","exRate":"1","gw":30,"hsCode":"","madeFrom":"Plastic","note":"","nw":30,"photoId":null,"qty":"40","unitPrice":"50.00","unitTypeId":"61fc05c69e0eecb23d93cfaf","no":8,"totalPrice":"2,000.00","unitType":"Unit"},{"additional1":"","additional2":"","currencyId":"62e502700246f13939983ed8","descriptionEN":"Rabbit","descriptionTH":"กระต่าย","exRate":"1","gw":30,"hsCode":"","madeFrom":"Plastic","note":"","nw":30,"photoId":null,"qty":"50","unitPrice":"40.00","unitTypeId":"61fc05c69e0eecb23d93cfb1","no":9,"totalPrice":"2,000.00","unitType":"Pack"},{"additional1":"","additional2":"","currencyId":"62e502700246f13939983ed8","descriptionEN":"Fish","descriptionTH":"ปลา","exRate":"1","gw":30,"hsCode":"","madeFrom":"Plastic","note":"","nw":30,"photoId":null,"qty":"40","unitPrice":"50.00","unitTypeId":"61fc05c69e0eecb23d93cfaf","no":10,"totalPrice":"2,000.00","unitType":"Unit"}],"noteAndInstruction":{"totalOfNetWeight":"300.00","totalOfGrossWeight":"300.00","totalPackage":"5","measurement":"0","remark":"Test","originCountry":"ARUBA"},"shippingMarkDetails":[{"detail":"BugPeem1, BugPeem1, BugPeem1, BugPeem1, BugPeem1, THAILAND","title":"TO","type":"TO"},{"detail":"THAILAND","title":"DESTINATION","type":"DESTINATION"},{"detail":"BugPeem1","title":"CONTACT","type":"CONTACT"},{"detail":"+66 111111","title":"TEL","type":"TEL"},{"detail":null,"title":null,"type":"NO DISPLAY"},{"detail":null,"title":null,"type":"NO DISPLAY"}],"sumOfQty":450,"sumOfTotalPrice":"20,000.00"}'
  );

  data = { ...data, columnsTextAlign, additionColumnName1: 'Test1', additionColumnName2: 'Test2' }
  // data = { ...data, items: [...data.items, ...data.items, ...data.items], shippingMarkDetails: [...data.shippingMarkDetails, data.shippingMarkDetails[0]], columnsTextAlign }

  const template = Handlebars.compile(html);
  const templateTest = Handlebars.compile(test);
  const htmlString = template(data);
  const htmlTestString = templateTest(data)

  console.log('htmlString', htmlString);

  // return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  return <>
    {/* <div dangerouslySetInnerHTML={{ __html: htmlTestString }} /> */}
    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
  </>;
};
