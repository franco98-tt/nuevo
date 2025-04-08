import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

const tipos = ['Consulta', 'Terapia', 'Evaluación'];
const dias = [
  { dia: 'DOM', fecha: 6 },
  { dia: 'LUN', fecha: 7 },
  { dia: 'MAR', fecha: 8 },
  { dia: 'MIÉ', fecha: 9 },
  { dia: 'JUE', fecha: 10 },
  { dia: 'VIE', fecha: 11 },
  { dia: 'SÁB', fecha: 12 },
];
const horarios = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'
];

export default function CalendarioCitas() {
  const [tipoSeleccionado, setTipoSeleccionado] = useState('Consulta');
  const [diaSeleccionado, setDiaSeleccionado] = useState(8);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="rounded-2xl shadow-xl">
        <div className="bg-black text-white text-2xl font-bold flex items-center gap-2 px-6 py-4 rounded-t-2xl">
          <Clock className="w-6 h-6" /> Calendario de Citas
        </div>

        <div className="flex gap-4 px-6 py-4">
          {tipos.map(tipo => (
            <Button
              key={tipo}
              variant={tipo === tipoSeleccionado ? 'default' : 'ghost'}
              onClick={() => setTipoSeleccionado(tipo)}
            >
              {tipo}
            </Button>
          ))}
        </div>

        <div className="flex gap-4 overflow-x-auto px-6 py-2">
          {dias.map(({ dia, fecha }) => (
            <div
              key={fecha}
              onClick={() => setDiaSeleccionado(fecha)}
              className={`flex flex-col items-center px-4 py-2 rounded-xl cursor-pointer transition-all ${
                diaSeleccionado === fecha ? 'bg-black text-white' : 'hover:bg-gray-100'
              }`}
            >
              <span className="text-sm font-medium text-gray-500">{dia}</span>
              <span className="text-2xl font-semibold">{fecha}</span>
            </div>
          ))}
        </div>

        <div className="px-6 py-4">
          <div className="flex items-center gap-2 text-lg font-semibold mb-4">
            <Clock className="w-5 h-5" /> Horarios disponibles
          </div>
          <div className="grid grid-cols-4 gap-4">
            {horarios.map(hora => (
              <Button key={hora} variant="secondary" className="rounded-xl">
                {hora}
              </Button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
