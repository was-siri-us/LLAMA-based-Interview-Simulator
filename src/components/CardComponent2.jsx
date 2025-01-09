 
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CardComponent2({ title, description, tags }) {
    return (
        <>
            <Card style={{ position: 'relative' }}>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <hr />
                <CardContent>
                    {description}
                </CardContent>
                <CardFooter >
                    {tags && tags.map(
                        (info, index) => {
                            return (
                                <Badge key={index} className="mx-1" variant="outline">{info}</Badge>
                            )
                        }
                    )}
                </CardFooter>
            </Card>

        </>
    )
}
