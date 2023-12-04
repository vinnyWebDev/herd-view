import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./AuthContext";

export function Protected({ children }) {
    const { user } = useContext(Context);

    // if no user, redirect to sign in
    if (!user) {
        return <Navigate to="/signin" replace />
    }
    //otherwise, return the children of protected
    else {
        return children;
    }
}