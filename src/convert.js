import XLSX from 'xlsx';

const convert = (file, callback) => {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader();
    var rABS = !!reader.readAsBinaryString;
    reader.onload = function(e) {
      /* Parse data */
      var bstr = e.target.result;
      var wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array' });

      /* Get first worksheet */
      var wsnameItems = wb.SheetNames[0];
      var wsItem = wb.Sheets[wsnameItems];

      /* Convert array of arrays */
      var items = XLSX.utils.sheet_to_json(wsItem, { header: 1 });

      /* Get first worksheet */
      var wsnameLocations = wb.SheetNames[1];
      var wsLocations = wb.Sheets[wsnameLocations];

      /* Convert array of arrays */
      var locations = XLSX.utils.sheet_to_json(wsLocations, { header: 1 });

      // var cols = make_cols(ws['!ref']);

      var data = { items: items, locations: locations };

      resolve(data);
      return callback(null, data);
    };
    if (file && rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
  });
};

// function make_cols(refstr) {
//   var o = [],
//     C = XLSX.utils.decode_range(refstr).e.c + 1;
//   for (var i = 0; i < C; ++i) {
//     o[i] = { name: XLSX.utils.encode_col(i), key: i };
//   }
//   return o;
// }

export default convert;
