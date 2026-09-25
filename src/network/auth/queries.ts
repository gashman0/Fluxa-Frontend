import { useNavigate } from "react-router-dom";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import queryKeys from "../query-keys";
import type { signupPayload, loginPayload, forgottenPasswordPayload, resetPasswordPayload } from "./types";
import { signup, login, logout, googleAuth, forgotPassword, resetPassword } from ".";
import { AxiosError } from "axios";



export const useSignup = () => {
  const navigate = useNavigate();

  return useMutation<
    any,
    AxiosError<{message: string}>,
    signupPayload
  >({
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

  return useMutation<
    any,
    AxiosError<{message: string}>,
    loginPayload
  >({
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

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: (payload: forgottenPasswordPayload) => forgotPassword(payload),

    onSuccess: () => {
      console.log("Password reset link sent");
    },

    onError: (error) => {
      console.error("Forgot password failed:", error);
    },
  });

};

export const useResetPassword = () => {
  // const navigate = useNavigate();

  return useMutation({
    mutationFn: (payload: resetPasswordPayload) => resetPassword(payload),

    onSuccess: () => {
      // navigate("/login");
    },

    onError: (error) => {
      console.error("Password reset failed:", error);
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
