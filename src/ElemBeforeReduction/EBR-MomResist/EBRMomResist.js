/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import './EBRMomResist.css'
import React, { useRef } from 'react'
import gorRow from '../../img/icon-row-gor-48.png'
import Calculate from '../../Calculate'

// Блок для определения момента сопротивления элемента системы ДО редукции.
function EBRMomResist(props) {
    const mm = useRef()
    const cm3 = useRef()
    const momRotn = useRef()

    const handler = (ref, ps) => {
        const newValueArr = Calculate(ref.current.name, ref.current.value, ps)

        mm.current.value = newValueArr[0]
        cm3.current.value = newValueArr[1]
        momRotn.current.value = newValueArr[2]
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
                    <button type="button" onClick={() => handler(mm, props.ps)}>
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
                    <button
                        type="button"
                        onClick={() => handler(cm3, props.ps)}
                    >
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
                    <button
                        type="button"
                        onClick={() => handler(momRotn, props.ps)}
                    >
                        Ввод
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EBRMomResist
