# Generator File [![MIT License][license-img]][license-url]

## Install

```bash
npm install -g generator-file
```

## Usage

```bash
yo file <path/to/file_name>
```

## Available Templates

- JS
- PHP
- HTML

### Templates

#### HTML

```html
<!DOCTYPE html>
<html lang="fr">
    <head>
        <title></title>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
    </head>
    <body>

    </body>
</html>
```

#### JavaScript (CommonJS)

```javascript
/*jslint indent: 4, nomen: true, plusplus: true */
/*globals require, module */
(function(){

    'use strict';

    module.exports = {};

}());
```

#### PHP

```php
<?php

```

[license-img]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: LICENSE-MIT

## History

- 0.1.2
    - HTML, JS, PHP templates added

