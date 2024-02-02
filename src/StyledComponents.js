import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const OuterContainer = styled(Box) (() => ({
    margin: "auto",
    width: "90%"
}));

export const SectionContainer = styled(Box) (() => ({
    alignItems: "column",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    minHeight: "100svh",
}));

export const SectionHeader = styled(Box) (() => ({
    color: "white",
    height: "50px",
    margin: "-50px auto 0",
    // width: "100%",
    zIndex: "6",
}));

export const SectionHeaderBackground = styled(Box) (() => ({
    background: "black",
    height: "50px",
    width: "100%",
}));

export const SectionContentContainer = styled(Box) (() => ({
    background: "rgba(0,0,0,0.5)",
    color: "white",
    minHeight: "100svh",
    margin: "auto",
    width: "90%",
}));