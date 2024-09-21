import {NextResponse} from "next/server";

export function GET(_request: Request, _response: Response) {
  return NextResponse.json({ message: 'API endpoint' });
}