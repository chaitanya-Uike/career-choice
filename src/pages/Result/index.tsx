import { useContext, useState } from "react";
import { AppContext, appContextType } from "../../App";
import BarGraph from "../../components/BarGraph";
import Accordian from "../../components/Accordian";
import style from "./style.module.scss";
import { UserAuth, AuthContextType } from "../../context/AuthContext";

const general = [
  {
    title: "BE/B.Tech- Bachelor of Technology",
    link: "https://indiaeducation.net/engineering/about-engineering/difference-be-btech/",
  },
  {
    title: "B.Arch- Bachelor of Architecture",
    link: "https://collegedunia.com/courses/bachelor-of-architecture-barch",
  },
  {
    title: "BCA- Bachelor of Computer Applications",
    link: "https://www.aeccglobal.in/blog/bachelor-of-computer-application-bca-course",
  },
  {
    title: "B.Sc.- Information Technology",
    link: "https://en.wikipedia.org/wiki/Bachelor_of_Science_in_Information_Technology",
  },
  {
    title: "B.Sc- Nursing",
    link: "https://en.wikipedia.org/wiki/%27B.Sc-_Nursing%27,",
  },
  {
    title: "BPharma- Bachelor of Pharmacy",
    link: "https://collegedunia.com/courses/bachelor-of-pharmacy-bpharma",
  },
  {
    title: "B.Sc- Interior Design",
    link: "https://www.bachelorstudies.com/BSc/Interior-Design/",
  },
  {
    title: "BDS- Bachelor of Dental Surgery",
    link: "https://en.wikipedia.org/wiki/Dental_degree",
  },
  {
    title: "Animation, Graphics and Multimedia",
    link: "https://www.georgecollege.org/bsc-in-multimedia-animation-and-graphics",
  },
  {
    title: "B.Sc. – Nutrition & Dietetics",
    link: "https://collegedunia.com/courses/bachelor-of-science-bsc-nutrition-and-dietetics",
  },
  {
    title: "BPT- Bachelor of Physiotherapy",
    link: "https://collegedunia.com/courses/bachelor-of-physiotherapy-bpt",
  },
  {
    title: "B.Sc- Applied Geology",
    link: "https://targetstudy.com/courses/bsc-geology.html",
  },
  {
    title: "BA/B.Sc. Liberal Arts",
    link: "https://www.shiksha.com/humanities-social-sciences/articles/liberal-arts-colleges-in-india-courses-seats-admission-process-blogId-31531",
  },
  {
    title: "B.Sc.- Physics",
    link: "https://collegedunia.com/courses/bachelor-of-science-bsc-physics",
  },
  {
    title: "B.Sc. Chemistry",
    link: "https://leverageedu.com/blog/bsc-chemistry-syllabus/",
  },
  {
    title: "B.Sc. Mathematics",
    link: "https://en.wikipedia.org/wiki/Bachelor_of_Mathematics",
  },
];

