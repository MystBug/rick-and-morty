import { Skeleton } from "@mui/material";

export const ResultsPageLoader = () => {
  return (
    <div>
      <Skeleton
        style={{ marginBottom: "0.5rem" }}
        variant="rounded"
        width={150}
        height={20}
      />
      <Skeleton
        style={{ marginBottom: "2rem" }}
        variant="rounded"
        width={200}
        height={20}
      />
      <div
        style={{ display: "flex", justifyContent: "center", columnGap: "2" }}
      >
        <Skeleton
          variant="rounded"
          width={300}
          height={40}
          style={{ marginBottom: "2rem" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <Skeleton
          variant="rounded"
          width={200}
          height={350}
          style={{ marginBottom: "0.5rem" }}
        />
        <Skeleton
          variant="rounded"
          width={200}
          height={350}
          style={{ marginBottom: "0.5rem" }}
        />
        <Skeleton
          variant="rounded"
          width={200}
          height={350}
          style={{ marginBottom: "0.5rem" }}
        />
        <Skeleton
          variant="rounded"
          width={200}
          height={350}
          style={{ marginBottom: "0.5rem" }}
        />
        <Skeleton
          variant="rounded"
          width={200}
          height={350}
          style={{ marginBottom: "0.5rem" }}
        />
        <Skeleton
          variant="rounded"
          width={200}
          height={350}
          style={{ marginBottom: "0.5rem" }}
        />
      </div>
    </div>
  );
};
