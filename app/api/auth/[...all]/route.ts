import { getAuth } from "@/lib/auth/auth";
import { toNextJsHandler } from "better-auth/next-js";

export async function GET(request: Request) {
  const auth = await getAuth();
  const handlers = toNextJsHandler(auth);

  return handlers.GET(request);
}

export async function POST(request: Request) {
  const auth = await getAuth();
  const handlers = toNextJsHandler(auth);

  return handlers.POST(request);
}
