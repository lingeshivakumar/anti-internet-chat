import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';

import { ChatService } from './chat.service';
import { SendMessageDto } from './dto/send-message.dto';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(
    private readonly chatService: ChatService,
  ) {}

  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log(`✅ Connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.chatService.removeUser(client.id);

    this.server.emit(
      'users-updated',
      this.chatService.getUsers(),
    );

    console.log(`❌ Disconnected: ${client.id}`);
  }

  @SubscribeMessage('register-user')
  handleRegisterUser(
    @ConnectedSocket()
    client: Socket,

    @MessageBody()
    username: string,
  ) {
    this.chatService.addUser(
      client.id,
      username,
    );

    this.server.emit(
      'users-updated',
      this.chatService.getUsers(),
    );
  }

  @SubscribeMessage('send-message')
  handleSendMessage(
    @MessageBody()
    data: SendMessageDto,
  ) {
    const message =
      this.chatService.createMessage(data);

    this.server.emit(
      'receive-message',
      message,
    );
  }
}