import { useSelector } from "react-redux";
import { Box, Stack } from "@mui/material";
import CamperCard from "../CamperCard/CamperCard";
import { selectCampers } from "../../redux/campers/campersSlice";

const CamperList = () => {
  const campers = useSelector(selectCampers);

  return (
    <Stack spacing={4} width="888px">
      {campers.map((camper) => (
        <Box key={camper.id}>
          <CamperCard camper={camper} />
        </Box>
      ))}
    </Stack>
  );
};

export default CamperList;
