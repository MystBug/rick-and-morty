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
} from "@mui/material";
import { red } from "@mui/material/colors";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { Character } from "../../types/character.types";

export const CharacterCard = (character: Character) => {
  return (
    <Grid item key={character.id}>
      <Card key={character.name} sx={{ maxWidth: 190 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="card">
              {character.name[0]}
            </Avatar>
          }
          title={character.name}
        />
        <CardMedia
          component="img"
          height="194"
          image={character.image}
          alt={character.name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Dead or alive:{" "}
            {character.status === "unknown" ? "-" : character.status}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            aria-label="view"
            startIcon={<VisibilityIcon />}
            href={`/character-details/${character.id}`}
          >
            View
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
