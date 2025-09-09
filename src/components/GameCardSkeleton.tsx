import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width={"350px"} borderRadius={"20px"} overflow={"hidden"}>
      <Skeleton height={"230px"} borderRadius={"20px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
