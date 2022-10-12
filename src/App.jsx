import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { check, handleOpen, reset, shuffleCards } from './redux/cardList/cardListSlice';

const App = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cardList.finalizedFrameworks);
  const opened = useSelector((state) => state.cardList.opened);
  const score = useSelector((state) => state.cardList.score);

  const handleClick = () => {
    dispatch(reset());
    dispatch(shuffleCards());
  };

  useEffect(() => {
    dispatch(shuffleCards());
  }, [dispatch]);

  useEffect(() => {
    if (opened.length === 2) {
      setTimeout(() => dispatch(check()), 1000);
    }
  }, [dispatch, opened]);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex py-5">
        <h2>Score: {score}</h2>
        <button onClick={() => handleClick()}>↻</button>
      </div>

      <div className="grid grid-cols-6 gap-10">
        {cards.map((card, i) => (
          <div
            onClick={() => dispatch(handleOpen({ framework: card }))}
            key={i}
            className={
              'border shadow text-center flex items-center cursor-pointer text-7xl p-12 ' +
              (card.complete && ' opacity-20')
            }
          >
            {card.close ? <span className="w-12">?</span> : <img src={card.icon} className="w-12" />}
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
