import { Modal, Avatar, Frame } from "@react95/core";
import { Awfxex32Info } from "@react95/icons";
import ProfilePicture4 from "/Users/simonfarruqui/Desktop/Computer Science/portfolio-main/src/asset/images/pfp3.png";

// source: https://github.com/ghazian/portfolio/tree/main

const AboutMe = ({ isOpen, onClose }) => {
  return isOpen ? (
    <Modal
      width={"500"}
      height={"630"}
      icon={<Awfxex32Info/>}
      title="About Me"
      closeModal={onClose}
      defaultPosition={{ x: 350, y: 50 }}
      menu={[
        { name: "File", list: [] },
        { name: "Edit", list: [] },
      ]}
    >
      <Frame
        w={"100%"}
        h={550}
        boxShadow="in"
        padding="0px 5px"
        style={{
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ marginTop: "20px" }}>
          <Avatar src={ProfilePicture4} size={200} circle />
        </div>
        <h1>Hi, I'm Simon!</h1>
        <p>
        My name is Simon Farruqui. I'm currently a rising
              <strong> high school senior</strong> studying at Milton Academy, an independent boarding school near Boston, Massachusetts.
              My parents are first-generation immigrants from Bangladesh. 
              I grew up in Huntington, New York for seven years and Frisco, Texas for another seven years before attending Milton Academy in September 2021.
          
        </p>
        <p>
        Growing up as a Bengali-American, I was fascinated by the "Made in Bangladesh" clothing labels while shopping and the lively debates about Bangladeshi politics during family gatherings, so
 I developed early interests in economics and political science.
 From my ancestral home to my school, foundational experiences enriched by my involvement in humanitarian aid, public forum debate, and 
 educational reform have fueled my ambition to meld these areas, crafting data-driven policies that tackle socio-economic issues head-on. 
 In the future, I hope to lead sustainable development initiatives, 
 ensuring that every country's unique strengths are recognized and 
 nurtured through appropriate reforms or stimuli to unlock their full potential.
        </p>
        <p>
          Apart from my academic pursuits, I have a diverse range of interests:
        </p>
        <ul>
          <li>
            I love watching and playing a variety of sports. I played on several basketball teams at FieldhouseUSA Frisco before I picked up tennis in sixth grade. Since then, I have played for my schools' tennis teams every year.
            Beyond playing sports, I enjoy watching the Dallas Cowboys and New York Knicks.
          </li>
          <li>
            I play the saxophone. Since I picked it up for the first time in sixth grade, I have enjoyed every classical melody and jazz solo. Now, I enjoy playing for friends and family and exploring new pieces from around the world.
          </li>
          <li>
            I enjoy travelling to new countries. In 2024 so far, I have been to Morocco and Japan as part of the inaugural school trips. From tagine to sashimi, I love exploring cuisines from around the world.
          </li>
        </ul>
      </Frame>
    </Modal>
  ) : null;
};

export default AboutMe;
