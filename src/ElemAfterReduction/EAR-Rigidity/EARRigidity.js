/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import './EARRigidity.css'
import React, { useRef } from 'react'
import gorRow from '../../img/icon-row-gor-48.png'
import Calculate from '../../Calculate'

// Блок для определения постоянной податливости для системы.
function EARRigidity(props) {
    const mnmrad = useRef()
    const kgcm = useRef()
    const rigOtn = useRef()

    const handler = (ref, ps) => {
        const newValueArr = Calculate(ref.current.name, ref.current.value, ps)

        mnmrad.current.value = newValueArr[0]
        kgcm.current.value = newValueArr[1]
        rigOtn.current.value = newValueArr[2]
    }

    return (
        <div className="rigidity">
            <h3>Жесткость / Податливость</h3>
            <div className="block">
                <div className="rigidity__MNm/rad">
                    <p>MHм/рад</p>
                    <input
                        type="number"
                        min="0"
                        defaultValue="1"
                        ref={mnmrad}
                        name="RED MNmrad to kgcm"
                    />
                    <button
                        type="button"
                        onClick={() => handler(mnmrad, props.ps)}
                    >
                        Ввод
                    </button>
                </div>

                <img src={gorRow} alt="rows" />

                <div className="rigidity__1/kgcm">
                    <p>(1/кг&#215;cм)E-10</p>
                    <input
                        type="number"
                        min="0"
                        defaultValue="981.354"
                        ref={kgcm}
                        name="RED kgcm to MNmrad"
                    />
                    <button
                        type="button"
                        onClick={() => handler(kgcm, props.ps)}
                    >
                        Ввод
                    </button>
                </div>

                <img src={gorRow} alt="rows" />

                <div className="rigidity__otn">
                    <p>e&#215;E-10</p>
                    <input
                        type="number"
                        min="0"
                        defaultValue="1"
                        ref={rigOtn}
                        name="RED otn to 1/kgcm"
                    />
                    <button
                        type="button"
                        onClick={() => handler(rigOtn, props.ps)}
                    >
                        Ввод
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EARRigidity
