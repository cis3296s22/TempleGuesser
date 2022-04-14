function longLatContent () {
    // ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
    // 
    // NetBeans menu option "Source - Format" will not work with the text inside of a 
    // String, so you have to do this indentation manually with the editor. 
    var content = `
            <h2>Test LongLat Page</h2>
        `;
            var ele = document.createElement("div");
            ele.innerHTML = content;
            return ele;
    }