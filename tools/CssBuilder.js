const Range = (size) => [...Array(size).keys()];
/*
row-gap: 50px;
column-gap: 40px;
*/
function Spacing(spacing) {
  let cssStyle = "";
  const $spacing = {
    ...{
      range: 24,
      number: 4,
      type: "px",
    },
    ...spacing,
  };

  Range($spacing.range + 1).forEach((size) => {
    let current = $spacing.number * size;
    const config = current + $spacing.type;

    cssStyle += `
.ma-${size} { margin-top: ${config} !important; margin-bottom: ${config} !important; margin-right: ${config} !important; margin-left: ${config} !important; }
.mt-${size} { margin-top: ${config} !important; }
.mb-${size} { margin-bottom: ${config} !important; }
.mr-${size} { margin-right: ${config} !important; }
.ml-${size} { margin-left: ${config} !important; }
.mx-${size} { margin-left: ${config} !important; margin-right: ${config} !important; }
.my-${size} { margin-top: ${config} !important; margin-bottom: ${config} !important; }
.mt-n${size} { margin-top: -${config} !important; }
.mb-n${size} { margin-bottom: -${config} !important; }
.mr-n${size} { margin-right: -${config} !important; }
.ml-n${size} { margin-left: -${config} !important; }
.mx-n${size} { margin-left: -${config} !important; margin-right: -${config} !important; }
.my-n${size} { margin-top: -${config} !important; margin-bottom: -${config} !important; }
.pa-${size} { padding-top: ${config} !important; padding-bottom: ${config} !important; padding-right: ${config} !important; padding-left: ${config} !important; }
.pt-${size} { padding-top: ${config} !important; }
.pb-${size} { padding-bottom: ${config} !important; }
.pr-${size} { padding-right: ${config} !important; }
.pl-${size} { padding-left: ${config} !important; }
.px-${size} { padding-left: ${config} !important; padding-right: ${config} !important; }
.py-${size} { padding-top: ${config} !important; padding-bottom: ${config} !important; }
`;
    cssStyle += "\n";
  });

  // Return
  return cssStyle;
}

function Gaps(spacing) {
  let cssStyle = "";
  const $spacing = {
    ...{
      range: 12,
      number: 4,
      type: "px",
    },
    ...spacing,
  };

  Range($spacing.range + 1).forEach((size) => {
    let current = $spacing.number * size;
    const config = current + $spacing.type;

    cssStyle += `
.gx-${size} { column-gap: ${config} !important; }
.gy-${size} { row-gap: ${config} !important; }
  `;
    cssStyle += "\n";
  });

  // Return
  return cssStyle;
}

function Columns(columns) {
  const $columns = columns ? columns : 12;
  let cssStyle = `
.row {
  display: grid;
  grid-template-columns: repeat(${$columns}, 1fr);
}
.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}
  `;

  Range($columns).forEach((col) => {
    cssStyle += `.col-${col + 1} { grid-column: span ${col + 1}; } \n`;
  });

  // Return
  return cssStyle;
}

// console.log(Spacing());
// console.log(Gaps());
// console.log(Columns());
