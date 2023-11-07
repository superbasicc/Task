const { resFn } = require('../../../utilities/response')

const task1Part1 = async (req, res, next) => {
    try {
        let result = false 
        const data = "katak" // change the value

        let finalString = ""
        const stringArr = Array.from(data)
        const resultArr = []

        for (let index = 0; index < stringArr.length; index++) {
            const el = stringArr[index]
            resultArr.unshift(el)
        }

        finalString = resultArr.join('')

        if (finalString === data) {
            result = true
        }

        res.send(resFn(200, "Successfully.", result))
    } catch (error) {
        console.debug("ERROR =>", error)
        res.send(resFn(500, error.message))
    }
}

const task1Part2 = async (req, res, next) => {
    try {
        let result = false
        const data = "katak" //change the value

        let totalTrue = 0

        for (let index = 0; index < data.length; index++) {
            const el = data[index]
            const reverseIndex = (data.length - 1) - index
            const reverseEl = data[reverseIndex]

            if (el === reverseEl) {
                totalTrue += 1
            }
        }

        if (totalTrue === data.length) {
            result = true
        }

        res.send(resFn(200, "Successfully.", result))
    } catch (error) {
        console.debug("ERROR =>", error)
        res.send(resFn(500, error.message))
    }
}

const task2 = async (req, res, next) => {
    try {
        let result = 0

        // change the value
        const data = [
            [11, 2, 4],
            [4, 5, 6],
            [10, 8, 12]
        ]

        let rightDiagTotal = 0
        let leftDiagTotal = 0

        for (let index = 0; index < data.length; index++) {
            const el = data[index]
            const leftIndex = (data.length - 1) - index
            
            rightDiagTotal +=  el[index]
            leftDiagTotal += el[leftIndex]
        }

        result = rightDiagTotal + leftDiagTotal

        res.send(resFn(200, "Successfully.", result))
    } catch (error) {
        console.debug("ERROR =>", error)
        res.send(resFn(500, error.message))
    }
}

module.exports = {
    task1Part1, 
    task1Part2, 
    task2
}