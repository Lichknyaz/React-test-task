import { Box, Rating, Stack, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import StarIcon from "@mui/icons-material/Star";

function Reviews({ reviews }) {
  return (
    <Stack sx={{ gap: "44px" }}>
      {reviews.map((review) => {
        return (
          <Stack key={nanoid()} sx={{ gap: 2 }}>
            <Box
              sx={{
                display: "flex",
                gap: "16px",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "60px",
                  height: "60px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "60px",
                  backgroundColor: "badges.main",
                }}
              >
                <Typography variant="h2" sx={{ color: "button.main" }}>
                  {review.reviewer_name[0]}
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", rowGap: "4px" }}
              >
                <Typography variant="body2" sx={{ color: "primary.main" }}>
                  {review.reviewer_name}
                </Typography>
                <Box>
                  <Rating
                    name="review-rating"
                    value={review.reviewer_rating}
                    readOnly
                    size="small"
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                </Box>
              </Box>
            </Box>
            <Typography variant="body1" sx={{ color: "text.main" }}>
              {review.comment}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
}

export default Reviews;
