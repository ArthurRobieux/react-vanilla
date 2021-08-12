const Component1 = () => {
  return React.createElement(
    "div",
    {},
    "Je suis Component1. Composant React JS, instancié dans #app."
  );
};

ReactDOM.render(
  React.createElement(Component1),
  document.querySelector("#app")
);
