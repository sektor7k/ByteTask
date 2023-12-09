import { createContext, ReactNode, useContext, useState } from "react";
import { Request } from "../backend/api";
import router from "next/router";

interface BackendContextState {
    signUpContext: (signupdata: { username: string, email: string, password: string, password2: string }) => Promise<void>;
    signupResponse: {
        message: string;
        status: string | undefined;
        success: boolean | null;
    };
    loginContext: (logindata: {email: string, password: string}) => Promise<void>;
    loginResponse: {
        message: string;
        status: string;
        success: boolean | null;
    };
    
}

export const BackendContext = createContext<BackendContextState>({} as BackendContextState);

export const useBackend = () => useContext(BackendContext);

export const BackendProvider = ({ children }: { children: ReactNode }) => {

    const [signupResponse, setSignupResponse] = useState({
        message: "",
        status: "",
        success: null as boolean | null,
    });

    const [loginResponse, setLoginResponse] = useState({
        message: "",
        status: "",
        success: null as boolean | null,
      });

    // sasa fonksiyonu buraya eklenmeli

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

    const loginContext = async (logindata: {email: string, password: string}): Promise<void> => {
        try {
            const response = await Request('login', logindata);
      
            console.log(response);
            setLoginResponse(response);
      
            if (response.status === "ok" && response.success === true) {
              // Başarılı giriş durumunda token'i localStorage'e kaydedebilirsiniz
              localStorage.setItem('loginSuccess', response.message);
              localStorage.setItem('userMail', logindata.email as string);
              router.push('/profile/hakkimda');
            }
          } catch (err) {
            console.error('Error in login', err);
            setLoginResponse({ message: 'Login failed' , status: '', success: false });
          }
    }

    return (
        <BackendContext.Provider value={{
            signUpContext,
            signupResponse,
            loginContext,
            loginResponse
        }}>
            {children}
        </BackendContext.Provider>
    );
};
