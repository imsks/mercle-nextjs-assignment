export type MessageCountListType = {
    count: string
    timeBucket: string
    channelId: string
}

export type ChannelsType = {
    label: string
    value: string
    type: number
    guild: string
    guildId: string
    parentId: string | null
    permissionOverwrites: string[]
    messages?: string[]
    threads?: string[]
    nsfw?: boolean
    topic?: string | null
    lastMessageId?: string | null
    rtcRegion?: null
    bitrate?: number
    userLimit?: number
    videoQualityMode?: null
    id: string
    name: string
    rawPosition: number
    createdTimestamp: number
    rateLimitPerUser?: number
}
