import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSKeleton = () => {
  return (
    <Card>
        
      <Skeleton borderRadius="20px" height={300}>  {/* Skeleton wrapper to simulate loading state */}
        
        <CardBody>
          <SkeletonText noOfLines={3}></SkeletonText>
          
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCardSKeleton;
