const FormAction = () => {
  const handleFormAction = (formAction) => {
    console.log(formAction.get("name"));
    console.log(formAction.get("email"));
  };
  return (
    <>
      <div>
        <form action={handleFormAction}>
          <div className="space-y-5 mt-5">
            <div>
              <input
                className="border p-3 rounded-md"
                type="text"
                placeholder="Name"
                name="name"
              />
            </div>

            <div>
              <input
                className="border p-3 rounded-md"
                type="email"
                placeholder="Email"
                name="email"
              />
            </div>
            <div>
              <input
                className="border p-3 rounded-md"
                type="submit"
                value={"Submit"}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormAction;