const engg = [
  {
    title: "Aeronautical Engineering",
    link: "https://www.snhu.edu/about-us/newsroom/stem/what-is-aeronautical-engineering",
  },
  {
    title: "Automobile Engineering",
    link: "https://www.indeed.com/career-advice/finding-a-job/what-is-automotive-engineering",
  },
  { title: "Civil Engineering", link: "" },
  {
    title: "Aeronautical Engineering",
    link: "https://en.wikipedia.org/wiki/Civil_engineering",
  },
  {
    title: "Computer Science and Engineering",
    link: "http://catalog.mit.edu/degree-charts/computer-science-engineering-course-6-3/",
  },
  {
    title: "Biotechnology Engineering",
    link: "https://www.hpu.edu/cncs/comp-sci/engineering/biotechnology.html",
  },
  {
    title: "Electrical and Electronics Engineering",
    link: "https://www.bls.gov/ooh/architecture-and-engineering/electrical-and-electronics-engineers.html",
  },
  {
    title: "Automation and Robotics",
    link: "https://www.mckinsey.com/capabilities/operations/our-insights/automation-robotics-and-the-factory-of-the-future",
  },
  {
    title: "Petroleum Engineering",
    link: "https://pge.utexas.edu/about/petroleum",
  },
  {
    title: "Instrumentation Engineering",
    link: "https://www.getreskilled.com/what-is-an-instrumentation-engineer/",
  },
  {
    title: "Ceramic Engineering",
    link: "https://en.wikipedia.org//wiki/Ceramic_engineering",
  },
  {
    title: "Chemical Engineering",
    link: "https://www.acs.org/careers/chemical-sciences/areas/chemical-engineering.html",
  },
  {
    title: "Structural Engineering",
    link: "https://en.wikipedia.org/wiki/Structural_engineering",
  },
  {
    title: "Transportation Engineering",
    link: "https://en.wikipedia.org/wiki/Transportation_engineering",
  },
  {
    title: "Construction Engineering",
    link: "https://onlinemasters.ohio.edu/blog/what-is-construction-engineering/",
  },
  { title: "Power Engineering", link: "https://www.power-eng.com/" },
  {
    title: "Robotics Engineering",
    link: "https://bootcamp.cvn.columbia.edu/blog/how-to-become-a-robotics-engineer/",
  },
  {
    title: "Textile Engineering",
    link: "https://www.indeed.com/career-advice/career-development/what-is-textile-engineering",
  },
  {
    title: "Smart Manufacturing & Automation",
    link: "https://10times.com/e135-srkk-2xz1",
  },
  {
    title: "Electronics and communication Engineering",
    link: "https://www.shiksha.com/engineering/electronics-communication-engineering-chp",
  },
  {
    title: "Electrical Engineering",
    link: "https://en.wikipedia.org/wiki/Electrical_engineering",
  },
  {
    title: "Mechanical engineering",
    link: "https://www.mtu.edu/mechanical/engineering/",
  },
  {
    title: "Information Technology",
    link: "https://en.wikipedia.org/wiki/Information_technology",
  },
  {
    title: "Artificial intelligence",
    link: "https://en.wikipedia.org/wiki/Artificial_intelligence",
  },
  { title: "Data Science", link: "https://en.wikipedia.org/wiki/Data_science" },
  {
    title: "Artificial intelligence and machine learning",
    link: "https://ai.engineering.columbia.edu/ai-vs-machine-learning/",
  },
  {
    title: "Agriculture Engineering",
    link: "https://www.bls.gov/ooh/architecture-and-engineering/agricultural-engineers.htm",
  },
  {
    title: "Food technology",
    link: "https://www.ift.org/news-and-publications/food-technology-magazine",
  },
  {
    title: "B. Tech in Cyber security",
    link: "https://collegedunia.com/courses/bachelor-of-technology-btech-cyber-security/career-options-and-jobs",
  },
  {
    title: "Information Science and engineering",
    link: "https://www.cse.msu.edu/",
  },
  {
    title: "Biomedical Engineering",
    link: "https://www.mtu.edu/biomedical/department/what-is/",
  },
  {
    title: "Electronics and Instrumentation Engineering",
    link: "https://en.wikipedia.org/wiki/Applied_Electronics_and_Instrumentation_Engineering",
  },
  { title: "Mechatronics", link: "https://en.wikipedia.org/wiki/Mechatronics" },
  {
    title: "Instrumentation and Control",
    link: "https://en.wikipedia.org/wiki/Instrumentation_and_control_engineering",
  },
  {
    title: "Mining Engineering",
    link: "https://en.wikipedia.org/wiki/Mining_engineering",
  },
  {
    title: "Production engineering",
    link: "https://www.greatvaluecolleges.net/faq/what-is-production-engineering/",
  },
  {
    title: "Dairy technology",
    link: "https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/dairy-technology",
  },
  {
    title: "Marine Engineering",
    link: "https://en.wikipedia.org/wiki/Marine_engineering",
  },
  {
    title: "Big Data Analytics",
    link: "https://www.techtarget.com/searchbusinessanalytics/definition/big-data-analytics",
  },
];

