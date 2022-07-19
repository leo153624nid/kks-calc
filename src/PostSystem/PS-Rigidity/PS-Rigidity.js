/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import './PS-Rigidity.css'
import React, { useState, useRef } from 'react'
import gorRow from '../../img/icon-row-gor-48.png'
import Calculate from '../../Calculate'

// Блок для определения постоянной податливости для системы.
function PSRigidity(props) {
    const mnmrad = useRef()
    const kgcm = useRef()

    const [psE0, setPSe0] = useState(props.ps[1])

    const handler = (ref, ps) => {
        const newValueArr = Calculate(ref.current.name, ref.current.value, ps)

        mnmrad.current.value = newValueArr[0]
        kgcm.current.value = newValueArr[1]

        setPSe0(newValueArr[1])

        props.changePS({ rigidity: newValueArr[1] })
    }
    return (
        <div className="rigidity">
            <h3>
                Жесткость с<sub>0</sub> / Податливость е<sub>0</sub>
            </h3>
            <div className="block">
                <div className="rigidity__MNm/rad">
                    <p>MHм/рад</p>
                    <input
                        type="number"
                        min="0"
                        defaultValue="1"
                        ref={mnmrad}
                        name="MNmrad to kgcm"
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
                        name="kgcm to MNmrad"
                    />
                    <button
                        type="button"
                        onClick={() => handler(kgcm, props.ps)}
                    >
                        Ввод
                    </button>
                </div>

                <div className="PSrigidity">
                    <h3>
                        Податливость <br />е<sub>0</sub> = {psE0}{' '}
                        (1/кг&#215;cм)E-10
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default PSRigidity
