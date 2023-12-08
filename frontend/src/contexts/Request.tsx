import { createContext, ReactNode, useContext, useState } from "react";
import { Request } from "../backend/api";
import router from "next/router";

interface BackendContextState {
    sasa: (signupdata: { username: string, email: string, password: string, password2: string }) => Promise<void>;
    signupResponse: {
        message: string;
        status: string;
        success: boolean | null;
    };
}

export const BackendContext = createContext<BackendContextState>({} as BackendContextState);

export const useBackend = () => useContext(BackendContext);

export const BackendProvider = ({ children }: { children: ReactNode }) => {
    const [signupResponse, setSignupResponse] = useState<{
        message: string;
        status: string;
        success: boolean | null;
    }>({
        message: "",
        status: "",
        success: null as boolean | null,
    });

    // sasa fonksiyonu buraya eklenmeli

    const sasa = async (signupdata: { username: string, email: string, password: string, password2: string }): Promise<void> => {
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

    return (
        <BackendContext.Provider value={{
            sasa,
            signupResponse,
        }}>
            {children}
        </BackendContext.Provider>
    );
};
