import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  AppError,
  AuthError,
  ForbiddenError,
  NotFoundError,
  ValidationError,
  handleApiError
} from './index';

describe('Error Handling', () => {
  describe('Error Classes', () => {
    it('should correctly instantiate AppError with defaults', () => {
      const error = new AppError('Test error');
      expect(error.message).toBe('Test error');
      expect(error.statusCode).toBe(500);
      expect(error.code).toBe('INTERNAL_ERROR');
      expect(error.details).toBeUndefined();
      expect(error.name).toBe('AppError');
    });

    it('should correctly instantiate AppError with custom values', () => {
      const details = { field: 'invalid' };
      const error = new AppError('Custom error', 400, 'CUSTOM_ERROR', details);
      expect(error.message).toBe('Custom error');
      expect(error.statusCode).toBe(400);
      expect(error.code).toBe('CUSTOM_ERROR');
      expect(error.details).toBe(details);
    });

    it('should correctly instantiate AuthError', () => {
      const error = new AuthError();
      expect(error.message).toBe('Unauthorized');
      expect(error.statusCode).toBe(401);
      expect(error.code).toBe('UNAUTHORIZED');
      expect(error.name).toBe('AuthError');
    });

    it('should correctly instantiate ForbiddenError', () => {
      const error = new ForbiddenError();
      expect(error.message).toBe('Forbidden');
      expect(error.statusCode).toBe(403);
      expect(error.code).toBe('FORBIDDEN');
      expect(error.name).toBe('ForbiddenError');
    });

    it('should correctly instantiate NotFoundError', () => {
      const error = new NotFoundError();
      expect(error.message).toBe('Resource not found');
      expect(error.statusCode).toBe(404);
      expect(error.code).toBe('NOT_FOUND');
      expect(error.name).toBe('NotFoundError');
    });

    it('should correctly instantiate ValidationError', () => {
      const details = { field: 'required' };
      const error = new ValidationError('Invalid input', details);
      expect(error.message).toBe('Invalid input');
      expect(error.statusCode).toBe(422);
      expect(error.code).toBe('VALIDATION_ERROR');
      expect(error.details).toBe(details);
      expect(error.name).toBe('ValidationError');
    });
  });

  describe('handleApiError', () => {
    let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
      consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
      consoleErrorSpy.mockRestore();
    });

    it('should format AppError correctly', () => {
      const error = new AppError('Something went wrong', 400, 'BAD_REQUEST', { foo: 'bar' });
      const result = handleApiError(error);

      expect(result).toEqual({
        status: 400,
        body: {
          error: 'Something went wrong',
          code: 'BAD_REQUEST',
          details: { foo: 'bar' },
        },
      });
      expect(consoleErrorSpy).not.toHaveBeenCalled();
    });

    it('should format subclasses of AppError correctly', () => {
      const error = new NotFoundError('User not found');
      const result = handleApiError(error);

      expect(result).toEqual({
        status: 404,
        body: {
          error: 'User not found',
          code: 'NOT_FOUND',
          details: undefined,
        },
      });
      expect(consoleErrorSpy).not.toHaveBeenCalled();
    });

    it('should format generic Error instances as 500 and log them', () => {
      const error = new Error('Generic system failure');
      const result = handleApiError(error);

      expect(result).toEqual({
        status: 500,
        body: {
          error: 'Internal server error',
          code: 'INTERNAL_ERROR',
        },
      });
      expect(consoleErrorSpy).toHaveBeenCalledWith('Unhandled API error:', error);
      expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });

    it('should format non-error primitives as 500 and log them', () => {
      const error = 'Just a string error';
      const result = handleApiError(error);

      expect(result).toEqual({
        status: 500,
        body: {
          error: 'Internal server error',
          code: 'INTERNAL_ERROR',
        },
      });
      expect(consoleErrorSpy).toHaveBeenCalledWith('Unhandled API error:', 'Just a string error');
      expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });

    it('should format null as 500 and log it', () => {
      const result = handleApiError(null);

      expect(result).toEqual({
        status: 500,
        body: {
          error: 'Internal server error',
          code: 'INTERNAL_ERROR',
        },
      });
      expect(consoleErrorSpy).toHaveBeenCalledWith('Unhandled API error:', null);
      expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });
  });
});
