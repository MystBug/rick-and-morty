import { Navigation } from "./components/navigation/Navigation.component";
import { Search } from "./components/search/Search.component";

type Rootprops = {
  children?: React.ReactNode[] | React.ReactNode;
};

export const Layout = ({ children }: Rootprops) => {
  return (
    <div style={{ padding: "1rem 2rem" }}>
      <Navigation />
      <Search />
      {children}
    </div>
  );
};
