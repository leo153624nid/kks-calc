/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import './EBRMomResist.css'
import React, { RefObject, useRef } from 'react'
import gorRow from '../../img/icon-row-gor-48.png'
import Calculate from '../../Calculate'
import { EBRandEARPropType } from '../../Types'

// Блок для определения момента сопротивления элемента системы ДО редукции.
function EBRMomResist({ ps }: EBRandEARPropType) {
    const mm = useRef() as RefObject<HTMLInputElement>
    const cm3 = useRef() as RefObject<HTMLInputElement>
    const momRotn = useRef() as RefObject<HTMLInputElement>

    const handler = (ref: RefObject<HTMLInputElement>, psArr: number[]) => {
        if (ref.current) {
            const newValueArr = Calculate(
                ref.current.name,
                ref.current.value,
                psArr
            )

            if (mm.current) mm.current.value = String(newValueArr[0])
            if (cm3.current) cm3.current.value = String(newValueArr[1])
            if (momRotn.current) momRotn.current.value = String(newValueArr[2])
        }
    }

    return (
        <div className="MomResist">
            <h3>Момент сопротивления</h3>
            <div className="block">
                <div className="momResist__mm">
                    <p>мм</p>
                    <input
                        type="number"
                        min="0"
                        defaultValue="100"
                        ref={mm}
                        name="mm to cm3"
                    />
                    <button type="button" onClick={() => handler(mm, ps)}>
                        Ввод
                    </button>
                </div>

                <img src={gorRow} alt="rows" />

                <div className="momResist__cm3">
                    <p>
                        cм<sup>3</sup>
                    </p>
                    <input
                        type="number"
                        min="0"
                        defaultValue="196.35"
                        ref={cm3}
                        name="cm3 to mm"
                    />
                    <button type="button" onClick={() => handler(cm3, ps)}>
                        Ввод
                    </button>
                </div>

                <img src={gorRow} alt="rows" />

                <div className="momResist__otn">
                    <p>а&#215;E-6</p>
                    <input
                        type="number"
                        min="0"
                        defaultValue="1"
                        ref={momRotn}
                        name="otn to cm3"
                    />
                    <button type="button" onClick={() => handler(momRotn, ps)}>
                        Ввод
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EBRMomResist
