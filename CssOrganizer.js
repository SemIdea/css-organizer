class CssOrganizer {
  constructor(cssString) {
    // Constructor that initializes the cssString and categoryList properties
    this.cssString = cssString;
    this.categoryList = require("./list.json");
  }

  minifyCss() {
    // Method that minifies the cssString property by removing unnecessary characters and whitespaces
    this.cssString = this.cssString
      .replace(/\n/g, "")
      .replace(/\s+/g, " ")
      .replace(/{\s/g, "{")
      .replace(/\s}/g, "}");
    return this;
  }

  organizeClass(cssClassString) {
    // Method that organizes a single css class by categorizing the css properties into their respective categories
    const [cssSelector, cssProperties] = cssClassString.split("{");
    const parameters = cssProperties
      .trim()
      .split(";")
      .filter((parameterString) => parameterString.trim().length > 0)
      .map((parameterString) =>
        parameterString.split(":").map((s) => s.trim())
      );

    const cssJson = {
      others: [],
    };

    // Iterate through each category in categoryList and initialize an empty array for each category in cssJson
    Object.keys(this.categoryList).forEach((category) => {
      cssJson[category] = [];
    });

    // Iterate through each parameter and categorize it into its respective category in cssJson
    parameters.forEach(([property, attribute]) => {
      let found = false;
      Object.entries(this.categoryList).forEach(
        ([categoryName, categoryProperties]) => {
          if (categoryProperties.includes(property)) {
            found = true;
            cssJson[categoryName].push([
              property,
              attribute,
              this.categoryList[categoryName].indexOf(property),
            ]);
          }
        }
      );

      if (found == false) {
        cssJson["others"].push([property, attribute]);
      }
    });

    // Function that sorts the properties in each category of cssJson by their index in categoryList
    function sortJson(obj) {
      for (const property in obj) {
        if (Array.isArray(obj[property])) {
          obj[property].sort((a, b) => a[a.length - 1] - b[b.length - 1]);
        }
      }
      return obj;
    }

    // Sort the properties in each category of cssJson using sortJson and concatenate them into a string
    const sortedCssJson = sortJson(cssJson);
    let parametersReturn = "";

    Object.keys(sortedCssJson).forEach((category) => {
      sortedCssJson[category].forEach(([property, attribute]) => {
        parametersReturn += `  ${property}: ${attribute};\n`;
      });
    });

    parametersReturn = parametersReturn.slice(0, -1);
    return `${cssSelector}{\n${parametersReturn}\n}\n\n`;
  }

  organizeCss() {
    // Method that organizes the entire cssString by splitting it into individual classes and organizing each class using organizeClass
    const minifiedCss = this.cssString;
    const organizedCss = minifiedCss
      .split("}")
      .filter((cssClass, idx, arr) => idx !== arr.length - 1)
      .map(this.organizeClass.bind(this))
      .join("");

    return organizedCss.slice(0, -2);
  }
}

module.exports = CssOrganizer;
