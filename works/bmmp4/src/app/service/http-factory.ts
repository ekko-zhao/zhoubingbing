import { RequestOptions, Http } from '@angular/http';
import { HttpInterceptorBackendService } from './http-interceptor-backend.service';

export function httpFactory(httpInterceptorBackend: HttpInterceptorBackendService, requestOptions: RequestOptions): Http {
    return new Http(httpInterceptorBackend, requestOptions);
}
