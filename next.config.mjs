import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    RESEND_API_KEY: "re_Ga7Furjn_HJB9B7XogoHeFbVMYG8Xq4YC",
  },
};
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
