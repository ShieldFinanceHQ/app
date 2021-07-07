import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

interface popUpType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
  instrument_name: String;
}

interface rowType {
  telegram_id: String;
  instrument_name: String;
}

const postSpreadsheetData = async (
  row: rowType,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setDataSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
  setRequestError: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setLoading(true);
  try {
    const data: rowType = row;
    const url = `${process.env.DEVELOPMENT_DOMAIN}/api/postSpreadsheetData`;
    const res = await axios.post(url, data);
    if (res.data) {
      if (res.data.msg === "Row appended") {
        setDataSubmitted(true);
        setLoading(false);
      } else if (res.data.msg === "Row append failed") {
        setDataSubmitted(false);
        setLoading(false);
        setRequestError(true);
      }
    }
  } catch (error) {
    console.log("Error", error);
    setLoading(false);
    setRequestError(true);
  }
};

const PopUpInput = ({ open, setOpen, handleClose, instrument_name }: popUpType) => {
  const [telegramId, setTelegramId] = React.useState<String | null>(null);
  const [error, setError] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [dataSubmitted, setDataSubmitted] = React.useState<boolean>(false);
  const [requestError, setRequestError] = React.useState<boolean>(false);

  const handleSubmit = () => {
    if (telegramId !== null) {
      if (telegramId.length < 5) {
        setError(true);
        return;
      } else {
        setError(false);
        const newRow: rowType = { telegram_id: telegramId, instrument_name: instrument_name };
        postSpreadsheetData(newRow, setLoading, setDataSubmitted, setRequestError);
      }
    }
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setRequestError(false);
    setDataSubmitted(false);
    setLoading(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleCloseDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {loading ? (
        <DialogContent>
          <CircularProgress />
        </DialogContent>
      ) : requestError ? (
        <>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">Something went wrong! </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </>
      ) : dataSubmitted ? (
        <>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">Great! Our team will contact you soon! </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </>
      ) : (
        <>
          <DialogTitle id="alert-dialog-title">Enter your Telegram user id here:</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <TextField
                id="standard-basic"
                label="Telegram ID"
                error={error}
                helperText={error ? "Enter a valid telegram id" : null}
                onChange={(e) => {
                  setTelegramId(e.target.value);
                  setError(false);
                }}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary" autoFocus>
              Submit
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

export default PopUpInput;
