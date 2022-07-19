/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import './EARMomInertia.css'
import React, { RefObject, useRef } from 'react'
import gorRow from '../../img/icon-row-gor-48.png'
import Calculate from '../../Calculate'
import { EBRandEARPropType } from '../../Types'

// Блок для определения момента инерции элемента системы до редукции.
function EARMomInertia({ ps }: EBRandEARPropType) {
    const kgm2 = useRef() as RefObject<HTMLInputElement>
    const kgcmsec2 = useRef() as RefObject<HTMLInputElement>
    const momIotn = useRef() as RefObject<HTMLInputElement>

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
            if (momIotn.current) momIotn.current.value = String(newValueArr[2])
        }
    }

    return (
        <div className="MomInertia">
            <h3>Момент инерции</h3>
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
                        name="RED kgm2 to kgcmsec2"
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
                        name="RED kgcmsec2 to kgm2"
                    />
                    <button type="button" onClick={() => handler(kgcmsec2, ps)}>
                        Ввод
                    </button>
                </div>

                <img src={gorRow} alt="rows" />

                <div className="momInertia__otn">
                    <p>&#957;</p>
                    <input
                        type="number"
                        min="0"
                        defaultValue="1"
                        ref={momIotn}
                        name="RED otn to kgcmsec2"
                    />
                    <button type="button" onClick={() => handler(momIotn, ps)}>
                        Ввод
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EARMomInertia