const arts1 = [
  {
    title: "BBA- Bachelor of Business Administration",
    link: "https://en.wikipedia.org/wiki/Bachelor_of_Business_Administration",
  },
  {
    title: "BMS- Bachelor of Management Science",
    link: "https://www.collegedekho.com/courses/bachelor-of-management-studies-bms",
  },
  {
    title: "BFA- Bachelor of Fine Arts",
    link: "https://en.wikipedia.org/wiki/Bachelor_of_Fine_Arts",
  },
  {
    title: "BEM- Bachelor of Event Management",
    link: "https://www.careers360.com/courses/bem-bachelor-of-event-management",
  },
  {
    title: "Integrated Law Course- BA + LL.B",
    link: "https://www.shiksha.com/b-a-ll-b-chp",
  },
  {
    title: "BJMC- Bachelor of Journalism and Mass Communication",
    link: "https://collegedunia.com/courses/bachelor-of-journalism-and-mass-communication-bjmc",
  },
  {
    title: "BFD- Bachelor of Fashion Designing",
    link: "https://collegedunia.com/courses/bachelor-of-fashion-design",
  },
  {
    title: "BSW- Bachelor of Social Work",
    link: "https://www.uwindsor.ca/socialwork/452/bachelor-social-work-programs",
  },
  {
    title: "BBS- Bachelor of Business Studies",
    link: "https://www.collegedekho.com/courses/bachelor-business-studies",
  },
  {
    title: "BTTM- Bachelor of Travel and Tourism Management",
    link: "https://collegedunia.com/courses/bachelor-of-tourism-and-travel-management-bttm",
  },
  { title: "Aviation Courses", link: "https://erau.edu/aviation101/" },
  {
    title: "B.Sc- Interior Design",
    link: "https://collegedunia.com/courses/bachelor-of-science-bsc-interior-design",
  },
  {
    title: "B.Sc.- Hospitality and Hotel Administration",
    link: "https://collegedunia.com/courses/bachelor-of-science-bsc-hospitality-and-hotel-administration",
  },
  {
    title: "Bachelor of Design (B. Design)",
    link: "https://www.shiksha.com/b-des-bachelor-of-design-chp",
  },
  {
    title: "Bachelor of Performing Arts",
    link: "https://www.bachelorstudies.com/Bachelor/Performing-Arts/",
  },
  {
    title: "BA in History",
    link: "https://history.case.edu/undergraduate/what-do-history-degree/",
  },
];

const commerce = [
  {
    title: "B.Com- Bachelor of Commerce",
    link: "https://collegedunia.com/courses/bachelor-of-commerce-bcom",
  },
  {
    title: "BBA- Bachelor of Business Administration",
    link: "https://en.wikipedia.org/wiki/Bachelor_of_Business_Administration",
  },
  {
    title: "B.Com (Hons.)",
    link: "https://www.collegedekho.com/courses/bcom-hons",
  },
  {
    title: "BA (Hons.) in Economics",
    link: "https://collegedunia.com/courses/bachelor-of-arts-ba-hons-economics",
  },
  {
    title: "Integrated Law Program- B.Com LL.B",
    link: "https://www.shiksha.com/b-a-ll-b-chp",
  },
  {
    title: "Integarted Law Program- BBA LL.B",
    link: "https://jlu.edu.in/course/bba-llb-hons/",
  },
  {
    title: "CA- Chartered Accountancy",
    link: "https://www.investopedia.com/terms/c/ca.asp",
  },
];

