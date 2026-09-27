const React ={
    createElement: function(tag, style, children){
        const element = document.createElement(tag);

        if(typeof children === 'object'){
            for(let val of children){
                element.append(val);
            }
        }
        else{
        element.innerText = children;
        }

        for(let key in style){
            element.style[key] = style[key];
        }
        
        return element;
    }
}

const ReactDOM = {
    render: function(element, root){
        root.append(element);
    }
}

const header1 = React.createElement("h1", {fontSize:"30px ", backgroundColor : "blue" ,color:"white"},"Hello coder army");
const header2 = React.createElement("p", {color : "red"},"Kese ho");

const li1 = React.createElement("li",{},"HTML");
const li2 = React.createElement("li",{},"CSS");
const li3 = React.createElement("li",{},"JS");
const UL = React.createElement("ul",{fontSize:"30px ", backgroundColor : "blue" ,color:"white"},[li1, li2, li3])

ReactDOM.render(header1, document.getElementById('root'));
ReactDOM.render(header2, document.getElementById("root"));
ReactDOM.render(UL, document.getElementById('root'))

// React : Object
// ReactDOM : Object

