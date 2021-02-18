### rowcss

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .popper__arrow {
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
      border-bottom-color: red;
      border-width: 6px;
      position: relative;
    }

    .popper__arrow:after {
      position: absolute;
      content: '';
      display: block;
      top: -5px;
      margin-left: -6px;
      border-color: transparent;
      border-style: solid;
      border-bottom-color: white;
      border-width: 6px;
    }
  </style>
</head>

<body>

  <div class="popper__arrow">

  </div>


</body>

</html>
```