/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import './ElemAfterReduction.css'
import EARMomInertia from './EAR-MomInertia/EARMomInertia'
import EARRigidity from './EAR-Rigidity/EARRigidity'
import EARMomResist from './EAR-MomResist/EARMomResist'
import { EBRandEARPropType } from '../Types'

// Секция "Элемент ПОСЛЕ редукции".
// Здесь определяются данные элемента ПОСЛЕ редукции: "момент инерции", "податливость", "момент сопротивления"
function ElemAfterReduction({ ps }: EBRandEARPropType) {
    return (
        <div className="ElemAfterReduction">
            <h2>
                <u>Элемент после редукции</u>
            </h2>
            <EARMomInertia ps={ps} />

            <EARRigidity ps={ps} />

            <EARMomResist ps={ps} />
        </div>
    )
}

export default ElemAfterReduction
