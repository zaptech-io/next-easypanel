import {ImageResponse} from "next/og";

export const dynamic = 'force-static';

export function GET(_req: Request, _res: Response) {
  return new ImageResponse((
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Hello world!
      </div>
  ),{
    width: 1200,
    height: 630,
  })
}