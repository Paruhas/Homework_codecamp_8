import { Button } from "@chakra-ui/button";
import { Box, Heading } from "@chakra-ui/layout";

function DesignSystemPage() {
    return (
        <Box>
            <Box bg="primary.200" color="white" p="10" fontSize="2rem">
                App's Design System
            </Box>

            <Box bg="muted.300" p="5" borderRadius="x1">
                <Heading>Buttons</Heading>
                <Button colorScheme="blue" size="sm" variant="outline">
                    Size sm variant outline
                </Button> &nbsp;
                <Button colorScheme="green" size="md" variant="solid">
                    Size md variant solid
                </Button> &nbsp;
                <Button size="lg" variant="link">
                    Size lg variant link
                </Button> &nbsp;
            </Box>
            <Box bg="muted.300" p="5" borderRadius="x1">
                <Heading>Buttons Variant</Heading>
                <Button variant="primary" size="sm">
                    Variant Primary
                </Button> &nbsp;
                <Button variant="secondary" size="md">
                    Variant secondary
                </Button> &nbsp;
                <Button variant="tertiary" size="lg">
                    Variant tertiary
                </Button> &nbsp;
            </Box>
        </Box>
    );
}

export default DesignSystemPage