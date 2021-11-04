import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TypeAnimation from "react-type-animation";

export default function Home() {
  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            color: "white",
            zIndex: "1",
          }}
          color="white"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              color: "white",
              zIndex: "2",
              height: "100vh",
              flexDirection: "column",
            }}
          >
            <h1> My name is Isaac</h1>{" "}
            <TypeAnimation
              cursor={true}
              sequence={[
                "I'm a software engineer",
                2000,
                "I can solve problems",
                2000,
                "Let's build something",
              ]}
              wrapper="h1"
              repeat={1}
            />
          </Box>
          <Image src="/media/background.jpg" objectFit="cover" layout="fill" />
        </Box>
      </Container>
    </>
  );
}
