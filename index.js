var createStore = require('redux').createStore;

const initialScore = {
  homeScore: 0,
  awayScore: 0
};

function updateScore(state = initialScore, action) {
  switch (action.type) {
    case 'HOME_TOUCHDOWN':
      return Object.assign({}, state, {
        homeScore: state.homeScore + 6
      });
    case 'AWAY_TOUCHDOWN':
      return Object.assign({}, state, {
        awayScore: state.awayScore + 6
      });
    case 'HOME_EXTRA_POINT':
      return Object.assign({}, state, {
        homeScore: state.homeScore + 1
      });
    case 'AWAY_EXTRA_POINT':
      return Object.assign({}, state, {
        awayScore: state.awayScore + 1
      });
    case 'HOME_FIELD_GOAL':
      return Object.assign({}, state, {
        homeScore: state.homeScore + 3
      });
    case 'AWAY_FIELD_GOAL':
      return Object.assign({}, state, {
        awayScore: state.awayScore + 3
      });
    case 'HOME_CUSTOM_SCORE':
      return Object.assign({}, state, {
        homeScore: state.homeScore + action.payload
      });
    case 'AWAY_CUSTOM_SCORE':
      return Object.assign({}, state, {
        awayScore: state.awayScore + action.payload
      });
    default:
      return state;
  }
}

const initializeGame = () => {
  let store = createStore(updateScore);
  store.subscribe(() => {});
  return store;
};

const playGame = (store) => {
  console.log("Initial State")
  console.log(store.getState())
  console.log("Home Team Touchdown")
  store.dispatch({ type: 'HOME_TOUCHDOWN' })
  console.log(store.getState())
  console.log("[Extra Point] The kick is good!")
  store.dispatch({ type: 'HOME_EXTRA_POINT' })
  console.log(store.getState())
  console.log("Away Team Field Goal")
  store.dispatch({ type: 'AWAY_FIELD_GOAL' })
  console.log(store.getState())
  console.log("Fast forward...")
  console.log("Final Score")
  store.dispatch({ type: 'HOME_CUSTOM_SCORE', payload: 21 })
  store.dispatch({ type: 'AWAY_CUSTOM_SCORE', payload: 10 })
  console.log(store.getState())
};

const store = initializeGame();
playGame(store);
