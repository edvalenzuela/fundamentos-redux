import { createStore } from "redux"
import rootReducer from './reducers'


// Reducer
/* es una funcion pura que nos regresa el estado actual */

/* funcion pura que siempre regresa el mismo resultado 
    que con los parametros de entrada, no se puede retornar valores random, no 
    puede tener efectos secundarios
*/



/* store.subscribe(() => {
  console.log(store.getState());
}); */

//acciones
// store.dispatch({
//     type: INCREMENT
// })

/* store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment()); */

/*setTimeout(() => {
   store.dispatch({
    type: DECREMENT,
  });
}, 2000); */

//store.getState()
//store.dispatch()
//store.subscribe(func)

// Store
// Almacenamiento de nuestro estado
const store = createStore(rootReducer);

export default store