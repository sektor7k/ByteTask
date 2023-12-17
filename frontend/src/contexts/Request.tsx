import { createContext, ReactNode, useContext, useState } from "react";
import { Request, Request2, Request3 } from "../backend/api";
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
    userDataResponse: () => Promise<{
        id: any;
        username: any;
        email: any;
        status: any;
    } | undefined>
    userData: {
        id: null | number
        username: string;
        email: string;
        status: null | number;
    };
    logOut: () => Promise<any>;
    userAboutContext: (aboutdata: {
        userid: number | null;
        userAbout: string;
        userField: string;
    }) => Promise<void>;
    editAboutResponse: {
        success: boolean | null;
        message: string;
    };
    userAboutResponse: () => Promise<void>;
    userAbout: {
        id: number | null;
        userId: number | null;
        about: string;
        userField: string
    };
    jobContext: (jobData: {
        userid: number | null;
        jobTitle: string;
        jobDescription: string;
        jobPrice: string;
        workTime: string;
        revision: string;
    }) => Promise<void>;
    addJobResponse: {
        success: boolean | null;
        message: string;
    };
    jobsResponse: () => Promise<void>;
    jobs: {
        id: number | null;
        userId: number | null;
        jobTitle: string;
        jobDescription: string;
        jobPrice: number | null;
        workTime: number | null;
        username: string
    }[];
    userDataResponseId: (userid: number) => Promise<any>;
    jobsDetailResponse: (id: string) => Promise<void>;
    jobDetail: {
        id: number | null;
        jobDescription: string;
        jobPrice: number | null;
        jobTitle: string;
        revision: number | null;
        userId: number | null;
        workTime: number | null;
    };
    jobsResponseUser: () => Promise<void>;
    jobsUser: {
        id: number | null;
        userId: number | null;
        jobTitle: string;
        jobDescription: string;
        jobPrice: number | null;
        workTime: number | null;
        username: string
    }[];



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
    // get user tüm verilernnull
    const [userData, setUserData] = useState({
        id: null,
        username: "",
        email: "",
        status: null
    })
    // about edit için statler
    const [editAboutResponse, seteditAboutResponse] = useState({
        success: null as boolean | null,
        message: "",
    })
    //tüm about verileri state
    const [userAbout, setUserAbout] = useState({
        id: null,
        userId: null,
        about: "",
        userField: ""

    })
    // addJob response state'leri
    const [addJobResponse, setaddJobResponse] = useState({
        success: null as boolean | null,
        message: "",
    })
    // anasayfa iş ilanları state i
    const [jobs, setJobs] = useState([{
        id: null,
        userId: null,
        jobTitle: '',
        jobDescription: '',
        jobPrice: null,
        workTime: null,
        username: ''
    }]);
    // ilaan sayfası için ilan detayları
    const [jobDetail, setJobDetail] = useState({
        id: null,
        jobDescription: '',
        jobPrice: null,
        jobTitle: '',
        revision: null,
        userId: null,
        workTime: null
    });
    // kullanıcı profilindeki ilanları
    const [jobsUser, setJobsUser] = useState([{
        id: null,
        userId: null,
        jobTitle: '',
        jobDescription: '',
        jobPrice: null,
        workTime: null,
        username: ''
    }]);



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
                const userData = { id: response.id, username: response.username, email: response.email, status: response.status }
                setUserData(userData)
                return userData.id;
            }
            else {
                setUserData({ id: null, username: '', email: '', status: null });

            }
        }
        catch (err) {
            console.error('Error fetching user data:', err);
        }
    };
    const logOut = async () => {
        try {
            const response2 = await Request2('statusfalse', userData.email);
            localStorage.removeItem('userMail');
            localStorage.setItem('logoutMessage', response2.message);
        } catch (err) {
            console.error('Error logging out:', err);
        }
    };
    const userAboutContext = async (aboutdata: { userid: number | null; userAbout: string; userField: string }): Promise<void> => {
        try {

            const response = await Request('userAbout', aboutdata);
            console.log(response);
            seteditAboutResponse(response)
            router.push('/profile/hakkimda');


        } catch (err) {
            console.error('Error in signup', err);

        }
    };

    const userAboutResponse = async () => {
        try {
            const userId = await userDataResponse();
            if (userId !== null) {
                const response = await Request2('userAbout', userId as string);
                setUserAbout({ id: response.id, userId: response.userId, about: response.about, userField: response.fields })
            }
        }
        catch (err) {
            console.error('Error fetching user data:', err);
        }
    };

    const jobContext = async (jobData: { userid: number | null; jobTitle: string; jobDescription: string; jobPrice: string; workTime: string, revision: string }): Promise<void> => {
        try {

            const response = await Request('jobs', jobData);
            setaddJobResponse(response)
            router.push('/anasayfa');

        } catch (err) {
            console.error('Error jobContext', err);

        }
    };

    const jobsResponse = async () => {
        try {

            const response = await Request3('jobs');


            setJobs(response);
        }
        catch (err) {
            console.error('Error fetching jobs Response:', err);
        }
    };

    const userDataResponseId = async (userid: number) => {
        try {
            const userId = userid as unknown as string;
            const response = await Request2('user', userId);
            const userData = { id: response.id, username: response.username, email: response.email, status: response.status }
            setUserData(userData)
            return userData.username;
        }
        catch (err) {
            console.error('Error fetching user data:', err);
        }
    };
    const jobsDetailResponse = async (id: string) => {

        try {
            const response = await Request2('job', id);

            setJobDetail(response)

        } catch (error) {
            console.error('Error fetching job data:', error);
        }
    };

    const jobsResponseUser = async () => {
        try {
            const userId = await userDataResponse();
            if (userId !== null) {
                const response = await Request2('jobsuser', userId as string);
                setJobsUser(response);
            }
        }
        catch (err) {
            console.error('Error fetching jobs Response:', err);
        }
    };


    return (
        <BackendContext.Provider value={{
            signUpContext,
            signupResponse,
            loginContext,
            loginResponse,
            userDataResponse,
            userData,
            logOut,
            userAboutContext,
            editAboutResponse,
            userAboutResponse,
            userAbout,
            jobContext,
            addJobResponse,
            jobsResponse,
            jobs,
            userDataResponseId,
            jobsDetailResponse,
            jobDetail,
            jobsResponseUser,
            jobsUser
        }}>
            {children}
        </BackendContext.Provider>
    );
};
