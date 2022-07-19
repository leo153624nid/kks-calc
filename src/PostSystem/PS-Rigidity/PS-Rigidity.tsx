/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import './PS-Rigidity.css'
import React, { useState, useRef, RefObject } from 'react'
import gorRow from '../../img/icon-row-gor-48.png'
import Calculate from '../../Calculate'
import { PostSystemPropType } from '../../Types'

// Блок для определения постоянной податливости для системы.
function PSRigidity({ ps, changePS }: PostSystemPropType) {
    const mnmrad = useRef() as RefObject<HTMLInputElement>
    const kgcm = useRef() as RefObject<HTMLInputElement>

    const [psE0, setPSe0] = useState(ps[1])

    const handler = (ref: RefObject<HTMLInputElement>, psArr: number[]) => {
        if (ref.current) {
            const newValueArr = Calculate(
                ref.current.name,
                ref.current.value,
                psArr
            )

            if (mnmrad.current) mnmrad.current.value = String(newValueArr[0])
            if (kgcm.current) kgcm.current.value = String(newValueArr[1])

            setPSe0(newValueArr[1])

            changePS({ rigidity: newValueArr[1] })
        }
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
                    <button type="button" onClick={() => handler(mnmrad, ps)}>
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
                    <button type="button" onClick={() => handler(kgcm, ps)}>
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
