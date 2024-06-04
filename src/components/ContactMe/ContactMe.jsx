import { Modal, Frame } from "@react95/core";
import { Inetcfg2301 } from "@react95/icons";
import { FaLinkedin } from "react-icons/fa";

const ContactMe = ({ isOpen, onClose }) => {
  return isOpen ? (
    <Modal
      width={"500"}
      height={"300"}
      icon={<Inetcfg2301/>}
      title="Contact Me"
      closeModal={onClose}
      defaultPosition={{ x: 150, y: 50 }}
      menu={[
        { name: "File", list: [] },
        { name: "Edit", list: [] },
      ]}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Frame
          w={"100%"}
          h={200}
          boxShadow="in"
          bg="white"
          padding="0px 5px"
          style={{ overflowY: "auto" }}
        >
          <div>
    <h1>Contact Me!</h1>
    Reach out to me at <strong><a href="mailto:simonfarruqui01@gmail.com">simonfarruqui01@gmail.com</a></strong> or at <strong><a href="mailto:simonfarruqui@walivest.org">simonfarruqui@walivest.org</a></strong>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <a
                href="https://www.linkedin.com/in/simonfarruqui/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "20px",
                  cursor: "pointer",
                }}
              >
                <FaLinkedin style={{ marginRight: "5px" }} />
                LinkedIn
              </a>
              
              
            </div>
          </div>
        </Frame>
      </div>
    </Modal>
  ) : null;
};

export default ContactMe;
