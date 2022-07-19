import React from 'react'
import './ElemBeforeReduction.css'
import EBRMomInertia from './EBR-MomInertia/EBRMomInertia'
import EBRRigidity from './EBR-Rigidity/EBRRigidity'
import EBRMomResist from './EBR-MomResist/EBRMomResist'

// Секция "Элемент ДО редукции".
// Здесь определяются данные элемента ДО редукции: "момент инерции", "податливость", "момент сопротивления"
function ElemBeforeReduction(ps: number[]) {
    return (
        <div className="ElemBeforeReduction">
            <h2>
                <u>Элемент до редукции</u>
            </h2>
            <EBRMomInertia ps={ps} />
            <EBRRigidity ps={ps} />
            <EBRMomResist ps={ps} />
        </div>
    )
}

export default ElemBeforeReduction
