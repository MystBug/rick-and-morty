import { Tooltip as MuiTooltip, Link } from "@mui/material";

import { Character } from "../../types/character.types";

export const Tooltip = ({ name, id, image }: Character) => {
  return (
    <MuiTooltip
      key={`${name}-${id}`}
      disableFocusListener
      placement="top"
      title={
        <img
          src={image}
          alt={name}
          style={{
            width: "100px",
            height: "100px",
            margin: "10px 6px 4px 6px",
          }}
        />
      }
    >
      <Link key={id} href={`/character-details/${id}`}>
        {name}
      </Link>
    </MuiTooltip>
  );
};
