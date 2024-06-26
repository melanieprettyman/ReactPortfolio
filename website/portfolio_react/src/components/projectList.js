import chatApp from '../img/chatApp.jpg'
import server from '../img/server4.png'
import synthesizer from '../img/synthesizer.png'
import notthebees from '../img/notthebees.png'
import pacman from '../img/pacman.png'
import foodTile from '../img/food_tile.png'
import shellTile from '../img/shellTile.jpeg'


const projects = {
    row1: [
        {
            url: "https://github.com/melanieprettyman/CS6011/tree/main/Week5/Day22/app/src/main",
            img: chatApp,
            title: "Chat App",
            toolTags: [
                { label: "Andriod Studio"},
                { label: "Java"}

            ],

        },
        {
            url: "https://github.com/melanieprettyman/CS6011/tree/main/Week4/Day20/ChatServer",
            img: server,
            title: "Chat Server",
            toolTags: [
                { label: "Web Socket"},
                { label: "Threading"},
                { label: "Java"}
            ],

        },
        {
            url: "https://github.com/melanieprettyman/CS6011/tree/main/Week2/Day6/Synthesizer/src/main/java/com/example",
            img: synthesizer,
            title: "Synthesizer App",
            toolTags: [
                { label: "OOP"},
                { label: "Java"}
            ],

        },
        {
            url: "https://github.com/melanieprettyman/CS6011/tree/main/Week3/Day13",
            img: notthebees,
            title: "\"Not the Bees!\" Web Game",
            toolTags: [
                { label: "JavaScript"}
            ],

        },
    ],
    row2: [
        {
            url: "https://github.com/melanieprettyman/CS6012/tree/main/Week4/assignment08/src/assignment08",
            img: pacman,
            title: "Path Finder Algorithm",
            toolTags: [
                 { label: "Breadth-First Search"},
                 { label: "Java"},
            ],
        },
        {
            url: "https://github.com/melanieprettyman/ReactPortfolio/tree/main/ResturantOderingApp",
            img: foodTile,
            title: "Restaurant Ordering App",
            toolTags: [
                { label: "React"},
                { label: "Node.js"},
                { label: "Express.js"},
                { label: "React-Context"}
            ]

        },
        {
            url: "https://github.com/melanieprettyman/CS6013/tree/main/HW3",
            img: shellTile,
            title: "Custom Unix Shell",
            toolTags: [
                { label: "Operating Systems"},
                { label: "C++"},
            ],
        },
    ],

};

export default projects;