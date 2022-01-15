import {JwtService} from '@nestjs/jwt';
import {ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {
    }

    private async getJwtData(
        authData,
    ): Promise<{ _id: string }> {
        const {token} = authData;
        if (!token) throw '';
        return this.jwtService.verify(token);
    }

    public generateToken(payload): string {
        return this.jwtService.sign(payload);
    }

    private diff(a1, a2) {
        return a1
            .filter((i) => !a2.includes(i))
            .concat(a2.filter((i) => !a1.includes(i)));
    }

    public async checkAuth(
        context: ExecutionContext,
        keys = ['_id']
    ): Promise<{valid: boolean, data: any}> {
        const req = context.switchToHttp().getRequest();
        try {
            const jwtData = await this.getJwtData({
                token: req.headers.authorization, //!!!
            });
            const jwtKeys = Object.keys(jwtData);
            if (keys && this.diff(jwtKeys, keys).length) return { valid: false, data: {} };
            return { valid: true, data: jwtData };
        } catch (e) {
            return { valid: false, data: {} };
        }
    }
}
