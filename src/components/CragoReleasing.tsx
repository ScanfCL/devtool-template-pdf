import html from '../template/crago-releasing.html?raw';
import * as Handlebars from 'handlebars';

export const CragoReleasing = () => {
  const data = {
    imageLogo: 'images/cpl.png',
  };

  const template = Handlebars.compile(html);
  const htmlString = template(data);

  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};
