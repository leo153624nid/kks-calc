/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import './PostSystem.css'
import React from 'react'
import PSMomInertia from './PS-MomInertia/PS-MomInertia'
import PSRigidity from './PS-Rigidity/PS-Rigidity'
import PSReduction from './PS-Reduction/PS-Reduction'

// Секция "Постоянные системы".
// Здесь определяются постоянные: "момент инерции", "податливость", "передаточное отношение"
// и передаются в секции "Элемент до редукции", "Элемент после редукции" через общего родителя "Арр"
// eslint-disable-next-line react/prop-types
function PostSystem(props) {
    const ps = props.ps
    const changePS = props.changePS
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
