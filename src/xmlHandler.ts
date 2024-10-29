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

type xmlRow = {
  length: string,
  width: string,
  quantity: number,
  grain: number,
  allow_rotation: number,
  label: string,
  material: string,
  customer: string,
  edge_band: {
    top_name: string,
    top_thick: number,
    left_name: string,
    left_thick: number,
    bottom_name: string,
    bottom_thick: number,
    right_name: string,
    right_thick: number
  },
  grinding: {
    top_thick: number,
    left_thick: number,
    bottom_thick: number,
    right_thick: number
  },
  color: number,
  id: number,
  use_it: number,
  utilized_in_optimization: number
}

export type xmlDataType = {
  data: {
    parts: {
      row: xmlRow[]
    }
  }
}

export const addRow = (xmlObject: xmlDataType, length: string, width: string, quantity: number, label: string, grain?: boolean) => {
  const newRow = {
    length,
    width,
    quantity,
    grain: grain ? 2 : 0,
    allow_rotation: -1,
    label,
    material: '',
    customer: '',
    edge_band: {
      top_name: '',
      top_thick: 0,
      left_name: '',
      left_thick: 0,
      bottom_name: '',
      bottom_thick: 0,
      right_name: '',
      right_thick: 0
    },
    grinding: {
      top_thick: 0,
      left_thick: 0,
      bottom_thick: 0,
      right_thick: 0
    },
    color: 16777215,
    id: -1,
    use_it: 1,
    utilized_in_optimization: 0
  }

  xmlObject.data.parts.row.push(newRow)
}

export const buildXml = (data: xmlDataType) => {
  const builder = new xml2js.Builder();
  return builder.buildObject(data);
}