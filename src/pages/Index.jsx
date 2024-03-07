import { Box, Grid, GridItem, Center, Text } from "@chakra-ui/react";
import { FaChessPawn, FaChessRook, FaChessKnight, FaChessBishop, FaChessQueen, FaChessKing } from "react-icons/fa";

const Index = () => {
  // Chessboard setup
  const boardSize = 8;
  const initialBoard = () => {
    const squares = [];
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        const isDark = (i + j) % 2 !== 0;
        squares.push({ row: i, col: j, isDark });
      }
    }
    return squares;
  };

  // Render the chessboard
  return (
    <Center height="100vh">
      <Grid templateColumns={`repeat(${boardSize}, 1fr)`} gap={0} width="600px" height="600px">
        {initialBoard().map(({ row, col, isDark }, index) => (
          <GridItem key={index} bg={isDark ? "gray.700" : "gray.300"} display="flex" alignItems="center" justifyContent="center">
            {row === 1 && <FaChessPawn color={isDark ? "white" : "black"} />}
            {row === 6 && <FaChessPawn color={isDark ? "black" : "white"} />}
            {row === 0 && col === 0 && <FaChessRook color={isDark ? "white" : "black"} />}
            {row === 0 && col === 7 && <FaChessRook color={isDark ? "white" : "black"} />}
            {row === 7 && col === 0 && <FaChessRook color={isDark ? "black" : "white"} />}
            {row === 7 && col === 7 && <FaChessRook color={isDark ? "black" : "white"} />}
            {row === 0 && (col === 1 || col === 6) && <FaChessKnight color={isDark ? "white" : "black"} />}
            {row === 7 && (col === 1 || col === 6) && <FaChessKnight color={isDark ? "black" : "white"} />}
            {row === 0 && (col === 2 || col === 5) && <FaChessBishop color={isDark ? "white" : "black"} />}
            {row === 7 && (col === 2 || col === 5) && <FaChessBishop color={isDark ? "black" : "white"} />}
            {row === 0 && col === 3 && <FaChessQueen color={isDark ? "white" : "black"} />}
            {row === 7 && col === 3 && <FaChessQueen color={isDark ? "black" : "white"} />}
            {row === 0 && col === 4 && <FaChessKing color={isDark ? "white" : "black"} />}
            {row === 7 && col === 4 && <FaChessKing color={isDark ? "black" : "white"} />}
          </GridItem>
        ))}
      </Grid>
    </Center>
  );
};

export default Index;
