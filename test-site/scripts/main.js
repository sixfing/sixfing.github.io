const myImage = document.querySelector("img");

myImage.onclick = () =>
    {
        const mySrc = myImage.getAttribute("src");

        if (mySrc === "images/firefox.jpg")
                {
                    myImage.setAttribute("src", "images/gore-logo.png");
                }
        else    
                {
                    myImage.setAttribute("src", "images/firefox.jpg")
                }
    };


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}
    /*localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
    //myHeading.textContent = 'Mozzile is cool, ${myName}';*/

if (!localStorage.getItem("name")){
    setUserName();
}
else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}