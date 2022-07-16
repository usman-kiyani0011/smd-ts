import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { getAllBookings } from "../../store/features/myBookingSlice";
import { Button } from "@mui/material";

export default function BasicCard() {
  const allBookings = useAppSelector(getAllBookings);
  console.log("data", allBookings);

  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <div>
      <TableContainer sx={{ m: 2 }} component={Card}>
        <FormControl sx={{ m: 2, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-label">
            Select Time Frame
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Select Time Frame"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Table sx={{ mt: 2 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Deal</TableCell>
              <TableCell align="right">Booking ID</TableCell>
              <TableCell align="right">Guest</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Time of Booking</TableCell>
              <TableCell align="right">Serving Person</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">£ Price</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allBookings.map((row) => (
              <TableRow
                key={row.bookingId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.deal}
                </TableCell>
                <TableCell align="right">{row.bookingId}</TableCell>
                <TableCell align="right">{row.guest}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.timeOfTracking}</TableCell>
                <TableCell align="right">{row.servingPerson}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" size="small">
                    {row.status}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
