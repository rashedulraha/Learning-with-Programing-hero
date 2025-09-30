import UseInputField from "../../Hooks/UseInputField";

const HookForm = () => {
  const [name, nameOnChange] = UseInputField("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input defaultValue={name} type="text" onChange={nameOnChange} />

        <input type="submit" value={"submit"} />
      </form>
    </div>
  );
};

export default HookForm;
