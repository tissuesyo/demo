import { HttpResponse, http } from 'msw';
import { TOOLS } from './mockData';
export const handlers = [
  http.get('api/v1/tools', () => {
    return HttpResponse.json(...TOOLS);
  }),
];
