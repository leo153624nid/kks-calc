import './PS-Reduction.css'
import React, { useState, useRef } from 'react'
import gorRow from '../../img/icon-row-gor-48.png'
import Calculate from '../../Calculate'

// Блок для определения постоянного передаточного отношения для системы.
function PSReduction(props) {
    const stepRed = useRef()
    const ratio = useRef()

    const [psRed, setPSred] = useState(props.ps[2])

    const handler = (ref, ps) => {
        const newValueArr = Calculate(ref.current.name, ref.current.value, ps)

        stepRed.current.value = newValueArr[0]
        ratio.current.value = newValueArr[1]

        setPSred(newValueArr[1])

        props.changePS({ reduction: newValueArr[1] ** 2 })
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
                    <button
                        type="button"
                        onClick={() => handler(stepRed, props.ps)}
                    >
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
                    <button
                        type="button"
                        onClick={() => handler(ratio, props.ps)}
                    >
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
