document.addEventListener("DOMContentLoaded", function() {


    //Activate Devmode to check if everything is setted up right - will be displayed in console
    if ( setStargazer["devMode"] != "off" ) {
  
        console.log("😱 Devmode is activated, turn devMode off by editing the steStargazer object -> steStargazer{ devMode: \"off\" }")
  
        // Fallbackobject
        fallbackObject = {
            // Set quantity of genereted Elements
            quantity: "NUMBER",
            // Set id or class of parent element which shell contain the generated Elemenets
            selectContainer: "STRING",
            // Set the Tag name of the generated item (Div, Span, p, etc.)
            generateItemTag: "STRING",
            // Set classname which will title the generated Elements (also id -> classname-i will be generated)
            generateItemClass: "STRING",
            // Set the content which each element shell contain (could be Text, an Image, etc.)
            generateItemContent: "STRING",
            // Item-position can be setted up as like css positions (absolute, fixed, sticky, etc.)
            setPosition: "CSS related positioning (absolute, fixed, sticky, etc.)",
            // Morphclass will be the classname of morphed Elements to set morph state of generated elements
            setMorphClass: "STRING",
            // Morphspeed will set how fast the Morph will be executed in milliseconds
            setMorphSpeed: "NUMBER",
            // Morphquantity will set how many Elements will morph in a MorpSpeed execution
            setMorphQuantity: "NUMBER",
        };
  
        // Check if setStargazer object is defined
        if ( typeof setStargazer == "undefined" ) {
            setStargazer = {};
            console.log("💩 setStargazer | isn't defined! You have to set up the object -> steStargazer{}");
        } else {
            console.log("✔️ setStargazerObject | is defined.")
        }
  
        // Fallback-loop checking for error potentials
        for (let fallbackProperty in fallbackObject){
  
            if ( setStargazer[fallbackProperty] == null ) {
  
            console.log("💩 " + fallbackProperty + "isn't setted up. steStargazer object -> " + 
                fallbackObject[fallbackProperty]);
  
            } else {
            console.log("✔️ " + fallbackProperty + " | is defined.")
            };
  
        };
        
    };
  
    //////
    // Execution
  
    // Select star-divs
        const CONTAINER = document.querySelector(setStargazer["selectContainer"]);
  
    // Set while loop for generating stars
        let quantityCounter = 0;
        while ( setStargazer["quantity"] >= quantityCounter ){
        CONTAINER.insertAdjacentHTML('afterbegin', '<' + setStargazer["generateItemTag"] + ' class="' + setStargazer["generateItemClass"] + '" id="' + setStargazer["generateItemClass"] + '-' + quantityCounter +'" style="position:' + setStargazer["setPosition"] + '">' + setStargazer["generateItemContent"] + '</' + setStargazer["generateItemTag"] + '>');
        ++quantityCounter;
        };
  
    // Selct generatedItems by class
        const GENERATEDITEM = document.querySelectorAll(setStargazer["selectContainer"] + " > ." + setStargazer["generateItemClass"]);
        
    // Set counter  
        let i = 0;
    // Select every star and reposition it by coincidence
        GENERATEDITEM.forEach( function() {
        // defining x coordinate
            let x = Math.floor((Math.random() * 95) + 1);
        // defining y coordinate
            let y = Math.floor((Math.random() * 95) + 1);
        // Setting star position x & Y
            GENERATEDITEM[i].style.left = x + "%";
            GENERATEDITEM[i].style.top = y + "%";
        // Counting up the counter
            ++i;
        });
  
  
    //////
    // lets do some bling bling (super easy, super simple) 
  
    // Setup interval timing
        function blink(){
        // Setup of a random selektor
            let startID = Math.floor((Math.random() * 100) + 1);
        // Selekting random star
            let selection = document.querySelector( "#" + setStargazer["generateItemClass"] + "-"+ startID);
        // Adding blink-classs to selektion
            selection.classList.add(setStargazer["setMorphClass"]);
            setTimeout(function(){ 
            // Removing Blink-class after timeout
                selection.classList.remove(setStargazer["setMorphClass"]);
            }, setStargazer["setMorphSpeed"]/2);
        };
  
    // Let the magic beginn
        setInterval( blink, setStargazer["setMorphSpeed"]/setStargazer["setMorphQuantity"] );
  
  });