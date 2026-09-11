import { useNavigate } from "react-router-dom";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import queryKeys from "../query-keys";
import type { signupPayload, loginPayload } from "./types";
import { signup, login, logout, googleAuth } from ".";


export const useSignup = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (payload: signupPayload) => signup(payload),
    onSuccess: () => {
      console.log("Signup was successful");
      navigate("/login");
    },
    onError: () => {
      console.log("There was error");
    },
  });
};

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: loginPayload) => login(payload),

    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: [queryKeys.users.getMe],
      });

      navigate("/home");
    },
  });
};

export const useGoogleAuth = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (credential: string) => googleAuth(credential),

    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: [queryKeys.users.getMe],
      });

      navigate("/home");
    },

    onError: (error) => {
      console.error("Google authentication failed:", error);
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      queryClient.setQueryData([queryKeys.users.getMe], null);

      navigate("/");
    },
  });
};
