import axios from "axios";
import { Signup } from "ui";

export default function SigninPage() {
    return <div>
        <Signup onClick={async (username, password) => {
            const response = await axios.post("/api/signup", {
                username, 
                password
            });
            localStorage.setItem("token", response.data.token);
        }} />
    </div>
}




// import { Typography } from "@mui/material";
// import axios from "axios";
// import { useState } from "react";
// import { Signup } from "ui";

// export default function SigninPage() {
//     const [errorMessage, setErrorMessage] = useState<string | null>(null);

//     return (
//         <div>
//             <Signup
//                 onClick={async (username, password) => {
//                     try {
//                         const response = await axios.post("/api/signup", {
//                             username,
//                             password,
//                         });
//                         localStorage.setItem("token", response.data.token);
//                         setErrorMessage(null); // Clear any previous error messages
//                     } catch (error) {
//                         console.error("Signup failed:", error);
//                         if (axios.isAxiosError(error) && error.response) {
//                             console.error("Response data:", error.response.data);
//                             console.error("Response status:", error.response.status);
//                             console.error("Response headers:", error.response.headers);
//                         }
//                         setErrorMessage(
//                             "Signup failed. Please check your credentials and try again."
//                         );
//                     }
//                 }}
//             />
//             {errorMessage && (
//                 <div
//                     style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
//                 >
//                     <Typography color="error">{errorMessage}</Typography>
//                 </div>
//             )}
//         </div>
//     );
// }






// import { Typography } from "@mui/material";
// import axios from "axios";
// import { useState } from "react";
// import { Signup } from "ui";

// export default function SigninPage() {
//     const [errorMessage, setErrorMessage] = useState<string | null>(null);

//     return (
//         <div>
//             <Signup
//                 onClick={async (username, password) => {
//                     try {
//                         const response = await axios.post("/api/signup", {
//                             username, 
//                             password
//                         });
//                         localStorage.setItem("token", response.data.token);
//                         setErrorMessage(null); // Clear any previous error messages
//                         // Redirect or update UI after successful signup
//                     } catch (error) {
//                         console.error("Signup failed:", error);
//                         if (axios.isAxiosError(error) && error.response) {
//                             const serverMessage = error.response.data?.message;
//                             setErrorMessage(serverMessage || "Signup failed. Please try again.");
//                         } else {
//                             setErrorMessage("An unexpected error occurred. Please try again.");
//                         }
//                     }
//                 }}
//             />
//             {errorMessage && (
//                 <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
//                     <Typography color="error">{errorMessage}</Typography>
//                 </div>
//             )}
//         </div>
//     );
// }