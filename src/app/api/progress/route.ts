import { put, get } from '@vercel/blob';
import { NextResponse } from 'next/server';

const BLOB_PATH = 'progress.json';

export async function GET() {
  try {
    const { blobs } = await get(BLOB_PATH, { all: true });
    if (blobs.length === 0) {
      return NextResponse.json({ currentRaised: 0 });
    }
    const latestBlob = blobs[0];
    const response = await fetch(latestBlob.url);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching progress:', error);
    return NextResponse.json({ currentRaised: 0 });
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  const { username, password, currentRaised } = body;

  if (username !== 'cesar' || password !== 'cesar123') {
    return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
  }

  try {
    await put(BLOB_PATH, JSON.stringify({ currentRaised: parseFloat(currentRaised) }), {
      access: 'public',
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating progress:', error);
    return NextResponse.json({ error: 'Error al actualizar' }, { status: 500 });
  }
}