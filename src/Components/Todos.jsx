const Todos = ({ data }) => {
  return (
    <div className="text-center">
      <ul className="flex flex-col gap-2">
        {data.map((data) => (
          <li
            className="rounded-full shadow-2xl bg-white m-auto p-4 w-full break-words"
            key={data.id}
          >
            {data.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
