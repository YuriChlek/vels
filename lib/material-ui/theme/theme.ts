import { createTheme, Theme } from '@mui/material/styles';
import breakpoints from "@/lib/breakpoints/breakpoints";

const theme: Theme = createTheme({
    breakpoints: {
        values: {
            ...breakpoints
        },
    },
});

export default theme;
