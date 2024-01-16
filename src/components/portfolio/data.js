import todo from "./Images/todo.png";
import modern from "./Images/moderndev.png";
import rupee from "./Images/MyRupee.png";
import portfolio from "./Images/portfolio.jpg";
import shery from "./Images/sheryjs.png";
import techy from "./Images/techystar.png";
import video from "./Images/videoHUB.png";
import digital from "./Images/XCrypto.jpg";

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
      id: 5,
      title: "Digital Coin",
      description: "To learn the concepts of API and axios.",
      url: "https://tradcoins.netlify.app/",
      imgSrc: digital,
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
      id: 8,
      title: "Portfolio",
      description: "All About Me at one place. Made using Chakra UI.",
      url: "https://omreactport.netlify.app/",
      imgSrc: portfolio,
    },
  ],
};

export default data;
