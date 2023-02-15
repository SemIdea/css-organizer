# CSS Organizer

This is a JavaScript class that helps organize and sort CSS properties within a CSS stylesheet according to pre-defined categories. The class provides two methods: `minifyCss` and `organizeCss`.

The `minifyCss` method reduces the whitespace within the CSS stylesheet to create a more compact version.

The `organizeCss` method sorts the CSS properties based on categories listed in `list.json` file and returns an organized CSS string.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [Notes](#notes)
- [License](#license)

## Installation

To use the CSS Organizer, simply include the `CssOrganizer.js` file in your project

## Usage

To use this CSS organizer, you need to first create an instance of the CssOrganizer class with a CSS string. Then call the minifyCss and organizeCss methods to return an organized CSS string.

```js
const CssOrganizer = require("./CssOrganizer.js"); //import the class
const cssString = "body { color: red; font-size: 16px; }";
const cssOrganizer = new CssOrganizer(cssString);
const organizedCss = cssOrganizer.minifyCss().organizeCss();
console.log(organizedCss);
```

## Example

```css
/* Input */
body {
  color: red;
  font-size: 16px;
  text-align: center;
  border: 1px solid black;
  margin: 0 10px;
}

/* Output */
body {
  border: 1px solid black;
  color: red;
  font-size: 16px;
  margin: 0 10px;
  text-align: center;
}
```

## Features

* **CSS Organization**: The `organizeCss` method sorts CSS properties based on pre-defined categories and orders them within each category according to a pre-defined order.

* **CSS Minification**: The `minifyCss` method reduces whitespace within the CSS stylesheet to create a more compact version.

* **Customizable Categories**: Categories are defined in a `list.json` file and can be easily customized or extended.

* **Flexible Usage**: This class can be easily integrated into any JavaScript project, and can be used to organize and minify CSS strings programmatically.

## Notes

The `list.json` file included in this project is not exhaustive and may not include every CSS property. You can contribute to the project by sending your own list.json file to us or by creating a pull request with your additions.

## Contributing

Contributions to this project are welcome and encouraged. If you find any bugs or issues, please submit them through the Issues tab on this repository.

If you'd like to contribute to the code, you can submit a pull request with your proposed changes. Please make sure to follow the existing code style and include any necessary tests for your changes.

If you're not comfortable contributing code, you can still help by adding examples, or sharing this project with others.

Thank you for your interest in contributing to this project!

## License

This project is licensed under the MIT License. Please see the [LICENSE](LICENSE) file for more details.
