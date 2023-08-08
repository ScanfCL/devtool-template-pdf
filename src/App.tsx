import Handlebars from 'handlebars';
// import { WarehouseMark } from './components/WarehouseMark';
// import { ShippingMarkConsole } from './components/ShippingMarkConsole';
import { CargoReleasing } from './components/CargoReleasing';
import { ProformaInvoice } from './components/ProformaInvoice';
// import { FreightConfirming } from './components/FreigthConfirming';

// import test2 from './template/test2.html?raw';
// import { ProformaInvoiceConsole } from './components/ProformaInvoiceConsole';
import { SaleInvoice } from './components/SaleInvoice';
import { FreightConfirming } from './components/FreigthConfirming';
import { CargoReleasedBill } from './components/CargoReleasedBill';

Handlebars.registerHelper('isIncludes', function (value1, value2, arr) {
  return arr?.includes(value1) && arr?.includes(value2);
});

Handlebars.registerHelper('equalTo', function (value1, value2, value3) {
  return value1 === value2 || value1 === value3;
});

Handlebars.registerHelper('add', function (value1, value2) {
  return value1 + value2;
});

Handlebars.registerHelper('hasValue', function (value) {
  return !!value;
});

Handlebars.registerHelper('son', function (value) {
  return value;
});

Handlebars.registerHelper(
  'getColumnTextAlign',
  function (obj: { [key: string]: 'left' | 'center' | 'right' }, key: string) {
    return obj[key];
  }
);

function App() {
  // return <div dangerouslySetInnerHTML={{ __html: test2 }} />
  // return <FreightConfirming />;
  // return <ProformaInvoiceConsole />;
  // return <ProformaInvoice />;
  // return <WarehouseMark />;
  // return <CargoReleasing />;
  return <CargoReleasedBill />;
  // return <SaleInvoice />;
}

export default App;
