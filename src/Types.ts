export type PStype = {
    momI?: number
    rigidity?: number
    reduction?: number
}

export type PostSystemPropType = {
    ps: number[]
    // eslint-disable-next-line no-unused-vars
    changePS: (arg: PStype) => void
}

export type EBRandEARPropType = {
    ps: number[]
}
