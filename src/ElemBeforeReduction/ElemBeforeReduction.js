/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import './ElemBeforeReduction.css'
import EBRMomInertia from './EBR-MomInertia/EBRMomInertia'
import EBRRigidity from './EBR-Rigidity/EBRRigidity'
import EBRMomResist from './EBR-MomResist/EBRMomResist'

// Секция "Элемент ДО редукции".
// Здесь определяются данные элемента ДО редукции: "момент инерции", "податливость", "момент сопротивления"
function ElemBeforeReduction(props) {
    // eslint-disable-next-line react/prop-types
    const ps = props.ps
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
