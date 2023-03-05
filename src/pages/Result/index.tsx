import { useContext, useState } from "react"
import { AppContext, appContextType } from "../../App"
import BarGraph from "../../components/BarGraph"
import Accordian from "../../components/Accordian"
import style from "./style.module.scss"


const general = [
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

const engg = [
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

const arts1 = [
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

const commerce = [
    'B.Com- Bachelor of Commerce',
    'BBA- Bachelor of Business Administration',
    'B.Com (Hons.)',
    'BA (Hons.) in Economics',
    'Integrated Law Program- B.Com LL.B',
    'Integarted Law Program- BBA LL.B',
    'CA- Chartered Accountancy',
]

const medical1 = [
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

const arts2 = [
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

const medical2 = [
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
    const [email, setEmail] = useState("")
    const [mailSent, setMailSent] = useState(false)


    const getData = () => {
        if (!result) return []

        const data = []

        for (const key in result) {
            data.push({ field: key, percentage: result[key] })
        }

        return data
    }

    async function sendMail() {
        let resultString = ""
        for (const key in result) {
            resultString += key + " : " + result[key].toPrecision(2) + "%\n"
        }

        const res = await fetch("http://localhost:5000/mail", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                result: resultString
            })
        })

        if (res.ok) {
            setMailSent(true)
        }
    }


    let max = 0;
    for (const key in result)
        max = Math.max(max, result[key])

    return (
        <div>
            <div className={style.header}>
                <h2>Result :</h2>
            </div>
            <div style={{ display: "grid", placeItems: "center" }}>
                <BarGraph data={getData()} />
            </div>
            <div className={style.accordianContainer}>
                <Accordian title="UG Courses available after 12th Science" items={general} />
                {max === result["engg"] && <Accordian title="B.E / B.Tech" items={engg} />}
                {max === result["arts"] && <Accordian title="UG Courses for Arts Students" items={arts1} />}
                {max === result["commerse"] && <Accordian title="UG Courses available after 12th Commerce" items={commerce} />}
                {max === result["medical"] && <Accordian title="Medical Courses" items={medical1} />}
                {max === result["arts"] && <Accordian title="Fine Arts Courses" items={arts2} />}
                {max === result["medical"] && <Accordian title="Agriculture Courses" items={medical2} />}
            </div>
            <div className={style.mailSender}>
                <p>Send result to your mail</p>
                <input
                    type="email"
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }} />
                <button onClick={sendMail} > send mail</button>
                {mailSent && <h3>mail sent successfully</h3>}
            </div>
        </div >
    )
}

export default Result