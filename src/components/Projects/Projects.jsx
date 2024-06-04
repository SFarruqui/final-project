import { Modal, Frame } from "@react95/core";
import { Qfecheck111 } from "@react95/icons";

const Projects = ({ isOpen, onClose }) => {
  return isOpen ? (
    <Modal
      width={"500"}
      height={"700"}
      icon={<Qfecheck111 />}
      title="Projects.txt"
      defaultPosition={{ x: 250, y: 20 }}
      closeModal={onClose}
      buttons={[
        { value: "Ok", onClick: onClose },
        { value: "Cancel", onClick: onClose },
      ]}
      menu={[
        { name: "File", list: [] },
        { name: "Edit", list: [] },
      ]}
    >
      <Frame
        w={"100%"}
        h={600}
        boxShadow="in"
        bg="white"
        padding="0px 10px"
        style={{ overflowY: "auto" }}
      >
        <div>
          <h2>Projects</h2>
          <hr />
          <h3>Words That Shape the World: A Novel Sentiment Analysis Approach to Quantifying Polarization from U.S. President Rhetoric on Immigration</h3>
          <p>
          Our study employs vector embedding techniques to quantify the influence of political figures' immigration rhetoric on public opinion, policy formation, and societal debates, with a focus on the United States—a principal democracy. Analyzing presidential speeches from 1960 to 2020, we uncovered linguistic patterns that signal an intensification of political communication polarization. In dissecting the content of presidential speeches, our research reveals subtle differences in Republican and Democratic presidents' approaches to immigration, particularly regarding security and economic contributions. Our sentiment analysis, grounded in sophisticated natural language processing methodologies, indicates a downward trend in positive sentiment since President Johnson's administration. Our sentiment analysis unveils not only inter-party but also intra-party variations in immigration rhetoric, challenging the notion of a binary partisan perspective on Asian countries. 

          </p>
          <a href="https://scifair.com/wp-content/uploads/2024/04/2024-MSEF-High-School-Award-Winners-1.pdf">Link</a>
          <hr />
          <h3>Using Graph Theory to Create a Solution in Routing Internet Traffic</h3>
          <p>
          As more and more people use the internet, it is important to meet the demand for connectivity. In order to address this issue, my partner and I studied Dijkstra's algorithm, a solution to the shortest path problem. After conducting simulations of various graph systems with specific nodes and weights, we determined that Dijkstra's algorithm was the most effective solution. By finding a solution to the shortest path problem, we believe it is possible to improve internet connectivity and provide a smoother user experience. This project won awards in the Dallas Regional Science and Engineering Fair and Texas Science & Engineering Fair and qualified for Broadcom MASTERS.

          </p>
          <a href="https://www.friscoisd.org/news/article/2021/03/23/students-advance-to-state-and-international-science-fairs">
            Link
          </a>
        </div>
      </Frame>
    </Modal>
  ) : null;
};

export default Projects;
