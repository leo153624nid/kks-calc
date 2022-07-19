/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import './PS-MomInertia.css'
import React, { useState, useRef, RefObject } from 'react'
import gorRow from '../../img/icon-row-gor-48.png'
import Calculate from '../../Calculate'
import { PostSystemPropType } from '../../Types'

// Блок для определения постоянного момента инерции для системы.
function PSMomInertia({ ps, changePS }: PostSystemPropType) {
    const kgm2 = useRef() as RefObject<HTMLInputElement>
    const kgcmsec2 = useRef() as RefObject<HTMLInputElement>

    const [psMomI, setPSMomI] = useState(ps[0])

    const handler = (ref: RefObject<HTMLInputElement>, psArr: number[]) => {
        if (ref.current) {
            const newValueArr = Calculate(
                ref.current.name,
                ref.current.value,
                psArr
            )

            if (kgm2.current) kgm2.current.value = String(newValueArr[0])
            if (kgcmsec2.current)
                kgcmsec2.current.value = String(newValueArr[1])

            setPSMomI(newValueArr[1])

            changePS({ momI: newValueArr[1] })
        }
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
                    <button type="button" onClick={() => handler(kgm2, ps)}>
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
                    <button type="button" onClick={() => handler(kgcmsec2, ps)}>
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
