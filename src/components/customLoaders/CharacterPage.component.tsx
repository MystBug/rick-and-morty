import { Grid, Skeleton } from "@mui/material";

export const CharacterPageLoader = () => {
  return (
    <Grid container>
      <div
        style={{
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <Skeleton
          style={{ display: "block" }}
          variant="circular"
          width={300}
          height={300}
        />
        <div>
          <Skeleton
            variant="rounded"
            width={300}
            height={40}
            style={{ marginBottom: "0.5rem" }}
          />
          <Skeleton
            variant="rounded"
            width={300}
            height={40}
            style={{ marginBottom: "0.5rem" }}
          />
          <Skeleton
            variant="rounded"
            width={300}
            height={40}
            style={{ marginBottom: "0.5rem" }}
          />
          <Skeleton
            variant="rounded"
            width={300}
            height={40}
            style={{ marginBottom: "0.5rem" }}
          />
          <Skeleton
            variant="rounded"
            width={300}
            height={40}
            style={{ marginBottom: "0.5rem" }}
          />
          <Skeleton
            variant="rounded"
            width={300}
            height={40}
            style={{ marginBottom: "0.5rem" }}
          />
        </div>
      </div>
      <div style={{ marginTop: "2rem", width: "100%" }}>
        <Skeleton
          variant="rounded"
          style={{ width: "100%" }}
          width={0}
          height={40}
        />
        <Skeleton
          variant="rectangular"
          style={{ width: "100%", marginTop: "1rem" }}
          width={0}
          height={250}
        />
      </div>
    </Grid>
  );
};
