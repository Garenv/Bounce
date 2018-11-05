import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        let c = document.getElementById("mycanvas");
        let cxt = c.getContext("2d");
        let x = 5;
        let y = 8;
        let r = 10;
        let dx = 4;
        let dy = 8;
        let WIDTH = 240;
        let HEIGHT = 240;

        c.onclick = () => {
            this.setState(prevState => ({count: prevState.count + 1}));
        };

        function init() {
            window.requestAnimationFrame(init, cxt);
            draw();
        }

        function drawCircle(x, y, r) {
            cxt.clearRect(0, 0, 240, 240);
            cxt.beginPath();
            cxt.arc(x, y, r, 0, Math.PI * 2, false);
            cxt.fillStyle = "#006699";
            cxt.fill();
        }

        function draw() {
            drawCircle(x, y, r);

            if(x + dx > WIDTH || x + dx < 0) {
                dx = -dx;
                // console.log(dx);
            }

            if(y + dy > HEIGHT || y + dy < 0){
                dy = -dy;
            }

            x += dx;
            y += dy;
        }
        init();
    }

    render() {
        return(
            <div>
                <canvas id="mycanvas" width="240" height="240"/>
                <h1>{this.state.count}</h1>
            </div>
        );
    }
}

export default Main;

// let promise = new Promise((resolve, reject ) => {
//     let name = "Garen";
//
//     if(name === "Garen") {
//         resolve("Promise resolved!!!");
//     } else {
//         reject(Error("Promise rejected"));
//     }
// });
//
// let obj = { newName: '' };
//
// promise.then(res => {
//     this.setState({name: res});
// }, function (error) {
//     this.setState({name: error});
// });