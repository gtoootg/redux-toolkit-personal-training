import { useEffect, useState } from "react";
import {
  historicalPersonsApiSlice,
  useGetHistoricalPersonsQuery,
  usePostNewHistoricalPersonMutation,
} from "../redux/historicalPersonsApi.slice";

const HistoricalPersonsByApiSlice = () => {
  const {
    data: historicalPersons,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetHistoricalPersonsQuery();

  const [createCallback, createResult] = usePostNewHistoricalPersonMutation();

  const [newHistoricalPerson, setNewHistoricalPerson] = useState({
    name: undefined,
    note: undefined,
    age: undefined,
    registerDate: "1564-04-26T20:21:00",
  });

  const newHistoricalPersonProp = (prop, value) => {
    setNewHistoricalPerson({
      ...newHistoricalPerson,
      [prop]: prop === "age" ? parseInt(value) : value,
    });
  };

  useEffect(() => console.log(newHistoricalPerson), [newHistoricalPerson]);

  console.log(historicalPersons);

  const headProps = ["name", "note", "age", "registerDate"];

  return (
    <>
      <button onClick={() => createCallback(newHistoricalPerson)}>
        register New Person
      </button>
      {historicalPersons ? (
        <table border="1">
          <tr>
            {headProps.map((headProp) => (
              <th>{headProp}</th>
            ))}
          </tr>
          <tr>
            {headProps.map((headProp) => {
              if (headProp === "registerDate") {
                return <td>currentTime</td>;
              } else {
                return (
                  <td>
                    <input
                      onChange={(e) => {
                        newHistoricalPersonProp(headProp, e.target.value);
                      }}
                    ></input>
                  </td>
                );
              }
            })}
          </tr>
          {historicalPersons.data.map((historicalPersons) => (
            <tr key={historicalPersons.name}>
              <td>{historicalPersons.name}</td>
              <td>{historicalPersons.note}</td>
              <td>{historicalPersons.age}</td>
              <td>{historicalPersons.registerDate}</td>
            </tr>
          ))}
        </table>
      ) : (
        <div>is loading</div>
      )}

      {/* {countries.name.map((country) => {
        <div key={country.name}>{country.name}</div>;
      })} */}
    </>
  );
};

export default HistoricalPersonsByApiSlice;
