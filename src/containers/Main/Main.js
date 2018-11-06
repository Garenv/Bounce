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
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext("2d");
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
            // window.requestAnimationFrame(init, ctx);
            draw();
        }

        function drawCircle(x, y, r) {
            ctx.clearRect(0, 0, 240, 240);
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2, false);
            ctx.fillStyle = "#006699";
            ctx.fill();
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

        let c2 = document.getElementById("myCanvasTwo");
        let ctx2 = c2.getContext("2d");

        ctx2.beginPath();
        ctx2.arc(100, 75, 50, 0, 2 * Math.PI);
        ctx2.stroke();


    }

    render() {
        return(
            <div>
                <canvas id="myCanvas" width="240" height="240"/>
                <canvas id="myCanvasTwo" width="300" height="300"/>
                <h1>{this.state.count}</h1>
            </div>
        );
    }
}

export default Main;

