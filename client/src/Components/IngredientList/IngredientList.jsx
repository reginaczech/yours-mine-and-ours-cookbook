import React from "react";

const IngredientList = ({ ingredientList, setIngredientList }) => {
  const handleAdd = () => {
    setIngredientList([
      ...ingredientList,
      { ingName: "", ingAmount: "", ingUnit: "" },
    ]);
  };

  const handleRemove = (index) => {
    const list = [...ingredientList];
    list.splice(index, 1);
    setIngredientList(list);
  };

  const handleIngChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...ingredientList];
    list[index][name] = value;
    setIngredientList(list);
  };

  return (
    <>
      <div className="grid grid-cols-8 auto-rows-min">
        <p className="mb-2 block col-span-full row-start-1 text-sm font-medium leading-6 text-theme-dark-grey">
          Ingredients:
        </p>

        <label
          htmlFor="ingName"
          className="col-start-1 row-start-2 block text-sm font-medium leading-6 text-theme-dark-grey"
        >
          Name:
        </label>
        <label
          htmlFor="ingAmount"
          className="col-start-4 row-start-2 block text-sm font-medium leading-6 text-theme-dark-grey"
        >
          Amount:
        </label>
        <label
          htmlFor="ingUnit"
          className="col-start-6 row-start-2 block text-sm font-medium leading-6 text-theme-dark-grey"
        >
          Unit:
        </label>

        <ol className="col-span-full row-start-3 ">
          {ingredientList.map((ingredient, index) => (
            <li
              key={index}
              className="grid grid-cols-8 grid-rows-1 gap-x-2 content-center"
            >
              <input
                type="text"
                name="ingName"
                id="ingName"
                value={ingredient.ingName}
                onChange={(event) => handleIngChange(event, index)}
                required
                className="col-start-1 col-span-3  mt-2 block w-full rounded-md border-0 py-1.5 text-theme-dark-grey shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-theme-dark-yellow sm:text-sm sm:leading-6"
              />
              <input
                type="text"
                name="ingAmount"
                id="ingAmount"
                value={ingredient.ingAmount}
                onChange={(event) => handleIngChange(event, index)}
                required
                className="col-start-4 col-span-2  mt-2 block w-full rounded-md border-0 py-1.5 text-theme-dark-grey shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-theme-dark-yellow sm:text-sm sm:leading-6"
              />
              <input
                type="text"
                name="ingUnit"
                id="ingUnit"
                value={ingredient.ingUnit}
                onChange={(event) => handleIngChange(event, index)}
                required
                className="col-start-6 col-span-2 mt-2 block w-full rounded-md border-0 py-1.5 text-theme-dark-grey shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-theme-dark-yellow sm:text-sm sm:leading-6"
              />
              <div className="content-center justify-center">
                {ingredientList.length > 1 && (
                  <button
                    type="button"
                    className="content-center"
                    onClick={() => handleRemove(index)}
                  >
                    ✖️
                  </button>
                )}
              </div>

              {ingredientList.length - 1 === index && (
                <button
                  type="button"
                  className="mt-4 text-3xl pb-2 font-bold w-10 h-10 text-theme-offwhite bg-theme-dark-yellow rounded-full border-2 border-theme-light-grey hover:bg-theme-light-grey"
                  onClick={handleAdd}
                >
                  ＋
                </button>
              )}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default IngredientList;
