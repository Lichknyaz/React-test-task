import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectError,
  selectIsLoading,
  selectIsLoadingMore,
  selectTotal,
} from "../../redux/campers/campersSlice";
import { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import CamperList from "../../components/CamperList/CamperList";
import { fetchCampers, fetchMoreCampers } from "../../redux/campers/operations";
import CamperFilters from "../../components/CamperFilters/CamperFilters";
import CamperTypeFilter from "../../components/CamperTypeFilter/CamperTypeFilter";
import { selectFilters } from "../../redux/filter/filtersSlice";
import LocationFilter from "../../components/LocationFilter/LocationFilter";
import { fetchLocations } from "../../redux/locations/operations";

function CatalogPage() {
  const isLoading = useSelector(selectIsLoading);
  const isLoadingMore = useSelector(selectIsLoadingMore);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);
  const campers = useSelector(selectCampers);
  const totalPages = useSelector(selectTotal);

  const [page, setPage] = useState(1);
  const [isLoadingWithFilters, setIsLoadingWithFilters] = useState(false);

  const dispatch = useDispatch();

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      dispatch(fetchCampers({ page: 1, limit: 4, filters }));
      dispatch(fetchLocations());
      isFirstRender.current = false;
    }
  }, [dispatch, filters]);

  const searchWithFilters = () => {
    setPage(1);
    dispatch(fetchCampers({ page: 1, limit: 4, filters }));
    setIsLoadingWithFilters(true);
  };

  const searchMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    dispatch(fetchMoreCampers({ page: nextPage, limit: 4, filters }));
  };

  return isLoading && !error && !isLoadingWithFilters ? (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        gap: 8,
        justifyContent: "flex-start",
        position: "relative",
        padding: "48px 64px",
      }}
    >
      <Stack sx={{ maxWidth: "360px" }}>
        <LocationFilter />
        <CamperFilters />
        <CamperTypeFilter />
        <Box>
          <Button sx={{ flexGrow: 0 }} onClick={() => searchWithFilters()}>
            Search
          </Button>
        </Box>
      </Stack>

      {!isLoading && !error && campers.length > 0 && (
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
            paddingBottom: "20px",
          }}
        >
          <CamperList />
          {page < totalPages / 4 && (
            <Button
              loading={isLoadingMore}
              onClick={() => searchMore()}
              sx={{
                minWidth: "145px",
                color: "primary.main",
                backgroundColor: "transparent",
                border: "1px solid #DADDE1",
                "&:hover": {
                  backgroundColor: "transparent",
                  borderColor: "#D84343",
                },
              }}
            >
              Load More
            </Button>
          )}
        </Box>
      )}

      {isLoading && !error && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        >
          <CircularProgress />
        </Box>
      )}

      {!isLoading && error && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        >
          <Typography variant="h3" sx={{ color: "primary.main" }}>
            Nothing found, try other filters
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default CatalogPage;
