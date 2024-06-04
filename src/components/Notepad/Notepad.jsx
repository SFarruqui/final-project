import { Modal, Frame} from "@react95/core";
import { Notepad1 } from "@react95/icons";

const Notepad = ({ isOpen, onClose }) => {
	return isOpen ? (
		<Modal
			width={"700"}
			height={"500"}
			icon={<Notepad1 variant="16x16_4" />}
			title="My Resume"
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
				h={400}
				boxShadow="in"
				bg="white"
				padding="0px 15px"
				style={{ overflowY: "auto" }}
			>
				<div>
					<h2>Experience</h2>
					<p>
						<strong>Founder and Chief Executive Officer</strong> | Walivest
					</p>
					<p>MAR 2023 — PRESENT</p>
					<ul>
						<li>
						Initiated the first youth-led disaster preparedness nonprofit in South Asia, delivering necessities—including 50 buoys and 300 life vests to fishermen—garnering coverage on national television channel Bangla TV.
						</li>
					</ul>
					<br />
					<p>
						<strong>Chief Operating Officer</strong> | StockSense
					</p>
					<p>SEP 2023 - PRESENT</p>
					<ul>
						<li>
						Launched a civil society organization leveraging an app to mobilize 100+ youths for mandated personal finance education, co-developed a comprehensive financial literacy app with 5,000+ users, testified for financial education legislation at the Massachusetts State House, and featured on CBS News Boston.
						</li>
					</ul>
					<br />
					<p>
						<strong>Editor-In-Chief & Layout Editor</strong> | Centre Street Journal
					</p>
					<p>JUN 2023 - PRESENT</p>
					<ul>
						<li>
						Established and managed school's largest special interest publication with a 40-member editorial team, directed marketing with digital collateral and a SquareSpace website, produced weekly economic news debriefs, and launched the Junior Economic Forum podcast, blending economic history with policy.
						</li>
					</ul>
					<br />
					<p>
						<strong>Co-President</strong> | Junior Economic Club of Boston
					</p>
					<p>SEP 2023 - PRESENT</p>
					<ul>
						<li>
						Directed a statewide economic interest network with 50+ members across 37 schools in New England, organized national economic policy forums to increase youth engagement with industry experts; edited 70+ articles exceeding 30,000 words in total for the Boston Economist publication.
						</li>
					</ul>
					<br />
					<p>
						<strong>Curriculum Developer</strong> | Greater Boston STEM Program
					</p>
					<p>SEP 2022 - DEC 2023</p>
					<ul>
						<li>
						Designed weekly mathematics competition curriculum for K-8 students; developed gbSTEM's top-level math course with bi-weekly lesson plans, introduced LaTeX, and prepped students for national contests; instructed advanced computer science topics including OOP and machine learning.
						</li>
					</ul>
					<hr />
					<h2>Education</h2>
					<h4>Milton Academy | 2021 - 2025</h4>
					<p>Relevant Coursework: Multivariable Calculus • Statistics • Web Development • Behavioral Economics • Issues in Environmental Science • American Government and Politics • Spanish 3</p>
					<p>Activities: Founder and Head of Microfinance Club • Co-Head of Economics Club • Secretary-General of Model United Nations • Co-Head of Muslim Students Association • Varsity Speech & Debate Team • Public Issues Board</p>
					<h4>Harvard Extension School | 2022 - 2023</h4>
					<p>Relevant Coursework: Game Theory • Neuroinvesting • Principles of Economics</p>
					<div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
					</div>
				</div>
			</Frame>
		</Modal>
	) : null;
};

export default Notepad;
