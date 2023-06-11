import Handlebars from "handlebars";
import { WarehouseMark } from "./components/WarehouseMark";

Handlebars.registerHelper("isIncludes", function (value1, value2, arr) {
  return arr?.includes(value1) && arr?.includes(value2);
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

function App() {
  return <WarehouseMark />;
}

export default App;
