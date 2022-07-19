/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import './PS-Reduction.css'
import React, { useState, useRef, RefObject } from 'react'
import gorRow from '../../img/icon-row-gor-48.png'
import Calculate from '../../Calculate'
import { PostSystemPropType } from '../../Types'

// Блок для определения постоянного передаточного отношения для системы.
function PSReduction({ ps, changePS }: PostSystemPropType) {
    const stepRed = useRef() as RefObject<HTMLInputElement>
    const ratio = useRef() as RefObject<HTMLInputElement>

    const [psRed, setPSred] = useState(ps[2])

    const handler = (ref: RefObject<HTMLInputElement>, psArr: number[]) => {
        if (ref.current) {
            const newValueArr = Calculate(
                ref.current.name,
                ref.current.value,
                psArr
            )

            if (stepRed.current) stepRed.current.value = String(newValueArr[0])
            if (ratio.current) ratio.current.value = String(newValueArr[1])

            setPSred(newValueArr[1])

            changePS({ reduction: newValueArr[1] ** 2 })
        }
    }
    return (
        <div className="Reduction">
            <h3>Редукция i</h3>
            <div className="block">
                <div className="stepRed">
                    <p>Степень редукции</p>
                    <input
                        type="number"
                        min="0"
                        defaultValue="1"
                        ref={stepRed}
                        name="stepRed to ratio"
                    />
                    <button type="button" onClick={() => handler(stepRed, ps)}>
                        Ввод
                    </button>
                </div>

                <img src={gorRow} alt="rows" />

                <div className="ratio">
                    <p>Передаточное отн.</p>
                    <input
                        type="number"
                        min="0"
                        defaultValue="1"
                        ref={ratio}
                        name="ratio to stepRed"
                    />
                    <button type="button" onClick={() => handler(ratio, ps)}>
                        Ввод
                    </button>
                </div>

                <div className="PSreduction">
                    <h3>
                        Редукция (квадратич.)
                        <br />i<sup>2</sup> ={' '}
                        {Math.round(psRed ** 2 * 1000) / 1000}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default PSReduction
