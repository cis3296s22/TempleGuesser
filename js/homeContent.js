function homeContent () {
    // ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
    // 
    // NetBeans menu option "Source - Format" will not work with the text inside of a 
    // String, so you have to do this indentation manually with the editor. 
    var content = `
            <h2>What is Temple Guesser</h2>
                <p style="font-size: 20px;">
                        - Explore Temple University main campus virtually <br>
                        - Create as a game for new students to have a virtual tour before getting to campus. <br>
                </p>
    
            <h2>Personas</h2>
                <li style="font-size: 20px;">
                    Persona 1
                </li>
                <p style="font-size: 20px;">
                    - Put persona 1 here later (maybe img from figma)
                </p>
                <li style="font-size: 20px;">
                   Persona 2 
                </li>
                <p style="font-size: 20px;">
                    - Put persona 2 here later (maybe img from figma)
                </p>
                <li style="font-size: 20px;">
                   Persona 3
                </li>
                <p style="font-size: 20px;">
                    - Put persona  here later (maybe img from figma)
                </p>
        `;
            var ele = document.createElement("div");
            ele.innerHTML = content;
            return ele;
    }