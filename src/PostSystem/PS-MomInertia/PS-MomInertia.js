/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import './PS-MomInertia.css'
import React, { useState, useRef } from 'react'
import gorRow from '../../img/icon-row-gor-48.png'
import Calculate from '../../Calculate'

// Блок для определения постоянного момента инерции для системы.
function PSMomInertia(props) {
    const kgm2 = useRef()
    const kgcmsec2 = useRef()

    const [psMomI, setPSMomI] = useState(props.ps[0])

    const handler = (ref, ps) => {
        const newValueArr = Calculate(ref.current.name, ref.current.value, ps)

        kgm2.current.value = newValueArr[0]
        kgcmsec2.current.value = newValueArr[1]

        setPSMomI(newValueArr[1])

        props.changePS({ momI: newValueArr[1] })
    }

    return (
        <div className="MomInertia">
            <h3>
                Момент инерции &#952;<sub>0</sub>
            </h3>
            <div className="block">
                <div className="momInertia__kgm2">
                    <p>
                        кг&#215;м<sup>2</sup>
                    </p>
                    <input
                        type="number"
                        min="0"
                        defaultValue="1"
                        ref={kgm2}
                        name="kgm2 to kgcmsec2"
                    />
                    <button
                        type="button"
                        onClick={() => handler(kgm2, props.ps)}
                    >
                        Ввод
                    </button>
                </div>

                <img src={gorRow} alt="rows" />

                <div className="momInertia__kgcmsec2">
                    <p>
                        кг&#215;cм&#215;c<sup>2</sup>
                    </p>
                    <input
                        type="number"
                        min="0"
                        defaultValue="10.19"
                        ref={kgcmsec2}
                        name="kgcmsec2 to kgm2"
                    />
                    <button
                        type="button"
                        onClick={() => handler(kgcmsec2, props.ps)}
                    >
                        Ввод
                    </button>
                </div>

                <div className="PSmomInertia">
                    <h3>
                        Момент инерции
                        <br />
                        &#952;<sub>0</sub> = {psMomI} кг&#215;cм&#215;c
                        <sup>2</sup>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default PSMomInertia
