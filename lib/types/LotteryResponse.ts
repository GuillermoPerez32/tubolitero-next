export interface Lottery {
  id: number;
  slug: string;
  nombre: string;
  logo: string;
  pick3_logo?: string;
  pick4_logo?: string;
  ultima: Registro;
  ultimo_dia: Registro[];
}

export interface Registro {
  fecha: Date;
  pick3: string;
  pick4: string;
  tirada: number;
  fecha_siguiente: Date;
  horario: string;
}

export interface LotteryDetail {
  id: number;
  slug: string;
  nombre: string;
  logo: string;
  pick3_logo: string;
  pick4_logo: string;
  ultima: Registro;
  anteriores: Registro[];
  ultimo_dia: Registro[];
  atrasados: Atrasados;
}

export interface Atrasados {
  tarde: General;
  general: General;
  mañana: General;
}

export interface General {
  decenas: { [key: string]: number };
  centenas: { [key: string]: number };
  unidades: { [key: string]: number };
}
