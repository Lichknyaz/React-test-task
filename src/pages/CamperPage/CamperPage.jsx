import { Box, Button, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCampersById } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCampersById,
  selectIsLoading,
} from "../../redux/campers/campersSlice";
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import BookingForm from "../../components/BookingForm/BookingForm";
import Features from "../../components/Features/Features";
import Reviews from "../../components/Reviews/Reviews";

function CamperPage() {
  const { id } = useParams();
  const [activeButton, setActiveButton] = useState("features");
  const camperDetails = useSelector(selectCampersById);
  const isEmpty = Object.keys(camperDetails).length === 0;
  const reviews = camperDetails?.reviews || [];
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampersById(id));
  }, [dispatch, id]);

  const activeButtonToggle = (event, buttonName) => {
    if (activeButton === buttonName) return;
    setActiveButton(buttonName);
  };

  const handleFeaturesClick = (event) => {
    activeButtonToggle(event, "features");
  };

  const handleReviewsClick = (event) => {
    activeButtonToggle(event, "reviews");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        padding: "48px 64px",
      }}
    >
      {!isLoading && !isEmpty && (
        <>
          <CamperDetails camper={camperDetails} />
          <Box>
            <Button
              className={activeButton === "features" ? "active" : ""}
              sx={{
                bgcolor: "transparent",
                color: "primary.main",
                minHeight: "auto",
                minWidth: "auto",
                padding: "0 20px",
                "&:hover": {
                  backgroundColor: "transparent",
                },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-26px",
                  left: 0,
                  width: "100%",
                  height: "5px",
                  backgroundColor: "button.main",
                  transform: "scaleX(0)",
                  transformOrigin: "bottom right",
                  transition: "transform 0.3s ease-out",
                },
                "&.active:after": {
                  transform: "scaleX(1)",
                  transformOrigin: "bottom right",
                },
              }}
              onClick={handleFeaturesClick}
            >
              <Typography variant="h3">Features</Typography>
            </Button>
            <Button
              className={activeButton === "reviews" ? "active" : ""}
              variant="h3"
              sx={{
                bgcolor: "transparent",
                color: "primary.main",
                minHeight: "auto",
                minWidth: "auto",
                padding: "0 20px",
                "&:hover": {
                  backgroundColor: "transparent",
                },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-26px",
                  left: 0,
                  width: "100%",
                  height: "5px",
                  backgroundColor: "button.main",
                  transform: "scaleX(0)",
                  transformOrigin: "bottom left",
                  transition: "transform 0.3s ease-out",
                },
                "&.active:after": {
                  transform: "scaleX(1)",
                  transformOrigin: "bottom left",
                },
              }}
              onClick={handleReviewsClick}
            >
              <Typography variant="h3">Reviews</Typography>
            </Button>
          </Box>
          <Divider
            sx={{
              borderColor: "lightGray.main",
              width: "100%",
              mb: "44px",
              mt: 3,
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: 5,
            }}
          >
            <Box
              sx={{
                width: "631px",
                height: "588px",
                padding: "44px 52px",
                bgcolor: `${
                  activeButton === "features" ? "input.main" : "transparent"
                }`,
                borderRadius: "10px",
                overflowY: "auto",
              }}
            >
              {activeButton === "features" && (
                <Features camperDetails={camperDetails} />
              )}
              {activeButton === "reviews" && <Reviews reviews={reviews} />}
            </Box>
            <BookingForm />
          </Box>
        </>
      )}
    </Box>
  );
}

export default CamperPage;
