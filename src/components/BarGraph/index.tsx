import { ResponsiveBar } from '@nivo/bar'
import style from "./style.module.scss"

const BarGraph = ({ data }: { data: any }) => {
    console.log(data)

    return (
        <div className={style.graphContainer}>
            <ResponsiveBar
                data={data}
                keys={["percentage"]}
                indexBy="field"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.4}
                valueScale={{ type: "linear" }}
                colors="#3182CE"
                animate={true}
                enableLabel={false}
                axisTop={null}
                axisRight={null}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "percentage",
                    legendPosition: "middle",
                    legendOffset: -40
                }}
            />
        </div>
    )
}

export default BarGraph