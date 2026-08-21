function NameURLFormatter(value, row, index, field) {
  console.log(value);
  console.log(row);
  console.log(field);
  return `<a href="${row.url}">${value}</a>`;
  return '<a href="' + row.url + '">"' + value + '</a>';
}
