import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import path from "path";

type AgendamentoPayload = {
  name: string;
  phone: string;
  email?: string;
  modality: string;
  plan: string;
  source: string;
  message?: string;
};

const filePath = path.join(process.cwd(), "agendamentos.json");

export async function POST(request: Request) {
  const body = (await request.json()) as AgendamentoPayload;

  const agendamento = {
    ...body,
    createdAt: new Date().toISOString(),
  };

  let current: AgendamentoPayload[] = [];

  try {
    const existing = await fs.readFile(filePath, "utf-8");
    current = JSON.parse(existing) as AgendamentoPayload[];
  } catch {
    current = [];
  }

  current.push(agendamento);

  await fs.writeFile(filePath, JSON.stringify(current, null, 2), "utf-8");

  return NextResponse.json({
    success: true,
    message: "Recebemos sua solicitação! Entraremos em contato em até 24h.",
  });
}
