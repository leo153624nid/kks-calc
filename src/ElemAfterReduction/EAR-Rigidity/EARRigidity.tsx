/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import './EARRigidity.css'
import React, { RefObject, useRef } from 'react'
import gorRow from '../../img/icon-row-gor-48.png'
import Calculate from '../../Calculate'
import { EBRandEARPropType } from '../../Types'

// Блок для определения постоянной податливости для системы.
function EARRigidity({ ps }: EBRandEARPropType) {
    const mnmrad = useRef() as RefObject<HTMLInputElement>
    const kgcm = useRef() as RefObject<HTMLInputElement>
    const rigOtn = useRef() as RefObject<HTMLInputElement>

    const handler = (ref: RefObject<HTMLInputElement>, psArr: number[]) => {
        if (ref.current) {
            const newValueArr = Calculate(
                ref.current.name,
                ref.current.value,
                psArr
            )

            if (mnmrad.current) mnmrad.current.value = String(newValueArr[0])
            if (kgcm.current) kgcm.current.value = String(newValueArr[1])
            if (rigOtn.current) rigOtn.current.value = String(newValueArr[2])
        }
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
                        name="RED kgcm to MNmrad"
                    />
                    <button type="button" onClick={() => handler(kgcm, ps)}>
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
                    <button type="button" onClick={() => handler(rigOtn, ps)}>
                        Ввод
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EARRigidity
