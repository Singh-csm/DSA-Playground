import React from "react";

import { ImNewTab } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
const Prices = () => {
  const [header] = React.useState({
    mainHeader: "Project",
    subHeading: "MERN Stack Project",
    text: "These all the projects are developed using MERN Stack..",
  });
  const [state] = React.useState([
    {
      id: 1,
      poster: "https://camo.githubusercontent.com/28b4f23c6f67a9ca1e2fc9f9bc5fb60607e6ebe6c3516b966104ba8b34b3704a/68747470733a2f2f706179752e696e2f626c6f672f77702d636f6e74656e742f75706c6f6164732f323031392f30312f426c6f672d436f7665722e676966",
      heading: "Blogging Website",
      desc: "This project is a blogging website involves designing and implementing a web platform that enables users to create and publish their own written content in the form of blog posts...",
      tech: "MongoDB, Express, NodeJs",
      deploy: "https://github.com/vpalve07/Blogging-Site-Project1.git",
      github: "https://github.com/vpalve07/Blogging-Site-Project1.git",
    },
    {
      id: 2,
      poster: "https://camo.githubusercontent.com/29066ff73473cc84459c63c1441e7387ec1195116e2adf8b0c9eb3f234ac5550/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f32302f65362f61342f32306536613466343730623361313962383036393462313363303939643835342e676966",
      heading: "Open To Intern",
      desc: "This website is Like Internshala in which I implemented some cool functionalities college and student model with that students  can apply for internship to the colleges...",
      tech: "MongoDB, Express, NodeJs",
      deploy: "https://github.com/Singh-csm/project-InternshipGroup24.git",
      github: "https://github.com/Singh-csm/project-InternshipGroup24.git",
    },
    {
      id: 3,
      poster: "https://raw.githubusercontent.com/Mr-Parth/Custom-URL-Shortener/master/gif/1.gif",
      heading: "Url Shortner",
      desc: "This website is a An URL shortening website is a platform that takes long and complex URLs and generates shorter, condensed versions of them, which can be easily shared and accessed by users, typically through a redirect..",
      tech: "MongoDB, Express, NodeJs",
      deploy: "https://github.com/Singh-csm/ProjectThreeUrlShortner7.git",
      github: "https://github.com/Singh-csm/ProjectThreeUrlShortner7.git",
    },
    {
      id: 4,
      poster: "https://media.tenor.com/RaejFfO87ccAAAAM/my-memorys-cloudy-ericdoa.gif",
      heading: "Social Media Memory App",
      desc: "user can create social media memory to create personalized digital memory collections, such as photo with hastag title and can also comment a full stack mern application for users to reminisce and share with others.",
      tech: "MongoDB, Express, ReactJs, NodeJs",
      deploy: "https://fascinating-kitten-847229.netlify.app",
      github: "https://github.com/Singh-csm/fsoc_project.git",
    },
  ]);
  return (
    <div className="prices project">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>

        <div className="row">
          {state.map((prices) => (
            <div className="col-4" key={prices.id}>
              <div className="price">
                <div className="price__rs">
                  <img
                    src={prices.poster}
                    alt="poster"
                    heigh="50px"
                    width="100%"
                    border="10px solid white"
                  />
                </div>
                <div className="priceHeading projectName">{prices.heading}</div>

                <ul>
                  <li className="priceHeading">{prices.desc}</li>

                  <li>{`Tech Stack: ${prices.tech}`}</li>
                </ul>
                <div className="price__btn">
                  <a
                    href={prices.deploy}
                    target="_blank"
                    className="link1 btn btn-outline1"
                  >
                    <ImNewTab fontSize="15px" /> Deploy Link
                  </a>
                  <a
                    href={prices.github}
                    target="_blank"
                    className="btn btn-outline1"
                  >
                    <FaGithub /> GitHub Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
