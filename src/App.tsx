import { useState } from 'react';
import { Grid, GridItem, Flex, Show, Box } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { Genre } from './types/Genre.type';
import { Platform } from './types/Platform.type';
import { GameQuery } from './types/GameQuery.type';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5} paddingLeft={2} marginBottom={5}>
          <GenreList query={gameQuery} onSelectGenre={setGameQuery} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector
              query={gameQuery}
              onSelectPlatform={setGameQuery}
            />
          </Box>
          <SortSelector query={gameQuery} onSelectOrder={setGameQuery} />
        </Flex>
        <GameGrid query={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
