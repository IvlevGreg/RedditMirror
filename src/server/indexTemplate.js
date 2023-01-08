export const indexTemplate = (content) => `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="apple-touch-icon" sizes="180x180" href="https://i.postimg.cc/WpHFx7k7/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="https://i.postimg.cc/BQb5K6xm/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="https://i.postimg.cc/vH0PJkvN/favicon-16x16.png">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="theme-color" content="#ffffff">

  <title>Best reddit posts</title>
  <script src="/static/client.js" type="application/javascript"></script>
  
</head>
<body>
  <div id="react_root">
  </div>
  <div id="modal_root">
  </div>
  <div id="dropdown_root">
  </div>
</body>
</html>
`;
