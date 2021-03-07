import { TinyColor } from "@ctrl/tinycolor";
import { API_BASE_URL } from "./variables";

// returns true or false weather a customization is a color or not
export const isColor = function (value) {
  const color = new TinyColor(value);
  return color.isValid;
};

// returns an object for the inline-styiling of the value
// if it is a color: returns an object with a backgroundColor property of that color
export const backgroundColor = function (value) {
  const color = new TinyColor(value);
  let style;
  if (color.isValid) {
    return (style = {
      backgroundColor: `${color.toRgbString()}`,
      border: "1px solid rgba(0,0,0,0.15)",
    });
  }
};

export const borderColor = (value) => {
  const color = new TinyColor(value);
  let style;
  if (color.isValid) {
    return (style = {
      border: `2px solid ${color.toRgbString()}`,
      display: "inline-block",
      marginRight: "10px",
    });
  }
};
