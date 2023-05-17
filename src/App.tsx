import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectGenre, setSelectGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" `,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={"20px"}>
          <GenresList
            onSelectGenre={(genre) => setSelectGenre(genre)}
            selectedGenre={selectGenre}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid selectedGenre={selectGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
