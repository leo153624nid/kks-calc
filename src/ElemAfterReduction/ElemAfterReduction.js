/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */
import './ElemAfterReduction.css'
import EARMomInertia from './EAR-MomInertia/EARMomInertia'
import EARRigidity from './EAR-Rigidity/EARRigidity'
import EARMomResist from './EAR-MomResist/EARMomResist'

// Секция "Элемент ПОСЛЕ редукции".
// Здесь определяются данные элемента ПОСЛЕ редукции: "момент инерции", "податливость", "момент сопротивления"
function ElemAfterReduction(props) {
    const ps = props.ps
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
