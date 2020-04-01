import _ from './helper';

class JsonParser {
  read(data) {
    let any;
    if(_.isNullOrUndefined(data)) {
      return data;
    } else if(_.isString(data)) {
      any = JSON.parse(data);
    } else {
      throw `JsonParser.read(data): the type of data is not support. The supported data type is string. data: ${data}`;
    }

    let json;
    if(Array.isArray(any)) {
      json = parseArray(any);
    } else {
      json = parseObject(any);
    }
    return json;
  }
  write(data) {
    let json = JSON.stringify(data);

    return json;
  }
}
// -0800; -08:00
const ISO8601_HHMM = /^\d+-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})*(Z|(\+|-)\d{2}:?\d{2})$/;
// -08;
const ISO8601_HH = /^\d+-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})*(Z|(\+|-)\d{2})$/;

function parseArray(values) {
  return values.map(value => {
    if (Array.isArray(value)) {
      return parseArray(value);
    } else if (typeof(value) === 'object') {
      return parseObject(value);
    } else {
      return value;
    }
  });
}

function parseObject(obj) {
  let json = {};
  for(var prop in obj) {
    let value = obj[prop];
    if(value===null||value===undefined) {
      json[prop] = value;
    } else if(Array.isArray(value)) {
      json[prop] = parseArray(value);
    } else if(typeof(value)==='object') {
      json[prop] = parseObject(value);
    } else if(typeof(value)==='string') {
      if(ISO8601_HHMM.test(value)) {
        json[prop] = new Date(value);
      } else if(ISO8601_HH.test(value)) {
        json[prop] = new Date(`${value}:00`);
      } else {
        json[prop] = value;
      }
    } else {
      json[prop] = value;
    }
  }
  return json;
}

export default JsonParser;