import Handlebars from "handlebars";
import html from "./template/proforma-invoice.html?raw";

Handlebars.registerHelper("isIncludes", function (value1, value2, arr) {
  return arr.includes(value1) && arr.includes(value2);
});

Handlebars.registerHelper("equalTo", function (value1, value2, value3) {
  return value1 === value2 || value1 === value3;
});

Handlebars.registerHelper("add", function (value1, value2) {
  return value1 + value2;
});

Handlebars.registerHelper("hasValue", function (value) {
  return !!value;
});

Handlebars.registerHelper("noop", (options) => {
  console.log("options", options);
  const test = document.createElement("div");
  test.innerHTML = '<div style="color:red">son</div>';
  document.children[0].children[1].appendChild(test);
  console.log("test", document.children[0].children[1]);
  return options.fn(this);
});

Handlebars.registerHelper("son", (index) => {
  const mackie = document.getElementById("mackie");
  console.log("mackie", mackie);
  return true;
});

export enum ItemColumn {
  DescriptionTH = "DescriptionTH",
  DescriptionEN = "DescriptionEN",
  Photo = "Photo",
  MadeFrom = "MadeFrom",
  HSCode = "HSCode",
  Qty = "Qty",
  Unit = "Unit",
  UnitPrice = "UnitPrice",
  TotalPrice = "TotalPrice",
  Gw = "Gw",
  Nw = "Nw",
  Note = "Note",
  Additional1 = "Additional1",
  Additional2 = "Additional2",
}

export const mapperHeaderName = {
  [ItemColumn.DescriptionEN]: "PRODUCT NAME (ENG)",
  [ItemColumn.DescriptionTH]: "PRODUCT NAME (THAI)",
  [ItemColumn.MadeFrom]: "MADE FROM",
  [ItemColumn.HSCode]: "HS CODE",
  [ItemColumn.Qty]: "QTY",
  [ItemColumn.Unit]: "UNIT",
  [ItemColumn.UnitPrice]: "UNIT PRICE (THB)",
  [ItemColumn.TotalPrice]: "TOTAL PRICE (THB)",
  [ItemColumn.Gw]: "GW",
  [ItemColumn.Nw]: "NW",
  [ItemColumn.Note]: "NOTE",
  [ItemColumn.Additional1]: "ADDITIONAL 1",
  [ItemColumn.Additional2]: "ADDITIONAL 2",
  [ItemColumn.Photo]: "PHOTO",
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
  [ItemColumn.DescriptionTH]: "descriptionTH",
  [ItemColumn.DescriptionEN]: "descriptionEN",
  [ItemColumn.Photo]: "photoId",
  [ItemColumn.MadeFrom]: "madeFrom",
  [ItemColumn.HSCode]: "hsCode",
  [ItemColumn.Qty]: "qty",
  [ItemColumn.Unit]: "unitTypeId",
  [ItemColumn.UnitPrice]: "unitPrice",
  [ItemColumn.Gw]: "gw",
  [ItemColumn.Nw]: "nw",
  [ItemColumn.Note]: "note",
  [ItemColumn.Additional1]: "additional1",
  [ItemColumn.Additional2]: "additional2",
  [ItemColumn.TotalPrice]: "totalPrice",
};

const allColumns = [
  "DescriptionEN",
  "DescriptionTH",
  "Photo",
  "MadeFrom",
  "HSCode",
  "Qty",
  "Unit",
  "UnitPrice",
  "TotalPrice",
  "Gw",
  "Nw",
  "Note",
  "Additional1",
  "Additional2",
] as ItemColumn[];

const chunkArray = (array: any[], chunkSize: number) => {
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    return chunk;
  }
};

function App() {
  const rawItems = [
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Box",
      descriptionTH: "กล่อง",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 20,
      unitPrice: 20,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Box",
      descriptionTH: "กล่อง",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 20,
      unitPrice: 20,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Box",
      descriptionTH: "กล่อง",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 20,
      unitPrice: 20,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Box",
      descriptionTH: "กล่อง",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 20,
      unitPrice: 20,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Box",
      descriptionTH: "กล่อง",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 20,
      unitPrice: 20,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Box",
      descriptionTH: "กล่อง",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 20,
      unitPrice: 20,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Box",
      descriptionTH: "กล่อง",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 20,
      unitPrice: 20,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Box",
      descriptionTH: "กล่อง",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 20,
      unitPrice: 20,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Box",
      descriptionTH: "กล่อง",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 20,
      unitPrice: 20,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Box",
      descriptionTH: "กล่อง",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 20,
      unitPrice: 20,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Box",
      descriptionTH: "กล่อง",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 20,
      unitPrice: 20,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Box",
      descriptionTH: "กล่อง",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 20,
      unitPrice: 20,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
    {
      currencyId: "62e502700246f13939983ed8",
      descriptionEN: "Shoe",
      descriptionTH: "รองเท้า",
      exRate: 1,
      gw: 0,
      nw: 0,
      qty: 10,
      unitPrice: 10,
      unitType: "UNIT",
    },
  ];

  const columnsTransform = allColumns.map((col) => ({
    title: mapperHeaderName[col],
    key: columnMapItemKeys[col],
    col,
  }));

  const data = {
    imageLogo: "images/logo-cpl-black.png",
    fontInter: "fonts/Inter-Regular.ttf",
    fontInterBold: "fonts/Inter-Bold.ttf",
    fontInterSemiBold: "fonts/Inter-SemiBold.ttf",
    fontInterMedium: "fonts/Inter-Medium.ttf",
    shownColumns: allColumns,
    columns: columnsTransform,
    items: chunkArray(
      rawItems.map((item, index) => ({
        no: index + 1,
        ...item,
        totalPrice: item.qty * item.unitPrice,
      })),
      100
    ),
  };

  const template = Handlebars.compile(html);
  const htmlString = template(data);

  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
}

export default App;
