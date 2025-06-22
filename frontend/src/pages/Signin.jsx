import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignIn = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post("https://pay-wallet-adv-1.onrender.com/api/v1/user/signin", {
                username,
                password
            });
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
        } catch (error) {
            console.error("Sign in failed", error);
            alert("Invalid credentials. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                    {/* Decorative header */}
                    <div className="bg-indigo-600 py-4 px-6">
                        <div className="flex items-center justify-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h1 className="text-xl font-bold text-white">PayWallet</h1>
                        </div>
                    </div>

                    {/* Form content */}
                    <div className="p-8">
                        <Heading label={"Welcome back"} />
                        <SubHeading label={"Sign in to access your account"} />
                        
                        <div className="space-y-6 mt-8">
                            <InputBox 
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your email" 
                                label={"Email"} 
                                type="email"
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                }
                            />
                            
                            <InputBox 
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password" 
                                label={"Password"} 
                                type="password"
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                }
                            />
                            
                            <div className="pt-2">
                                <Button 
                                    onClick={handleSignIn}
                                    label={isLoading ? "Signing in..." : "Sign in"}
                                    disabled={isLoading}
                                />
                            </div>
                            
                            <div className="text-center">
                                <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800">
                                    Forgot password?
                                </a>
                            </div>
                            
                            <BottomWarning 
                                label={"Don't have an account?"} 
                                buttonText={"Sign up"} 
                                to={"/signup"} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
