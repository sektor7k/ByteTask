import { createContext, ReactNode, useContext, useState } from "react";
import { Request, Request2 } from "../backend/api";
import router from "next/router";

interface BackendContextState {
    signUpContext: (signupdata: { username: string, email: string, password: string, password2: string }) => Promise<void>;
    signupResponse: {
        message: string;
        status: string | undefined;
        success: boolean | null;
    };
    loginContext: (logindata: { email: string, password: string }) => Promise<void>;
    loginResponse: {
        message: string;
        status: string;
        success: boolean | null;
    };
    userDataResponse: () => Promise<void>;
    userData: {
        username: string;
        email: string;
        status: null | number;
    }

}

export const BackendContext = createContext<BackendContextState>({} as BackendContextState);

export const useBackend = () => useContext(BackendContext);

export const BackendProvider = ({ children }: { children: ReactNode }) => {
    // signup için statler
    const [signupResponse, setSignupResponse] = useState({
        message: "",
        status: "",
        success: null as boolean | null,
    });
    // login için statler
    const [loginResponse, setLoginResponse] = useState({
        message: "",
        status: "",
        success: null as boolean | null,
    });
    // get user tüm veriler
    const [userData, setUserData] = useState ({
        username: "",
        email: "",
        status: null
    })


    const signUpContext = async (signupdata: { username: string, email: string, password: string, password2: string }): Promise<void> => {
        try {
            if (signupdata.password !== signupdata.password2) {
                setSignupResponse({ message: "Şifreler uyuşmuyor", status: "ok", success: false });
            } else {
                const response = await Request('signup', signupdata);
                setSignupResponse(response);

                if (response.status === "ok" && response.success === true) {
                    localStorage.setItem('signupSuccess', 'Kayıt başarılı. Lütfen giriş yapın :)');
                    router.push("/login");
                }
            }
        } catch (err) {
            console.error('Error in signup', err);
            setSignupResponse({ message: "Kayıt sırasında bir hata oluştu.", status: "error", success: false });
        }
    };

    const loginContext = async (logindata: { email: string, password: string }): Promise<void> => {
        try {
            const response = await Request('login', logindata);

            console.log(response);
            setLoginResponse(response);

            if (response.status === "ok" && response.success === true) {
                
                localStorage.setItem('loginSuccess', response.message);
                localStorage.setItem('userMail', logindata.email as string);
                router.push('/profile/hakkimda');
            }
        } catch (err) {
            console.error('Error in login', err);
            setLoginResponse({ message: 'Login failed', status: '', success: false });
        }
    };
    const userDataResponse = async () => {
        try {
            const userMailLocal = localStorage.getItem('userMail');
            if (userMailLocal !== null) {

                const response = await Request2('users', userMailLocal);
                setUserData({ username: response.username, email: response.email, status: response.status })
            }
        }
        catch (err) {
            console.error('Error fetching user data:', err);
        }
    };

    return (
        <BackendContext.Provider value={{
            signUpContext,
            signupResponse,
            loginContext,
            loginResponse,
            userDataResponse,
            userData
        }}>
            {children}
        </BackendContext.Provider>
    );
};
