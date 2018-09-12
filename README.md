## What is StargazerJS good for## What is StargazerJS good for

To understand what can be done with StargazerJS just have a look at these pens on CodePen:

=> Space Scenarion: https://codepen.io/lazercaveman/pen/eLeemN

=> Cookie Monster: https://codepen.io/lazercaveman/pen/BOxymM

## How it works

The StargazerJS setup can be simply done by a JavaScript Object.

**Include StargazerJS Framework**

To seutup just place the code of the StargazerJS Framework.js somwhere inside your Javascript Code

**StargazerJS Framework object Setup**

To seutup the StargazerJS Framework just setup a JavaScript object named setStargazer.

`
setStargazer = { };
`

Subsequently just add the properties and assign the associated values to them. The following propertys are currently available for usage.

`
quantity: Number,
`

"quantity" will setup how many elements will be generated inside of the afterwards defined html element. The quantity Value should be a Number.

`
selectContainer: String,
`

The "selectContainer" property will define the parent element of the elements which will be generated throug the StargazerJS Framework functions. The selection can throug an id (start string with #) or class name (start string with .) of an element. The value of the selectContainer property should be a string.

`
generateItemTag: String,
`

The "generateItemTag" property will setup which kind of HTML-Element will be outputted by the StargazerJS Framework. You can define it as you like. It can be a div, span, paragraph or wht ever you like. Currently Mediacontent like images or videos are not alowed, but will be possible to add in a later version.

`
generateItemClass: String,
`

The fundamental idea of the StargazerJS Framework is to generate a high quantity of duplicated elements, inside a parent element to subsequently style them by simple CSS, whithout having JavaScript based knowledge. So the Elements can be fitted by a custom class name to set them as the designer wants them to.

`
setMorphClass: String,
`

The "setMorphClass" property allows the designer to set up a additional classname which will be haunted added and removed to the generated item. SO it can be animated by CSS by giving different attributes to itemClass and morphClass or add an animation to the morphClass.

`
setMorphSpeed: Number,
`

The "setMorphSpeed" property will set the interval speed, the StargazerJS Framework will ad and remove the morphClass to an generated element.

`
setMorphSpeed: Number,
`

The "setMorphQuantity" property will set how many Elements will morph in a MorpSpeed execution.# stargazer
