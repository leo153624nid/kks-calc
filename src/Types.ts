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

// interface Current {
//     name: string
//     value: string
// }

// export interface RefType {
//     current: Current
// }
