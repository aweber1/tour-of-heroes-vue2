const initialState = {
  heroes: [],
  selectedHero: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'HEROES_REQUEST_SUCCEEDED': {
      return { ...state, heroes: action.payload.data };
    }
    case 'HERO_SELECTED': {
      return { ...state, selectedHero: action.payload.data };
    }
    case 'HERO_ADDED': {
      return { ...state, heroes: [...state.heroes, action.payload.data] };
    }
    case 'HERO_DELETED': {
      const heroIndex = state.heroes.findIndex(hero => hero.id === action.payload.data.id);
      if (heroIndex !== -1) {
        return {
          ...state,
          heroes: [...state.heroes.slice(0, heroIndex), ...state.heroes.slice(heroIndex + 1)],
          selectedHero: null,
        };
      }
      return state;
    }
    case 'HERO_UPDATED': {
      const heroIndex = state.heroes.findIndex(hero => hero.id === action.payload.data.id);
      if (heroIndex !== -1) {
        return {
          ...state,
          heroes: [
            ...state.heroes.slice(0, heroIndex),
            action.payload.data,
            ...state.heroes.slice(heroIndex + 1),
          ],
          selectedHero: action.payload.data,
        };
      }
      return state;
    }
    default:
      return state;
  }
}
