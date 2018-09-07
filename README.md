## What is StargazerJS good for

Just have a look at this pen https://codepen.io/lazercaveman/pen/eLeemN where I generated stars with help of the stargazer library.

**Include stargazerLibrary**

To seutup just place the code of the stargazerLibrary.js somwhere inside your Javascript Code

**stargazerLibrary object Setup**

To seutup the stargazerLibrary just setup a JavaScript object named setStargazer.

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

The "selectContainer" property will define the parent element of the elements which will be generated throug the stargazerLibrary functions. The selection can throug an id (start string with #) or class name (start string with .) of an element. The value of the selectContainer property should be a string.

`
generateItemTag: String,
`

The "generateItemTag" property will setup which kind of HTML-Element will be outputted by the stargazerLibrary. You can define it as you like. It can be a div, span, paragraph or wht ever you like. Currently Mediacontent like images or videos are not alowed, but will be possible to add in a later version.

`
generateItemClass: String,
`

The fundamental idea of the stargazerLibrary is to generate a high quantity of duplicated elements, inside a parent element to subsequently style them by simple CSS, whithout having JavaScript based knowledge. So the Elements can be fitted by a custom class name to set them as the designer wants them to.

`
setMorphClass: String,
`

The "setMorphClass" property allows the designer to set up a additional classname which will be haunted added and removed to the generated item. SO it can be animated by CSS by giving different attributes to itemClass and morphClass or add an animation to the morphClass.

`
setMorphSpeed: Number,
`

The "setMorphSpeed" property will set the interval speed, the stargazeLibrary will ad and remove the morphClass to an generated element.

`
setMorphSpeed: Number,
`

The "setMorphQuantity" property will set how many Elements will morph in a MorpSpeed execution.# stargazer
# stargazer
# StargazerJS
# StargazerJS
