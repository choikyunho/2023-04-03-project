function Date(props) {
    return (
      <li className="inline-block bg-white rounded-lg shadow-md">
        <div className={`${props.day ==="SUN"?"bg-red-400":"bg-blue-400"} rounded-t-lg px-2 py-1 text-xl text-white`}>
          {props.date}
        </div>
        <ul className="p-2 text-lg">
          {props.todos.map((v, i) => {
            return <li>{v}</li>;
          })}
        </ul>
      </li>
    );
  }
  
  export default Date;