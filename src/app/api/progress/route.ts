import { put, list } from '@vercel/blob';
import { NextResponse } from 'next/server';

const BLOB_PATH = 'progress.json';

export async function GET() {
  try {
    const blobsResult = await list({ prefix: BLOB_PATH });
    if (blobsResult.blobs.length === 0) {
      return NextResponse.json({ currentRaised: 0 });
    }
    const latestBlob = blobsResult.blobs[0];
    const response = await fetch(latestBlob.url);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error al obtener el progreso:', error);
    return NextResponse.json({ currentRaised: 0 });
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log('Cuerpo de la solicitud:', body);
  const { username, password, currentRaised } = body;

  if (username !== 'cesar' || password !== 'cesar123') {
    return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
  }

  if (!currentRaised || isNaN(parseFloat(currentRaised))) {
    return NextResponse.json({ error: 'Cantidad recaudada inválida' }, { status: 400 });
  }

  try {
    const result = await put(BLOB_PATH, JSON.stringify({ currentRaised: parseFloat(currentRaised) }), {
      access: 'public',
      allowOverwrite: true, // Permitir sobrescribir el archivo existente
    });
    console.log('Resultado de escritura en blob:', result);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al actualizar el progreso:', error);
    const errorMessage = (error instanceof Error) ? error.message : 'Error desconocido';
    return NextResponse.json({ error: 'Error al actualizar: ' + errorMessage }, { status: 500 });
  }
}