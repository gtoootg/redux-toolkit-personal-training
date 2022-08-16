// import countries from "./coutries.json";

const countries = {
  countries: [{ name: "japan" }, { name: "germany" }, { name: "china" }],
};

export default class Api {
  static fetchData = (endpoint) => {
    let data = null;

    switch (endpoint) {
      case "/countries":
        data = countries;
      default:
        console.log("endpoint not configured " + endpoint);
    }

    return data;
  };
}
