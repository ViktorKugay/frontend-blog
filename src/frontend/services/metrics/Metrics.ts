import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {GetMetricsResponse} from '@backend/metrics/metrics.controller';
import {Metrics} from '@backend/metrics/metrics.entity';

const BASE_URL = process.env.APP_BACKEND;

export class MetricsService {
  private readonly request: AxiosInstance;

  constructor() {
    this.request = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    });
  }

  public getMetrics = async (): Promise<Metrics[]> => {
    return await this.request
      .request<GetMetricsResponse>(this.buildGetMetricsConfig())
      .then(this.extractPayload);
  };

  public updateViewsByPostId = async (postId: string): Promise<void> => {
    await this.request(this.buildUpdateViewsByPostId(postId));
  };

  private buildUpdateViewsByPostId(postId: string): AxiosRequestConfig {
    return {
      url: '/metrics/views',
      method: 'PATCH',
      params: {postId},
    };
  }

  private buildGetMetricsConfig(): AxiosRequestConfig {
    return {
      url: '/metrics',
      method: 'GET',
    };
  }

  private extractPayload<T>(response: AxiosResponse<{payload: T}>): T {
    return response.data.payload;
  }

  private buildBaseUrl() {
    return process.env.APP_BACKEND;
  }
}
