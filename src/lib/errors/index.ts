export class AppError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public code: string = 'INTERNAL_ERROR',
    public details?: Record<string, unknown>,
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export class AuthError extends AppError {
  constructor(message = 'Unauthorized') {
    super(message, 401, 'UNAUTHORIZED');
    this.name = 'AuthError';
  }
}

export class ForbiddenError extends AppError {
  constructor(message = 'Forbidden') {
    super(message, 403, 'FORBIDDEN');
    this.name = 'ForbiddenError';
  }
}

export class NotFoundError extends AppError {
  constructor(message = 'Resource not found') {
    super(message, 404, 'NOT_FOUND');
    this.name = 'NotFoundError';
  }
}

export class ValidationError extends AppError {
  constructor(message = 'Validation failed', details?: Record<string, unknown>) {
    super(message, 422, 'VALIDATION_ERROR', details);
    this.name = 'ValidationError';
  }
}

export function handleApiError(error: unknown) {
  if (error instanceof AppError) {
    return {
      status: error.statusCode,
      body: { error: error.message, code: error.code, details: error.details },
    };
  }
  console.error('Unhandled API error:', error);
  return {
    status: 500,
    body: { error: 'Internal server error', code: 'INTERNAL_ERROR' },
  };
}