const medical1 = [
  {
    title: "Bachelor of Medicine, Bachelor of Surgery [MBBS]",
    link: "https://university.taylors.edu.my/en/study/undergraduate/medicine/bachelor-medicine-bachelor-surgery-mbbs.html",
  },
  {
    title: "Bachelor of Physiotherapy [BPT]",
    link: "https://collegedunia.com/courses/bachelor-of-physiotherapy-bpt",
  },
  {
    title: "Bachelor of Ayurvedic Medicine and Surgery [BAMS]",
    link: "https://en.wikipedia.org/wiki/Bachelor_of_Ayurveda,_Medicine_and_Surgery",
  },
  {
    title: "Diploma in Medical Laboratory Technology [DMLT]",
    link: "https://www.getmyuni.com/dmlt-course",
  },
  {
    title: "Bachelor in Medical Laboratory Technology [BMLT]",
    link: "https://isbatuniversity.ac.ug/index.php/bachelor-of-medical-laboratory-technology-bmlt/",
  },
  {
    title: "Bachelor of Homeopathic Medicine & Surgery [BHMS]",
    link: "https://homoeopathy.dypvp.edu.in/bhms-programme.aspx",
  },
  {
    title: "Bachelor of Optometry [B.Optom]",
    link: "https://www.shiksha.com/college/chitkara-school-of-health-sciences-chitkara-university-chandigarh-52088/course-bachelor-of-optometry-b-optom-753889",
  },
  {
    title: "Diploma in Physiotherapy [DPT]",
    link: "https://targetstudy.com/colleges/diploma-in-physiotherapy-dpt-diploma-colleges-in-manipur.html",
  },
  {
    title: "Diploma in Medical Radio Diagnosis [DMRD]",
    link: "https://collegedunia.com/courses/diploma-in-medical-radio-diagnosis-dmrd",
  },
  {
    title: "Bachelor of Science [B.Sc] (Medical Imaging Technology)",
    link: "https://manipal.edu/soahs-manipal/program-list/bsc-mit-bachelor-of-science-in-mediacal-imaging-technology-.html",
  },
  {
    title: "Diploma in Clinical Pathology [DCP]",
    link: "https://www.freshersworld.com/diploma-clinical-pathology-dcp-jobs-in-bhuj/2525040563335",
  },
  {
    title: "Bachelor of Science [B.Sc] (Dialysis)",
    link: "https://courses.docthub.com/bachelor-of-science-b-sc-in-dialysis-technology-C26409/mmm-college-of-health-sciences-chennai-B18964",
  },
  {
    title: "Diploma in Anaesthesia [DA]",
    link: "https://www.getmyuni.com/diploma-in-anaethesia-da-course",
  },
  {
    title: "Diploma in Nursing",
    link: "https://onlineprograms.sacredheart.edu/resources/article/whats-the-difference-between-an-rn-diploma-in-nursing-and-a-bsn-degree/",
  },
  {
    title: "Bachelor of Science [B.Sc] (Respiratory Therapy)",
    link: "https://collegedunia.com/courses/bachelor-of-science-bsc-respiratory-therapy",
  },
  {
    title: "Diploma in Operation Theatre Techniques",
    link: "https://www.careers360.com/courses/operation-theatre-techniques-course",
  },
  {
    title: "Diploma in Dialysis Techniques",
    link: "https://targetstudy.com/colleges/diploma-in-dialysis-techniques-diploma-colleges-in-india.html",
  },
  {
    title: "Bachelor of Unani Medicine & Surgery(BUMS)",
    link: "https://www.besonline.in/blog/bums-bachelor-of-unani-medicine-and-surgery-course-details-eligibility-criteria-and-career-opportunities/",
  },
  {
    title: "Diploma in Radiography",
    link: "https://bestaccreditedcolleges.org/articles/diagnostic-radiology-diploma.html",
  },
  {
    title: "Bachelor of Science [B.Sc] (Radiography)",
    link: "https://collegedunia.com/courses/bachelor-of-science-bsc-radiography",
  },
  {
    title: "Certificate Course in Physiotherapy",
    link: "https://collegedunia.com/courses/certificate-course-in-physiotherapy",
  },
  {
    title: "Bachelor of Science [B.Sc] (Imaging Technology Radiography)",
    link: "https://collegedunia.com/courses/bachelor-of-science-bsc-imaging-technology-radiography",
  },
  {
    title: "Diploma in Radiology Therapy [DMRT]",
    link: "https://www.shiksha.com/college/srirama-chandra-bhanja-medical-college-and-hospital-cuttack-57639/course-diploma-in-radiology-therapy-dmrt-563487",
  },
  {
    title: "Bachelor of Siddha Medicine & Surgery [BSMS]",
    link: "https://www.shiksha.com/college/government-siddha-medical-college-chennai-arumbakkam-150809/course-bachelor-of-siddha-medicine-and-surgery-bsms-749109",
  },
  {
    title: "Bachelor of Dental Surgery (BDS)",
    link: "https://en.wikipedia.org/wiki/Dental_degree",
  },
  {
    title: "Bachelor of Veterinary Science(B.V.Sc)",
    link: "https://www.massey.ac.nz/study/all-qualifications-and-degrees/bachelor-of-veterinary-science-UBVTS/",
  },
];

