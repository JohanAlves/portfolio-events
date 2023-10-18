import { AutoComplete } from "antd";
import {
  ArrayFormattedCities,
  ArrayFormattedEventNames,
  ArrayFormattedLocations,
} from "../../backend/dummy-data";

function EventSearchField(props) {
  const allLocations = ArrayFormattedLocations();
  const allCities = ArrayFormattedCities();
  const allEventNames = ArrayFormattedEventNames();
  const searchOptions = [
    { label: "Location", options: allLocations.slice(0, 5) },
    { label: "Cities", options: allCities.slice(0, 5) },
    { label: "Event", options: allEventNames.slice(0, 5) },
  ];
  return (
    <AutoComplete
      className="EventSearchField"
      onChange={(value) => props.setSearch(value)}
      options={searchOptions}
      placeholder={"Search for city, event or location"}
      filterOption={(inputValue, option) => {
        if (option.value) {
          return (
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          );
        }
      }}
    />
  );
}

export default EventSearchField;
