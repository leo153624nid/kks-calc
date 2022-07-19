/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import './EARMomInertia.css'
import React, { useRef } from 'react'
import gorRow from '../../img/icon-row-gor-48.png'
import Calculate from '../../Calculate'

// Блок для определения момента инерции элемента системы до редукции.
function EARMomInertia(props) {
    const kgm2 = useRef()
    const kgcmsec2 = useRef()
    const momIotn = useRef()

    const handler = (ref, ps) => {
        const newValueArr = Calculate(ref.current.name, ref.current.value, ps)

        kgm2.current.value = newValueArr[0]
        kgcmsec2.current.value = newValueArr[1]
        momIotn.current.value = newValueArr[2]
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
                        name="RED kgcmsec2 to kgm2"
                    />
                    <button
                        type="button"
                        onClick={() => handler(kgcmsec2, props.ps)}
                    >
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
                    <button
                        type="button"
                        onClick={() => handler(momIotn, props.ps)}
                    >
                        Ввод
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EARMomInertia
