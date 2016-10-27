export const login = {
  default: '',
  persist: true,
  actions: {
    LOGIN_ON: {
      inputs: ['text'],
      reducer: (state, action) => {
        return action.payload.text;
      },
    },
    LOGIN_OFF: {
      input: [],
      reducer: (state, action) => {
        return '';
      },
    },
  },
};

// this.props.CLEAR_REDUX_STORE1({ a: 1, b: 2 });

export const todos = {
  default: [],
  persist: true,
  actions: {
    ADD_TODO: {
      input: ['text'],
      reducer: (state, action) => {
        return [
          ...state,
          {
            text: action.payload.text,
            completed: false,
          },
        ];
      },
    },
    COMPLETE_TODO: {
      input: ['index'],
      reducer: (state, action) => {
        return [
          ...state.slice(0, action.payload.index),
          Object.assign({}, state[action.payload.index], {
            completed: true,
          }),
          ...state.slice(action.payload.index + 1),
        ];
      },
    },

  },
};
export const visibilityFilter = {
  default: 'SHOW_ALL',
  persist: true,
  actions: {
    SET_VISIBILITY_FILTER: {
      input: ['filter'],
      reducer: (state, { payload }) => {
        return payload.filter;
      },
    },
  },
};
