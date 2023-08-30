import { AppState } from "../AppState.js";


// import { AppState } from "../AppState.js";
// import { Spell } from "../models/Spell.js";

// @ts-ignore
const pokeapi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 5000
})

// // @ts-ignore
// const dndapi = axios.create({
//   baseURL: 'https://www.dnd5eapi.co/api/',
//   timeout: 5000
// })


class PokeAPIServie {
    async getPokes() {
        const response = await pokeapi.get('pokemon?limit=10&offset=0')
        console.log('WE GOT POKIES!!!!', response.data);
        AppState.pokes = response.data.results

    }
}





// ☑️class DndSpellsService {
//  ☑️ async getSpells() {
//   ☑️  const res = await dndapi.get('spells')
//    ☑️ console.log('GOT SPELLS', res.data);
//   ☑️  AppState.spellList = res.data.results
//   ☑️  // console.log(AppState.spellList)
//   }

//   async getOneSpell(index) {
//     console.log(index);
//     const res = await dndapi.get(`spells/${index}`)
//     console.log('SINGLE SPELL', res.data);
//     // NOTE when classing a single item, you need to pass into the model the level where the 'data' starts.
//     AppState.activeSpell = new Spell(res.data)
//   }

// }


export const pokeAPIService = new PokeAPIServie
// ☑️export const dndSpellsService = new DndSpellsService()