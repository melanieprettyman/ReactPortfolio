import chatApp from '../img/chatApp.jpg';
import server from '../img/server4.png';
import synthesizer from '../img/synthesizer.png';
import foodTile from '../img/food_tile.png';
import shellTile from '../img/shellTile.jpeg';
import msdTile from '../img/msdScript.png'
import pokemon from '../img/pokemon2.png'

const projects = {
    row1: [
        {
            url: "https://github.com/melanieprettyman/CS6011/tree/main/Week5/Day22/app/src/main",
            img: chatApp,
            title: "Chat App",
            tags: [
                {label: "Andriod Studio", type: 'android'},
                {label: "Java", type: 'java'}
            ],
        },
        {
            url: "https://github.com/melanieprettyman/CS6011/tree/main/Week4/Day20/ChatServer",
            img: server,
            title: "Chat Server",
            tags: [
                {label: "Web Socket", type: 'web'},
                {label: "Threading", type: 'threading'},
                {label: "Java", type: 'java'}
            ],
        },
        {
            url: "https://github.com/melanieprettyman/CS6011/tree/main/Week2/Day6/Synthesizer/src/main/java/com/example",
            img: synthesizer,
            title: "Synthesizer App",
            tags: [
                {label: "OOP", type: 'oop'},
                {label: "Java", type: 'java'}
            ],
        },
        {
            url: "https://github.com/melanieprettyman/CS6015/tree/main/HW11",
            img: msdTile,
            title: "MSDScript",
            tags: [
                {label: "C++", type: 'cpp'},
                {label: "Compiler Design", type: 'cd'},
                {label: "Recursive Functions", type: 'rf'},
                {label: "Catch2", type: 'c2'}
            ],
        }
    ],
    row2: [
        {
            url: "https://github.com/melanieprettyman/ReactPracticeProjects/tree/main/pokedexExplorer",
            img: pokemon,
            title: "Pokédex",
            tags: [
                {label: "React", type: 'react'},
                {label: "Type Script", type: 'ts'},
                {label: "React-Context", type: 'reactContext'},
                {label: "TanStack Query", type: 'query'},
                {label: "React Router", type: 'router'},
                {label: "Local Storage", type: 'storage'},
            ],
        },
        {
            url: "https://github.com/melanieprettyman/ReactPortfolio/tree/main/ResturantOderingApp",
            img: foodTile,
            title: "Restaurant Ordering App",
            tags: [
                {label: "React", type: 'react'},
                {label: "Node.js", type: 'nodejs'},
                {label: "Express.js", type: 'express'},
                {label: "React-Context", type: 'reactContext'}
            ]
        },
        {
            url: "https://github.com/melanieprettyman/CS6013/tree/main/HW3",
            img: shellTile,
            title: "Custom Unix Shell",
            tags: [
                {label: "Operating Systems", type: 'os'},
                {label: "C++", type: 'cpp'},
            ],
        }
    ],
};

export default projects;
