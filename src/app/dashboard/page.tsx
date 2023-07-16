import { FC } from "react";
import Button from "@/components/ui/Button"

interface pageProps {} 

const Page : FC<pageProps> = () => {
    return (
        <Button isLoading={true}>Hello</Button>
    )
}

export default Page