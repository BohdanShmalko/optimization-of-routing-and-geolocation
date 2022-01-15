import {
    ConnectedSocket,
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit,
    SubscribeMessage,
    WebSocketGateway, WebSocketServer,
    WsResponse
} from "@nestjs/websockets";
import {WsEnum} from "./ws.enum";
import {Socket, Server} from "socket.io";
import {AppService} from "./app.service";

@WebSocketGateway(7000, { path: '/ws', serveClient: true, namespace: '/' })
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{

    @WebSocketServer() wss: Server;
    //send to all: wss.emit(pattern, msg)
    //send to room: wss.to(roomName).emit(pattern, msg)
    //join to group: client.join(roomName)
    //leave from group: client.leave(roomName)

    constructor(private readonly appService: AppService) {
    }

    afterInit(server: Server): any {
        return this.appService.afterInit(server);
    }

    handleConnection(client: Socket, ...args: any[]): any {
        return this.appService.handleConnection(client, args, this.wss);
    }

    handleDisconnect(client: Socket): any {
        return this.appService.handleDisconnect(client, this.wss);
    }

    @SubscribeMessage(WsEnum.ServerErrorDevice)
    handleErrorDevice(client: Socket, message): Promise<WsResponse<string>> {
        return this.appService.handleErrorDevice(client, message, this.wss);
    }

    @SubscribeMessage(WsEnum.ServerUpdateLocation)
    handleUpdateLocation(client: Socket, message): Promise<WsResponse<string>> {
        return this.appService.handleUpdateLocation(client, message, this. wss);
    }

    @SubscribeMessage(WsEnum.ServerUpdateLocation)
    handleRouteUser(client: Socket, message): Promise<WsResponse<string>> {
        return this.appService.handleRouteUser(client, message, this. wss);
    }
}
