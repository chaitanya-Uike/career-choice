import { useContext } from "react"
import { AppContext, appContextType } from "../../App"
import BarGraph from "../../components/BarGraph"
import Accordian from "../../components/Accordian"
import style from "./style.module.scss"


const items1 = [
    'BE/B.Tech- Bachelor of Technology',
    'B.Arch- Bachelor of Architecture',
    'BCA- Bachelor of Computer Applications',
    'B.Sc.- Information Technology',
    'B.Sc- Nursing',
    'BPharma- Bachelor of Pharmacy',
    'B.Sc- Interior Design',
    'BDS- Bachelor of Dental Surgery',
    'Animation, Graphics and Multimedia',
    'B.Sc. – Nutrition & Dietetics',
    'BPT- Bachelor of Physiotherapy',
    'B.Sc- Applied Geology',
    'BA/B.Sc. Liberal Arts',
    'B.Sc.- Physics',
    'B.Sc. Chemistry',
    'B.Sc. Mathematics',

]

const items2 = [
    'Aeronautical Engineering',
    'Automobile Engineering',
    'Civil Engineering',
    'Computer Science and Engineering',
    'Biotechnology Engineering',
    'Electrical and Electronics Engineering',
    'Automation and Robotics',
    'Petroleum Engineering',
    'Instrumentation Engineering',
    'Ceramic Engineering',
    'Chemical Engineering',
    'Structural Engineering',
    'Transportation Engineering',
    'Construction Engineering',
    'Power Engineering',
    'Robotics Engineering',
    'Textile Engineering',
    'Smart Manufacturing & Automation',
    'Electronics and communication Engineering',
    'Electrical Engineering',
    'Mechanical engineering',
    'Information Technology',
    'Artificial intelligence',
    'Data Science',
    'Artificial intelligence and machine learning',
    'Agriculture Engineering',
    'Food technology',
    'B. Tech in Cyber security',
    'Information Science and engineering',
    'Biomedical Engineering',
    'Electronics and Instrumentation Engineering',
    'Mechatronics',
    'Instrumentation and Control',
    'Mining Engineering',
    'Production engineering',
    'Dairy technology',
    'Marine Engineering',
    'Big Data Analytics']

const items3 = [
    'BBA- Bachelor of Business Administration',
    'BMS- Bachelor of Management Science',
    'BFA- Bachelor of Fine Arts',
    'BEM- Bachelor of Event Management',
    'Integrated Law Course- BA + LL.B',
    'BJMC- Bachelor of Journalism and Mass Communication',
    'BFD- Bachelor of Fashion Designing',
    'BSW- Bachelor of Social Work',
    'BBS- Bachelor of Business Studies',
    'BTTM- Bachelor of Travel and Tourism Management',
    'Aviation Courses',
    'B.Sc- Interior Design',
    'B.Sc.- Hospitality and Hotel Administration',
    'Bachelor of Design (B. Design)',
    'Bachelor of Performing Arts',
    'BA in History'
]

const items4 = [
    'B.Com- Bachelor of Commerce',
    'BBA- Bachelor of Business Administration',
    'B.Com (Hons.)',
    'BA (Hons.) in Economics',
    'Integrated Law Program- B.Com LL.B',
    'Integarted Law Program- BBA LL.B'
]

const items5 = [
    'CA- Chartered Accountancy',
    'CS- Company Secretary',
    'Bachelor of Design in Accessory Design',
    'fashion Design, Ceramic Design',
    'Leather Design',
    'Graphic Design',
    'Industrial Design',
    'Jewellery Design',
    'Bachelor in Foreign Language',
    'Diploma Courses',
    'Advanced Diploma Courses',
    'Certificate Courses'
]

const Result = () => {
    const { result } = useContext(AppContext) as appContextType


    const getData = () => {
        if (!result) return []

        const data = []

        for (const key in result) {
            data.push({ field: key, percentage: result[key] })
        }

        return data
    }

    return (
        <div>
            <div>
                <h3>Result</h3>
            </div>
            <div style={{ display: "grid", placeItems: "center" }}>
                <BarGraph data={getData()} />
            </div>
            <div className={style.accordianContainer}>
                <Accordian title="UG Courses available after 12th Science" items={items1} />
                <Accordian title="B.E / B.Tech" items={items2} />
                <Accordian title="UG Courses for Arts Students" items={items3} />
                <Accordian title="UG Courses available after 12th Commerce" items={items4} />
                <Accordian title="UG Courses available after 12th Commerce" items={items4} />
                <Accordian title="professional courses to pursue after 12th" items={items5} />
            </div>
        </div>
    )
}

export default Result