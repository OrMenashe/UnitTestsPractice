export const getSum = (numbers: number[], logger: (sum: string) => void): number => {
    let sum = 0
    for (const number of numbers) {
        sum += number
    }

    const loggerStr = sum > 0 ? 'sum is bigger than 0' : 'sum is equal or smaller than 0'
    logger(loggerStr)

    return sum
}


