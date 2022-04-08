function gameContent() {

var content = `
    `;  
        var ele = document.createElement("div");
        ele.innerHTML = content; // the HTML code specified just above...

        var gameDiv = document.createElement("div");
        ele.appendChild(gameDiv);
        
        // CREATE ITEM 1
        var game = MakeGame("pics/serc.jpeg");
        gameDiv.appendChild(game);
        return ele;
}