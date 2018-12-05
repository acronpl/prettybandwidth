'use strict';

const unitList = [
    'b/s', 'kb/s', 'Mb/s', 'Gb/s', 'Tb/s', 'Pb/s', 'Eb/s'
];

/**
 Return formatted bandwidth from bytes
@method pretty
@param {Number} bandwidth Number of bytes to format
@param {Boolean} [short=false] Don't print a space between value and unit
@param {Boolean} [unitOnly=false] Only print unit character
@param {Number} [precision=1] Number of decimal places to return
*/

module.exports = (bandwidth, short, unitOnly, precision) => {
    if (typeof short === 'object') {
        const opts = short;
        short = opts.short;
        unitOnly = opts.unitOnly;
        precision = opts.precision || 1;
    } else {
        precision = precision || 1;
    }

    let varsize;
    unitList.forEach((unit, id) => {
        if (unitOnly) {
            unit = unit.slice(0, 1);
        }
        const s = Math.pow(1024, id);
        if (bandwidth >= s) {
            let result = String((bandwidth / s).toFixed(precision));
            if (result.indexOf('.0') === result.length - 2) {
                result = result.slice(0, -2);
            }
            varsize = result + (short ? '' : ' ') + unit;
        }
    });

    if (!varsize) {
        let unit = (unitOnly ? unitList[0].slice(0, 1) : unitList[0]);
        varsize = '0' + (short ? '' : ' ') + unit;
    }

    return varsize;
};
