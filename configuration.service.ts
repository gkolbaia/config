import { Injectable } from "@nestjs/common";
import { Configuration } from "./configuration.enum";
import { get } from "config";

@Injectable()
export class ConfigurationService {
    static connectionString: string = process.env[Configuration.MONGO_URI] || get(Configuration.MONGO_URI);
    private environmentHosting: string = process.env.NODE_ENV || 'development';
    get envHosting() {
        return this.environmentHosting;
    }
    get(name: string) {
        return process.env[name] || get(name);
    };
    get isDevelopment(): boolean {
        return this.environmentHosting === 'development'
    }
}