import { useEffect } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import LspuLogo1 from "../logo/LSPUlogo.png";
import Load from './Loading'
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Load/>
      <Navbar />
      <div className="main-container">
        {/*About page*/}
        <div className="about-container">
          {/*-----content 1-----*/}
          <div className="about-content1">
            <div>
              <img src={LspuLogo1} />
            </div>
            <div className="txt1">
              <h1>BUSINESS AFFAIRS OFFICE</h1>
              <p>Laguna State Polytechnic University - Los Baños Campus</p>
            </div>
          </div>
          <div className="about-content2">
            <h1>ABOUT</h1>
            <br />
            <h2>I. INTRODUCTION</h2>
            <br />
            <p>
              The Business Affairs Office of the Laguna State Polytechnic
              University is responsible for supervising the planning and
              management of existing income-generating projects to attain more
              effective and efficient generation of additional income to support
              and sustain financially academic programs and projects. Each
              project will be an effective device in demonstrating to both the
              student and community the rational fusion of technical know-how,
              market and financial factors.
            </p>
            <br />
            <p>
              The contents and processes in this manual will serve as a guide so
              that the BAO will be more effective and efficient in carrying out
              its mandated functions in support to the state university's vision
              to be a development transforming lives and center of sustainable
              communities.
            </p>
            <br />
            <h2>II. THE BUSINESS AFFAIRS OFFICE (BAO)</h2>
            <br />
            <h3>A. Nature</h3>
            <br />
            <p>
              The Business Affairs Office (BAO) serves as the enterprise
              management arm of the University and at the same time, the
              enterprise-operation clearing house between the Head and the
              different project managers.
            </p>
            <br />
            <h3>B. Organizational Structure</h3>
            <br />
            <p>
              The BAO organizational structure illustrates the position of the
              office especially in relation to other units of the university. It
              is directly under the Vice President for Administration in
              coordination with the Campus Director to facilitate
              decision-making in all concerns of enterprises that require
              decisions and action.
            </p>
            <br />
            <p>
              Skills instruction (practicum laboratory class) will be supervised
              by the Project Leaders, who coordinated strongly with the BAO
              Director/Chairperson, and Deans. Related issues on technology
              transfer are collaborated with research and development offices.
              In addition, the accounting unit will be frequently consulted
              regarding the regulations in the financial reporting and
              procurement system.
            </p>
            <br />
            <p>
              It is mandatory to understand that every Student Instructional
              Enterprise (SIE) and Income Generating Project (IGP) should follow
              the government procurement system in accordance with the
              government accounting and auditing rules and regulation.
            </p>
            <br />
          </div>

          <div className="about-content3">
            <h1>FUNCTIONS</h1>
            <br />
            <p>
              In general, the BAO is mandated to provide goods and services to
              the LSPU constituents and stakeholders, as well as provide
              guidance and assistance to attain sustainability. Specifically,
              its functions are:
            </p>
            <br />
            <span>
              1. Assist the Project Managers in business proposal preparation,
              as well as the consolidation of the whole project plan and endorse
              it to the University President for approval.
            </span>
            <br />
            <br />
            <span>
              2. Supervise and monitor the implementation of the approved
              IGP/SIE/Micro project and various production programs of the
              different colleges.
            </span>
            <br />
            <br />
            <span>
              3. Implement the enterprise reporting system and submit to the
              concerned offices.
            </span>
            <br />
            <br />
            <span>
              4. Conduct regular meeting of the BAO and Project Managers to
              resolve issues and solve problems related to the operations of the
              various enterprises.
            </span>
            <br />
            <br />
            <h3>
              ** Regular monthly meeting (every last Friday of the month or as
              need arises).
            </h3>
            <br />
            <span>
              5. Undertake quarterly and annual performance evaluation (Vice
              President for Administration and Director/Chairperson) of each
              enterprise and recommend measures to improve the efficiency of the
              unit's operation.
            </span>
            <br />
            <br />
            <span>
              6. Compute the income generated by the enterprise on regular
              periods and endorse the income distribution to the University
              President for approval.{" "}
            </span>
            <br />
            <br />
            <h3>Composition/Membership</h3>
            <br />
            <p>
              The members of the BAO is basically composed of persons who are
              represented according to their line of expertise and
              specialization. It should include the BAO, Administration, Farm
              Manager /Unit Head, Project Leaders / Managers. However, the
              University can modify the composition as deemed appropriate for
              its particular situation.
            </p>
            <br />
            <h3>
              University President together with the Vice President for
              Administration shall have the following responsibilities:
            </h3>
            <br />
            <p>
              1. To provide the vision and overall direction of the Income
              Generating Projects (IGPs).
            </p>
            <br />
            <p>
              2. To oversee the overall implementation of policies as approved
              by the Board of Regents of the State University.
            </p>
            <br />
          </div>

          <div className="about-content4">
            <h1>
              DUTIES AND FUNCTIONS OF THE BUSINESS AFFAIRS OFFICE DIRECTOR
            </h1>
            <br />
            <br />
            <h2>
              The general duties and functions of the Business Affairs Office
              Director are:
            </h2>
            <br />
            <br />
            <span>
              1. To implement policies and program approved by appropriate
              authorities or bodies of the university.
            </span>
            <br />
            <br />
            <span>
              2. To formulate plans, project, and guidelines/regulation with
              respect to the proper management and operations of all Income
              Generating Projects
            </span>
            <br />
            <br />
            <span>
              3. To govern, manage, operate, and supervise all enterprises of
              the State University which complement and interface with
              instruction, research and extension programs.
            </span>
            <br />
            <br />
            <span>
              4. To coordinate with the Campus Director and BAO Chairperson of
              the different campuses regarding business operations of the BAO.
            </span>
            <br />
            <br />
            <br />
            <h2>
              SPECIFICALLY, THE BUSINESS AFFAIRS OFFICE DIRECTOR/ CHAIRPERSONS
              PERFORM THE FOLLOWING FUNCTIONS:
            </h2>
            <br />
            <span>
              1. To determine investment priorities in income generating
              projects and to develop/promote such projects according to
              acceptable investment criteria;
            </span>
            <br />
            <br />
            <span>
              2. To make the IGP available as per part of the facilities for
              instruction, research, extension and training consistent with the
              policies and programs of the school;
            </span>
            <br />
            <br />
            <span>
              3. Formulates programs for increasing income from instruction,
              research, extension, production, and such other special projects
              and activities aiming for fiscal autonomy in respective campuses.
            </span>
            <br />
            <br />
            <span>
              4. To set performance objective and standard in management of
              Income Generating Project.
            </span>
            <br />
            <br />
            <span>
              5. To prepare and submit consolidated reports to the Vice
              President for Administration and the BAO Director regarding the
              operations of Income Generating Projects.
            </span>
            <br />
            <br />
            <span>
              6. To perform other function related to the attainment of the
              Income Generating Project objectives as well as those delegated by
              higher authorities of the State University.
            </span>
            <br />
            <br />
            <h2>
              The Director/Chairpersons shall have the following
              responsibilities, to wit:
            </h2>
            <br />
            <span>
              1. Set and supervise the direction and operation of the office;
            </span>
            <br />
            <br />
            <span>2. Chair the regular meeting of the BAO.</span>
            <br />
            <br />
            <span>
              3. Ensure that the minutes of meeting are kept and copy furnish to
              the different concerned offices.
            </span>
            <br />
            <br />
            <span>
              4. Ensure that all BAO members are available to attend the regular
              meeting and consolidated reports have been prepared for discussion
              and submission during meeting.
            </span>
            <br />
            <br />
            <span>
              5. Initiating and facilitating special meetings to address urgent
              enterprise issues and concerns that may arise;
            </span>
            <br />
            <br />
            <span>
              6. Act as the approving officer for all transaction in the New
              Procurement System depending on the approved spending limit
              authorized by the Head of Institution. As such, he will scrutinize
              all procurement documents to ensure correct procedures are
              followed. Other queries will be referred to the
              Accounting/Auditing Office,
            </span>
            <br />
            <br />
            <p>
              The Business Affairs Office (BAO) members gain benefit from
              sharing their ideas and experiences, discussing options and then
              reaching logical decisions. They act as a group and support each
              other, but each member has important individual responsibilities,
              both within and outside the BAO, specific to their position.
            </p>
            <br />
          </div>
          <div className="about-content5">
            <h1>
              FUNCTIONS AND DUTIES OF BUSINESS AFFAIRS OFFICE (BAO) PROJECT
              LEADERS MEMBERS
            </h1>
            <br />
            <span>
              1. Report any changes or discrepancies in the implementation of
              the business plans or proposals (Planned or Actual) of every
              enterprise.
            </span>
            <br />
            <br />
            <span>
              2. Provide technical support to the operation of all enterprises.
            </span>
            <br />
            <br />
            <span>
              3. Spearhead ocular visitation of the BAO to the different
              enterprises for physical monitoring and evaluation.
            </span>
            <br />
            <br />
            <span>
              4. Assist the Director/Chairperson of Business Affairs Office.
            </span>
            <br />
            <br />
            <br />
            <h2>FARM MANAGERS</h2>
            <br />
            <span>
              1. Spearhead and assist all Project Managers in the preparation of
              the project plan and business plan of the different SIE and IGP
              especially in the development and improvement of the project.
            </span>
            <br />
            <br />
            <span>
              2. Coordinate with the Director of Planning and Director of
              Research and Development with regards to infrastructure project of
              the office, site selection and for site development and
              improvement.
            </span>
            <br />
            <br />
            <span>3. Act as the Development Officer of BAO.</span>
            <br />
            <br />
            <span>
              4. Submit Project Plan progress reports as required quarterly and
              annually.
            </span>
            <br />
            <br />
            <br />
            <h2>SIE Project Manager and IGP Managers</h2>
            <br />
            <p>
              The Student Instructional Enterprises (SIE)/ Project Manager is a
              member of the faculty and preferably, teaches the technical
              subject related to the SIE. For example, the Poultry Instructor
              also manages the poultry project. This allows him/her to put
              theory into practice. Coordinate with the Practicum Coordinator to
              ensure correct student skills appraisal is carried out.
            </p>
            <br />
            <p>
              On the other hand, an IGP Manager either is a member of the
              faculty or staff or someone who is employed out of the funds
              generated from the IGP, The size, nature and complexity of the
              enterprise will largely determine this. If say it is a 20 ha,
              irrigated land, then the huge workload may necessitate an outside
              manager and workers be employed to run the enterprise.
            </p>
            <br />
            <p>
              Since these SIE Instructor In-Charge and IGP Managers are governed
              by the BAO, they should perform the following responsibilities in
              accordance with proper and sound enterprise management.
            </p>
            <br />
            <span>
              1. Prepares the business plan every start of the calendar year
              following the required format.
            </span>
            <br />
            <br />
            <span>
              2. Ensure that the SIE/IGP implementation follows the program of
              work outlined in the business plan/proposal.
            </span>
            <br />
            <br />
            <span>
              3. Supervise the day to day operation while ensuring the best
              practices of enterprise management. This involves checking on
              program and work habits of the unit's staff and other people
              involved in the enterprise
            </span>
            <br />
            <br />
            <span>
              4. Submit monthly reports and other required documents to the
              BAO/Clerk on the required date. Report must be complete and
              accurate.
            </span>
            <br />
            <br />
            <span>
              5. Attend to regular or special meeting or any meetings required
              by the BAO.
            </span>
            <br />
            <br />
            <span>
              6. Comply with the required procurement procedures. This involves
              appropriateness, correct procedures, completeness accuracy, in the
              accomplishment of forms.
            </span>
            <br />
            <br />
            <h2>Specific for SIE operations only:</h2>
            <br />
            <span>
              1. Ensure the time is set aside during Practicum to expose
              students to the business-side operations of the enterprises.
            </span>
            <br />
            <br />
            <span>2. Prepare an activity plan.</span>
            <br />
            <br />
            <span>
              3. Coordinate with the Practicum Coordinator to ensure correct
              students skills appraisal is carried out
            </span>
            <br />
            <br />
            <br />
            <h2>
              The BAO should have a clerk and will have the following
              responsibilities:
            </h2>
            <br />
            <span>
              1. Assist the BAO Chairperson in reminding the SIE Instructor In
              Charge and IGP managers on the submission of monthly reports.
            </span>
            <br />
            <br />
            <span>
              2. Encode and submit monthly consolidated financial report to the
              BAO for approval.
            </span>
            <br />
            <br />
            <span>
              3. Prepare and submit the required monthly reports to the
              accounting unit through the BAO.
            </span>
            <br />
            <br />
            <span>
              4. Act as the secretary during BAO meetings. Encode, reproduce and
              distribute the minutes of the meeting.
            </span>
            <br />
            <br />
            <span>
              5. Do other paper works, preparations and activities deemed
              necessary by the office.
            </span>
            <br />
            <br />
          </div>

          <div className="about-content6">
            <h1>
              DUTIES AND FUNCTION OF INCOME GENERATING PROJECT (IGP) LEADER
            </h1>
            <br />
            <p>
              The Income Generating Project Leader is the chief operating
              officer. He/She is responsible for the over-all activities of the
              project His/Her specific duties and responsibilities are:
            </p>
            <br />
            <span>
              1. To perform duties related to financial and material
              transaction, personnel and other resource management.
            </span>
            <br />
            <br />
            <span>
              2. To submit periodic reports to the BAO Director regarding Income
              Generating Project operations and other reports that maybe
              required:
            </span>
            <br />
            <br />
            <span>
              3. Report any Changes or discrepancies in the implementation of
              the business plan or proposal (planned or actual) of every
              enterprise;
            </span>
            <br />
            <br />
            <span>
              4. Provide technical support to the operation of all enterprise/
              project;
            </span>
            <br />
            <br />
            <span>
              5. To perform other duties delegated by higher authorities.
            </span>
            <br />
            <br />
          </div>

          <div className="about-content7">
            <h1>DUTIES AND FUNCTION OF THE PROJECT MANAGERS</h1>
            <br />
            <p>
              The Project Managers are the direct implementers of the Income
              Generating Project policies. The specific duties of the project
              manager are:
            </p>
            <br />
            <span>1. To exercise direct supervision of the project.</span>
            <br />
            <br />
            <span>2. To prepare project proposal/business plan.</span>
            <br />
            <br />
            <span>3. To implement Income Generating Project Policies.</span>
            <br />
            <br />
            <span>
              4. To prepare and submit regular/periodic reports to the BAO
              Director/Chairperson.
            </span>
            <br />
            <br />
            <span>
              5. To record transaction and activities concerning the project.
            </span>
            <br />
            <br />
            <span>
              6. To perform other related duties as may be required by higher
              authorities.
            </span>
            <br />
            <br />
          </div>
          <div className="about-content8">
            <h1>DUTIES AND FUNCTION OF THE FACILITATIVE STAFF</h1>
            <br />
            <h2>
              The BAO should have a facilitative staff and will have the
              following responsibilities:
            </h2>
            <br />
            <span>
              1. Remind the project manager on the submission of monthly
              reports.
            </span>
            <br />
            <br />
            <span>
              2. Type and submit monthly consolidated financial reports to the
              BAO, for approval.
            </span>
            <br />
            <br />
            <span>
              3. Prepare and submit the required monthly reports of project's
              fund status to the accounting unit through the BAO.
            </span>
            <br />
            <br />
            <span>
              4. Act as the secretary during BAO meetings. Type, reproduce and
              distribute the minutes of meetings.
            </span>
            <br />
            <br />
            <span>
              5. Do other paper works, preparation and activities deemed
              necessary by the office.
            </span>
            <br />
            <br />
            <span>
              6. Additionally, the clerk should be computer literate to
              facilitate preparation of reports. A skill on Bookkeeping and
              accounting is an advantage for the job.
            </span>
          </div>
        </div>
        <br />
        <br />
        <Contact />
      </div>
    </>
  );
};

export default About;
