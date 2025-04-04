function getEnvVar(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env variable: ${name}`);
  return value;
}

export const NEXT_PUBLIC_API_URL = getEnvVar("NEXT_PUBLIC_API_URL");
export const DATABASE_URL = getEnvVar("DATABASE_URL");
export const NEXTAUTH_SECRET = getEnvVar("NEXTAUTH_SECRET");
export const CLOUDINARY_CLOUD_NAME = getEnvVar("CLOUDINARY_CLOUD_NAME");
export const CLOUDINARY_API_KEY = getEnvVar("CLOUDINARY_API_KEY");
export const CLOUDINARY_API_SECRET = getEnvVar("CLOUDINARY_API_SECRET");
