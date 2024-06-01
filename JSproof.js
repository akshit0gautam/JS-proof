/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/
/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
var hold = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (creator,d_o_m,color,shape) {
const minted = {"who":creator,"when":d_o_m,"what_color":color,"what_shape":shape};
hold.push(minted);
console.log("Yay!! NFT minted !!");

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log("The metadata for the NFT's is the following:");
    for(var x = 0; x < hold.length;x++){
        console.log("Creator:",hold[x]["who"]);
        console.log("Date of Minting:",hold[x]["when"]);
        console.log("Color:",hold[x]["what_color"]);
        console.log("Shape:",hold[x]["what_shape"]);
        console.log("");
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("The total no. of NFT's minted are",hold.length);

}

// call your functions below this line

mintNFT("akshit","12/03/2004","blue","round");
mintNFT("rob stark","31/05/2024","black","square");
mintNFT("walter white","12/05/1980","blue","crystal");
listNFTs();
getTotalSupply();