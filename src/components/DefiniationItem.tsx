import type { ReactNode } from "react";
import { Box, Heading } from '@chakra-ui/react';

interface Props {
    term:string;
    children:ReactNode | ReactNode[]
}
const DefiniationItem = ({term ,children}:Props) => {
  return (
    <Box  marginY={5}>
       <Heading marginBottom={2} as={'dt'} fontSize={'lg'} color={'gray.600'}>{term}</Heading>
       <dd>{children}</dd>
    </Box>
  )
}

export default DefiniationItem