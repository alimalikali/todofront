import React from "react";
import { useGetAllTodosQuery } from "../store";

const Count = () => {
  const { data, isLoading } = useGetAllTodosQuery();
  const len = data ? data.length : 0;

  return (
    <>
      {isLoading ? (
        "loading..."
      ) : (
        <>
          <main className="">
            <div className="bg-[#13ab85] rounded-xl text-white flex items-center w-fit px-4 py-3">
              <div className="mr-4 text-lg font-semibold ">Number of Todos</div>
              <div className="bg-gray-200 text-gray-800 rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold">
                {len}
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Count;
