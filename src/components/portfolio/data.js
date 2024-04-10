import todo from "./Images/todo.png";
import modern from "./Images/moderndev.png";
import rupee from "./Images/MyRupee.png";
import portfolio from "./Images/portfolio.jpg";
import shery from "./Images/sheryjs.png";
import techy from "./Images/techystar.png";
import video from "./Images/videoHUB.png";
import digital from "./Images/XCrypto.jpg";
import npm from "./Images/npm.png";
import crypto from "./Images/crypto.png";
import aceUI from "./Images/aceUI.png";
import weater from "./Images/weather.png";
import creative from "./Images/creativeStudio.png";
import login from "./Images/loginPage.png";

const data = {
  projects: [
    {
      id: 1,
      title: "ToDo App",
      description: "ToDo List in ReactJS.",
      url: "https://omi-patel.github.io/ToDo__React/",
      imgSrc: todo,
    },

    {
      id: 2,
      title: "MyRupee.com",
      description: "Firebase Application with ReactJS.",
      url: "https://rupee-website.web.app/",
      imgSrc: rupee,
    },

    {
      id: 5,
      title: "Digital Coin",
      description: "To learn the concepts of API and axios.",
      url: "https://tradcoins.netlify.app/",
      imgSrc: digital,
    },

    {
      id: 12,
      title: "Weather App",
      description: "To learn the concepts of API and axios.",
      url: "https://mytemperature.netlify.app/",
      imgSrc: weater,
    },

    {
      id: 8,
      title: "Portfolio",
      description: "All About Me at one place. Made using Chakra UI.",
      url: "https://omreactport.netlify.app/",
      imgSrc: portfolio,
    },

    {
      id: 9,
      title: "motivate.js",
      description:
        "An NPM Package that will show you the motivational quote while error gets occure.",
      url: "https://www.npmjs.com/package/motivatejs",
      imgSrc: npm,
    },

    {
      id: 10,
      title: "CryptoVerse",
      description:
        "The Platform where you can see all the details about digital currencies and explore it.",
      url: "https://crypto-verse07.netlify.app/",
      imgSrc: crypto,
    },
  ],

  animationProject: [
    {
      id: 13,
      title: "Under Water",
      description: "Made Using HTML and CSS Only",
      url: "https://omi-patel.github.io/Under_Water/",
      imgSrc: creative,
    },

    {
      id: 14,
      title: "Animated Login Page",
      description: "Made Using HTML and CSS Only",
      url: "https://omi-patel.github.io/Creative_Login-Page/",
      imgSrc: login,
    },

    {
      id: 6,
      title: "Animation Dev",
      description: "SheryJS, an npm package for animations.",
      url: "https://sheryjsdev.netlify.app/",
      imgSrc: shery,
    },

    {
      id: 7,
      title: "Modern Dev",
      description: "Use of GSAP to create an animations.",
      url: "https://stunning-web.netlify.app/",
      imgSrc: modern,
    },

    {
      id: 3,
      title: "TechyStar",
      description: "Small ReactJS Project to practice the Concepts.",
      url: "https://reactservice.netlify.app/",
      imgSrc: techy,
    },

    {
      id: 4,
      title: "VideoHUB",
      description: "Use of Chakra UI, A Frontend Library.",
      url: "https://gamechange.netlify.app/",
      imgSrc: video,
    },

    {
      id: 11,
      title: "Music Class",
      description: "Use of Aceternity UI, A Frontend Library.",
      url: "https://aceternity-ui-library.vercel.app/",
      imgSrc: aceUI,
    },
  ],
};

export default data;
