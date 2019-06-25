const { createElement } = require("react");
const ReactCssSpinners = require("react-css-myspinner");
const express = require("express");
const { renderToString } = require("react-dom/server");
const app = express();
const { Ring } = require("react-css-myspinner");
const port = 3000;

app.get("*", (req, res) => {
  const html = renderToString(createElement(Ring));
  //  const html = "my tester";
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  </head>
  <body>
  ${html}
  </body>
  </html>
  `);
});
app.listen(port, () => console.log(`http://localhost:${port}`));
