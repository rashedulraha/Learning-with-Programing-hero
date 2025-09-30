const SimpleForm = () => {
  const handleClickTo = (e) => {
    e.preventDefault();
    console.log(e.target.text.value);
  };

  return (
    <div>
      <h2 className="text-6xl font-bold  mb-4">Explore React form</h2>

      <form onSubmit={handleClickTo}>
        <input
          className="border p-3"
          type="text"
          name="text"
          placeholder="Enter your name"
        />{" "}
        <br />
        <input
          className="border p-3"
          type="text"
          name="email"
          placeholder="Enter your name"
        />
        <br />
        <button className="btn ">submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
