import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLocation } from "../../redux/locations/locationsSlice";
import { selectFilters, setLocation } from "../../redux/filter/filtersSlice";
import { Typography } from "@mui/material";
import MapIcon from "../../assets/ico-map.svg?react";
import { selectError } from "../../redux/campers/campersSlice";

function LocationFilter() {
  const filteredLocation = useSelector(selectFilters).location;
  const [locationToDisplay, setLocationToDisplay] = useState(
    filteredLocation || ""
  );
  const locations = useSelector(selectLocation);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const settingFilterLocation = (value) => dispatch(setLocation(value));

  const handleChange = (event) => {
    setLocationToDisplay(event.target.value);
    settingFilterLocation(event.target.value);
  };

  return (
    locations.length > 0 &&
    !error && (
      <Box sx={{ minWidth: "120px", width: "100%", mb: "40px" }}>
        <Typography variant="body1" color="secondary.main" sx={{ mb: 0.5 }}>
          Location
        </Typography>
        <FormControl fullWidth>
          <Select
            displayEmpty
            value={locationToDisplay}
            onChange={handleChange}
          >
            <MenuItem value="">
              <Box
                component={MapIcon}
                sx={{ width: 20, height: 20, color: "secondary.main" }}
              />
              <Typography variant="body1" color="secondary.main">
                City
              </Typography>
            </MenuItem>
            {locations.map((location, index) => {
              return (
                <MenuItem key={index} value={location}>
                  <Box
                    component={MapIcon}
                    sx={{ width: 20, height: 20, color: "primary.main" }}
                  />
                  {location}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    )
  );
}

export default LocationFilter;
