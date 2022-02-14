import {getSum} from '../Calculator'

//function name
describe('get sum', () => {

    //entry point
    describe('empty numbers array', () =>{

        //exit point
        it('returns the default value', () => {
            //arrange
            const emptyNumbersArray: number[] = []
            const expectedDefaultValue = 0

            //act
            const result = getSum(emptyNumbersArray, () => {})

            //assert
            expect(result).toEqual(expectedDefaultValue)
        })

    })
})
