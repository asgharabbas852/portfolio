import React from "react";
import PageHeaderContent from "../../components/pageHeadercontent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "asghar",
  },
  {
    label: "Age",
    value: "34",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "example12@.com",
  },
  {
    label: "Contact No",
    value: "34",
  },
];

const jobsummery =
  "A Web Developer is responsible for the design, development, and maintenance of websites and web applications. They work closely with teams, including designers, content creators, and other developers, to create functional, user-friendly, and visually appealing digital experiences. Web Developers use various programming languages, frameworks, and tools to ensure the front-end and back-end components of websites perform efficiently across different devices and browsers.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalwrapper">
               
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobsummery}</p>
          </Animate>


          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
          <h3 className="personalInformationHeaderText">personal Information</h3>
          <ul>
            {
              personalDetails.map((item,i)=>(
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>

                </li>
              ))
            }
          </ul>
          </Animate>
        </div>
        <div className="about__content__serviceswrapper">

        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__serviceswrapper__innerContent">

            <div>
            <FaDev size={60} color="var(--yellow-theme-main-color)"/>
          </div>
          <div>
          <DiAndroid size={60} color="var(--yellow-theme-main-color)"/>
          </div>
          <div>
          <FaDatabase size={60} color="var(--yellow-theme-main-color)"/>
          </div>
          <div>
          <DiApple size={60} color="var(--yellow-theme-main-color)"/>
          </div>
            </div>

         </Animate>
        </div>

        </div>
    </section>
  );
};
export default About;
