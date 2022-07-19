/* eslint-disable no-console */

// Общая функция пересчета всех величин.
// Получает метод пересчета, значение из соответствующего инпута и постоянные системы.
// В зависимости от метода делает вычисления соответствующих величин.
// Всегда возвращает массив с тремя значениями.
function Calculate(
    method: string | null,
    firstVal: string | null,
    ps: number[]
) {
    if (!method || !firstVal) {
        console.log('Неверное входное значение или метод пересчета')
        return ps
    }

    const firstValue = Number(firstVal)
    console.log(method)

    let secondValue = 0
    let thirdValue = 0

    switch (method) {
        case 'kgm2 to kgcmsec2':
            secondValue = Math.round(firstValue * 10.19 * 1000) / 1000
            thirdValue = Math.round((secondValue / ps[0]) * 1000) / 1000

            return [
                Math.abs(firstValue),
                Math.abs(secondValue),
                Math.abs(thirdValue),
            ]

        case 'kgcmsec2 to kgm2':
            secondValue = Math.round((firstValue / 10.19) * 1000) / 1000
            thirdValue = Math.round((firstValue / ps[0]) * 1000) / 1000

            return [
                Math.abs(secondValue),
                Math.abs(firstValue),
                Math.abs(thirdValue),
            ] // Нет ошибки, это сделано для синхронизации значений инпутов

        case 'MNmrad to kgcm':
            secondValue =
                Math.round((1 / (firstValue * 0.001019)) * 1000) / 1000
            thirdValue = Math.round((secondValue / ps[1]) * 1000) / 1000

            return [
                Math.abs(firstValue),
                Math.abs(secondValue),
                Math.abs(thirdValue),
            ]

        case 'kgcm to MNmrad':
            secondValue =
                Math.round((1 / (firstValue * 0.001019)) * 1000) / 1000
            thirdValue = Math.round((firstValue / ps[1]) * 1000) / 1000

            return [
                Math.abs(secondValue),
                Math.abs(firstValue),
                Math.abs(thirdValue),
            ] // Нет ошибки, это сделано для синхронизации значений инпутов

        case 'stepRed to ratio':
            secondValue = Math.round((1 / firstValue) * 1000) / 1000

            return [Math.abs(firstValue), Math.abs(secondValue)]

        case 'ratio to stepRed':
            secondValue = Math.round((1 / firstValue) * 1000) / 1000

            return [Math.abs(secondValue), Math.abs(firstValue)] // Нет ошибки, это сделано для синхронизации значений инпутов

        case 'otn to kgcmsec2':
            secondValue = Math.round(firstValue * ps[0] * 1000) / 1000
            thirdValue = Math.round((secondValue / 10.19) * 1000) / 1000

            return [
                Math.abs(thirdValue),
                Math.abs(secondValue),
                Math.abs(firstValue),
            ] // Нет ошибки, это сделано для синхронизации значений инпутов

        case 'otn to 1/kgcm':
            secondValue = Math.round(firstValue * ps[1] * 1000) / 1000
            thirdValue =
                Math.round((1 / (secondValue * 0.001019) / firstValue) * 1000) /
                1000

            return [
                Math.abs(thirdValue),
                Math.abs(secondValue),
                Math.abs(firstValue),
            ] // Нет ошибки, это сделано для синхронизации значений инпутов

        case 'mm to cm3':
            secondValue =
                Math.round(((Math.PI * firstValue ** 3) / 16000) * 1000) / 1000
            thirdValue =
                Math.round(((secondValue * ps[1]) / 10000) * 1000) / 1000

            return [
                Math.abs(firstValue),
                Math.abs(secondValue),
                Math.abs(thirdValue),
            ]

        case 'cm3 to mm':
            secondValue =
                Math.round(Math.cbrt((firstValue * 16000) / Math.PI) * 10) / 10
            thirdValue =
                Math.round(((firstValue * ps[1]) / 10000) * 1000) / 1000

            return [
                Math.abs(secondValue),
                Math.abs(firstValue),
                Math.abs(thirdValue),
            ] // Нет ошибки, это сделано для синхронизации значений инпутов

        case 'otn to cm3':
            secondValue = Math.round((firstValue / ps[1]) * 10000 * 1000) / 1000
            thirdValue =
                Math.round(Math.cbrt((secondValue * 16000) / Math.PI) * 10) / 10

            return [
                Math.abs(thirdValue),
                Math.abs(secondValue),
                Math.abs(firstValue),
            ]

        case 'RED kgm2 to kgcmsec2':
            secondValue = Math.round(firstValue * 10.19 * 1000) / 1000
            thirdValue = Math.round((secondValue / ps[0]) * ps[2] * 1000) / 1000

            return [
                Math.abs(firstValue),
                Math.abs(secondValue),
                Math.abs(thirdValue),
            ]

        case 'RED kgcmsec2 to kgm2':
            secondValue = Math.round((firstValue / 10.19) * 1000) / 1000
            thirdValue = Math.round((firstValue / ps[0]) * ps[2] * 1000) / 1000

            return [
                Math.abs(secondValue),
                Math.abs(firstValue),
                Math.abs(thirdValue),
            ]

        case 'RED otn to kgcmsec2':
            secondValue =
                Math.round(((firstValue * ps[0]) / ps[2]) * 1000) / 1000
            thirdValue = Math.round((secondValue / 10.19) * 1000) / 1000

            return [
                Math.abs(thirdValue),
                Math.abs(secondValue),
                Math.abs(firstValue),
            ] // Нет ошибки, это сделано для синхронизации значений инпутов

        case 'RED MNmrad to kgcm':
            secondValue =
                Math.round((1 / (firstValue * 0.001019)) * 1000) / 1000
            thirdValue = Math.round((secondValue / ps[1] / ps[2]) * 1000) / 1000

            return [
                Math.abs(firstValue),
                Math.abs(secondValue),
                Math.abs(thirdValue),
            ]

        case 'RED kgcm to MNmrad':
            secondValue =
                Math.round((1 / (firstValue * 0.001019)) * 1000) / 1000
            thirdValue = Math.round((firstValue / ps[1] / ps[2]) * 1000) / 1000

            return [
                Math.abs(secondValue),
                Math.abs(firstValue),
                Math.abs(thirdValue),
            ]

        case 'RED otn to 1/kgcm':
            secondValue = Math.round(firstValue * ps[1] * ps[2] * 1000) / 1000
            thirdValue =
                Math.round((1 / (secondValue * 0.001019)) * 1000) / 1000

            return [
                Math.abs(thirdValue),
                Math.abs(secondValue),
                Math.abs(firstValue),
            ]

        case 'RED mm to cm3':
            secondValue =
                Math.round(((Math.PI * firstValue ** 3) / 16000) * 1000) / 1000
            thirdValue =
                Math.round(
                    ((secondValue * ps[1] * Math.sqrt(ps[2])) / 10000) * 1000
                ) / 1000

            return [
                Math.abs(firstValue),
                Math.abs(secondValue),
                Math.abs(thirdValue),
            ]

        case 'RED cm3 to mm':
            secondValue =
                Math.round(Math.cbrt((firstValue * 16000) / Math.PI) * 10) / 10
            thirdValue =
                Math.round(
                    ((firstValue * ps[1] * Math.sqrt(ps[2])) / 10000) * 1000
                ) / 1000

            return [
                Math.abs(secondValue),
                Math.abs(firstValue),
                Math.abs(thirdValue),
            ] // Нет ошибки, это сделано для синхронизации значений инпутов

        case 'RED otn to cm3':
            secondValue =
                Math.round(
                    (firstValue / ps[1] / Math.sqrt(ps[2])) * 10000 * 1000
                ) / 1000
            thirdValue =
                Math.round(Math.cbrt((secondValue * 16000) / Math.PI) * 10) / 10

            return [
                Math.abs(thirdValue),
                Math.abs(secondValue),
                Math.abs(firstValue),
            ]

        default:
            console.log('Нет метода пересчета!')
            return ps
    }
}

export default Calculate
