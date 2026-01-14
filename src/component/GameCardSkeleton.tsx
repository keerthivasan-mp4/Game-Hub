
import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSKeleton = ()=>{
    return(
        // <Card >borderRadius='20px'  width='400px'justifyContent={'space-evenly'}
    <Card>
    <Skeleton borderRadius='20px' height={300}>
        <CardBody>
            <SkeletonText></SkeletonText>
        </CardBody>
    </Skeleton>
        </Card>
    )

}

export default GameCardSKeleton;