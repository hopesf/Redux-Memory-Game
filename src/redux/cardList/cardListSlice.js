import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initialState = {
  cards: [
    {
      title: '1',
      icon: 'https://img.icons8.com/ios-filled/2x/folder-invoices--v3.png',
      close: true,
      complete: false,
    },
    {
      title: '2',
      icon: 'https://img.icons8.com/ios-filled/2x/document--v1.png',
      close: true,
      complete: false,
    },
    {
      title: '3',
      icon: 'https://img.icons8.com/ios-filled/2x/settings.png',
      close: true,
      complete: false,
    },
    {
      title: '4',
      icon: 'https://img.icons8.com/ios-filled/2x/puzzle.png',
      close: true,
      complete: false,
    },
    {
      title: '5',
      icon: 'https://img.icons8.com/ios-filled/2x/bebo.png',
      close: true,
      complete: false,
    },
    {
      title: '6',
      icon: 'https://img.icons8.com/ios-filled/2x/pinterest--v2.png',
      close: true,
      complete: false,
    },
    {
      title: '7',
      icon: 'https://img.icons8.com/ios-filled/2x/--tinder.png',
      close: true,
      complete: false,
    },
    {
      title: '8',
      icon: 'https://img.icons8.com/ios-filled/2x/instagram-new--v1.png',
      close: true,
      complete: false,
    },
    {
      title: '9',
      icon: 'https://img.icons8.com/ios-filled/2x/linkedin.png',
      close: true,
      complete: false,
    },
    {
      title: '10',
      icon: 'https://img.icons8.com/ios-filled/2x/clock--v2.png',
      close: true,
      complete: false,
    },
    {
      title: '11',
      icon: 'https://img.icons8.com/ios-filled/2x/briefcase.png',
      close: true,
      complete: false,
    },
    {
      title: '12',
      icon: 'https://img.icons8.com/ios-filled/2x/home.png',
      close: true,
      complete: false,
    },
    {
      title: '13',
      icon: 'https://img.icons8.com/ios-filled/2x/key.png',
      close: true,
      complete: false,
    },
    {
      title: '14',
      icon: 'https://img.icons8.com/ios-filled/2x/search--v4.png',
      close: true,
      complete: false,
    },
    {
      title: '15',
      icon: 'https://img.icons8.com/ios-filled/2x/binoculars.png',
      close: true,
      complete: false,
    },
    {
      title: '16',
      icon: 'https://img.icons8.com/ios-filled/2x/unlock--v2.png',
      close: true,
      complete: false,
    },
    {
      title: '17',
      icon: 'https://img.icons8.com/ios-filled/2x/bookmark--v1.png',
      close: true,
      complete: false,
    },
    {
      title: '18',
      icon: 'https://img.icons8.com/ios-filled/2x/trash.png',
      close: true,
      complete: false,
    },
  ],
  opened: [],
  finalizedFrameworks: [],
  score: 150,
};

const cardListSlice = createSlice({
  name: 'cardList',
  initialState,
  reducers: {
    shuffleCards: (state) => {
      let duplicate = [...state.cards, ...state.cards];
      duplicate = duplicate.map((el) => ({ id: nanoid(), ...el }));

      for (var i = duplicate.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = duplicate[i];
        duplicate[i] = duplicate[j];
        duplicate[j] = temp;
      }

      state.finalizedFrameworks = duplicate;
    },
    handleOpen: (state, { payload }) => {
      if (state.opened.length !== 2) {
        state.opened.push(payload.framework);

        state.finalizedFrameworks = state.finalizedFrameworks.map((item) =>
          item.id === payload.framework.id ? (item = { ...item, close: false }) : item
        );
      }
    },
    check: (state) => {
      if (state.opened[0].title == state.opened[1].title && state.opened[0].id !== state.opened[1].id) {
        state.finalizedFrameworks = state.finalizedFrameworks.map((item) =>
          item.title === state.opened[0].title ? { ...item, complete: true } : item
        );
        state.score += 50;
      } else {
        state.finalizedFrameworks = state.finalizedFrameworks.map((item) =>
          item.id == state.opened[0].id || item.id == state.opened[1].id ? { ...item, close: true } : item
        );
        state.score -= 10;
      }

      state.opened = [];
    },
    reset: (state) => {
      state.score = 150;
      state.opened = [];
    },
  },
});

export const { handleOpen, shuffleCards, check, reset } = cardListSlice.actions;
export default cardListSlice.reducer;
