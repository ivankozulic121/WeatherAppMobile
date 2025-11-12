import { Button } from "@/components/ui/button"; 
import { Text } from "@/components/ui/text";



export function SearchButton ({onPress}: any) {
    return (
        <Button onPress={onPress} className="w-full bg-[#4657d9] h-12 rounded-xl">
            <Text className="text-white text-[16px]">Search</Text>
        </Button>
    )
}