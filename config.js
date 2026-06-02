// ============================================================
//  PORTFOLIO CONFIG — Edit everything here!
//  Changes here automatically update across all pages.
// ============================================================

const PORTFOLIO = {

  // --- Personal Info ---
  name: "Mateo Castano Yepes",
  title: "Mechanical Engineering - UofT",
  tagline: "Leaving things a bit better than I found them",
  profilePhoto: "assets/IMG_0735.jpeg", // Replace with your photo path
  aboutText: `I'm a Second-year Engineering student at the University of Toronto, passionate about design and process improvement. 
  I am currently in Melbourne for a manufacturing engineering internship at SH Engineering,
  while also undergoing a remote engineering internship at Space Copy. I'm based in Kitchener/Toronto Ontario and always open to discussing future opportunities.`,

  // --- Social Links (leave blank "" to hide) ---
  social: {
    email: "m.castanoyepes@hotmail.com",
    github: "",
    linkedin: "https://linkedin.com/in/mateo-cy",
    twitter: "",
    instagram: "", // leave empty to hide
    dribbble: "",
  },

  // --- Experience Items ---
  // Add/remove objects in this array to add/remove experience entries
  experience: [
    {
      id: "exp2",
      company: "SH Engineering",
      role: "Precast Manufacturing Engineer Intern",
      period: "May 2026 – July 2026",
      location: "Melbourne, AU",
      photo: "assets/Precast_img.png",
      summary: "Helping improve the precast manufacturing process for two major Australian tunneling projects.",
      details: `At SH Engineering I joined a team of Civil and Mechanical engineers producing the tunnel lining for two Australian tunnels. 
        These infrastructure improvements were for tier 1 construction companies such as Acciona, CPB Contractors, and Ghella. 
        I took on a variety of responsibilities including CAD modelling, process improvement, data analysis and quality inspections. 
        <br><br>
        Key achievements:
        <ul>
          <li>Developed two detailed 15+ page engineering proposals for overall production improvements and increased storage</li>
          <li>Conducted a bottleneck analysis on the carousel production, identifying main areas for improvement</li>
          <li>Designed an in-line gas monitoring system for a gas vaporizer, equipped with gas cooling and PLC integration</li>
        </ul>`,
      tags: ["SolidWorks", "AutoCAD", "Excel", "Technical Writing"],
    },
    {
      id: "exp1",
      company: "Space Copy",
      role: "Engineer Intern",
      period: "June 2026 – September 2026",
      location: "Remote",
      photo: "assets/Space_Copy.png",
      summary: "Working to minimize risk in additive manufacturing systems designed for extreme environments, including space.",
      details: `Space Copy is a startup working with NASA to bring infrastructure in the hardest places to reach.
        <br><br>
        More info to be added.`,
      tags: ["CAD", "Ansys"],
    },
    {
      id: "exp3",
      company: "BrickWorks Academy",
      role: "Health & Safety Coordinator",
      period: "July 2026 – August 2026",
      location: "Waterloo, ON",
      photo: "assets/BWA.jpg",
      summary: "Supervising a summer camp of 30+ kids, helping teach STEM concepts such as CAD, Lego robotics, 3D printing and Video production/editing",
      details: `More info to be added.`,
      tags: ["Product Design", "CAD", "Robotics", "Mentoring"],
    },
  ],

  // --- Project Items ---
  projects: [
    {
      id: "proj1",
      title: "TriggerPredict",
      category: "Course Project",
      photo: "assets/TriggerPred.png",
      summary: "A clinical decision support system developed for IVF trigger timing in Mount Sinai Fertility Clinic, Toronto.",
      details: `For our APS112 design project, me and my teammates (Ahmed Faraz, April Huynh, Hui Ming Sun, and Ximena Saisho Garcia)
       were tasked with developing an algorithm to address trigger timing in In-Vitro Fertilization cyles. Over 4 months we dove deep into research on IVF and contributing factors,
       and went through a full engineering design process documented over 3 technical documents totalling 100+ pages.  
        <br><br>
        Eventually, we created TriggerPredict, an app that takes in relevant patient data and provides physicians with a 3rd opinion on whether or not a trigger medication should be administered,
        based entirely on research and data from dozens of new studies. TriggerPredict aims to validate the decisions of physicians and reduce conflict in complex cases.`,
      link: "",
      tags: ["Python", "HTML", "Project Management", "Locally Run Website"],
    },
    {
      id: "proj2",
      title: " UofT HPVDT",
      category: "Extracurricular Involvement",
      photo: "assets/HPVDT.jpg",
      summary: "In my first year at UofT, I joined HPVDT, a design team creating some of the worlds fastest vehicles powered fully by people.",
      details: `I contributed to multiple projects on this team, including a bicycle and a watercraft, capable of speeds many times faster than commercial human powered vehicles. 
        I assisted in carbon fibre layups, drivetrain fabrication and surface interactions. I also took part in CAD workshops, helping me gain working proficiency in SolidWorks.`,
      link: "",
      tags: ["Fabrication", "Composite Materials", "Solidworks"],
    },
    {
      id: "proj3",
      title: "High Park Accessibility Project",
      category: "Course Project",
      photo: "assets/HighPark.jpg",
      summary: "A project aimed at increasing accesibility between two high traffic points in High Park, Toronto.",
      details: `This was my first formal engineering design project! For the APS111 Course, me and my teammates were tasked with redesigning a trail in High Park for greater accessibility while prioritizing sustainability. 
        Over 4 months we went through a full engineering design process, creating 3 technical drawings for our chosen conceptual design. 
        To provide an optimal solution, we took into account primary objectives, stakeholder impact, and various constraints.`,
      link: "",
      tags: ["Fusion360", "Engineering Design", "Sustainability", "Universal Design"],
    },
    {
      id: "proj4",
      title: "FIRST Robotics - Reefscape",
      category: "Extracurricular Involvement",
      photo: "assets/FRC.png",
      summary: "I helped design and fabricate a multi-function robot for the FIRST Robotics Competition, 2024-25 season.",
      details: `For my grade 12 year, I was a member of Rockway Robotics (8089), a design team that creates original robots for a worldwide competition.
      I helped in the prototyping phase, fabricating and creating several potential designs before settling on the final form. I also aided in CAD modelling.
      We iterated on our design multiple times, ending up with an award-winning final design that placed the highest yet in provincials.`,
      link: "",
      tags: ["Onshape", "Prototyping", "Fabrication"],
    },
  ],

  // --- Contact Page Copy ---
  contactHeading: "Let's work together.",
  contactSubtext: `If you have any questions about my experience or just want to have a chat, feel free to reach out!`,
};
