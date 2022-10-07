import req from 'supertest';
import app from '@src/app';

export const request = req(app);
