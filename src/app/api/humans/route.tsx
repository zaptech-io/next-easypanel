import humansTxtContent from "@/utils/humansTxtContent";

// API static endpoint
export const dynamic = 'force-static';

export function GET(_req: Request, _res: Response) {
  return new Response(humansTxtContent, { status: 200, headers: { 'Content-Type': 'text/plain' } });
}