const arts2 = [
  {
    title: "Bachelor of Fine Arts",
    link: "https://art.utsa.edu/bachelor-of-fine-arts",
  },
  {
    title: "BFA Painting",
    link: "https://bulletin.temple.edu/undergraduate/tyler/art/bfa-painting/",
  },
  {
    title: "BA in Drawing & Painting",
    link: "https://www.indiastudychannel.com/courses/685-ba-drawing-painting",
  },
  {
    title: "BVA Applied Arts",
    link: "https://collegedunia.com/courses/bachelor-of-visual-arts-bva-applied-arts",
  },
  {
    title: "Bachelor of Performing Arts",
    link: "https://www.bachelorstudies.com/Bachelor/Performing-Arts/",
  },
  {
    title: "Certificate course in Fine Arts",
    link: "https://www.nifafinearts.com/course.php?id=12",
  },
  {
    title: "Diploma in Fine Arts",
    link: "https://collegedunia.com/courses/diploma-in-fine-arts",
  },
  {
    title: "Certificate in Crafting Creative Communications",
    link: "https://www.successcds.net/Admission-Notification/Mudra-Institute-Communications-Ahmedabad-MICA-PG-Certificate.html",
  },
  {
    title: "Certificate in Visual Arts",
    link: "https://training.gov.au/training/details/cua31115",
  },
  {
    title: "Certificate in Performing Arts",
    link: "https://acpa.edu.au/diploma-of-performing-arts/",
  },
  {
    title: "Certificate in Drawing and Animation",
    link: "https://targetstudy.com/courses/certificate-course-in-drawing-and-animation.html",
  },
  {
    title: "Certificate in Sculpture",
    link: "https://www.dailymail.co.uk/news/article-9647693/Artist-sells-invisible-sculpture-13-000-gives-buyer-certificate-authenticity.html",
  },
  {
    title: "Certificate in Plate Making and Offset Printing",
    link: "https://targetstudy.com/colleges/certificate-course-in-plate-making-and-offset-printing-certificate-colleges-in-india.html",
  },
  {
    title: "Diploma in Performing Arts",
    link: "https://www.lasalle.edu.sg/programmes/diploma/performance",
  },
  {
    title: "Diploma in Music",
    link: "https://study.unimelb.edu.au/find/courses/undergraduate/diploma-in-music/",
  },
  {
    title: "Advanced Diploma in Carnatic Music",
    link: "https://targetstudy.com/colleges/advanced-diploma-in-carnatic-music-vocal-diploma-colleges-in-tamil-nadu.html",
  },
  {
    title: "BA Music",
    link: "https://bulletins.psu.edu/undergraduate/colleges/arts-architecture/music-ba/",
  },
  { title: "BFA in Photography", link: "https://bfa.com/" },
  {
    title: "BFA in Digital Arts",
    link: "https://www.digipen.edu/academics/digital-art-and-animation-degrees/bfa-in-digital-art-and-animation",
  },
];

