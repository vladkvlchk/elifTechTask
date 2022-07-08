function Shops({ active, setActive, names}) {
  return (
    <div className="shops">
      <h2>Shops:</h2>
      {names.map((name) => {
        return (
          <div
            key={name}
            className={name === active ? 'shopBox active' : 'shopBox'}
            onClick={() => setActive(name)}>
            {name}
          </div>
        );
      })}
    </div>
  );
}

export default Shops;
