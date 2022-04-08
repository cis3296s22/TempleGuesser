function gameContent() {

var content = `
        <style>
            p {
                margin-left: 1.5rem;
            }
            .flexContainer {
                display:flex; 
                flex-direction: row;
                background-color: #edd5d5;
            }
            .flexContainer .item {
                width: 100%;
                box-sizing: border-box; /* makes padding and border counted in the width */
            }
        </style>
        <h3>JS Object HW</h3>
        <p>
            Test
        </p>
    `;  
        var ele = document.createElement("div");
        ele.innerHTML = content; // the HTML code specified just above...

        var gameDiv = document.createElement("div");
        gameDiv.classList.add('flexContainer');
        ele.appendChild(gameDiv);
        
        // CREATE ITEM 1
        var game = MakeGame("pics/serc.jpeg");
        gameDiv.appendChild(game);
        return ele;
}