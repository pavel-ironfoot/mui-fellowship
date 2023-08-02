import { Alert, Snackbar } from "@mui/material";
import { SnackProps } from "../../common/types-and-interfaces";

export const Snack: React.FC<SnackProps> = ({ addSnack, setAddSnack }) => {

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setAddSnack(false);
    };

    return (
        <Snackbar open={addSnack} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Add a new member
            </Alert>
        </Snackbar>
    );

}