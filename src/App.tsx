import Handlebars from 'handlebars';
import { WarehouseMark } from './components/WarehouseMark';
import { ShippingMarkConsole } from './components/ShippingMarkConsole';
import { CragoReleasing } from './components/CragoReleasing';
import { ProformaInvoice } from './components/ProformaInvoice';
import { FreightConfirming } from './components/FreigthConfirming';

import test2 from './template/test2.html?raw';

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

Handlebars.registerHelper(
  'getColumnTextAlign',
  function (obj: { [key: string]: 'left' | 'center' | 'right' }, key: string) {
    return obj[key];
  }
);

function App() {
  // return <div dangerouslySetInnerHTML={{ __html: test2 }} />
  // return <FreightConfirming />;
  return <ProformaInvoice />;
  // return <WarehouseMark />
  // return <CragoReleasing />
}

export default App;
