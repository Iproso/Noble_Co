type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  requestId?: string;
  userId?: string;
  details?: Record<string, unknown>;
}

const LOG_LEVELS: Record<LogLevel, number> = { debug: 0, info: 1, warn: 2, error: 3 };
const CURRENT_LEVEL: LogLevel = (process.env.NEXT_PUBLIC_LOG_LEVEL as LogLevel) || 'info';

function shouldLog(level: LogLevel): boolean {
  return LOG_LEVELS[level] >= LOG_LEVELS[CURRENT_LEVEL];
}

let requestCounter = 0;

export function getRequestId(): string {
  requestCounter++;
  return `req_${Date.now()}_${requestCounter}`;
}

function log(level: LogLevel, message: string, details?: Record<string, unknown>) {
  if (!shouldLog(level)) return;

  const entry: LogEntry = {
    level,
    message,
    timestamp: new Date().toISOString(),
    details,
  };

  if (typeof window !== 'undefined') {
    const method = level === 'error' ? 'error' : level === 'warn' ? 'warn' : level === 'debug' ? 'debug' : 'log';
    console[method](`[${level.toUpperCase()}]`, message, details || '');
  }
}

export const logger = {
  debug: (message: string, details?: Record<string, unknown>) => log('debug', message, details),
  info: (message: string, details?: Record<string, unknown>) => log('info', message, details),
  warn: (message: string, details?: Record<string, unknown>) => log('warn', message, details),
  error: (message: string, details?: Record<string, unknown>) => log('error', message, details),
};
