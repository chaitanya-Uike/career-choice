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

const items6 = [
    'Bachelor of Medicine, Bachelor of Surgery [MBBS]',
    'Bachelor of Physiotherapy [BPT]',
    'Bachelor of Ayurvedic Medicine and Surgery [BAMS]',
    'Diploma in Medical Laboratory Technology [DMLT]',
    'Bachelor in Medical Laboratory Technology [BMLT]',
    'Bachelor of Homeopathic Medicine & Surgery [BHMS]',
    'Bachelor of Optometry [B.Optom]',
    'Diploma in Physiotherapy [DPT]',
    'Bachelor of Occupational Therapy [BOT]',
    'Bachelor in Audiology and Speech - Language Pathology [BASLP]',
    'Bachelor of Science [B.Sc] (Perfusion Technology)',
    'Diploma in X-Ray Technology',
    'Diploma in Medical Radio Diagnosis [DMRD]',
    'Bachelor of Science [B.Sc] (Medical Imaging Technology)',
    'Diploma in Clinical Pathology [DCP]',
    'Bachelor of Science [B.Sc] (Dialysis)',
    'Diploma in Anaesthesia [DA]',
    'Bachelor of Science [B.Sc] {Hons.} (Physiology)',
    'Bachelor of Science [B.Sc] (Industrial Microbiology)',
    'Diploma in Otorhinolaryngology [DLO]',
    'Diploma in Nursing',
    'Bachelor of Science [B.Sc] (Respiratory Therapy)',
    'Diploma in Operation Theatre Techniques',
    'Diploma in Dialysis Techniques',
    'Bachelor of Unani Medicine & Surgery(BUMS)',
    'Diploma in Radiography',
    'Bachelor of Science [B.Sc] (Radiography)',
    'Certificate Course in Physiotherapy',
    'Bachelor of Science [B.Sc] (Imaging Technology Radiography)',
    'Diploma in Radiology Therapy [DMRT]',
    'Bachelor of Siddha Medicine & Surgery [BSMS]',
    'Diploma in Occupational Therapy',
    'Certificate in Laboratory Techniques [CPLT]',
    'Bachelor of Science [B.Sc] (Occupational Therapy)',
    'Bachelor of Science [B.Sc] (Pathology)',
    'Bachelor of Science [B.Sc] (Audiology)',
    'Bachelor of Dental Surgery (BDS)',
    'Bachelor of Veterinary Science(B.V.Sc)',

]

const items7 = [
    'Bachelor of Fine Arts',
    'BFA Painting',
    'BA in Drawing & Painting',
    'BVA Applied Arts',
    'Bachelor of Performing Arts',
    'Certificate course in Fine Arts',
    'Diploma in Fine Arts',
    'Certificate in Crafting Creative Communications',
    'Certificate in Visual Arts',
    'Certificate in Performing Arts',
    'Certificate in Drawing and Animation',
    'Certificate in Sculpture',
    'Certificate in Plate Making and Offset Printing',
    'Diploma in Performing Arts',
    'Diploma in Music',
    'Advanced Diploma in Carnatic Music',
    'BA Music',
    'BFA in Photography',
    'BFA in Digital Arts',
]

const items8 = [
    'BSc in Horticulture',
    'BSc in Plant Pathology',
    'BSc in Food Science',
    'BSc in Dairy Science',
    'BSc in Plant Science',
    'BSc in Agricultural Biotechnology',
    'BSc in Fisheries Sciences',
    'BSc in Forestry',
    'BE or BTech in Agricultural and Food Engineering',
    'BE or BTech in Agricultural Information Technology',
    'BE or BTech in Agricultural Engineering',
    'BE or BTech in Dairy Technology',
    'BE or BTech in Agriculture and Dairy Technology',
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
            <div className={style.header}>
                <h2>Result :</h2>
            </div>
            <div style={{ display: "grid", placeItems: "center" }}>
                <BarGraph data={getData()} />
            </div>
            <div className={style.accordianContainer}>
                <Accordian title="UG Courses available after 12th Science" items={items1} />
                <Accordian title="B.E / B.Tech" items={items2} />
                <Accordian title="UG Courses for Arts Students" items={items3} />
                <Accordian title="UG Courses available after 12th Commerce" items={items4} />
                <Accordian title="professional courses to pursue after 12th" items={items5} />
                <Accordian title="Medical Courses" items={items6} />
                <Accordian title="Fine Arts Courses" items={items7} />
                <Accordian title="Agriculture Courses" items={items8} />
            </div>
        </div>
    )
}

export default Result