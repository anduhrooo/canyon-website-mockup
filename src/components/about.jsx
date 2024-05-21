import React from 'react'
import Capabilities from './capabilitesCard'
import Footer from './footer'

export default function About() {
  const AcquisitionPlanningList = [
    'Acquisition Strategy Development',
    'Business Plan Development and Execution',
    'Milestone Review Planning and Readiness',
    'RFP/Source Selection Planning and Execution',
    'EVMS/IBR Planning and Execution',
    'Schedule Management and Analysis',
    'Acquisition Logistics Planning',
    'Test Plans Development and Coordination (TEMP/STVP)',
    'Quality Assurance Planning and Implementation',
    'Metrics/Benchmarking',
    'Process Re-Engineering'
  ];
  
  const SystemEngineeringList = [
    'Requirements Management',
    'Interface Management',
    'Risk Management and Tools',
    'Design Review Planning and Execution',
    'System Integration Planning',
    'Test and Evaluation (DT/OT) Planning',
    'Concept development',
    'Compliance Documents'
  ];
  
  const RelevantExperienceList = [
    'GPS User Equipment – Acquisition Planning and Execution',
    'GPS-III – Acquisition Planning and Execution',
    'Defense Weather – Acquisition Planning',
    'Evolved Expendable Launch Vehicle (EELV) Should Cost Review – Technical Support',
    'O&M Cost Reduction Initiative – Technical Support',
    'ICBM Transition',
    'Transformational Communication Satellite (TSAT) – System Engineering & Integration',
    'Launch Ops – Technical Support',
    'Staff Experience: SMC, AFSPC, SAF/AQ, SAF/XP, OSD/AT&L, MDA, NRO',
    'Others…'
  ];
  


  return (
    <>
      <div className='about'>
        <div className='about-section'>
          <h1>About Us</h1>
          <p>Canyon Consulting is a woman owned small business that has been providing innovative system solutions to the Department of Defense since 2006. Canyon is unique in that its key employees are seasoned and experienced technical acquisition leaders from both Government and Industry, with an average experience base of 24 years. Moreover, this blend of Department of Defense and commercial sector experience allows for innovative approaches and solutions to critical problem solving, strategic planning, and corporate strategies. Canyon’s employees possess highly technical expertise and experience that comprise of a broad mix; from space and weapon programs to telecommunications and RF/optical systems.</p>
        </div>
        <div className='home-quote-card'>
          <p className='grace-quote'>"Canyon is passionate about warfighters and customers. With them and for them. We support the development and delivery of enabling space technologies—that’s our mission."<br/>Grace Yang, CEO</p>    
        </div>
        
        <div className='capabilities-section'>
          <h1>Our Capabilities</h1>
          <p>We provide a broad portfolio of proven solutions to our clients with a staff of acquisition professionals and seasoned engineers. Our employees are armed with relevant best practices, robust tools, and experience gained from working with the nation’s most critical and valuable defense and security systems. We are positioned to deliver extraordinary, customer-specific, end-to-end project management, system engineering and analytic expertise to our clients. Above all: our results advance the success of military programs. Canyon’s approach ultimately yields exceptional program execution and translates directly into mission success.</p>
        </div>
        <div className='card-section'>
          <Capabilities title="Acquisition Planning and Project Management" list={AcquisitionPlanningList} />
          <Capabilities title="System Engineering and Program Integration" list={SystemEngineeringList}/>
          <Capabilities title="Relevant Experience and Mission Areas" list={RelevantExperienceList}/>
        </div>
        <Footer />
      </div>
    </>
  )
}
