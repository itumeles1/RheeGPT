import React, { useState } from "react";
import clsx from "clsx";
import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { FaDiscord, FaGithub, FaGoogle } from "react-icons/fa";
import type { ClientSafeProvider } from "next-auth/react";
import { useSession as originalUseSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../server/auth/auth";

import FadeIn from "../components/motions/FadeIn";
import Image from "next/image";
import { useRouter } from "next/router";
import Input from "../components/Input";
import type { LiteralUnion } from "next-auth/react/types";
import type { BuiltInProviderType } from "next-auth/providers";

// Override useSession to always return a default user
const useSession = () => {
  const session = {
    user: {
      name: "Default User",
      email: "default@example.com",
      image: "url-to-default-user-image",
    },
    expires: "never",
  };

  return { data: session, status: "authenticated" };
};
