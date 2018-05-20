import { Injectable, Inject } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'


@Injectable()
export class JsonLoaderService {

    constructor(@Inject(Http) private http: Http) {
        this.proxyHeaders = new Headers({ 'Content-Type': "application/json" });
    }

    private proxyHeaders: Headers;


    /**
     * 發送 HTTP GET
     * 
     * @param {string} url 請求的網址
     * @returns {Observable<any>} 轉換成 Json 格式的結果
     * @memberof JsonLoaderService
     */
    public httpGet(url: string): Observable<any> {
        return this.http.get(url, this.getRequestionOptions()).map(this.toJson);
    }


    /**
     * 從 assets 載入資料
     * 
     * @param {string} filename 檔案名稱
     * @returns {Observable<any>} 載入的資料
     * @memberof JsonLoaderService
     */
    public loadFormAssets(filename: string): Observable<any> {
        return this.httpGet("./assets/" + filename);
    }

    private getRequestionOptions(): RequestOptions {
        return new RequestOptions({ headers: this.proxyHeaders });
    }

    private toJson(response: Response) {
        return response.json();
    }
}