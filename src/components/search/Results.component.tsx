import { useContext } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { red } from "@mui/material/colors";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { SearchContext } from "../../context/search.context";

export const Results = () => {
  const searchResults = useContext(SearchContext);

  console.log("searchResults", searchResults);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} padding={2} justifyContent={"center"}>
        {searchResults &&
          searchResults.map((row) => (
            <Grid item>
              <Card key={row.name} sx={{ maxWidth: 190 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="card">
                      {row.name[0]}
                    </Avatar>
                  }
                  title={row.name}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={row.image}
                  alt={row.name}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Dead or alive: {row.status === "unknown" ? "-" : row.status}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    aria-label="view"
                    startIcon={<VisibilityIcon />}
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};
