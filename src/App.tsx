import './App.css'
import React, { useState } from 'react'
import PostSystem from './PostSystem/PostSystem'
import ElemBeforeReduction from './ElemBeforeReduction/ElemBeforeReduction'
import ElemAfterReduction from './ElemAfterReduction/ElemAfterReduction'
import { PStype } from './Types'

function App() {
    const [ps, setPS] = useState([10.19, 981.354, 1])

    // Функция получения новых постоянных системы из дочерних компонентов
    const changePS = (newPS: PStype) => {
        let currentPS: number[] = []

        if (newPS.momI) currentPS = [newPS.momI, ps[1], ps[2]]

        if (newPS.rigidity) currentPS = [ps[0], newPS.rigidity, ps[2]]

        if (newPS.reduction) currentPS = [ps[0], ps[1], newPS.reduction]

        setPS(currentPS)
        // eslint-disable-next-line no-console
        console.dir(`PS = ${currentPS}`)
    }

    return (
        <div className="App">
            <header>
                <span>
                    <i>Калькулятор Крутильно-Колеблющихся Cистем</i>
                </span>
            </header>

            <PostSystem changePS={changePS} ps={ps} />

            <div className="elements">
                <ElemBeforeReduction ps={ps} />
                <ElemAfterReduction ps={ps} />
            </div>

            <footer>
                <span>Created by Chaykin Aleksey</span>
            </footer>
        </div>
    )
}

export default App
