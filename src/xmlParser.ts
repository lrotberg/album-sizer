import xml2js from 'xml2js';

export const xmlExample =
  `<?xml version="1.0" encoding="UTF-8"?>
<data>
  <parts>
    <row>
      <length>6.125</length>
      <width>4</width>
      <quantity>1</quantity>
      <grain>0</grain>
      <allow_rotation>-1</allow_rotation>
      <label>Flap</label>
      <material></material>
      <customer></customer>
      <edge_band>
        <top_name></top_name>
        <top_thick>0</top_thick>
        <left_name></left_name>
        <left_thick>0</left_thick>
        <bottom_name></bottom_name>
        <bottom_thick>0</bottom_thick>
        <right_name></right_name>
        <right_thick>0</right_thick>
      </edge_band>
      <grinding>
        <top_thick>0</top_thick>
        <left_thick>0</left_thick>
        <bottom_thick>0</bottom_thick>
        <right_thick>0</right_thick>
      </grinding>
      <color>16777215</color>
      <id>-1</id>
      <use_it>1</use_it>
      <utilized_in_optimization>0</utilized_in_optimization>
    </row>
  </parts>
</data>`

export const parseXml = (xml: string) => {
  // const xml2jsParser = new xml2js.Parser();
  xml2js.parseString(xml, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
      const file = new File([xml], 'xmlExample.xml', { type: 'text/xml' });
      file.text().then(text => console.log(text));
    }
  });
}