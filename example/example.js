// Author: Ali Soueidan
// Author URI: https//: www.alisoueidan.com

setStargazer = {
  // Set quantity of genereted Elements
  quantity: 50,
  // Set id or class of parent element which shell contain the generated Elemenets
  selectContainer: "#cookie-container",
  // Set the Tag name of the generated item (Div, Span, p, etc.)
  generateItemTag: "li",
  // Set classname which will title the generated Elements (also id -> classname-i will be generated)
  generateItemClass: "backgroundstars",
  // Set the content which each element shell contain (could be Text, an Image, etc.)
  generateItemContent: "🍪",
  // Item-position can be setted up as like css positions (absolute, fixed, sticky, etc.)
  setPosition: "absolute",
  // Morphclass will be the classname of morphed Elements to set morph state of generated elements
  setMorphClass: "blink",
  // Morphspeed will set how fast the Morph will be executed in milliseconds
  setMorphSpeed: 1000,
  // Morphquantity will set how many Elements will morph in a MorpSpeed execution
  setMorphQuantity: 160,
  // Morphquantity will set how many Elements will morph in a MorpSpeed execution
  devMode: "on"
};