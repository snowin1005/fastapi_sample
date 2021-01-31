import { createStore } from "redux";

const reducer = (state = 0, action) => {
    switch (action.type) {
        case "INC":
            return state + action.payload;
        case "DEC":
            return state - action.payload;
    }
    return state;
    // console.log("reducer has been called.");
}

const store = createStore(reducer, 1);

store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch({ type: "INC", payload: 1 });
store.dispatch({ type: "INC", payload: 2 });
store.dispatch({ type: "INC", payload: 22 });
store.dispatch({ type: "INC", payload: 222 });
store.dispatch({ type: "DEC", payload: 1000 });
