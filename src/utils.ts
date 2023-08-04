import { ChannelsType, MessageCountListType } from "./interfaces"

// Generate graph config
const generateEngagementMessageOverTimeChartOptions = (
    messageCountList: MessageCountListType[],
    channels: ChannelsType[]
) => {
    // 1. Filter channels with messages > single date
    const channelsWithMultipleDates = channels.filter(({ value }) => {
        const messageDates = messageCountList.filter(
            ({ channelId }) => channelId === value
        )
        return messageDates.length > 1
    })

    // 2. Generate data points for the graph
    const dataPoints = messageCountList.map(
        ({ timeBucket, count, channelId }) => ({
            x: new Date(timeBucket).getTime(),
            y: parseInt(count) * parseInt(count),
            channelId
        })
    )

    // 3. Prepare graph options
    const options = {
        title: {
            text: "Messages vs Time"
        },
        xAxis: {
            type: "datetime",
            title: {
                text: "Date"
            }
        },
        yAxis: {
            type: "spline",
            title: {
                text: "Messages"
            }
        },

        series: channelsWithMultipleDates.map(({ name, value }) => ({
            name: name,
            data: dataPoints
                .filter(({ channelId }) => channelId === value)
                .map(({ x, y }) => [x, y]),
            type: "line"
        }))
    }

    return options
}

export { generateEngagementMessageOverTimeChartOptions }
