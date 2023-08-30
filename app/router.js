import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { PokeAPIController } from "./controllers/PokeAPIController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: PokeAPIController,
    view: /*html*/`
    <div class="container-fluid">
    <section class="row" >
    <div id="poke-list" class="col-3 bg-grey"></div>
    <div id="active-spell" class="col-6"></div>
    <div class="col-3 bg-grey text-light">
      <div class="text-success" id="poke-count"> </div>
      <div id="my-pokes"></div>
    </div>
    </section>
    </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */