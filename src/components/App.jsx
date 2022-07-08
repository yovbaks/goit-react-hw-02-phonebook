import Container from "./Container/Container";
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        margin: "5px",
      }}
    >
      <Container/>
    </div>
  );
};
