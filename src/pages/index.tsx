import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { generateEngagementMessageOverTimeChartOptions } from "@/utils"
import { channels, messageCountList } from "@/data"

const Home = () => {
    const options = generateEngagementMessageOverTimeChartOptions(
        messageCountList,
        channels
    )

    return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default Home
