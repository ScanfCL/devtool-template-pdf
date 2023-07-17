import html from '../template/proforma-invoice.html?raw';
import test from '../template/test.html?raw';
import proformaData from './proforma.json'
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
  // let data = JSON.parse(
  //   '{"invoiceNo":"PI2306000147IMP","date":"27/06/2023","jobNo":"2306000147","proformaInvoiceType":"PROFORMA INVOICES","shipperAddress":{"id":"6476c0ef5e0f6fee796f5407","name":"BugToffy1","taxNo":"BugToffy1","addressNo":"BugToffy1","state":"BugToffy1","city":"BugToffy1","countryId":"637b11100edef821a8802947","zipCode":"BugToffy1","dialCodeId":"637b11100edef821a8802948","tel":"0877777","email":"","faxNo":"","userId":"63bb9f01ddf136b0eba536b1","agentId":null,"createdAt":"2023-05-31T03:37:19.499Z","updatedAt":"2023-05-31T03:37:19.499Z","createdById":"637b112b0edef821a88029f6","updatedById":"637b112b0edef821a88029f6","country":{"id":"637b11100edef821a8802947","name":"SUDAN","iso2":"SD","iso3":"SDN","createdAt":"2022-11-21T05:48:00.237Z","updatedAt":"2022-11-21T05:48:00.237Z","createdById":null,"updatedById":null},"user":{"id":"63bb9f01ddf136b0eba536b1","username":"63bb9f01ba459015d2a2d884","password":null,"email":"agent@catcomp.co.th","firstName":"","lastName":"","role":"Customer","branchIds":[],"chatRoomIds":[],"type":"Company","customerNo":"000094","customerPaymentType":"Cash","creditDays":0,"creditLimit":0,"creditBalance":0,"balance":84000,"expressNo":"","companyName":"CATCOMP","dialCodeId":"637b11130edef821a880295c","tel":"987654365","branch":"BKK","line":"CATCOMP OFFICIAL","facebook":"CATCOMP OFFICIAL","no":null,"warehouseId":null,"serviceTransportId":null,"freightTermId":null,"isActive":true,"lastLoginAt":null,"createdAt":"2023-01-09T04:58:41.306Z","updatedAt":"2023-06-13T04:26:51.719Z","createdById":"637b112c0edef821a88029f8","updatedById":"637b112c0edef821a88029f8"},"dialCode":{"id":"637b11100edef821a8802948","code":"249","countryId":"637b11100edef821a8802947","createdAt":"2022-11-21T05:48:00.345Z","updatedAt":"2022-11-21T05:48:00.345Z","createdById":null,"updatedById":null}},"shipperTel":"+249 877777","consigneeAddress":{"id":"6476123c5e0f6fee796f53e9","name":"BugPeem1","taxNo":"BugPeem1","addressNo":"BugPeem1","state":"BugPeem1","city":"BugPeem1","countryId":"637b11120edef821a880295b","zipCode":"BugPeem1","dialCodeId":"637b11130edef821a880295c","tel":"111111","email":"","faxNo":"","userId":"63bb9f01ddf136b0eba536b1","agentId":null,"createdAt":"2023-05-30T15:11:56.582Z","updatedAt":"2023-05-30T15:11:56.582Z","createdById":"637b112b0edef821a88029f6","updatedById":"637b112b0edef821a88029f6","country":{"id":"637b11120edef821a880295b","name":"THAILAND","iso2":"TH","iso3":"THA","createdAt":"2022-11-21T05:48:02.954Z","updatedAt":"2022-11-21T05:48:02.954Z","createdById":null,"updatedById":null},"user":{"id":"63bb9f01ddf136b0eba536b1","username":"63bb9f01ba459015d2a2d884","password":null,"email":"agent@catcomp.co.th","firstName":"","lastName":"","role":"Customer","branchIds":[],"chatRoomIds":[],"type":"Company","customerNo":"000094","customerPaymentType":"Cash","creditDays":0,"creditLimit":0,"creditBalance":0,"balance":84000,"expressNo":"","companyName":"CATCOMP","dialCodeId":"637b11130edef821a880295c","tel":"987654365","branch":"BKK","line":"CATCOMP OFFICIAL","facebook":"CATCOMP OFFICIAL","no":null,"warehouseId":null,"serviceTransportId":null,"freightTermId":null,"isActive":true,"lastLoginAt":null,"createdAt":"2023-01-09T04:58:41.306Z","updatedAt":"2023-06-13T04:26:51.719Z","createdById":"637b112c0edef821a88029f8","updatedById":"637b112c0edef821a88029f8"},"dialCode":{"id":"637b11130edef821a880295c","code":"66","countryId":"637b11120edef821a880295b","createdAt":"2022-11-21T05:48:03.065Z","updatedAt":"2022-11-21T05:48:03.065Z","createdById":null,"updatedById":null}},"consigneeTel":"+66 111111","freightTermType":"Import","freightTermName":"FOB","freightOriginal":"ARUBA","freightDestination":"THAILAND","shownColumns":["DescriptionEN","Qty","Unit","UnitPrice","TotalPrice", "Additional1", "Additional2" ],"columns":[{"title":"PRODUCT NAME (ENG)","key":"descriptionEN","col":"DescriptionEN"},{"title":"QTY","key":"qty","col":"Qty"},{"title":"UNIT","key":"unitTypeId","col":"Unit"},{"title":"UNIT PRICE (THB)","key":"unitPrice","col":"UnitPrice"},{"title":"TOTAL PRICE (THB)","key":"totalPrice","col":"TotalPrice"}, {"title":"ADDITIONAL 1","key":"additional1","col":"Additional1"}, {"title":"ADDITIONAL 2","key":"additional2","col":"Additional2"}],"items":[{"additional1":"","additional2":"","currencyId":"62e502700246f13939983ed8","descriptionEN":"Rabbit","descriptionTH":"กระต่าย","exRate":"1","gw":30,"hsCode":"","madeFrom":"Plastic","note":"","nw":30,"photoId":null,"qty":"50","unitPrice":"40.00","unitTypeId":"61fc05c69e0eecb23d93cfb1","no":1,"totalPrice":"2,000.00","unitType":"Pack"},{"additional1":"","additional2":"","currencyId":"62e502700246f13939983ed8","descriptionEN":"Fish","descriptionTH":"ปลา","exRate":"1","gw":30,"hsCode":"","madeFrom":"Plastic","note":"","nw":30,"photoId":null,"qty":"40","unitPrice":"50.00","unitTypeId":"61fc05c69e0eecb23d93cfaf","no":2,"totalPrice":"2,000.00","unitType":"Unit"},{"additional1":"","additional2":"","currencyId":"62e502700246f13939983ed8","descriptionEN":"Rabbit","descriptionTH":"กระต่าย","exRate":"1","gw":30,"hsCode":"","madeFrom":"Plastic","note":"","nw":30,"photoId":null,"qty":"50","unitPrice":"40.00","unitTypeId":"61fc05c69e0eecb23d93cfb1","no":3,"totalPrice":"2,000.00","unitType":"Pack"},{"additional1":"","additional2":"","currencyId":"62e502700246f13939983ed8","descriptionEN":"Fish","descriptionTH":"ปลา","exRate":"1","gw":30,"hsCode":"","madeFrom":"Plastic","note":"","nw":30,"photoId":null,"qty":"40","unitPrice":"50.00","unitTypeId":"61fc05c69e0eecb23d93cfaf","no":4,"totalPrice":"2,000.00","unitType":"Unit"},{"additional1":"","additional2":"","currencyId":"62e502700246f13939983ed8","descriptionEN":"Rabbit","descriptionTH":"กระต่าย","exRate":"1","gw":30,"hsCode":"","madeFrom":"Plastic","note":"","nw":30,"photoId":null,"qty":"50","unitPrice":"40.00","unitTypeId":"61fc05c69e0eecb23d93cfb1","no":5,"totalPrice":"2,000.00","unitType":"Pack"},{"additional1":"","additional2":"","currencyId":"62e502700246f13939983ed8","descriptionEN":"Fish","descriptionTH":"ปลา","exRate":"1","gw":30,"hsCode":"","madeFrom":"Plastic","note":"","nw":30,"photoId":null,"qty":"40","unitPrice":"50.00","unitTypeId":"61fc05c69e0eecb23d93cfaf","no":6,"totalPrice":"2,000.00","unitType":"Unit"},{"additional1":"","additional2":"","currencyId":"62e502700246f13939983ed8","descriptionEN":"Rabbit","descriptionTH":"กระต่าย","exRate":"1","gw":30,"hsCode":"","madeFrom":"Plastic","note":"","nw":30,"photoId":null,"qty":"50","unitPrice":"40.00","unitTypeId":"61fc05c69e0eecb23d93cfb1","no":7,"totalPrice":"2,000.00","unitType":"Pack"},{"additional1":"","additional2":"","currencyId":"62e502700246f13939983ed8","descriptionEN":"Fish","descriptionTH":"ปลา","exRate":"1","gw":30,"hsCode":"","madeFrom":"Plastic","note":"","nw":30,"photoId":null,"qty":"40","unitPrice":"50.00","unitTypeId":"61fc05c69e0eecb23d93cfaf","no":8,"totalPrice":"2,000.00","unitType":"Unit"},{"additional1":"","additional2":"","currencyId":"62e502700246f13939983ed8","descriptionEN":"Rabbit","descriptionTH":"กระต่าย","exRate":"1","gw":30,"hsCode":"","madeFrom":"Plastic","note":"","nw":30,"photoId":null,"qty":"50","unitPrice":"40.00","unitTypeId":"61fc05c69e0eecb23d93cfb1","no":9,"totalPrice":"2,000.00","unitType":"Pack"},{"additional1":"","additional2":"","currencyId":"62e502700246f13939983ed8","descriptionEN":"Fish","descriptionTH":"ปลา","exRate":"1","gw":30,"hsCode":"","madeFrom":"Plastic","note":"","nw":30,"photoId":null,"qty":"40","unitPrice":"50.00","unitTypeId":"61fc05c69e0eecb23d93cfaf","no":10,"totalPrice":"2,000.00","unitType":"Unit"}],"noteAndInstruction":{"totalOfNetWeight":"300.00","totalOfGrossWeight":"300.00","totalPackage":"5","measurement":"0","remark":"Test","originCountry":"ARUBA"},"shippingMarkDetails":[{"detail":"BugPeem1, BugPeem1, BugPeem1, BugPeem1, BugPeem1, THAILAND","title":"TO","type":"TO"},{"detail":"THAILAND","title":"DESTINATION","type":"DESTINATION"},{"detail":"BugPeem1","title":"CONTACT","type":"CONTACT"},{"detail":"+66 111111","title":"TEL","type":"TEL"},{"detail":null,"title":null,"type":"NO DISPLAY"},{"detail":null,"title":null,"type":"NO DISPLAY"}],"sumOfQty":450,"sumOfTotalPrice":"20,000.00"}'
  // );

  // data = { ...data, columnsTextAlign, additionalColumnName1: 'Test1', additionalColumnName2: 'Test2' }
  // data = { ...data, items: [...data.items, ...data.items, ...data.items], shippingMarkDetails: [...data.shippingMarkDetails, data.shippingMarkDetails[0]], columnsTextAlign }

  // const data = {
  //   invoiceNo: 'PI2306000001EXP',
  //   date: '30/06/2023',
  //   jobNo: '2306000001',
  //   proformaInvoiceType: 'PROFORMA INVOICES',
  //   shipperAddress: {
  //     id: '649dc8c7cddfc5ea1f9e0d37',
  //     name: 'DONLAPORN',
  //     taxNo: '',
  //     addressNo: '44/11',
  //     state: 'BANGNA',
  //     city: 'BANGKOK',
  //     countryId: '637b11120edef821a880295b',
  //     zipCode: '10260',
  //     dialCodeId: '637b11130edef821a880295c',
  //     tel: '890890890',
  //     email: 'donlaporn@mail.com',
  //     faxNo: '',
  //     userId: '649dc884cddfc5ea1f9e0d36',
  //     agentId: null,
  //     createdAt: "2023-06-29T18:09:11.563Z",
  //     updatedAt: "2023-06 - 29T18:09: 11.563Z",
  //     createdById: '649dc48fcddfc5ea1f9e0d2f',
  //     updatedById: '649dc48fcddfc5ea1f9e0d2f',
  //     country: {
  //       id: '637b11120edef821a880295b',
  //       name: 'THAILAND',
  //       iso2: 'TH',
  //       iso3: 'THA',
  //       createdAt: "2022-11-21T05:48:02.954Z",
  //       updatedAt: "2022 - 11 - 21T05: 48:02.954Z",
  //       createdById: null,
  //       updatedById: null
  //     },
  //     user: {
  //       id: '649dc884cddfc5ea1f9e0d36',
  //       username: '649dc8843de074f718ee16f7',
  //       password: null,
  //       email: 'paul@mail.co.th',
  //       firstName: 'Paul',
  //       lastName: 'Smith',
  //       role: 'Customer',
  //       branchIds: [],
  //       chatRoomIds: [],
  //       type: 'Personal',
  //       customerNo: '000002',
  //       customerPaymentType: 'Cash',
  //       creditDays: 0,
  //       creditLimit: 0,
  //       creditBalance: 0,
  //       balance: 0,
  //       expressNo: '',
  //       companyName: '',
  //       dialCodeId: '637b11130edef821a880295c',
  //       tel: '877777777',
  //       branch: '',
  //       line: '@paul',
  //       facebook: 'paulza',
  //       no: null,
  //       warehouseId: null,
  //       serviceTransportId: null,
  //       freightTermId: null,
  //       isActive: true,
  //       lastLoginAt: null,
  //       createdAt: "2023-06-29T18:08:04.927Z",
  //       updatedAt: "2023-06 - 29T18:08:04.927Z",
  //       createdById: '649dc48fcddfc5ea1f9e0d2f',
  //       updatedById: '649dc48fcddfc5ea1f9e0d2f'
  //     },
  //     dialCode: {
  //       id: '637b11130edef821a880295c',
  //       code: '66',
  //       countryId: '637b11120edef821a880295b',
  //       createdAt: "2022-11-21T05:48:03.065Z",
  //       updatedAt: "2022 - 11 - 21T05: 48:03.065Z",
  //       createdById: null,
  //       updatedById: null
  //     }
  //   },
  //   shipperTel: '+66 890890890',
  //   consigneeAddress: {
  //     id: '649dc969cddfc5ea1f9e0d38',
  //     name: 'JIRACHAI MAHAJAK',
  //     taxNo: '',
  //     addressNo: '888',
  //     state: 'SINGAPORE',
  //     city: 'SINGAPORE',
  //     countryId: '637b110d0edef821a8802931',
  //     zipCode: '098269',
  //     dialCodeId: '637b110d0edef821a8802932',
  //     tel: '65778888',
  //     email: '',
  //     faxNo: '',
  //     userId: '649dc884cddfc5ea1f9e0d36',
  //     agentId: null,
  //     createdAt: "2023-06-29T18:11:53.346Z",
  //     updatedAt: "2023-06 - 29T18: 11: 53.346Z",
  //     createdById: '649dc48fcddfc5ea1f9e0d2f',
  //     updatedById: '649dc48fcddfc5ea1f9e0d2f',
  //     country: {
  //       id: '637b110d0edef821a8802931',
  //       name: 'SINGAPORE',
  //       iso2: 'SG',
  //       iso3: 'SGP',
  //       createdAt: "2022-11-21T05:47:57.085Z",
  //       updatedAt: "2022 - 11 - 21T05: 47: 57.085Z",
  //       createdById: null,
  //       updatedById: null
  //     },
  //     user: {
  //       id: '649dc884cddfc5ea1f9e0d36',
  //       username: '649dc8843de074f718ee16f7',
  //       password: null,
  //       email: 'paul@mail.co.th',
  //       firstName: 'Paul',
  //       lastName: 'Smith',
  //       role: 'Customer',
  //       branchIds: [],
  //       chatRoomIds: [],
  //       type: 'Personal',
  //       customerNo: '000002',
  //       customerPaymentType: 'Cash',
  //       creditDays: 0,
  //       creditLimit: 0,
  //       creditBalance: 0,
  //       balance: 0,
  //       expressNo: '',
  //       companyName: '',
  //       dialCodeId: '637b11130edef821a880295c',
  //       tel: '877777777',
  //       branch: '',
  //       line: '@paul',
  //       facebook: 'paulza',
  //       no: null,
  //       warehouseId: null,
  //       serviceTransportId: null,
  //       freightTermId: null,
  //       isActive: true,
  //       lastLoginAt: null,
  //       createdAt: "2023-06-29T18:08:04.927Z",
  //       updatedAt: "2023-06 - 29T18:08:04.927Z",
  //       createdById: '649dc48fcddfc5ea1f9e0d2f',
  //       updatedById: '649dc48fcddfc5ea1f9e0d2f'
  //     },
  //     dialCode: {
  //       id: '637b110d0edef821a8802932',
  //       code: '65',
  //       countryId: '637b110d0edef821a8802931',
  //       createdAt: "2022-11-21T05:47:57.216Z",
  //       updatedAt: "2022 - 11 - 21T05: 47: 57.216Z",
  //       createdById: null,
  //       updatedById: null
  //     }
  //   },
  //   consigneeTel: '+65 65778888',
  //   freightTermType: 'EXPORT',
  //   freightTermName: 'DAP',
  //   freightOriginal: 'THAILAND',
  //   freightDestination: 'SINGAPORE',
  //   shownColumns: [
  //     'DescriptionEN', 'DescriptionTH',
  //     'HSCode', 'MadeFrom',
  //     'Additional1', 'Additional2',
  //     'Photo', 'Qty',
  //     'Unit', 'UnitPrice',
  //     'TotalPrice', 'Nw',
  //     'Gw', 'Note'
  //   ],
  //   columns: [
  //     {
  //       title: 'PRODUCT NAME (ENG)',
  //       key: 'descriptionEN',
  //       col: 'DescriptionEN'
  //     },
  //     {
  //       title: 'PRODUCT NAME (THAI)',
  //       key: 'descriptionTH',
  //       col: 'DescriptionTH'
  //     },
  //     { title: 'HS CODE', key: 'hsCode', col: 'HSCode' },
  //     { title: 'MADE FROM', key: 'madeFrom', col: 'MadeFrom' },
  //     { title: 'ADDITIONAL 1', key: 'additional1', col: 'Additional1' },
  //     { title: 'ADDITIONAL 2', key: 'additional2', col: 'Additional2' },
  //     { title: 'PHOTO', key: 'photoId', col: 'Photo' },
  //     { title: 'QTY', key: 'qty', col: 'Qty' },
  //     { title: 'UNIT', key: 'unitTypeId', col: 'Unit' },
  //     { title: 'UNIT PRICE (SGD)', key: 'unitPrice', col: 'UnitPrice' },
  //     {
  //       title: 'TOTAL PRICE (SGD)',
  //       key: 'totalPrice',
  //       col: 'TotalPrice'
  //     },
  //     { title: 'NW', key: 'nw', col: 'Nw' },
  //     { title: 'GW', key: 'gw', col: 'Gw' },
  //     { title: 'NOTE', key: 'note', col: 'Note' }
  //   ],
  //   items: [
  //     {
  //       additional1: 'test01',
  //       additional2: 'test10',
  //       currencyId: '6362b6d0407b381e133572a9',
  //       descriptionEN: 'Cat',
  //       descriptionTH: 'แมว',
  //       exRate: '28',
  //       gw: 10,
  //       hsCode: 'A00010/12',
  //       madeFrom: 'Paper',
  //       note: 'Water Resistance',
  //       nw: 10,
  //       photoId: '649dcc3ecddfc5ea1f9e0d53',
  //       qty: '40',
  //       unitPrice: '500.00',
  //       unitTypeId: '61fc05c69e0eecb23d93cfb1',
  //       no: 1,
  //       totalPrice: '20,000.00',
  //       unitType: 'Pack',
  //       photoUrl: 'https://mycpl-v3.s3.amazonaws.com/20230630/%E2%80%94Pngtree%E2%80%94cartoon%20cat%20illuustration_8628597_1688063038304.png?AWSAccessKeyId=AKIAXV4VO5AOR6Z2XTHZ&Expires=1688115908&Signature=3pR1gdqqvBt5HqdtLuDNUfHj4Cc%3D'
  //     },
  //     {
  //       additional1: 'test02',
  //       additional2: 'test20',
  //       currencyId: '6362b6d0407b381e133572a9',
  //       descriptionEN: 'Dog',
  //       descriptionTH: 'สุนัข',
  //       exRate: '28',
  //       gw: 10,
  //       hsCode: 'A09000/31',
  //       madeFrom: 'Paper',
  //       note: 'Water Resistance',
  //       nw: 10,
  //       photoId: '649dcc56cddfc5ea1f9e0d54',
  //       qty: '40',
  //       unitPrice: '500.00',
  //       unitTypeId: '61fc05c69e0eecb23d93cfb1',
  //       no: 2,
  //       totalPrice: '20,000.00',
  //       unitType: 'Pack',
  //       photoUrl: 'https://mycpl-v3.s3.amazonaws.com/20230630/cat_1688063061978.png?AWSAccessKeyId=AKIAXV4VO5AOR6Z2XTHZ&Expires=1688115908&Signature=mCuW4vb27Klg9ewIm%2BV9l7IoYho%3D'
  //     },
  //     {
  //       additional1: 'test03',
  //       additional2: 'test30',
  //       currencyId: '6362b6d0407b381e133572a9',
  //       descriptionEN: 'Rat',
  //       descriptionTH: 'หนู',
  //       exRate: '28',
  //       gw: 10,
  //       hsCode: 'A00023/99',
  //       madeFrom: 'Paper',
  //       note: 'Water Resistance',
  //       nw: 10,
  //       photoId: '649dcc6fcddfc5ea1f9e0d55',
  //       qty: '40',
  //       unitPrice: '500.00',
  //       unitTypeId: '61fc05c69e0eecb23d93cfb1',
  //       no: 3,
  //       totalPrice: '20,000.00',
  //       unitType: 'Pack',
  //       photoUrl: 'https://mycpl-v3.s3.amazonaws.com/20230630/pngegg%20%287%29_1688063087362.png?AWSAccessKeyId=AKIAXV4VO5AOR6Z2XTHZ&Expires=1688115908&Signature=SD4lXjeLLD7mM8aLV9TsW83G9Mw%3D'
  //     },
  //     {
  //       additional1: 'test04',
  //       additional2: 'test40',
  //       currencyId: '6362b6d0407b381e133572a9',
  //       descriptionEN: 'Fish',
  //       descriptionTH: 'ปลา',
  //       exRate: '28',
  //       gw: 10,
  //       hsCode: 'A00034/04',
  //       madeFrom: 'Paper',
  //       note: 'Water Resistance',
  //       nw: 10,
  //       photoId: '649dcc93cddfc5ea1f9e0d56',
  //       qty: '40',
  //       unitPrice: '500.00',
  //       unitTypeId: '61fc05c69e0eecb23d93cfb1',
  //       no: 4,
  //       totalPrice: '20,000.00',
  //       unitType: 'Pack',
  //       photoUrl: 'https://mycpl-v3.s3.amazonaws.com/20230630/pngegg%20%288%29_1688063123318.png?AWSAccessKeyId=AKIAXV4VO5AOR6Z2XTHZ&Expires=1688115908&Signature=EchiQic7SlBpageqVaAYP2FPki8%3D'
  //     },
  //     {
  //       additional1: 'test05',
  //       additional2: 'test50',
  //       currencyId: '6362b6d0407b381e133572a9',
  //       descriptionEN: 'Rabbit',
  //       descriptionTH: 'กระต่าย',
  //       exRate: '28',
  //       gw: 10,
  //       hsCode: 'A67804/76',
  //       madeFrom: 'Paper',
  //       note: 'Water Resistance',
  //       nw: 10,
  //       photoId: '649dcca3cddfc5ea1f9e0d57',
  //       qty: '40',
  //       unitPrice: '500.00',
  //       unitTypeId: '61fc05c69e0eecb23d93cfb1',
  //       no: 5,
  //       totalPrice: '20,000.00',
  //       unitType: 'Pack',
  //       photoUrl: 'https://mycpl-v3.s3.amazonaws.com/20230630/pngwing.com%20%281%29_1688063139799.png?AWSAccessKeyId=AKIAXV4VO5AOR6Z2XTHZ&Expires=1688115908&Signature=ZqurRxtFaVtsC4o6Twea39m9xQI%3D'
  //     },
  //     {
  //       additional1: 'test06',
  //       additional2: 'test60',
  //       currencyId: '6362b6d0407b381e133572a9',
  //       descriptionEN: 'Tiger',
  //       descriptionTH: 'เสือ',
  //       exRate: '28',
  //       gw: 10,
  //       hsCode: 'A00041/56',
  //       madeFrom: 'Paper',
  //       note: 'Water Resistance',
  //       nw: 10,
  //       photoId: '649dccc6cddfc5ea1f9e0d58',
  //       qty: '40',
  //       unitPrice: '500.00',
  //       unitTypeId: '61fc05c69e0eecb23d93cfb1',
  //       no: 6,
  //       totalPrice: '20,000.00',
  //       unitType: 'Pack',
  //       photoUrl: 'https://mycpl-v3.s3.amazonaws.com/20230630/pngegg%20%286%29_1688063174912.png?AWSAccessKeyId=AKIAXV4VO5AOR6Z2XTHZ&Expires=1688115908&Signature=4Evr0Qip7asSCuBlERutz8okIgc%3D'
  //     }
  //   ],
  //   noteAndInstruction: {
  //     totalOfNetWeight: '50.00',
  //     totalOfGrossWeight: '50.00',
  //     totalPackage: '1',
  //     measurement: '1.00',
  //     remark: 'Test Document',
  //     originCountry: 'THAILAND'
  //   },
  //   shippingMarkDetails: [
  //     {
  //       detail: '888, SINGAPORE, SINGAPORE, 098269, SINGAPORE',
  //       title: 'TO',
  //       type: 'TO'
  //     },
  //     { detail: 'SINGAPORE', title: 'DESTINATION', type: 'DESTINATION' },
  //     { detail: 'JIRACHAI MAHAJAK', title: 'CONTACT', type: 'CONTACT' },
  //     { detail: '+65 65778888', title: 'TEL', type: 'TEL' },
  //     { detail: 'CPL//8976//CUSTOMER', title: 'Remark', type: 'OTHER' },
  //     { detail: 'FedEx', title: 'By Agent', type: 'OTHER' }
  //   ],
  //   sumOfQty: 240,
  //   sumOfTotalPrice: '120,000.00',
  //   columnsTextAlign: {
  //     descriptionEN: 'left',
  //     descriptionTH: 'left',
  //     photoId: 'center',
  //     madeForm: 'left',
  //     hsCode: 'center',
  //     qty: 'center',
  //     unitType: 'center',
  //     unitPrice: 'right',
  //     totalPrice: 'right',
  //     gw: 'right',
  //     nw: 'right',
  //     note: 'left',
  //     additional1: 'left',
  //     additional2: 'left'
  //   },
  //   additionalColumnName1: 'Ingredients',
  //   additionalColumnName2: 'Manufactory'
  // }
  // console.log('proformaData', proformaData)
  const data = proformaData
  console.log('data', data)
  const template = Handlebars.compile(html);
  // const templateTest = Handlebars.compile(test);
  const htmlString = template(data);
  // const htmlTestString = templateTest(data)

  console.log('htmlString', htmlString);

  // return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  return <>
    {/* <div dangerouslySetInnerHTML={{ __html: htmlTestString }} /> */}
    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
  </>;
};