const medical2 = [
  {
    title: "BSc in Horticulture",
    link: "https://www.wit.ie/courses/bsc_in_horticulture_national_botanic_gardens",
  },
  {
    title: "BSc in Plant Pathology",
    link: "https://targetstudy.com/courses/bsc-plant-pathology.html#:~:text=BSc%20Plant%20Pathology%20or%20Bachelor,that%20cause%20diseases%20in%20plants.",
  },
  {
    title: "BSc in Food Science",
    link: "https://collegedunia.com/courses/bachelor-of-science-bsc-food-sciences",
  },
  {
    title: "BSc in Dairy Science",
    link: "https://www.shiksha.com/science/dairy-science-chp",
  },
  {
    title: "BSc in Plant Science",
    link: "https://www.ed.ac.uk/studying/undergraduate/degrees/index.php?action=view&code=C200",
  },
  {
    title: "BSc in Fisheries Sciences",
    link: "https://www.sanskriti.edu.in/ug-program/bsc-fisheries-sciences.php",
  },
  {
    title: "BSc in Forestry",
    link: "https://www.collegedekho.com/courses/bsc-forestry",
  },
  {
    title: "BE or BTech in Agricultural and Food Engineering",
    link: "https://engineering.careers360.com/colleges/list-of-be-btech-in-agricultural-and-food-engineering-colleges-in-india",
  },
  {
    title: "BE or BTech in Agricultural Information Technology",
    link: "https://www.collegedekho.com/articles/bsc-agriculture-vs-btech-agriculture-engineering/",
  },
  {
    title: "BE or BTech in Agricultural Engineering",
    link: "https://www.99entranceexam.in/agriculture-engineering/",
  },
  {
    title: "BE or BTech in Dairy Technology",
    link: "https://www.careers360.com/courses/b-tech-in-dairy-technology",
  },
  {
    title: "BE or BTech in Agriculture and Dairy Technology",
    link: "https://www.quora.com/After-a-B-Tech-in-dairy-technology-will-I-go-for-an-MTech-or-an-MBA-in-agriculture-business-management",
  },
];

const Result = () => {
  const { result } = useContext(AppContext) as appContextType;
  const [mailSent, setMailSent] = useState(false);
  const { user } = UserAuth() as AuthContextType;

  const getData = () => {
    if (!result) return [];

    const data = [];

    for (const key in result) {
      data.push({ field: key, percentage: result[key] });
    }

    return data;
  };

  async function sendMail() {
    if (!user) return;

    let resultString = "";
    for (const key in result) {
      resultString += key + " : " + result[key].toPrecision(2) + "%\n";
    }

    const res = await fetch("http://localhost:5000/mail", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        result: resultString,
      }),
    });

    if (res.ok) {
      setMailSent(true);
    }
  }

  let max = 0;
  for (const key in result) max = Math.max(max, result[key]);

  return (
    <div>
      <div className={style.header}>
        <h2>Result :</h2>
      </div>
      <div style={{ display: "grid", placeItems: "center" }}>
        <BarGraph data={getData()} />
      </div>
      <div className={style.accordianContainer}>
        {(max === result["engg"] || max === result["medical"]) && (
          <Accordian
            title="UG Courses available after 12th Science"
            items={general}
          />
        )}
        {max === result["engg"] && (
          <Accordian title="B.E / B.Tech" items={engg} />
        )}
        {max === result["arts"] && (
          <Accordian title="UG Courses for Arts Students" items={arts1} />
        )}
        {max === result["commerse"] && (
          <Accordian
            title="UG Courses available after 12th Commerce"
            items={commerce}
          />
        )}
        {max === result["medical"] && (
          <Accordian title="Medical Courses" items={medical1} />
        )}
        {max === result["arts"] && (
          <Accordian title="Fine Arts Courses" items={arts2} />
        )}
        {max === result["medical"] && (
          <Accordian title="Agriculture Courses" items={medical2} />
        )}
      </div>
      <div className={style.mailSender}>
        <p>Send result to your mail</p>
        <button onClick={sendMail}> send mail</button>
        {mailSent && <h3>mail sent successfully</h3>}
      </div>
    </div>
  );
};

export default Result;
