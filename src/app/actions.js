import fetch from 'isomorphic-fetch';

const fetchHeroes = () => fetch('/assets/data/heroes.json').then(response => response.json());

export const getHeroes = () => (dispatch) => {
  fetchHeroes()
    .then(json => dispatch({
      type: 'HEROES_REQUEST_SUCCEEDED',
      payload: {
        data: json,
      },
    }));
};

export const getDashboardHeroes = () => (dispatch) => {
  fetchHeroes()
    .then(json => dispatch({
      type: 'DASHBOARD_HEROES_REQUEST_SUCCEEDED',
      payload: {
        data: json.slice(1, 5),
      },
    }));
};

export const selectHero = hero => ({
  type: 'HERO_SELECTED',
  payload: {
    data: hero,
  },
});

export const addHero = heroName => (dispatch, getState) => {
  // warning: don't generate an id on the client, let your database or api generate an id.
  // the following two lines of code are for demo purposes only.
  const heros = getState().app.heroes;
  const newId = heros.map(hero => hero.id).reduce((max, cur) => Math.max(max, cur)) + 1;

  dispatch({
    type: 'HERO_ADDED',
    payload: {
      data: {
        id: newId,
        name: heroName,
      },
    },
  });
};

export const deleteHero = hero => ({
  type: 'HERO_DELETED',
  payload: {
    data: hero,
  },
});

export const updateHero = hero => ({
  type: 'HERO_UPDATED',
  payload: {
    data: hero,
  },
});
