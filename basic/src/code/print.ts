import _ from 'lodash';

export default function print() {
    console.log('Print from print.js yeah');
    console.log(
        _.join(['Another', 'module', 'loaded!'], ' ')
      );
}