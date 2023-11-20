import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const OuterContainer = styled(Box) (() => ({
    background: "red",
    margin: "auto",
    width: "90%"
}));

export const SectionContainer = styled(Box) (() => ({
    alignItems: "column",
    background: "blue",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    minHeight: "100svh",
}));

export const SectionHeader = styled(Box) (() => ({
    alignItems: "center",
    display: "flex",
    height: "50px",
    margin: "-50px auto 0",
    justifyContent: "center",
    width: "150px",
    zIndex: "6",
}));

export const SectionHeaderBackground = styled(Box) (() => ({
    background: "pink",
    height: "50px",
    width: "100%",
}));