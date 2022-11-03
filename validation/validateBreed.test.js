import {describe, test, expect, jest} from "@jest/globals";

import { validateBreed, isBreedValidated } from "./validateBreed.js";

//NOTE unsure if Jest should be used to test fetch 
//issue with .env import it appears as API key not working 


describe('check that validateBreed validates breeds correctly', 
  ()=> {
    const response = {}
    response.json = jest.fn(()=> [])
    
    const mockFetch = ()=> jest.fn(() => response);
    test(`non valid breed`,
      async () => {
        expect(await validateBreed(`dog`, `gsdgdh`, mockFetch())).toBe(false)
      }
    )
    // console.log(`2nd test`, Date())
    // test(`valid breed`,
    //   async () => {
    //     expect(await validateBreed(`dog`, `shih tzu`)).toBe(true)
    //}
  
  }
)






describe('check isValidated correctly validates a series of arrays and objects', 
  ()=> {
    console.log(`1st test`, Date())
    test(`integer`,
      async () => {
        expect(isBreedValidated(1)).toBe(false)
      }
    )
    console.log(`2nd test`, Date())
    test(`object`,
      async () => {
        expect(isBreedValidated({foo: `bar`})).toBe(false)
      }
    )
    console.log(`3rd test`, Date())
    test(`string`,
      async () => {
        expect(isBreedValidated(`foo`)).toBe(false)
      }
    )
    console.log(`4th test`, Date())
    test(`empty array`,
      async () => {
        expect(isBreedValidated([])).toBe(false)
      }
    )
    console.log(`5th test`, Date())
    test(`1 length array`,
      async () => {
        expect(isBreedValidated([1])).toBe(true)
      }
    )
  }
)

