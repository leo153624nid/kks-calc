import './PostSystem.css'
import React from 'react'
import PSMomInertia from './PS-MomInertia/PS-MomInertia'
import PSRigidity from './PS-Rigidity/PS-Rigidity'
import PSReduction from './PS-Reduction/PS-Reduction'
import { PostSystemPropType } from '../Types'

// Секция "Постоянные системы".
// Здесь определяются постоянные: "момент инерции", "податливость", "передаточное отношение"
// и передаются в секции "Элемент до редукции", "Элемент после редукции" через общего родителя "Арр"

function PostSystem({ ps, changePS }: PostSystemPropType) {
    return (
        <div className="PostSystem">
            <h2 className="h2__PostSystem">
                <u>Постоянные системы</u>
            </h2>
            <PSMomInertia ps={ps} changePS={changePS} />
            <PSRigidity ps={ps} changePS={changePS} />
            <PSReduction ps={ps} changePS={changePS} />
        </div>
    )
}

export default PostSystem
