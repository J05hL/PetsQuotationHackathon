import fetch from 'node-fetch'
import * as dotenv from 'dotenv' 
dotenv.config({path: '../.env'})


export const validateBreed = async (species, breed, _fetch=fetch) => {

  const response = await _fetch(`https://api.api-ninjas.com/v1/${species}s?name=${breed}`,
    {
      method: 'GET',
      headers: { 'X-Api-Key': process.env.API_KEY_NINJA},
      contentType: 'application/json'
    }
  );

  const data = await response.json();

  // console.log(`validateBreed data >>`, data)

  // console.log(`validateBreed return value >>`, isBreedValidated(data))
    
  return isBreedValidated(data)

}

export const isBreedValidated = (data)=> Array.isArray(data) && data.length > 0 ? true : false

// console.log(await validateBreed(`dog`,`spaniel`))