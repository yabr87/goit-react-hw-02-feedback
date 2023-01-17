import Feedback from './Feedback';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        color: '#010101',
      }}
    >
      <Feedback />
    </div>
  );
};
