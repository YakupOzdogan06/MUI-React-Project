import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const TypoButtons = () => {
  return (
    <>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h6"
          align="center"
          mt={4}
          color="error"
        >
          MUI Typography
        </Typography>
        <Typography
          variant="body2"
          component="h6"
          align="justify"
          mt={4}
          sx={{
            backgroundColor: "lightgreen",
            color: "#eee",
            fontSize: "1.4rem",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          consectetur ducimus, amet labore commodi natus iste quidem corporis?
          Mollitia, eius?
        </Typography>
        <Typography
          variant="button"
          sx={{ display: "inline-block", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, quis
          veniam nemo eum minus dolores fugiat accusantium voluptates ullam!
          Adipisci, et! Sint, nam mollitia. Laboriosam perferendis dicta quasi
          velit! In!
        </Typography>
      </Container>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            // width: "50%",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined" startIcon={<DeleteIcon />} color="error">
            Delete
          </Button>
          <Button variant="contained" endIcon={<SendIcon />} color="secondary">
            Send
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TypoButtons;

//* Kendisi h6 ama stili varianta göre h1 olur. MUI Typography
